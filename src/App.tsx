import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusesSection } from './components/BonusesSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { HOTMART_CHECKOUT_URLS } from './constants/checkout';

export default function App() {
  const handleOpenCheckout = (planId?: any) => {
    const validPlan: 'basic' | 'complete' = (planId === 'basic' || planId === 'complete') ? planId : 'complete';
    const checkoutUrl = HOTMART_CHECKOUT_URLS[validPlan];
    window.location.href = checkoutUrl;
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
        {/* SECÇÃO 01: HEADLINE - O GANCHO DE TRANSFORMAÇÃO */}
        <HeroSection
          onOpenCheckout={handleOpenCheckout}
          onScrollToOffer={handleScrollToOffer}
        />

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

        {/* SECÇÃO 05: DEPOIMENTOS (Vozes reais de alunas e criadoras que já transformaram a sua rotina) */}
        <TestimonialsSection
          onScrollToOffer={handleScrollToOffer}
        />

        {/* SECÇÃO 06: A OFERTA (Escolhe o teu nível de entrada hoje) */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* SECÇÃO 07: INVERSÃO DE RISCO E GARANTIA */}
        <GuaranteeSection onOpenCheckout={handleOpenCheckout} />

        {/* SECÇÃO 08: CTA FINAL */}
        <FinalCTASection onOpenCheckout={handleOpenCheckout} />

        {/* PERGUNTAS FREQUENTES */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}


