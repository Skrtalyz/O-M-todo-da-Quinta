import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
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

        {/* Botão de Ação CTA Abaixo da Imagem */}
        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-0 sm:min-w-[300px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-sm sm:text-base tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg shadow-[#28A745]/20 hover:shadow-xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Quero dominar o Método da Quinta</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};



