import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ElitePreservesSectionProps {
  onScrollToOffer: () => void;
}

const PRESERVES_ITEMS = [
  {
    emoji: '🫑',
    title: 'Conservas Tradicionais de Legumes em Azeite',
    description:
      'Pimentos assados em azeite virgem do Douro, beringelas marinadas e courgettes gourmet com arrumação geométrica no frasco. As campeãs absolutas de vendas na tua freguesia.',
    badge: 'Campeãs de Vendas',
    accentColor: 'border-amber-200/80 bg-amber-500/5',
  },
  {
    emoji: '🥒',
    title: 'Picles Crocantes & Aperitivos da Quinta',
    description:
      'Cenouras, pepinos, cebolinhas e legumes crocantes do Douro com o equilíbrio perfeito de acidez e especiarias nobres. Ideias para petiscos, tábuas de queijos e jantares de família.',
    badge: 'Textura & Rigor',
    accentColor: 'border-emerald-200/80 bg-emerald-500/5',
  },
  {
    emoji: '🍯',
    title: 'Compotas & Geleias de Gala',
    description:
      'Compotas de figo rasteiro, pera e frutos nobres reduzidos lentamente. O mimo doce ideal para cabazes de Natal, batizados e prendas de aniversário.',
    badge: 'Mimo Doce',
    accentColor: 'border-amber-200/80 bg-amber-500/5',
  },
  {
    emoji: '🍄',
    title: 'Conservas Especiais de Cogumelos & Ervas',
    description:
      'Cogumelos marinados, alho confitado e vegetais aromatizados com ervas tradicionais da Quinta, criando iguarias gourmet de alto valor percebido.',
    badge: 'Linha Gourmet',
    accentColor: 'border-amber-200/80 bg-amber-500/5',
  },
  {
    emoji: '🎁',
    title: 'Mimos de Época e Edições Festivas',
    description:
      'Seleções exclusivas montadas para servirem de presentes de gala e cabazes gourmet, prontas a vender por 15€ a 20€ cada frasco.',
    badge: '15€ a 20€ / frasco',
    accentColor: 'border-emerald-200/80 bg-emerald-500/5',
  },
  {
    emoji: '💡',
    title: 'E MUITO MAIS!',
    description:
      'Mais de 100 receitas e fórmulas tradicionais de conservas, picles e compotas com Acesso Vitalício na tua área de membros!',
    badge: '+100 Receitas & Fórmulas',
    accentColor: 'border-emerald-500/40 bg-[#28A745]/5 highlight',
    isSpecial: true,
  },
];

export const ElitePreservesSection: React.FC<ElitePreservesSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="conservas-elite" className="py-10 sm:py-16 lg:py-20 bg-[#F9F8F5] border-t border-amber-900/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] tracking-tight leading-snug">
            🏺 AS CONSERVAS DE ELITE QUE VAIS DOMINAR:
          </h2>
        </div>

        {/* Preserves Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {PRESERVES_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-4 sm:p-6 border transition-all duration-300 flex flex-col justify-between ${
                item.isSpecial
                  ? 'bg-white border-2 border-[#28A745] shadow-md hover:shadow-lg'
                  : 'bg-white border-slate-200/80 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {/* Header with Emoji & Badge */}
                <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F3F0E6] flex items-center justify-center text-2xl sm:text-3xl border border-amber-900/10 shrink-0">
                    <span role="img" aria-label={item.title}>
                      {item.emoji}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 sm:py-1 rounded-full border ${
                      item.isSpecial
                        ? 'bg-[#28A745]/10 text-[#1f8035] border-[#28A745]/30'
                        : 'bg-[#556B2F]/10 text-[#556B2F] border-[#556B2F]/20'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-base sm:text-lg font-extrabold mb-2 leading-snug ${
                    item.isSpecial ? 'text-[#28A745]' : 'text-[#2D2D2D]'
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative accent */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                <span>Método da Quinta</span>
                <span className="text-amber-600/70 font-mono">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section End CTA */}
        <div className="text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-0 sm:min-w-[300px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-sm sm:text-base tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg shadow-[#28A745]/20 hover:shadow-xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Quero dominar estas conservas de elite</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
