import React from 'react';
import { IMAGES } from '../assets/images';
import { Gift, Sparkles, Check, MessageCircle, RefreshCw, ArrowRight } from 'lucide-react';

interface BonusesSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  return (
    <section id="bonuses" className="py-16 sm:py-20 bg-[#F9F8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D] tracking-tight mb-4">
            Para garantir que a tua Cozinha de Elite é a mais cobiçada da zona, incluí estes bónus no Plano Mestria da Quinta:
          </h2>
          <p className="text-[#575757] text-sm sm:text-base font-medium">
            Bónus práticos concebidos especificamente para o mercado português de gastronomia artesanal.
          </p>
        </div>

        {/* Bonus Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Bonus 01 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-6 bg-[#C25E00] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              VALOR: 37€ • GRÁTIS
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C25E00]/10 text-[#C25E00] flex items-center justify-center font-black text-xs mb-6 border border-[#C25E00]/20">
                BÓNUS 01
              </div>

              <h3 className="text-xl font-extrabold text-[#2D2D2D] mb-3">
                Guia "Estética de Elite"
              </h3>

              <p className="text-sm text-[#575757] leading-relaxed mb-6 font-medium">
                Aprende a arte da rotulagem e embalagem com fitas de cetim. Transforma um frasco de legumes num presente de luxo que vendes por 15€ a 20€.
              </p>

              {/* Inset Visual Card */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 mb-6">
                <img
                  src={IMAGES.satinJar}
                  alt="Frasco de Luxo com Fita de Cetim"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <ul className="space-y-2.5 text-xs text-[#2D2D2D] font-semibold mb-6">
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

            <div className="pt-4 border-t border-slate-100 text-xs text-[#28A745] font-bold flex items-center justify-between">
              <span>Incluído no Plano Mestria da Quinta</span>
              <Sparkles className="w-4 h-4 text-[#28A745]" />
            </div>
          </div>

          {/* Bonus 02 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-6 bg-[#C25E00] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              VALOR: 27€ • GRÁTIS
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#556B2F]/10 text-[#556B2F] flex items-center justify-center font-black text-xs mb-6 border border-[#556B2F]/20">
                BÓNUS 02
              </div>

              <h3 className="text-xl font-extrabold text-[#2D2D2D] mb-3">
                O Segredo do Zero Desperdício
              </h3>

              <p className="text-sm text-[#575757] leading-relaxed mb-6 font-medium">
                Como transformar talos e cascas em conservas secundárias lucrativas.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 mb-6">
                <img
                  src="https://i.postimg.cc/dtQ2M7QB/1eeeadeb-a624-4e70-b3ab-86ff58d6db1c.png"
                  alt="O Segredo do Zero Desperdício - Conservas de Talos e Cascas"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-[#F3F0E6] p-4 rounded-2xl border border-amber-900/10 mb-6 text-xs text-[#2D2D2D] space-y-3 font-medium">
                <div className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
                  <span>Picles de Talos de Couve-Flor com Especiarias</span>
                </div>
                <div className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
                  <span>Caldo Concentrado de Cascas de Legumes Nobres</span>
                </div>
                <p className="text-[11px] text-[#575757] italic">
                  Aproveitas 100% dos alimentos comprados no mercado da freguesia!
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[#2D2D2D] font-semibold mb-6">
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

            <div className="pt-4 border-t border-slate-100 text-xs text-[#28A745] font-bold flex items-center justify-between">
              <span>Incluído no Plano Mestria da Quinta</span>
              <Sparkles className="w-4 h-4 text-[#28A745]" />
            </div>
          </div>

          {/* Bonus 03 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-6 bg-[#C25E00] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              VALOR: 47€ • GRÁTIS
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#556B2F]/10 text-[#556B2F] flex items-center justify-center font-black text-xs mb-6 border border-[#556B2F]/20">
                BÓNUS 03
              </div>

              <h3 className="text-xl font-extrabold text-[#2D2D2D] mb-3">
                Script de Vendas por WhatsApp
              </h3>

              <p className="text-sm text-[#575757] leading-relaxed mb-6 font-medium">
                O que dizer para as vizinhas e amigas para garantires as tuas primeiras encomendas em 48 horas.
              </p>

              {/* WhatsApp Mock Card */}
              <div className="bg-[#2D2D2D] text-white p-4 rounded-2xl border border-slate-700 mb-6 text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#28A745] font-bold text-[11px]">
                  <MessageCircle className="w-4 h-4" />
                  <span>Mensagem Pronta para Copiar e Colar</span>
                </div>
                <p className="text-slate-300 italic text-[11px] leading-relaxed">
                  “Olá [Nome]! Fiz um lote limitado das minhas conservas artesanais em azeite do Douro com embalagem de presente. Queres guardar um frasco para este fim de semana? Aceito MB Way!”
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[#2D2D2D] font-semibold mb-6">
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

            <div className="pt-4 border-t border-slate-100 text-xs text-[#28A745] font-bold flex items-center justify-between">
              <span>Incluído no Plano Mestria da Quinta</span>
              <Sparkles className="w-4 h-4 text-[#28A745]" />
            </div>
          </div>

        </div>

        {/* Section End CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-[320px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-base sm:text-lg tracking-wide py-4 sm:py-5 px-8 sm:px-10 rounded-2xl shadow-xl shadow-[#28A745]/20 hover:shadow-2xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-3 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Garantir os meus Mimos de Elite agora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

