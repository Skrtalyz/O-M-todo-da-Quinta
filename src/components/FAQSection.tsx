import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como recebo o Manual e os Bónus após o pagamento?',
      a: 'Assim que confirmas o pagamento (seja por MB Way, Multibanco ou Cartão), recebes um e-mail imediato com o Acesso Vitalício à Metodologia e ao Manual Digital Mestre da Quinta do Douro. Podes aceder no teu telemóvel, computador ou imprimir para a tua cozinha.'
    },
    {
      q: 'Não tenho nenhuma experiência em conservas. Consigo aprender?',
      a: 'Com certeza. O Método da Quinta foi desenhado pela Dona Maria do Carmo a pensar em quem começa do zero. Tudo é explicado passo a passo, desde a escolha dos vegetais ao fechamento estanque dos frascos.'
    },
    {
      q: 'É seguro usar o MB Way para pagamentos?',
      a: 'Sim, a 100%. O MB Way é o sistema de pagamento mais seguro e utilizado em Portugal. Recebes o pedido de aprovação diretamente na tua aplicação oficial do banco ou MB Way.'
    },
    {
      q: 'As conservas são mesmo seguras contra o bolor ou estragarem-se?',
      a: 'Sim! O Módulo de Esterilização Científica ensina o protocolo exato de tempo e temperatura para criar vácuo perfeito. As tuas conservas mantêm-se saborosas e seguras até 2 anos sem necessidade de frigorífico enquanto o frasco estiver selado.'
    },
    {
      q: 'Como funciona a Garantia de 7 Dias?',
      a: 'Se dentro de 7 dias leres o material e sentires que não é para ti, basta enviar uma mensagem ao nosso suporte por e-mail e devolvemos 100% do teu dinheiro. O risco é inteiramente nosso.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F3F0E6] border-t border-amber-900/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#2D2D2D] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#28A745]" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
            Esclarece todas as tuas dúvidas sobre o Método da Quinta
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#2D2D2D]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#28A745] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#575757] leading-relaxed border-t border-slate-100 pt-4 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

