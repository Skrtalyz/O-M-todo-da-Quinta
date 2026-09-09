import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { VTurbPlayer } from './VTurbPlayer';

interface HeroSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer: () => void;
  isDelayLiberado?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onScrollToOffer, isDelayLiberado }) => {
  return (
    <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden bg-[#F9F8F5]">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-[600px] h-[600px] rounded-full bg-[#C25E00]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Attention Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-ping"></span>
          Apresentação Exclusiva • Assiste antes que seja removida
        </div>

        {/* Headline Principal Centrada */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D] leading-[1.18] tracking-tight max-w-3xl mx-auto">
          Transforma os vegetais da tua freguesia em mimos de elite e vê o teu telemóvel apitar com{' '}
          <span className="inline-block bg-[#28A745]/15 text-[#1f8035] px-3 py-0.5 rounded-xl border border-[#28A745]/30 font-black">
            85€ no MB Way
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#575757] leading-relaxed max-w-2xl mx-auto font-medium">
          Descobre o segredo secular das Quintas do Douro para criares conservas de alta-costura gastronómica, com segurança total e desperdício zero na tua Cozinha de Elite.
        </p>

        {/* Apresentação Principal: VSL Player do VTurb e Imagem do Produto Visíveis */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Coluna do Player VTurb (Centralizada / Destaque) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <VTurbPlayer />
          </div>

          {/* Coluna da Imagem do Produto (Mantida Visível!) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center lg:text-left">
            <div className="w-full max-w-[280px] sm:max-w-[320px] flex justify-center items-center relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>
              <img
                src="https://i.imgur.com/UV0t4Pf.png"
                alt="O Método da Quinta - Conservas de Elite"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain select-none transition-transform duration-300 hover:scale-[1.02] relative z-10"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Botão de Compra e Garantias (Revelado após o Delay da VSL) */}
        <div className={isDelayLiberado ? "esconder-delay !block mt-8 max-w-xl mx-auto" : "esconder-delay mt-8 max-w-xl mx-auto"}>
          <button
            onClick={onScrollToOffer}
            className="w-full bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-base sm:text-xl tracking-wide py-4 sm:py-5 px-8 rounded-2xl shadow-xl shadow-[#28A745]/25 hover:shadow-2xl hover:shadow-[#28A745]/40 transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Sim! Quero o meu Escudo contra a Inflação</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-4 mt-3.5 text-xs sm:text-sm text-slate-500 font-medium">
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
    </section>
  );
};



