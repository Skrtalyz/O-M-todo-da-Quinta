import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ZoomIn, X, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [hasUserUnmuted, setHasUserUnmuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileControls, setShowMobileControls] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mobileTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Iniciar automaticamente o vídeo sem áudio
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (mobileTimerRef.current) {
        clearTimeout(mobileTimerRef.current);
      }
    };
  }, []);

  // Mostra os controlos no telemóvel temporariamente e esconde após 'duration' ms
  const showControlsTemporarily = (duration = 3500) => {
    setShowMobileControls(true);
    if (mobileTimerRef.current) {
      clearTimeout(mobileTimerRef.current);
    }
    mobileTimerRef.current = setTimeout(() => {
      setShowMobileControls(false);
    }, duration);
  };

  // Quando o utilizador clica para ouvir com som: desmuta, volta ao início e toca com áudio
  const handleUnmuteAndRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setHasUserUnmuted(true);
    setIsPlaying(true);
    setIsEnded(false);
    // No telemóvel, esconde os controlos para que o vídeo rode limpo
    setShowMobileControls(false);
    if (mobileTimerRef.current) {
      clearTimeout(mobileTimerRef.current);
    }
  };

  // Alternar play / pause após o áudio ter sido ativado
  const handleTogglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (!hasUserUnmuted) {
      handleUnmuteAndRestart();
      return;
    }

    if (isEnded) {
      handleRestart();
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      showControlsTemporarily(2500);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowMobileControls(true); // Fica visível com botão de play se pausado
      if (mobileTimerRef.current) {
        clearTimeout(mobileTimerRef.current);
      }
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsEnded(false);
    setIsPlaying(true);
    setShowMobileControls(false);
    if (mobileTimerRef.current) {
      clearTimeout(mobileTimerRef.current);
    }
  };

  // Clique geral na tela do player
  const handleScreenClick = () => {
    // Se o áudio ainda não foi ativado, qualquer clique ativa o áudio e reinicia imediatamente do começo
    if (!hasUserUnmuted) {
      handleUnmuteAndRestart();
      return;
    }

    if (isEnded) {
      handleRestart();
      return;
    }

    // Após ativar o áudio: se no telemóvel o botão de play/pause estiver oculto, o toque faz ele aparecer
    if (!showMobileControls) {
      showControlsTemporarily(3500);
      return;
    }

    // Se já está visível: alterna reprodução
    handleTogglePlay();
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

        {/* Video Player com Autoplay Mudo, Ocultação Inteligente no Telemóvel e Ativação ao Clicar */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div
            onClick={handleScreenClick}
            onMouseEnter={() => {
              setIsHovered(true);
              setShowMobileControls(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              if (isPlaying) {
                setShowMobileControls(false);
              }
            }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#E0DBD0] bg-black group max-w-full cursor-pointer select-none"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="metadata"
              onPlay={() => {
                setIsPlaying(true);
                setIsEnded(false);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setIsEnded(true);
                setShowMobileControls(true);
              }}
              className="block max-w-full max-h-[75vh] w-auto h-auto object-contain pointer-events-none sm:pointer-events-auto"
              src={VIDEO_URL}
            >
              O teu navegador não suporta a reprodução deste vídeo.
            </video>

            {/* Aviso no meio do vídeo: Clique para escutar com áudio (permanece SEMPRE visível no telemóvel e desktop até ser clicado) */}
            {!hasUserUnmuted && !isEnded && (
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 transition-all duration-300 z-10 opacity-100 pointer-events-auto"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUnmuteAndRestart();
                  }}
                  className="bg-[#28A745] hover:bg-[#1f8035] text-white px-5 py-4 sm:px-7 sm:py-5 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-3 sm:gap-4 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-emerald-300/40 text-center max-w-sm sm:max-w-md animate-pulse cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Volume2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-emerald-100">
                      O seu vídeo já começou
                    </p>
                    <p className="text-sm sm:text-base font-black text-white leading-tight">
                      Clique para ouvir com áudio
                    </p>
                  </div>
                </button>
              </div>
            )}

            {/* Estado 1: Quando o vídeo acaba -> Opção "Ver novamente" */}
            {isEnded ? (
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-xs flex flex-col items-center justify-center p-4 transition-opacity duration-300 z-10"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRestart();
                  }}
                  className="bg-[#28A745] hover:bg-[#1f8035] text-white font-bold text-sm sm:text-base py-3.5 px-7 sm:px-8 rounded-full shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/30"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Ver novamente</span>
                </button>
              </div>
            ) : hasUserUnmuted && !isPlaying ? (
              /* Estado 2: Quando pausado pelo utilizador -> Botão Play */
              <div
                className={`absolute inset-0 bg-black/30 hover:bg-black/40 flex items-center justify-center transition-opacity duration-300 z-10 ${
                  showMobileControls
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto'
                }`}
              >
                <button
                  onClick={handleTogglePlay}
                  aria-label="Dar Play"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#28A745] hover:bg-[#1f8035] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer pl-1"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                </button>
              </div>
            ) : (
              /* Estado 3: A reproduzir com áudio -> Overlay sutil com botão de Pause que aparece ao tocar na tela */
              hasUserUnmuted && (
                <div
                  className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-200 z-10 ${
                    showMobileControls
                      ? 'opacity-100 pointer-events-auto'
                      : 'opacity-0 pointer-events-none'
                  } ${
                    isHovered ? 'sm:opacity-100 sm:pointer-events-auto' : 'sm:opacity-0 sm:pointer-events-none'
                  }`}
                >
                  <button
                    onClick={handleTogglePlay}
                    aria-label="Pausar"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
                  </button>
                </div>
              )
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
