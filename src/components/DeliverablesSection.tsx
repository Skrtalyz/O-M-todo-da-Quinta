import React from 'react';
import { IMAGES } from '../assets/images';
import { ShieldCheck, Award, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface DeliverablesSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer?: () => void;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  return (
    <section id="entrega" className="py-16 sm:py-20 bg-[#F9F8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D] tracking-tight mb-4">
            Ao entrares para o Método da Quinta, recebes o mapa completo para a tua Cozinha de Elite:
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Tudo com Acesso Vitalício à Metodologia enviado instantaneamente para o teu e-mail e telemóvel.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Pillar 1: O Manual Digital Mestre */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F3F0E6] text-[#2D2D2D] flex items-center justify-center font-black text-lg mb-6 group-hover:scale-105 transition-transform border border-amber-900/10">
                01
              </div>
              
              <h3 className="text-xl font-extrabold text-[#2D2D2D] mb-3">
                O Manual Digital Mestre
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                Mais de 100 receitas tradicionais de conservas, picles e compotas premium (da beringela ao pimento assado).
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 mb-6">
                <img
                  src="https://i.postimg.cc/g2Vmv08F/image.png"
                  alt="O Manual Digital Mestre - Conservas de Elite"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <ul className="space-y-2.5 text-xs text-[#2D2D2D] font-semibold">
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#556B2F]/40 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group">
            <div className="absolute top-4 right-4 bg-[#556B2F]/10 text-[#556B2F] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#556B2F]/30">
              Protocolo Científico
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#556B2F]/10 text-[#556B2F] flex items-center justify-center font-black text-lg mb-6 group-hover:scale-105 transition-transform border border-[#556B2F]/20">
                02
              </div>
              
              <h3 className="text-xl font-extrabold text-[#2D2D2D] mb-3 flex items-center gap-2">
                <span>Protocolo Antifalhas de Esterilização</span>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                O protocolo científico rigoroso que garante segurança total. Esquece para sempre o receio de frascos que se estragam ou ganham bolor.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 mb-6">
                <img
                  src="https://i.postimg.cc/CKZ1b0hc/0f33a719-b713-4c47-8dcd-b540a1a5acec.png"
                  alt="Protocolo Antifalhas de Esterilização"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <ul className="space-y-2.5 text-xs text-[#2D2D2D] font-semibold mb-6">
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

            <div className="bg-[#556B2F]/10 border border-[#556B2F]/20 p-3 rounded-2xl text-[11px] text-[#3F5120] font-bold text-center">
              🛡️ Tranquilidade e prestígio total ao servir ou vender
            </div>
          </div>

          {/* Pillar 3: Guia Prático de Execução */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F3F0E6] text-[#2D2D2D] flex items-center justify-center font-black text-lg mb-6 group-hover:scale-105 transition-transform border border-amber-900/10">
                03
              </div>
              
              <h3 className="text-xl font-extrabold text-[#2D2D2D] mb-3">
                Guia Prático de Execução
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                Instruções detalhadas para preparares cada pote com o rigor e a perfeição exigidos pelas melhores boutiques gastronómicas.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 mb-6">
                <img
                  src="https://i.postimg.cc/nzKVb1Td/83fbb4a7-b6b1-48ed-83f8-9cc2b1cc26fd.png"
                  alt="Guia Prático de Execução - Conservas de Elite"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <ul className="space-y-2.5 text-xs text-[#2D2D2D] font-semibold">
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

        {/* Expert Dona Maria Profile Spotlight */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl">
                <img
                  src="https://i.postimg.cc/Gm1CrD87/f165db80-dea5-431a-bd87-972467a00594.png"
                  alt="Expert Dona Maria do Carmo - Quinta do Douro"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs">
                  <span className="font-extrabold text-emerald-400">Dona Maria do Carmo</span>
                  <span className="block text-[10px] text-slate-300 font-medium">Mestre Artesã das Quintas do Douro</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                “O segredo de uma conserva de elite não é a força, é a paciência e a precisão do Douro.”
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                A Dona Maria do Carmo condensou mais de 40 anos de prática gastronómica nas quintas durienses num método direto, testado e à prova de falhas. Não precisas de ter experiência em cozinha profissional ou utensílios caros: precisas apenas dos legumes da tua horta ou mercado local e do protocolo correto na tua Cozinha de Elite.
              </p>

            </div>

          </div>
        </div>

        {/* Section End CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-[320px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-base sm:text-lg tracking-wide py-4 sm:py-5 px-8 sm:px-10 rounded-2xl shadow-xl shadow-[#28A745]/20 hover:shadow-2xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-3 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Quero dominar o Método da Quinta</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

