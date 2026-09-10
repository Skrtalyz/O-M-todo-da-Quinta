import React from 'react';
import { IMAGES } from '../assets/images';
import { ShieldCheck, Award, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface DeliverablesSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer?: () => void;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  return (
    <section id="entrega" className="py-10 sm:py-16 lg:py-20 bg-[#F9F8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] tracking-tight leading-snug">
            Ao entrares para o Método da Quinta, recebes o{' '}
            <span className="text-[#C25E00]">mapa completo</span>{' '}
            para a tua{' '}
            <span className="text-[#28A745]">Cozinha de Elite</span>:
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 mb-10 sm:mb-14">
          
          {/* Pillar 1: O Manual Digital Mestre */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F3F0E6] text-[#2D2D2D] flex items-center justify-center font-black text-sm sm:text-base mb-4 sm:mb-5 group-hover:scale-105 transition-transform border border-amber-900/10">
                01
              </div>
              
              <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2D2D] mb-2">
                O Manual Digital Mestre
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                Mais de 100 receitas tradicionais de conservas, picles e compotas premium (da beringela ao pimento assado).
              </p>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 mb-4 sm:mb-5">
                <img
                  src="https://i.postimg.cc/g2Vmv08F/image.png"
                  alt="O Manual Digital Mestre - Conservas de Elite"
                  referrerPolicy="no-referrer"
                  className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <ul className="space-y-2 text-xs text-[#2D2D2D] font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Pimentos Assados em Azeite Virgem</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Compotas de Figo e Pera Rasteira</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Picles de Legumes Crocantes do Douro</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 2: Protocolo Antifalhas de Esterilização */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-[#556B2F]/40 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute top-4 right-4 bg-[#556B2F]/10 text-[#556B2F] text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#556B2F]/30">
              Protocolo Científico
            </div>

            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#556B2F]/10 text-[#556B2F] flex items-center justify-center font-black text-sm sm:text-base mb-4 sm:mb-5 group-hover:scale-105 transition-transform border border-[#556B2F]/20">
                02
              </div>
              
              <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2D2D] mb-2 flex items-center gap-2">
                <span>Protocolo Antifalhas de Esterilização</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                O protocolo científico rigoroso que garante segurança total. Esquece para sempre o receio de frascos que se estragam ou ganham bolor.
              </p>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 mb-4 sm:mb-5">
                <img
                  src="https://i.postimg.cc/CKZ1b0hc/0f33a719-b713-4c47-8dcd-b540a1a5acec.png"
                  alt="Protocolo Antifalhas de Esterilização"
                  referrerPolicy="no-referrer"
                  className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <ul className="space-y-2 text-xs text-[#2D2D2D] font-semibold mb-4 sm:mb-5">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Esterilização em Banho-Maria com selagem estanque</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Equilíbrio de Acidez (pH) ideal sem aditivos artificiais</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#28A745] shrink-0" />
                  <span>Validade testada de 12 a 24 meses em despensa</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#556B2F]/10 border border-[#556B2F]/20 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] text-[#3F5120] font-bold text-center">
              🛡️ Tranquilidade e prestígio total ao servir ou vender
            </div>
          </div>

          {/* Pillar 3: Guia Prático de Execução */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F3F0E6] text-[#2D2D2D] flex items-center justify-center font-black text-sm sm:text-base mb-4 sm:mb-5 group-hover:scale-105 transition-transform border border-amber-900/10">
                03
              </div>
              
              <h3 className="text-lg sm:text-xl font-extrabold text-[#2D2D2D] mb-2">
                Guia Prático de Execução
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                Instruções detalhadas para preparares cada pote com o rigor e a perfeição exigidos pelas melhores boutiques gastronómicas.
              </p>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 mb-4 sm:mb-5">
                <img
                  src="https://i.postimg.cc/nzKVb1Td/83fbb4a7-b6b1-48ed-83f8-9cc2b1cc26fd.png"
                  alt="Guia Prático de Execução - Conservas de Elite"
                  referrerPolicy="no-referrer"
                  className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <ul className="space-y-2 text-xs text-[#2D2D2D] font-semibold">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C25E00] shrink-0" />
                  <span>Cortes estéticos e arrumação geométrica no frasco</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C25E00] shrink-0" />
                  <span>Combinação de especiarias nobres e azeites finos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C25E00] shrink-0" />
                  <span>Apresentação digna das mercearias gourmet de Lisboa e Porto</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section End CTA */}
        <div className="text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-0 sm:min-w-[300px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-sm sm:text-base tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg shadow-[#28A745]/20 hover:shadow-xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Quero dominar o Método da Quinta</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

