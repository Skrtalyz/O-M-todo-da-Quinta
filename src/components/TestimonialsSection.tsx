import React, { useState, useRef } from 'react';
import { ArrowRight, ZoomIn, X, Play, Pause, RotateCcw } from 'lucide-react';

interface TestimonialsSectionProps {
  onScrollToOffer?: () => void;
}

const VIDEO_URL =
  'https://www.dropbox.com/scl/fi/z3bu2iwfsgqwgn192upcp/depoimento-em-video-1.mp4?rlkey=7gy5mhyngkciecoh6fsyni846&st=ku60cvki&raw=1';

const PROOF_IMAGES = [
  'https://i.imgur.com/AzYBRNx.png',
  'https://i.imgur.com/FXwe4yj.png',
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToOffer }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isEnded) {
      handleRestart();
      return;
    }
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsEnded(false);
    setIsPlaying(true);
  };

  return (
    <section id="depoimentos" className="py-10 sm:py-16 lg:py-20 bg-[#F9F8F5] border-t border-amber-900/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#2D2D2D] tracking-tight leading-snug">
            Vozes reais de alunas e criadoras que{' '}
            <span className="text-[#28A745]">já transformaram a sua rotina</span>
          </h2>
        </div>

        {/* Video Player Customizado (Resolução Original, Apenas Play, Pause e Ver Novamente) */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#E0DBD0] bg-black group max-w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              onClick={handleTogglePlay}
              onPlay={() => {
                setIsPlaying(true);
                setIsEnded(false);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setIsEnded(true);
              }}
              className="block max-w-full max-h-[75vh] w-auto h-auto object-contain cursor-pointer"
              src={VIDEO_URL}
            >
              O teu navegador não suporta a reprodução deste vídeo.
            </video>

            {/* Estado 1: Quando o vídeo acaba -> Opção "Ver novamente" */}
            {isEnded ? (
              <div
                onClick={handleRestart}
                className="absolute inset-0 bg-black/70 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer p-4 transition-opacity duration-300"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRestart();
                  }}
                  className="bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-sm sm:text-base py-3 px-6 sm:px-8 rounded-full shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Ver novamente</span>
                </button>
              </div>
            ) : !isPlaying ? (
              /* Estado 2: Quando pausado / antes de iniciar -> Botão Play */
              <div
                onClick={handleTogglePlay}
                className="absolute inset-0 bg-black/30 hover:bg-black/40 flex items-center justify-center cursor-pointer transition-colors"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePlay();
                  }}
                  aria-label="Dar Play"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#28A745] hover:bg-[#1f8035] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer pl-1"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                </button>
              </div>
            ) : (
              /* Estado 3: A reproduzir -> Overlay com botão de Pause no hover / toque */
              <div
                onClick={handleTogglePlay}
                className={`absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* As Duas Imagens (apenas as imagens sem textos ou legendas) */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {PROOF_IMAGES.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(imgUrl)}
                className="bg-white rounded-2xl p-2.5 sm:p-3.5 border border-[#E0DBD0] shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 relative flex items-center justify-center">
                  <img
                    src={imgUrl}
                    alt="Comprovativo de aluna"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-80 object-contain bg-white group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md inline-flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox para Visualização em Ecrã Inteiro */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-2xl p-2 sm:p-4 shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Fechar"
                className="absolute -top-3 -right-3 sm:top-3 sm:right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1C1D1F] text-white flex items-center justify-center hover:bg-slate-800 shadow-md cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="rounded-xl overflow-hidden max-h-[80vh] flex items-center justify-center bg-slate-900">
                <img
                  src={selectedImage}
                  alt="Comprovativo ampliado"
                  referrerPolicy="no-referrer"
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

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
