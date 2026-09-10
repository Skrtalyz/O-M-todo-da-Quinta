import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, ShoppingBag, Smartphone, ArrowRight } from 'lucide-react';
import { useCheckoutUrls } from '../utils/checkout';

interface OfferSectionProps {
  onOpenCheckout: (planId: 'basic' | 'complete') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  const checkoutUrls = useCheckoutUrls();
  return (
    <section id="oferta" className="py-10 sm:py-16 lg:py-20 bg-[#F3F0E6] border-t border-amber-900/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] tracking-tight leading-snug">
            Escolhe o teu nível de entrada hoje:
          </h2>
        </div>

        {/* Offer Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch max-w-5xl mx-auto mb-8 sm:mb-14">
          
          {/* Plano Básico (€7,90) */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all duration-300 relative">
            <div>
              <div className="mb-4 sm:mb-6">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#2D2D2D] bg-[#F9F8F5] px-2.5 py-1 rounded-full border border-slate-200">
                  Entrada Básica
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] mt-2 sm:mt-3 mb-1">
                  Plano Básico
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Para quem deseja adquirir o Manual Digital e os fundamentos de conservação.
                </p>
              </div>

              {/* Price */}
              <div className="mb-5 sm:mb-7 pb-4 sm:pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#2D2D2D]">€7,90</span>
                  <span className="text-xs text-slate-400 line-through">€29,00</span>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-[#C25E00] bg-[#C25E00]/10 border border-[#C25E00]/20 px-2 py-0.5 rounded-lg">
                    PAGAMENTO ÚNICO
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block mt-1 font-medium">
                  Sem mensalidades ou fidelização
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 text-xs sm:text-sm text-[#2D2D2D] font-medium mb-6 sm:mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#28A745] shrink-0 mt-0.5" />
                  <span><strong>Manual Digital da Quinta:</strong> +100 receitas tradicionais do Douro.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#28A745] shrink-0 mt-0.5" />
                  <span><strong>Protocolo Antifalhas de Esterilização:</strong> Módulo de segurança.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#28A745] shrink-0 mt-0.5" />
                  <span><strong>Acesso Vitalício à Metodologia:</strong> Consulta em qualquer dispositivo.</span>
                </li>
              </ul>
            </div>

            {/* CTA Button Básico */}
            <div>
              <a
                href={checkoutUrls.basic}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenCheckout('basic');
                }}
                className="w-full bg-[#2D2D2D] hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl sm:rounded-2xl transition-colors shadow flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Escolher Plano Básico (€7,90)</span>
              </a>
              <span className="block text-center text-[9px] sm:text-[10px] text-slate-500 font-semibold mt-2">
                🔒 Entrega Imediata por Email
              </span>
            </div>
          </div>

          {/* Plano Mestria da Quinta (€14,90) - [MAIS VENDIDO] */}
          <div className="lg:col-span-7 bg-[#2D2D2D] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-9 border-2 border-[#28A745] shadow-2xl flex flex-col justify-between relative overflow-hidden transform lg:-translate-y-2">
            
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-[#28A745] text-white font-black text-[9px] sm:text-[11px] uppercase tracking-wider px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-bl-xl sm:rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
              <span>MAIS VENDIDO • 94% DAS ESCOLHAS</span>
            </div>

            <div>
              <div className="mb-5 sm:mb-6 pt-3 sm:pt-2">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#28A745] bg-[#28A745]/10 px-2.5 py-1 rounded-full border border-[#28A745]/30">
                  Experiência Completa da Quinta
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white mt-2 sm:mt-3 mb-1">
                  Plano Mestria da Quinta
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  A metodologia definitiva para transformar vegetais frescos das Quintas do Douro em iguarias de prestígio na tua Cozinha de Elite.
                </p>
              </div>

              {/* Price */}
              <div className="mb-5 sm:mb-7 pb-4 sm:pb-6 border-b border-slate-700">
                <div className="flex items-baseline gap-2.5 sm:gap-3">
                  <span className="text-3xl sm:text-5xl font-black text-white">€14,90</span>
                  <span className="text-sm sm:text-base text-slate-400 line-through">€140,00</span>
                  <span className="text-[10px] sm:text-xs font-black bg-[#28A745] text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                    POUPAS 125€ HOJE
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#28A745] block mt-2 font-bold flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 shrink-0" />
                  Inclui todos os Guias Práticos + Script de Elite por MB Way
                </span>
              </div>

              {/* Stack Features List */}
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200 mb-6 sm:mb-8 font-medium">
                <li className="flex items-start gap-2.5 bg-slate-800/80 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-700">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#28A745] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white"><strong>Manual Digital da Quinta:</strong> +100 Receitas Tradicionais do Douro.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#28A745] shrink-0 mt-0.5" />
                  <span><strong>+ Protocolo Antifalhas de Esterilização:</strong> Controlo rigoroso de acidez e vácuo estanque.</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span><strong>Bónus 01: Guia Prático "Estética de Elite":</strong> Rotulagem, fitas de cetim e embalagem de luxo (Vendas a 15€-20€).</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span><strong>Bónus 02: Guia Prático "Zero Desperdício":</strong> Criação de linha secundária lucrativa com talos e cascas.</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span><strong>Bónus 03: Script de Elite por WhatsApp:</strong> Guia de comunicação para gerar encomendas em 48h.</span>
                </li>
              </ul>
            </div>

            {/* CTA Button Completo */}
            <div>
              <a
                href={checkoutUrls.complete}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenCheckout('complete');
                }}
                className="w-full bg-[#28A745] hover:bg-[#1f8035] text-white font-black text-xs sm:text-base uppercase tracking-wider py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 group cursor-pointer text-center"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>QUERO O PLANO MESTRIA DA QUINTA (€14,90)</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-400 font-semibold mt-3">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#28A745]" />
                  Garantia de 7 Dias
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-[#28A745]" />
                  MB Way / Multibanco / Cartão
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Expert Dona Maria Profile Spotlight */}
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800 max-w-5xl mx-auto mt-8 sm:mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl max-w-sm mx-auto">
                <img
                  src="https://i.imgur.com/0auzgLX.png"
                  alt="Dona Maria do Carmo - Mestre Artesã das Quintas do Douro"
                  referrerPolicy="no-referrer"
                  className="w-full h-52 sm:h-72 object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 text-xs">
                  <span className="font-extrabold text-emerald-400 text-xs">Dona Maria do Carmo</span>
                  <span className="block text-[9px] text-slate-300 font-medium">Mestre Artesã das Quintas do Douro</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <span>Mestre Artesã das Quintas do Douro</span>
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold leading-snug">
                “O segredo de uma conserva de elite não é a força, é a paciência e a precisão do Douro.”
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                A Dona Maria do Carmo condensou mais de 40 anos de prática gastronómica nas quintas durienses num método direto, testado e à prova de falhas. Não precisas de ter experiência em cozinha profissional ou utensílios caros: precisas apenas dos legumes da tua horta ou mercado local e do protocolo correto na tua Cozinha de Elite.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

