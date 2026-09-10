import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Smartphone, Star, ChevronLeft, ChevronRight, Award, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onScrollToOffer?: () => void;
}

interface Testimonial {
  id: string;
  initials: string;
  name: string;
  location: string;
  tag: string;
  quote: string;
  proofType: 'Esterilização' | 'MB Way' | 'Estética' | 'Receitas' | 'Qualidade';
  proofText: string;
  timeAgo: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    initials: 'IS',
    name: 'Isabel S.',
    location: 'Freguesia de Braga',
    tag: 'Aluna Verificada',
    quote: '“Toda a gente na minha freguesia pergunta onde compro estas conservas. Quando digo que as faço na minha cozinha, ninguém acredita! Já tenho encomendas para três batizados.”',
    proofType: 'Esterilização',
    proofText: 'Aulas de Esterilização & Receitas',
    timeAgo: 'Há 3 dias',
  },
  {
    id: '2',
    initials: 'AM',
    name: 'Ana M.',
    location: 'Cascais',
    tag: 'Aluna do Plano Mestria',
    quote: '“O meu telemóvel não para de apitar com notificações de 85€ via MB Way. Sinto-me valorizada pelo meu talento e finalmente tenho o meu próprio dinheiro para os meus mimos.”',
    proofType: 'MB Way',
    proofText: 'Comprovativo MB Way Recebido',
    timeAgo: 'Ontem',
  },
  {
    id: '3',
    initials: 'CR',
    name: 'Carla R.',
    location: 'Viseu',
    tag: 'Aluna do Plano Mestria',
    quote: '“Sempre tive medo de fazer conservas por causa do bolor e do risco de botulismo. Com o protocolo de acidez e vácuo da Dona Maria, os frascos ficam perfeitos e duram meses sem alteração.”',
    proofType: 'Qualidade',
    proofText: 'Garantia de Vácuo Científico',
    timeAgo: 'Há 5 dias',
  },
  {
    id: '4',
    initials: 'SM',
    name: 'Sofia M.',
    location: 'Sintra',
    tag: 'Aluna Verificada',
    quote: '“A apresentação gourmet com a fita de cetim e os rótulos finos faz toda a diferença. Vendi 12 frascos no primeiro fim de semana para vizinhas e amigas da freguesia!”',
    proofType: 'Estética',
    proofText: 'Guia de Apresentação de Luxo',
    timeAgo: 'Há 1 semana',
  },
  {
    id: '5',
    initials: 'FB',
    name: 'Fernanda B.',
    location: 'Vila Real',
    tag: 'Aluna Verificada',
    quote: '“Os pimentos assados em azeite do Douro são divinais. A família devorou o primeiro frasco e agora todos pedem para prendas de aniversário e momentos especiais.”',
    proofType: 'Receitas',
    proofText: '+100 Fórmulas Tradicionais',
    timeAgo: 'Há 4 dias',
  },
  {
    id: '6',
    initials: 'TC',
    name: 'Teresa C.',
    location: 'Setúbal',
    tag: 'Aluna do Plano Mestria',
    quote: '“O manual é extremamente claro, até para quem nunca esteve numa cozinha de elite. Os guias passo a passo dão-nos toda a confiança para fazer conservas dignas das quintas.”',
    proofType: 'Qualidade',
    proofText: 'Manual Digital Mestre',
    timeAgo: 'Há 2 dias',
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToOffer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="depoimentos" className="py-10 sm:py-16 lg:py-20 bg-[#F9F8F5] border-t border-amber-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] tracking-tight leading-snug">
            Vozes reais de alunas e criadoras que{' '}
            <span className="text-[#28A745]">já transformaram a sua rotina</span>
          </h2>
        </div>

        {/* Testimonials Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Viewport */}
          <div className="overflow-hidden py-2 sm:py-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-1 sm:px-3">
                  <div className="bg-white rounded-2xl p-4 sm:p-7 border border-[#E0DBD0] shadow-sm relative hover:shadow-md transition-all duration-300 max-w-xl mx-auto">
                    
                    {/* Top Header */}
                    <div className="flex items-center justify-between border-b border-[#F0ECE1] pb-3 mb-3 sm:pb-4 sm:mb-4">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1C1D1F] text-[#C5A059] flex items-center justify-center font-serif-luxury font-bold text-sm sm:text-base border border-[#C5A059]/30 shrink-0">
                          {item.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#1C1D1F] text-xs sm:text-sm">{item.name}</span>
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#28a745]" />
                          </div>
                          <span className="text-[10px] sm:text-xs text-[#57585C] block">{item.location} • {item.tag}</span>
                        </div>
                      </div>
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Native Quote */}
                    <blockquote className="text-xs sm:text-sm text-[#1C1D1F] font-medium leading-relaxed mb-4 sm:mb-5 italic bg-[#F9F8F5] p-3.5 sm:p-4 rounded-xl border border-[#EBE7DD]">
                      {item.quote}
                    </blockquote>

                    {/* Verification Footer Badge */}
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#57585C] pt-2 border-t border-[#F0ECE1]">
                      <span className="flex items-center gap-1 text-[#28a745] font-medium">
                        {item.proofType === 'MB Way' ? (
                          <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        ) : (
                          <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        )}
                        {item.proofText}
                      </span>
                      <span>{item.location.split('•')[0]} • {item.timeAgo}</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={handlePrev}
            aria-label="Depoimento Anterior"
            className="absolute -left-1 sm:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white text-[#1C1D1F] border border-[#E0DBD0] shadow-md flex items-center justify-center hover:bg-[#1C1D1F] hover:text-white transition-colors z-10 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Depoimento Seguinte"
            className="absolute -right-1 sm:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white text-[#1C1D1F] border border-[#E0DBD0] shadow-md flex items-center justify-center hover:bg-[#1C1D1F] hover:text-white transition-colors z-10 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Carousel Pagination Dot Indicators */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-6 sm:w-8 bg-[#1C1D1F]' : 'w-2 sm:w-2.5 bg-[#C5A059]/40 hover:bg-[#C5A059]'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Section End CTA */}
        <div className="text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-0 sm:min-w-[300px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-sm sm:text-base tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg shadow-[#28A745]/20 hover:shadow-xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Quero ser a referência da minha freguesia</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
