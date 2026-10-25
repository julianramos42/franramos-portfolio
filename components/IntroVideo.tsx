"use client";

import { useRef, useState } from "react";

// Subí tu video a public/video/presentacion.mp4 (y opcionalmente una portada a public/video/portada.jpg).
// Mientras el archivo no exista, se ve el recuadro "Video de presentación".
export default function IntroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [sinVideo, setSinVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [dur, setDur] = useState("1:00");

  return (
    <div className="player">
      <video
        ref={ref}
        src="/video/presentacion.mp4"
        poster="/video/portada.jpg"
        preload="metadata"
        playsInline
        controls={playing}
        onError={() => setSinVideo(true)}
        onLoadedMetadata={(e) => {
          const s = Math.round(e.currentTarget.duration || 0);
          if (s) setDur(`${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`);
        }}
      />
      {!sinVideo && !playing && (
        <>
          <button
            className="play"
            type="button"
            aria-label="Reproducir video de presentación"
            onClick={() => {
              setPlaying(true);
              ref.current?.play();
            }}
          >
            <span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
              </svg>
              Ver presentación
            </span>
          </button>
          <span className="dur mono">{dur}</span>
        </>
      )}
      {sinVideo && (
        <div className="vacio">
          <b>Video de presentación</b>
          <span>1 minuto · Acá va tu video</span>
        </div>
      )}
    </div>
  );
}
