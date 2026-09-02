import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { HOTMART_CHECKOUT_URLS } from '../constants/checkout';

interface HeaderProps {
  onOpenCheckout: (planId?: 'basic' | 'complete') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F9F8F5]/95 backdrop-blur-md shadow-sm border-b border-amber-900/10 py-3'
            : 'bg-[#F9F8F5] py-4 border-b border-amber-900/10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2D2D2D] text-white flex items-center justify-center font-black text-lg border border-slate-700 group-hover:scale-105 transition-transform">
              Q
            </div>
            <div>
              <span className="block text-base sm:text-lg font-black tracking-tight text-[#2D2D2D] leading-none">
                QUINTA DO DOURO
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#556B2F] font-extrabold mt-0.5">
                Conservas de Elite
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold text-slate-600">
            <button
              onClick={() => scrollToSection('entrega')}
              className="hover:text-[#2D2D2D] transition-colors cursor-pointer"
            >
              O Que Recebes
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="hover:text-[#2D2D2D] transition-colors cursor-pointer"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('bonuses')}
              className="hover:text-[#2D2D2D] transition-colors cursor-pointer"
            >
              Bónus
            </button>
            <button
              onClick={() => scrollToSection('oferta')}
              className="hover:text-[#2D2D2D] transition-colors cursor-pointer"
            >
              Planos
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2D2D2D] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F9F8F5] border-b border-slate-200 px-4 pt-3 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection('entrega')}
              className="block w-full text-left py-2 font-bold text-sm text-[#2D2D2D] border-b border-slate-100"
            >
              O Que Recebes
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left py-2 font-bold text-sm text-[#2D2D2D] border-b border-slate-100"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('bonuses')}
              className="block w-full text-left py-2 font-bold text-sm text-[#2D2D2D] border-b border-slate-100"
            >
              Bónus Exclusivos
            </button>
            <button
              onClick={() => scrollToSection('oferta')}
              className="block w-full text-left py-2 font-bold text-sm text-[#2D2D2D] border-b border-slate-100"
            >
              Ver Planos e Preços
            </button>
            <div className="pt-2">
              <a
                href={HOTMART_CHECKOUT_URLS.complete}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#28A745] hover:bg-[#1f8035] text-white font-black text-sm uppercase tracking-wider py-3 rounded-xl shadow text-center flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Começar Agora (€14,90)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

