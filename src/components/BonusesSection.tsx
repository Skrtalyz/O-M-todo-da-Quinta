import React from 'react';
import { Sparkles, Check, MessageCircle, RefreshCw, ArrowRight } from 'lucide-react';

interface BonusesSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  return (
    <section id="bonuses" className="py-10 sm:py-16 lg:py-20 bg-[#F9F8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] tracking-tight leading-snug">
            Para garantir que a tua{' '}
            <span className="text-[#28A745]">Cozinha de Elite é a mais cobiçada da zona</span>, incluí estes bónus no{' '}
            <span className="text-[#C25E00]">Plano Mestria da Quinta</span>:
          </h2>
        </div>

        {/* Bonus Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7 mb-10 sm:mb-14">
          
          {/* Bonus 01 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-4 sm:right-6 bg-[#C25E00] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
              VALOR: 37€ • GRÁTIS
            </div>

            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#C25E00]/10 text-[#C25E00] flex items-center justify-center font-black text-[11px] sm:text-xs mb-4 sm:mb-5 border border-[#C25E00]/20">
                BÓNUS 01
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2D2D] mb-2">
                Guia "Estética de Elite"
              </h3>

              <p className="text-xs sm:text-sm text-[#575757] leading-relaxed mb-4 font-medium">
                Aprende a arte da rotulagem e embalagem com fitas de cetim. Transforma um frasco de legumes num presente de luxo que vendes por 15€ a 20€.
              </p>

              {/* Inset Visual Card */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 mb-4 sm:mb-5">
                <img
                  src="https://i.imgur.com/qqJWJGo.jpeg"
                  alt="Guia Estética de Elite - Frasco de Luxo com Fita de Cetim"
                  referrerPolicy="no-referrer"
                  className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <ul className="space-y-2 text-xs text-[#2D2D2D] font-semibold mb-4 sm:mb-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Formatos de frascos e tampas nobres</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Modelos de Rótulos Elegantes de Alta Resolução</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-[#28A745] font-bold flex items-center justify-between">
              <span>Incluído no Plano Mestria da Quinta</span>
              <Sparkles className="w-4 h-4 text-[#28A745]" />
            </div>
          </div>

          {/* Bonus 02 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-4 sm:right-6 bg-[#C25E00] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
              VALOR: 27€ • GRÁTIS
            </div>

            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#556B2F]/10 text-[#556B2F] flex items-center justify-center font-black text-[11px] sm:text-xs mb-4 sm:mb-5 border border-[#556B2F]/20">
                BÓNUS 02
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2D2D] mb-2">
                O Segredo do Zero Desperdício
              </h3>

              <p className="text-xs sm:text-sm text-[#575757] leading-relaxed mb-4 font-medium">
                Como transformar talos e cascas em conservas secundárias lucrativas.
              </p>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 mb-4 sm:mb-5">
                <img
                  src="https://i.imgur.com/aQFyrIp.png"
                  alt="O Segredo do Zero Desperdício - Conservas de Talos e Cascas"
                  referrerPolicy="no-referrer"
                  className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-[#F3F0E6] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-amber-900/10 mb-4 sm:mb-5 text-xs text-[#2D2D2D] space-y-2.5 font-medium">
                <div className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
                  <span>Picles de Talos de Couve-Flor com Especiarias</span>
                </div>
                <div className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
                  <span>Caldo Concentrado de Cascas de Legumes Nobres</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#575757] italic">
                  Aproveitas 100% dos alimentos comprados no mercado da freguesia!
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#2D2D2D] font-semibold mb-4 sm:mb-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Redução total de custos de produção</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Criação de linha secundária de conservas</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-[#28A745] font-bold flex items-center justify-between">
              <span>Incluído no Plano Mestria da Quinta</span>
              <Sparkles className="w-4 h-4 text-[#28A745]" />
            </div>
          </div>

          {/* Bonus 03 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-4 sm:right-6 bg-[#C25E00] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
              VALOR: 47€ • GRÁTIS
            </div>

            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#556B2F]/10 text-[#556B2F] flex items-center justify-center font-black text-[11px] sm:text-xs mb-4 sm:mb-5 border border-[#556B2F]/20">
                BÓNUS 03
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2D2D] mb-2">
                Script de Vendas por WhatsApp
              </h3>

              <p className="text-xs sm:text-sm text-[#575757] leading-relaxed mb-4 font-medium">
                O que dizer para as vizinhas e amigas para garantires as tuas primeiras encomendas em 48 horas.
              </p>

              {/* WhatsApp Mock Card */}
              <div className="bg-[#2D2D2D] text-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700 mb-4 sm:mb-5 text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#28A745] font-bold text-[11px]">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Mensagem Pronta para Copiar e Colar</span>
                </div>
                <p className="text-slate-300 italic text-[10px] sm:text-[11px] leading-relaxed">
                  “Olá [Nome]! Fiz um lote limitado das minhas conservas artesanais em azeite do Douro com embalagem de presente. Queres guardar um frasco para este fim de semana? Aceito MB Way!”
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#2D2D2D] font-semibold mb-4 sm:mb-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Respostas para objeções de preço</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Como pedir pagamento imediato por MB Way</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-[#28A745] font-bold flex items-center justify-between">
              <span>Incluído no Plano Mestria da Quinta</span>
              <Sparkles className="w-4 h-4 text-[#28A745]" />
            </div>
          </div>

        </div>

        {/* Section End CTA */}
        <div className="text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-0 sm:min-w-[300px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-sm sm:text-base tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg shadow-[#28A745]/20 hover:shadow-xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Garantir os meus Mimos de Elite agora</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

