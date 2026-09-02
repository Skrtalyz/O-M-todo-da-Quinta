import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  return (
    <section className="relative pt-8 pb-14 lg:pt-14 lg:pb-20 overflow-hidden bg-[#F9F8F5]">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-[600px] h-[600px] rounded-full bg-[#C25E00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Conteúdo Textual & Chamada para Ação (Abaixo da imagem no mobile, à esquerda no desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#2D2D2D] leading-[1.12] tracking-tight">
              Transforma os vegetais da tua freguesia em mimos de elite e vê o teu telemóvel apitar com{' '}
              <span className="inline-block bg-[#28A745]/15 text-[#1f8035] px-3 py-1 rounded-xl border border-[#28A745]/30 font-black">
                85€ no MB Way
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#575757] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Descobre o segredo secular das Quintas do Douro para criares conservas de alta-costura gastronómica, com segurança total e desperdício zero na tua Cozinha de Elite.
            </p>

            {/* CTA Button Box */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
              <button
                onClick={onScrollToOffer}
                className="w-full sm:w-auto bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-base sm:text-lg tracking-wide py-4 sm:py-5 px-8 rounded-2xl shadow-xl shadow-[#28A745]/20 hover:shadow-2xl hover:shadow-[#28A745]/30 transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer border border-emerald-500/30 active:scale-95"
              >
                <span>Sim! Quero o meu Escudo contra a Inflação</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center lg:justify-start gap-3 mt-3.5 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-[#2D2D2D]">
                  <CheckCircle2 className="w-4 h-4 text-[#28A745]" /> Entrega Digital Imediata
                </span>
                <span className="text-slate-400 font-bold">•</span>
                <span className="flex items-center gap-1.5 text-[#2D2D2D]">
                  <ShieldCheck className="w-4 h-4 text-[#28A745]" /> Garantia de 7 Dias
                </span>
              </div>
            </div>
          </div>

          {/* Imagem do Produto/Metodologia (Acima do texto no mobile, à direita no desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[320px] sm:max-w-md lg:max-w-lg flex justify-center items-center">
              <img
                src="https://i.imgur.com/UV0t4Pf.png"
                alt="O Método da Quinta - Conservas de Elite"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



