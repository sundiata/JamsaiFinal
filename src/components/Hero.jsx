import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { heroSlides } from '../data/site.js';

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[560px] overflow-hidden md:h-[660px]">
      {heroSlides.map((s, n) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full animate-kenburns object-cover transition-opacity duration-[1600ms] ${n === i ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition: s.position }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/75 to-deep/30 md:bg-gradient-to-r md:from-deep/95 md:via-deep/75 md:to-deep/15" />

      <div className="absolute inset-0 flex max-w-3xl flex-col justify-end gap-4 px-5 pb-20 md:justify-center md:gap-6 md:px-10 md:pb-0">
        <Reveal as="span" className="self-start rounded-full bg-accent/15 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-widest text-accent">
          Rural Gambia · West Africa
        </Reveal>
        <Reveal as="h1" delay={80} className="font-display text-[44px] font-extrabold leading-[0.98] tracking-tighter md:text-[60px] lg:text-[76px]">
          A SMILE ON EVERY FACE
        </Reveal>
        <Reveal as="p" delay={160} className="max-w-lg text-[16.5px] leading-relaxed text-soft md:text-[19px]">
          Providing grants and donations to less privileged individuals, focusing on rural areas where access to basic needs is limited.
        </Reveal>
        <Reveal delay={240} className="flex flex-wrap gap-3 pt-1.5">
          <Link to="/donate" className="animate-pulsering rounded-md bg-accent px-8 py-4 text-base font-bold text-surface transition-transform hover:-translate-y-0.5 hover:bg-accentHi hover:text-surface">
            Donate now
          </Link>
          <Link to="/programs" className="rounded-md border border-cream/35 px-8 py-4 text-base font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/5 hover:text-cream">
            See our work
          </Link>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2.5">
        {heroSlides.map((s, n) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show photo ${n + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${n === i ? 'w-[26px] bg-accent' : 'w-2 bg-cream/35'}`}
          />
        ))}
      </div>
    </section>
  );
}
