import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-[#F9F8F5]">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-[600px] h-[600px] rounded-full bg-[#C25E00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Headline & Subheadline */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#2D2D2D] leading-[1.12] tracking-tight mb-6">
            Transforma os vegetais da tua freguesia em mimos de elite e vê o teu telemóvel apitar com <span className="inline-block bg-[#28A745]/15 text-[#1f8035] px-3 py-1 rounded-xl border border-[#28A745]/30 font-black">85€ no MB Way</span>
          </h1>

          <p className="text-base sm:text-xl text-[#575757] leading-relaxed max-w-3xl mx-auto font-medium">
            Descobre o segredo secular das Quintas do Douro para criares conservas de alta-costura gastronómica, com segurança total e desperdício zero na tua Cozinha de Elite.
          </p>
        </div>

        {/* Hero Call to Action Box */}
        <div className="max-w-xl mx-auto text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-base sm:text-lg tracking-wide py-4 sm:py-5 px-8 rounded-2xl shadow-xl shadow-[#28A745]/20 hover:shadow-2xl hover:shadow-[#28A745]/30 transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Sim! Quero o meu Escudo contra a Inflação</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center justify-center gap-4 mt-3.5 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1 text-[#2D2D2D]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#28A745]" /> Entrega Digital Imediata
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-[#2D2D2D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#28A745]" /> Garantia 7 Dias
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};


