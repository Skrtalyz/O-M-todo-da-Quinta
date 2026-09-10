import React from 'react';
import { IMAGES } from '../assets/images';
import { Shield } from 'lucide-react';
import { useCheckoutUrls } from '../utils/checkout';

interface GuaranteeSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenCheckout }) => {
  const checkoutUrls = useCheckoutUrls();
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#F9F8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/80 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Seal Graphic */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                <img
                  src={IMAGES.seal}
                  alt="Selo da Garantia de Honra da Quinta - 7 Dias"
                  referrerPolicy="no-referrer"
                  className="w-32 h-32 sm:w-44 sm:h-44 object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Guarantee Content */}
            <div className="md:col-span-8 space-y-3.5 sm:space-y-5 text-center md:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28A745]/10 text-[#1f8035] border border-[#28A745]/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#28A745]" />
                <span>Risco Zero e Transparência Total</span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] leading-tight">
                A Garantia de Honra da Quinta
              </h2>

              <blockquote className="text-xs sm:text-base text-[#2D2D2D] font-bold leading-snug border-l-4 border-[#28A745] pl-3 sm:pl-4 text-left">
                “Tens 7 dias para explorar todas as receitas e técnicas. Se não te sentires a designer de elite que prometemos, devolvemos cada cêntimo. O risco é meu, o orgulho de seres admirada é teu.”
              </blockquote>

              <p className="text-xs sm:text-sm text-[#575757] leading-relaxed font-medium">
                Basta enviares um e-mail simples para o nosso suporte em Portugal dentro dos 7 dias e recebes a devolução imediata do teu valor. Sem perguntas incómodas, sem complicações.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a
                  href={checkoutUrls.complete}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenCheckout('complete');
                  }}
                  className="w-full sm:w-auto bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow cursor-pointer transition-colors inline-block text-center"
                >
                  Experimentar sem Risco (€14,90)
                </a>
                <span className="text-[11px] sm:text-xs text-slate-500 font-semibold text-center">
                  Garantia regida pela legislação de consumo em Portugal
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

