import React from 'react';

interface HeroSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative pt-6 pb-10 sm:pt-10 sm:pb-16 overflow-hidden bg-[#F9F8F5]">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-[600px] h-[600px] rounded-full bg-[#C25E00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Headline Principal Centrada */}
        <div className="max-w-3xl mx-auto mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] leading-snug sm:leading-tight tracking-tight">
            Transforma os{' '}
            <span className="text-[#C25E00]">vegetais da tua freguesia em mimos de elite</span>
            {' '}e vê o teu telemóvel apitar com{' '}
            <span className="inline-block bg-[#28A745]/15 text-[#1f8035] px-2.5 py-0.5 rounded-lg border border-[#28A745]/30 font-black text-sm sm:text-lg align-middle">
              85€ no MB Way
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#575757] leading-relaxed max-w-xl mx-auto font-medium">
            Descobre o{' '}
            <span className="text-[#28A745] font-bold">segredo secular das Quintas do Douro</span>
            {' '}para criares conservas de alta-costura gastronómica, com segurança total e desperdício zero na tua{' '}
            <span className="text-[#C25E00] font-bold">Cozinha de Elite</span>.
          </p>
        </div>

        {/* Imagem do Produto Mockup Centralizada */}
        <div className="flex justify-center max-w-md mx-auto mt-4 sm:mt-8">
          <div className="w-full max-w-[220px] sm:max-w-[320px] lg:max-w-[360px] relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/15 via-emerald-500/10 to-amber-600/15 rounded-3xl blur-xl"></div>
            <img
              src="https://i.imgur.com/UV0t4Pf.png"
              alt="O Método da Quinta - Conservas de Elite"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain select-none transition-transform duration-300 hover:scale-[1.02] relative z-10 drop-shadow-xl"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
};



