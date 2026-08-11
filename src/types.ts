export type PlanId = 'basic' | 'complete';

export interface PlanOffer {
  id: PlanId;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  isPopular?: boolean;
  features: {
    text: string;
    isHighlight?: boolean;
    isBonus?: boolean;
  }[];
  ctaText: string;
  guaranteeText: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  quote: string;
  timeAgo: string;
  mbwayAmount?: string;
  avatarUrl?: string;
  verifiedBadge?: string;
}

export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  value: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
