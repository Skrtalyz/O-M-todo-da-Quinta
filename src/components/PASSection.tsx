import React, { useState } from 'react';
import { Shield, AlertCircle, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

interface PASSectionProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
  onScrollToOffer?: () => void;
}

export const PASSection: React.FC<PASSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  // Profit Calculator State
  const [jarsPerWeek, setJarsPerWeek] = useState<number>(5);
  const [pricePerJar, setPricePerJar] = useState<number>(18);

  const weeklyRevenue = jarsPerWeek * pricePerJar;
  const monthlyRevenue = weeklyRevenue * 4;
  const netMonthlyProfit = monthlyRevenue * 0.85; // ~85% margin on local veggies

  return (
    <section id="metodo" className="py-16 sm:py-20 bg-[#F5EFE6] border-y border-amber-900/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Da invisibilidade ao reconhecimento: a tua Cozinha de Elite do Douro
          </h2>
        </div>

        {/* PAS Core Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12 sm:mb-16">
          
          {/* Card 1: Problem & Agitation */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold mb-6">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>O Sentimento Silencioso</span>
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-900 font-bold leading-snug mb-6 border-l-4 border-amber-500 pl-4">
                “Sentes que, depois de anos a cuidar de tudo e de todos, a tua própria identidade ficou guardada numa gaveta? Dantes, eras apenas a dona de casa que cozinhava; hoje, podes ser a designer de sabores admirada por toda a zona.”
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
                Quantas vezes viste vegetais frescos a ficarem moles no frigorífico antes de os conseguires usar? É dinheiro deitado ao lixo numa altura em que as idas ao supermercado em Portugal estão cada vez mais caras.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-amber-800 font-bold">
              <span className="px-2.5 py-1 bg-amber-50 rounded-lg">• Desperdício na Cozinha</span>
              <span className="px-2.5 py-1 bg-amber-50 rounded-lg">• Custo de Vida em Alta</span>
              <span className="px-2.5 py-1 bg-amber-50 rounded-lg">• Falta de Reconhecimento</span>
            </div>
          </div>

          {/* Card 2: Solution & Financial Autonomy */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold mb-6">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>O Teu Escudo Contra a Inflação</span>
              </div>

              <blockquote className="text-lg sm:text-xl text-white font-bold leading-snug mb-6 border-l-4 border-emerald-500 pl-4">
                “Não deixes que os legumes se estraguem no frigorífico enquanto o custo de vida em Portugal não para de subir. Tu mereces ter o teu próprio <span className="text-emerald-400">“escudo” contra a inflação</span> e a liberdade de comprar os teus mimos sem ter de pedir licença ao marido.”
              </blockquote>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                Com o Método da Quinta, transformas 2€ de vegetais da tua freguesia em frascos de conserva com estética de luxo que vendes por 15€ a 20€. As vizinhas encomendam para jantares, prendas e batizados, e o teu dinheiro cai direto na tua conta via MB Way.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 text-xs text-emerald-400 font-bold">
              <span className="px-2.5 py-1 bg-emerald-500/10 rounded-lg">✓ Liberdade Financeira</span>
              <span className="px-2.5 py-1 bg-emerald-500/10 rounded-lg">✓ Zero Pedir Licença</span>
              <span className="px-2.5 py-1 bg-emerald-500/10 rounded-lg">✓ Admirada na Freguesia</span>
            </div>
          </div>

        </div>

        {/* Interactive Feature: Profit & Autonomy Calculator for Portugal */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Calculadora da Tua Cozinha de Elite
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Calcula quanto podes receber no telemóvel via MB Way vendendo mimos na tua freguesia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-slate-100 pt-6">
            
            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                  <span>Frascos preparados por semana:</span>
                  <span className="text-emerald-600 font-black text-sm">{jarsPerWeek} frascos</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={jarsPerWeek}
                  onChange={(e) => setJarsPerWeek(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-semibold mt-1">
                  <span>2 (Produção Pessoal)</span>
                  <span>15 (Copa Média)</span>
                  <span>30 (Cozinha de Elite)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-900 mb-2">
                  <span>Preço por Frasco de Mimo Gourmet:</span>
                  <span className="text-amber-600 font-black text-sm">{pricePerJar}€ / frasco</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="25"
                  step="1"
                  value={pricePerJar}
                  onChange={(e) => setPricePerJar(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-semibold mt-1">
                  <span>12€ (Simples)</span>
                  <span>18€ (Iguaria do Douro)</span>
                  <span>25€ (Prenda de Gala)</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center space-y-4">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Estimativa Média Mensal
              </span>
              
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-slate-900">
                  +{monthlyRevenue.toFixed(0)}€ <span className="text-xs font-semibold text-slate-500">/ mês no MB Way</span>
                </span>
                <span className="text-xs text-emerald-600 font-bold block mt-1">
                  (~{netMonthlyProfit.toFixed(0)}€ de Lucro Líquido Estimado)
                </span>
              </div>

              <p className="text-xs text-slate-500 font-medium leading-tight">
                Suficiente para comprares todos os teus mimos e prendas sem dar justificações a ninguém!
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
            <span>Sim! Quero o meu Escudo contra a Inflação</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

