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
    <section id="depoimentos" className="py-16 sm:py-20 bg-[#F9F8F5] border-t border-amber-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C25E00]/10 border border-[#C25E00]/20 text-xs font-bold uppercase tracking-wider text-[#C25E00] mb-4">
            <Award className="w-3.5 h-3.5 text-[#C25E00]" />
            <span>Resultados e Histórias de Sucesso</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D] tracking-tight">
            Vozes reais de alunas e criadoras que já transformaram a sua rotina
          </h2>
          <p className="text-sm sm:text-base text-[#575757] font-medium mt-3">
            Mensagens autênticas enviadas diretamente pelas alunas do Método da Quinta em Portugal.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Viewport */}
          <div className="overflow-hidden py-4 px-1">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-2 sm:px-4">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E0DBD0] shadow-md relative hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
                    
                    {/* Top Header */}
                    <div className="flex items-center justify-between border-b border-[#F0ECE1] pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-[#1C1D1F] text-[#C5A059] flex items-center justify-center font-serif-luxury font-bold text-lg border border-[#C5A059]/30">
                          {item.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#1C1D1F] text-sm">{item.name}</span>
                            <CheckCircle className="w-4 h-4 text-[#28a745]" />
                          </div>
                          <span className="text-xs text-[#57585C]">{item.location} • {item.tag}</span>
                        </div>
                      </div>
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Native Quote */}
                    <blockquote className="text-base text-[#1C1D1F] font-medium leading-relaxed mb-6 italic bg-[#F9F8F5] p-5 rounded-xl border border-[#EBE7DD]">
                      {item.quote}
                    </blockquote>

                    {/* Verification Footer Badge */}
                    <div className="flex items-center justify-between text-xs text-[#57585C] pt-2 border-t border-[#F0ECE1]">
                      <span className="flex items-center gap-1.5 text-[#28a745] font-medium">
                        {item.proofType === 'MB Way' ? (
                          <Smartphone className="w-3.5 h-3.5" />
                        ) : (
                          <CheckCircle className="w-3.5 h-3.5" />
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
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1C1D1F] border border-[#E0DBD0] shadow-md flex items-center justify-center hover:bg-[#1C1D1F] hover:text-white transition-colors z-10 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Depoimento Seguinte"
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1C1D1F] border border-[#E0DBD0] shadow-md flex items-center justify-center hover:bg-[#1C1D1F] hover:text-white transition-colors z-10 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Pagination Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#1C1D1F]' : 'w-2.5 bg-[#C5A059]/40 hover:bg-[#C5A059]'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Social Proof Stats Bar */}
        <div className="bg-white rounded-2xl p-6 border border-[#E2DDD2] shadow-sm max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="block text-2xl font-serif-luxury font-bold text-[#1C1D1F]">4.9 / 5.0</span>
            <span className="text-xs text-[#57585C]">Avaliação das Alunas</span>
          </div>
          <div className="w-px h-8 bg-[#E6E2D8] hidden sm:block"></div>
          <div>
            <span className="block text-2xl font-serif-luxury font-bold text-[#28a745]">100% MB Way</span>
            <span className="text-xs text-[#57585C]">Notificação Direta</span>
          </div>
          <div className="w-px h-8 bg-[#E6E2D8] hidden sm:block"></div>
          <div>
            <span className="block text-2xl font-serif-luxury font-bold text-[#C5A059]">0% Bolor</span>
            <span className="text-xs text-[#57585C]">Protocolo Científico</span>
          </div>
        </div>

        {/* Section End CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-[320px] bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-base sm:text-lg tracking-wide py-4 sm:py-5 px-8 sm:px-10 rounded-2xl shadow-xl shadow-[#28A745]/20 hover:shadow-2xl hover:shadow-[#28A745]/30 transition-all duration-200 inline-flex items-center justify-center gap-3 cursor-pointer border border-emerald-500/30 active:scale-95"
          >
            <span>Quero ser a referência da minha freguesia</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
