"use client";

import { useEffect, useRef } from "react";
import { PERSONAS, type Persona } from "@/data/personas";
import { IgIcon, YtIcon } from "./Icons";

const SEG_POR_PERSONA = 4.5; // velocidad: más número = más lento

const iniciales = (n: string) => {
  const w = n
    .replace(/^Dra?\.\s*/, "")
    .split(/\s+/)
    .filter((x) => /^[A-ZÁÉÍÓÚÑ]/.test(x));
  return (w.length > 1 ? w[0][0] + w[w.length - 1][0] : w[0].slice(0, 1)).toUpperCase();
};

function Card({ p, dup }: { p: Persona; dup: boolean }) {
  return (
    <article className="card" aria-hidden={dup || undefined}>
      <div className="media has-img">
        <div className="initials">{iniciales(p.n)}</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.foto}
          alt={dup ? "" : p.n}
          loading="eager"
          decoding="sync"
          onError={(e) => {
            const img = e.currentTarget;
            img.parentElement?.classList.remove("has-img");
            img.remove();
          }}
        />
      </div>
      <h3>{p.n}</h3>
      <p>{p.r}</p>
      <div className="socials">
        {p.ig && (
          <a className="soc" href={p.ig} target="_blank" rel="noopener" aria-label="Instagram" tabIndex={dup ? -1 : undefined}>
            <IgIcon />
          </a>
        )}
        {p.yt && (
          <a className="soc" href={p.yt} target="_blank" rel="noopener" aria-label="YouTube" tabIndex={dup ? -1 : undefined}>
            <YtIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Carrusel() {
  const zonaRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<(dir: number) => void>(() => {});

  useEffect(() => {
    const track = trackRef.current!;
    const zona = zonaRef.current!;
    const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pos = 0;
    let pausa = false;
    let anim: { desde: number; hasta: number; t0: number; dur: number } | null = null;
    let last = performance.now();
    let raf = 0;

    const mitad = () => track.scrollWidth / 2 + 8;
    const paso = () => {
      const c = track.querySelector<HTMLElement>(".card");
      return c ? c.offsetWidth + 16 : 276;
    };

    moverRef.current = (dir) => {
      anim = { desde: pos, hasta: pos + dir * paso(), t0: performance.now(), dur: 450 };
    };

    const enter = () => (pausa = true);
    const leave = () => (pausa = false);
    zona.addEventListener("mouseenter", enter);
    zona.addEventListener("mouseleave", leave);

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const m = mitad();
      if (anim) {
        const k = Math.min(1, (now - anim.t0) / anim.dur);
        const e = 1 - Math.pow(1 - k, 3);
        pos = anim.desde + (anim.hasta - anim.desde) * e;
        if (k >= 1) anim = null;
      } else if (!pausa && !quieto) {
        pos += (m / (PERSONAS.length * SEG_POR_PERSONA)) * dt;
      }
      const p = ((pos % m) + m) % m;
      if (anim) {
        anim.desde += p - pos;
        anim.hasta += p - pos;
      }
      pos = p;
      track.style.transform = `translateX(${-pos}px)`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      zona.removeEventListener("mouseenter", enter);
      zona.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="carrusel" ref={zonaRef}>
      <button className="flecha izq" type="button" aria-label="Anterior" onClick={() => moverRef.current(-1)}>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 3L5 8l5 5" />
        </svg>
      </button>
      <div className="marquee">
        <div className="track" ref={trackRef}>
          {PERSONAS.map((p) => (
            <Card key={p.n} p={p} dup={false} />
          ))}
          {PERSONAS.map((p) => (
            <Card key={`${p.n}-dup`} p={p} dup />
          ))}
        </div>
      </div>
      <button className="flecha der" type="button" aria-label="Siguiente" onClick={() => moverRef.current(1)}>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3l5 5-5 5" />
        </svg>
      </button>
    </div>
  );
}
