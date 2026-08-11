import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { PASSection } from './components/PASSection';
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
      
      {/* Top Urgency Banner */}
      <div className="bg-slate-900 text-slate-200 text-xs font-semibold py-2.5 px-4 text-center flex items-center justify-center gap-2 border-b border-slate-800">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Apenas 14 vagas disponíveis hoje com Acesso Vitalício + MB Way</span>
        <span className="hidden sm:inline text-amber-400 font-bold">• Entrega Imediata por Email</span>
      </div>

      <main className="flex-grow">
        {/* SECÇÃO 01: HEADLINE - O GANCHO DE TRANSFORMAÇÃO */}
        <HeroSection
          onOpenCheckout={handleOpenCheckout}
          onScrollToOffer={handleScrollToOffer}
        />

        {/* SECÇÃO 02: O ESPELHAMENTO DA DOR (Framework PAS) */}
        <PASSection
          onOpenCheckout={handleOpenCheckout}
          onScrollToOffer={handleScrollToOffer}
        />

        {/* SECÇÃO 03: O QUE VAIS RECEBER (Entrega Tangível) */}
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


