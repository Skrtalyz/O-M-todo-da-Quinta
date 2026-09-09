import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusesSection } from './components/BonusesSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { redirectToCheckout, useCheckoutUrls } from './utils/checkout';

export default function App() {
  useCheckoutUrls();

  // Estado sincronizado com localStorage e eventos da VSL
  const [isDelayLiberado, setIsDelayLiberado] = useState<boolean>(() => {
    try {
      return (
        localStorage.getItem('esconder_delay_liberado') === 'true' ||
        localStorage.getItem('alreadyElsDisplayed180') === 'true' ||
        localStorage.getItem('vsl_delay_liberado') === 'true' ||
        (typeof document !== 'undefined' && document.documentElement.classList.contains('delay-liberado'))
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDelayLiberado) {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('delay-liberado');
        document.body?.classList.add('delay-liberado');
      }
      return;
    }

    const handleLiberado = () => {
      setIsDelayLiberado(true);
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('delay-liberado');
        document.body?.classList.add('delay-liberado');
      }
    };

    window.addEventListener('vslDelayLiberado', handleLiberado);

    // Verificação contínua periódica caso liberado pelo script do VTurb ou localStorage
    const interval = setInterval(() => {
      try {
        if (
          localStorage.getItem('esconder_delay_liberado') === 'true' ||
          localStorage.getItem('alreadyElsDisplayed180') === 'true' ||
          localStorage.getItem('vsl_delay_liberado') === 'true' ||
          document.documentElement.classList.contains('delay-liberado')
        ) {
          setIsDelayLiberado(true);
          clearInterval(interval);
        }
      } catch {}
    }, 500);

    // Fallback de 180 segundos no React
    const timeout = setTimeout(() => {
      setIsDelayLiberado(true);
      try {
        localStorage.setItem('esconder_delay_liberado', 'true');
        localStorage.setItem('alreadyElsDisplayed180', 'true');
        localStorage.setItem('vsl_delay_liberado', 'true');
      } catch {}
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('delay-liberado');
        document.body?.classList.add('delay-liberado');
      }
    }, 180000);

    return () => {
      window.removeEventListener('vslDelayLiberado', handleLiberado);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isDelayLiberado]);

  const handleOpenCheckout = (planId?: any) => {
    const validPlan: 'basic' | 'complete' = (planId === 'basic' || planId === 'complete') ? planId : 'complete';
    redirectToCheckout(validPlan);
  };

  const handleScrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 selection:bg-amber-500/20 selection:text-slate-900 font-sans">
      
      <main className="flex-grow">
        {/* SECÇÃO 01: HEADLINE - O GANCHO DE TRANSFORMAÇÃO E PLAYER VSL */}
        <HeroSection
          onOpenCheckout={handleOpenCheckout}
          onScrollToOffer={handleScrollToOffer}
          isDelayLiberado={isDelayLiberado}
        />

        {/* SEÇÕES ABAIXO DO VÍDEO (COM DELAY DE 180s): Botões de compra, planos, bónus, garantia e FAQ */}
        <div className={isDelayLiberado ? "esconder-delay !block" : "esconder-delay"}>
          {/* SECÇÃO 02: O QUE VAIS RECEBER (Entrega Tangível) */}
          <DeliverablesSection
            onOpenCheckout={handleOpenCheckout}
            onScrollToOffer={handleScrollToOffer}
          />

          {/* SECÇÃO 04: BÓNUS EXCLUSIVOS (O Empilhamento de Valor) */}
          <BonusesSection
            onOpenCheckout={handleOpenCheckout}
            onScrollToOffer={handleScrollToOffer}
          />

          {/* SECÇÃO 05: DEPOIMENTOS (Vozes reais de alunas e criadoras) */}
          <TestimonialsSection
            onScrollToOffer={handleScrollToOffer}
          />

          {/* SECÇÃO 06: A OFERTA / PLANOS (Escolhe o teu nível de entrada hoje) */}
          <OfferSection onOpenCheckout={handleOpenCheckout} />

          {/* SECÇÃO 07: INVERSÃO DE RISCO E GARANTIA */}
          <GuaranteeSection onOpenCheckout={handleOpenCheckout} />

          {/* SECÇÃO 08: CTA FINAL */}
          <FinalCTASection onOpenCheckout={handleOpenCheckout} />

          {/* PERGUNTAS FREQUENTES */}
          <FAQSection />

          {/* Footer */}
          <Footer />
        </div>
      </main>

    </div>
  );
}


