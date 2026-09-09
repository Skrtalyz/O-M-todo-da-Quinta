import React, { useEffect, useRef } from 'react';

export const VTurbPlayer: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Injeta o HTML do elemento do player apenas uma vez de forma imperativa
    // para que o React nunca reconcilie ou reescreva o innerHTML do player
    if (containerRef.current && !containerRef.current.querySelector('#vid-6aa0c32a7933d7b9d153d93e')) {
      containerRef.current.innerHTML = `
        <vturb-smartplayer id="vid-6aa0c32a7933d7b9d153d93e" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">
          <div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div>
        </vturb-smartplayer>
      `;
    }

    // Carrega o script oficial do VTurb apenas se ainda não estiver presente no documento
    const scriptId = 'vturb-player-script';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.type = 'text/javascript';
      s.src = 'https://scripts.converteai.net/25646338-ef2d-49f2-9d57-14bcc4cafb0c/players/6aa0c32a7933d7b9d153d93e/v4/player.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Moldura elegante do Player VTurb com cantos arredondados e sombra premium */}
      <div className="w-full max-w-[400px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-amber-900/20 relative">
        {/* Container isolado sem dangerouslySetInnerHTML para que o React nunca resete a VSL */}
        <div ref={containerRef} className="w-full" />
      </div>

      {/* Aviso de som */}
      <div className="flex items-center justify-center gap-2 mt-3.5 text-xs sm:text-sm text-[#575757] font-semibold bg-white/90 py-1.5 px-4 rounded-full border border-slate-200/80 shadow-xs">
        <span className="inline-block animate-pulse text-[#C25E00]">🔊</span>
        <span>Por favor, certifica-te de que o teu som está ligado</span>
      </div>
    </div>
  );
}, () => true); // Sempre retorna true para garantir que o player nunca seja re-renderizado pelo React


