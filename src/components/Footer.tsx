import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs text-center font-medium">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        
        {/* Minimal Brand Identity */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center font-black text-sm border border-slate-700">
            Q
          </div>
          <span className="text-sm font-black text-white tracking-tight">
            QUINTA DO DOURO • METODOLOGIA DE CONSERVAS DE ELITE
          </span>
        </div>

        {/* Reassurance & Legal Note */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] text-slate-400 font-semibold">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Pagamentos 100% Seguros via MB WAY, Multibanco e Cartão
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Garantia Incondicional de 7 Dias
          </span>
        </div>

        <p className="text-[11px] text-slate-500 max-w-xl mx-auto leading-relaxed">
          © {new Date().getFullYear()} Quinta do Douro. Todos os direitos reservados.
          Acesso imediato e vitalício enviado por e-mail após confirmação.
        </p>

      </div>
    </footer>
  );
};


