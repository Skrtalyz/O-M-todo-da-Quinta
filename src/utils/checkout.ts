import { useState, useEffect } from 'react';
import { HOTMART_CHECKOUT_URLS } from '../constants/checkout';

const STORAGE_KEY = 'douro_utm_tracking_params';

/**
 * Extracts and consolidates all tracking query parameters from URL, hash, and referrer
 */
export function extractCurrentTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') {
    return {};
  }

  const params: Record<string, string> = {};

  // 1. Read from window.location.search
  if (window.location.search) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((value, key) => {
      if (value) params[key] = value;
    });
  }

  // 2. Read from hash if it contains query parameters (e.g., #/path?utm_source=...)
  if (window.location.hash && window.location.hash.includes('?')) {
    const hashQuery = window.location.hash.split('?')[1];
    if (hashQuery) {
      const hashParams = new URLSearchParams(hashQuery);
      hashParams.forEach((value, key) => {
        if (value && !params[key]) params[key] = value;
      });
    }
  }

  // 3. Try reading from parent window if embedded in a same-origin iframe
  try {
    if (window.parent && window.parent !== window && window.parent.location.search) {
      const parentParams = new URLSearchParams(window.parent.location.search);
      parentParams.forEach((value, key) => {
        if (value && !params[key]) params[key] = value;
      });
    }
  } catch {
    // Cross-origin iframe security restriction - silently ignore
  }

  return params;
}

/**
 * Retrieves persisted tracking parameters from storage
 */
export function getStoredTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  try {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) {
      return JSON.parse(sessionData);
    }
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      return JSON.parse(localData);
    }
  } catch {
    // Ignore storage parsing errors
  }

  return {};
}

/**
 * Stores captured tracking parameters in sessionStorage and localStorage for persistence
 */
export function persistTrackingParams(newParams: Record<string, string>): void {
  if (typeof window === 'undefined') return;

  try {
    const existing = getStoredTrackingParams();
    const merged = { ...existing, ...newParams };

    if (Object.keys(merged).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    }
  } catch {
    // Storage access blocked or full - silently ignore
  }
}

/**
 * Combines URL params + stored params to get the complete set of active tracking parameters
 */
export function getAllTrackingParams(): Record<string, string> {
  const currentParams = extractCurrentTrackingParams();
  const storedParams = getStoredTrackingParams();
  const merged = { ...storedParams, ...currentParams };

  // Save if we discovered new params
  if (Object.keys(currentParams).length > 0) {
    persistTrackingParams(merged);
  }

  return merged;
}

/**
 * Builds the complete Hotmart checkout URL with all UTMs, SRC, SCK and other query parameters attached
 */
export function buildCheckoutUrl(plan: 'basic' | 'complete'): string {
  const baseUrl = HOTMART_CHECKOUT_URLS[plan] || HOTMART_CHECKOUT_URLS.complete;
  if (typeof window === 'undefined') {
    return baseUrl;
  }

  try {
    const url = new URL(baseUrl);
    const trackingParams = getAllTrackingParams();

    // Append all tracking parameters
    Object.entries(trackingParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });

    // Hotmart SRC parameter (sales source):
    // If not provided in URL, automatically populate with utm_source or utm_campaign
    if (!url.searchParams.get('src')) {
      const utmSource = trackingParams['utm_source'];
      const utmCampaign = trackingParams['utm_campaign'];
      if (utmSource) {
        url.searchParams.set('src', utmSource);
      } else if (utmCampaign) {
        url.searchParams.set('src', utmCampaign);
      }
    }

    // Hotmart SCK parameter (sub-campaign tracking):
    // If not provided in URL, automatically populate with utm_campaign or utm_content
    if (!url.searchParams.get('sck')) {
      const utmCampaign = trackingParams['utm_campaign'];
      const utmContent = trackingParams['utm_content'];
      if (utmCampaign && url.searchParams.get('src') !== utmCampaign) {
        url.searchParams.set('sck', utmCampaign);
      } else if (utmContent) {
        url.searchParams.set('sck', utmContent);
      }
    }

    return url.toString();
  } catch (err) {
    console.error('Erro ao gerar URL de checkout com UTMs:', err);
    return baseUrl;
  }
}

/**
 * Redirects the current page to the Hotmart checkout with all UTM parameters
 */
export function redirectToCheckout(plan: 'basic' | 'complete'): void {
  const targetUrl = buildCheckoutUrl(plan);
  if (typeof window !== 'undefined') {
    window.location.href = targetUrl;
  }
}

/**
 * React hook to supply dynamic checkout URLs with all captured UTMs
 */
export function useCheckoutUrls() {
  const [urls, setUrls] = useState({
    basic: HOTMART_CHECKOUT_URLS.basic as string,
    complete: HOTMART_CHECKOUT_URLS.complete as string,
  });

  useEffect(() => {
    // 1. Initial capture and update
    const updateUrls = () => {
      setUrls({
        basic: buildCheckoutUrl('basic'),
        complete: buildCheckoutUrl('complete'),
      });
    };

    updateUrls();

    // 2. Listen to URL changes (history / hash)
    window.addEventListener('popstate', updateUrls);
    window.addEventListener('hashchange', updateUrls);

    // 3. Global click capture: as an extra safety measure, intercept any click on a Hotmart link
    // and ensure it has the latest UTMs right at the moment of click
    const handleDocumentClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (anchor && anchor.href && anchor.href.includes('pay.hotmart.com')) {
        const isBasic = anchor.href.includes('N107104656D');
        const plan: 'basic' | 'complete' = isBasic ? 'basic' : 'complete';
        anchor.href = buildCheckoutUrl(plan);
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });

    return () => {
      window.removeEventListener('popstate', updateUrls);
      window.removeEventListener('hashchange', updateUrls);
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  return urls;
}
