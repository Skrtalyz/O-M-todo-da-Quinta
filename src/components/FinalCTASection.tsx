import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { useCheckoutUrls } from '../utils/checkout';

interface FinalCTASectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenCheckout }) => {
  const checkoutUrls = useCheckoutUrls();
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>A TUA OPORTUNIDADE HOJE</span>
        </div>

        <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 sm:mb-6 leading-snug">
          Pronta para ser a designer de sabores admirada na tua freguesia?
        </h2>

        <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed font-medium">
          Não deixes que os legumes se estraguem nem adies a tua autonomia. Em menos de 2 minutos recebes o Acesso Vitalício à Metodologia com o Manual Digital Mestre (+100 receitas) e o Protocolo Antifalhas de Esterilização no teu telemóvel.
        </p>

        {/* Primary CTA Button */}
        <div className="space-y-3 max-w-xl mx-auto">
          <a
            href={checkoutUrls.complete}
            onClick={(e) => {
              e.preventDefault();
              onOpenCheckout('complete');
            }}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-base uppercase tracking-wider py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-emerald-900/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group cursor-pointer text-center"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>[SIM! QUERO COMEÇAR O PLANO MESTRIA DA QUINTA AGORA]</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          <p className="text-[11px] sm:text-xs text-slate-400 font-semibold">
            Apenas €14,90 no Plano Mestria da Quinta com todos os 3 Guias Práticos de Oferta
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-slate-400 font-semibold">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span>MB Way / Multibanco / Cartão</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>7 Dias de Garantia</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Acesso Vitalício Imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};

