import React, { useState } from 'react';
import { X, Smartphone, ShieldCheck, CheckCircle2, Lock, CreditCard, Building2, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: 'basic' | 'complete';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [paymentMethod, setPaymentMethod] = useState<'mbway' | 'multibanco' | 'card'>('mbway');
  const [phone, setPhone] = useState('912 345 678');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');

  if (!isOpen) return null;

  const planPrice = selectedPlan === 'complete' ? '14,90' : '7,90';
  const planName = selectedPlan === 'complete' ? 'Plano Mestria da Quinta' : 'Plano Básico';

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF9F6] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pagamento Seguro 256-bit • Portugal</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Finalizar Inscrição na Quinta
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Recebe o Acesso Vitalício à Metodologia no teu e-mail e telemóvel.
              </p>
            </div>

            {/* Selected Plan Summary Box */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-6 flex items-center justify-between shadow-xs">
              <div>
                <span className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                  {planName}
                </span>
                <span className="text-[11px] text-emerald-700 font-bold">
                  {selectedPlan === 'complete' ? '✓ Inclui todos os 3 Bónus Exclusivos' : '✓ Manual Mestre + Esterilização'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900">€{planPrice}</span>
                <span className="block text-[10px] text-slate-500 font-semibold">Pagamento Único</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  O teu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Alice Santos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  O teu E-mail para Acesso Imediato à Metodologia *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: maria.santos@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-2">
                  Método de Pagamento Preferido:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mbway')}
                    className={`p-3 rounded-xl border text-xs font-extrabold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'mbway'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-emerald-600" />
                    <span>MB WAY</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('multibanco')}
                    className={`p-3 rounded-xl border text-xs font-extrabold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'multibanco'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Building2 className="w-5 h-5" />
                    <span>Multibanco</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-extrabold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Cartão</span>
                  </button>
                </div>
              </div>

              {/* MB Way Phone Input */}
              {paymentMethod === 'mbway' && (
                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200 space-y-2">
                  <label className="block text-xs font-bold text-emerald-900">
                    Número do Telemóvel associado ao MB WAY:
                  </label>
                  <div className="flex gap-2">
                    <span className="px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-extrabold text-slate-600 flex items-center">
                      🇵🇹 +351
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="912 345 678"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">
                    Receberás uma notificação na app do teu telemóvel para aprovar €{planPrice}.
                  </p>
                </div>
              )}

              {paymentMethod === 'multibanco' && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1 font-medium">
                  <p className="font-bold text-slate-900">Pagamento por Referência Multibanco:</p>
                  <p>Entidade e Referência geradas no ecrã seguinte com validade de 24 horas.</p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1 font-medium">
                  <p className="font-bold text-slate-900">Cartão de Crédito / Débito ou Apple Pay:</p>
                  <p>Processamento instantâneo e seguro de 256 bits.</p>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wider py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Confirmar e Pagar €{planPrice}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-500 font-semibold flex items-center justify-center gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantia de 7 Dias • Devolução Incondicional</span>
              </div>
            </form>
          </div>
        )}

        {step === 'processing' && (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <h3 className="text-2xl font-black text-slate-900">
              {paymentMethod === 'mbway' ? 'A enviar instrução para a sua App MB WAY...' : 'A processar inscrição...'}
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto font-medium">
              Por favor, confirma no teu telemóvel a transação de €{planPrice}.
            </p>
          </div>
        )}

        {step === 'success' && (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 block mb-1">
                INSCRIÇÃO CONFIRMADA COM SUCESSO!
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                Bem-vinda ao Atelier da Quinta do Douro
              </h3>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2 text-slate-900 font-medium">
              <p className="font-bold">O teu acesso foi gerado com sucesso:</p>
              <p className="text-slate-600">
                • Enviámos a ligação de acesso ao <strong>Manual Digital Mestre</strong> e Guias de Execução para <strong>{email || 'o teu e-mail'}</strong>.
              </p>
              <p className="text-slate-600">
                • Podes começar a preparar as tuas primeiras conservas de elite hoje mesmo.
              </p>
            </div>

            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl cursor-pointer transition-colors"
            >
              Concluir e Fechar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

