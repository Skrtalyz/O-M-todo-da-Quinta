import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { HOTMART_CHECKOUT_URLS } from '../constants/checkout';

interface FinalCTASectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>A TUA OPORTUNIDADE HOJE</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight">
          Pronta para ser a designer de sabores admirada na tua freguesia?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Não deixes que os legumes se estraguem nem adies a tua autonomia. Em menos de 2 minutos recebes o Acesso Vitalício à Metodologia com o Manual Digital Mestre (+100 receitas) e o Protocolo Antifalhas de Esterilização no teu telemóvel.
        </p>

        {/* Primary CTA Button */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <a
            href={HOTMART_CHECKOUT_URLS.complete}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-lg uppercase tracking-wider py-5 px-8 rounded-2xl shadow-2xl hover:shadow-emerald-900/50 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer text-center"
          >
            <ShoppingBag className="w-6 h-6" />
            <span>[SIM! QUERO COMEÇAR O PLANO MESTRIA DA QUINTA AGORA]</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <p className="text-xs text-slate-400 font-semibold">
            Apenas €14,90 no Plano Mestria da Quinta com todos os 3 Guias Práticos de Oferta
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-semibold">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>MB Way / Multibanco / Cartão</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>7 Dias de Garantia Incondicional</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Acesso Vitalício Imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};

