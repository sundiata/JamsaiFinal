import { useEffect, useRef, useState } from 'react';

export default function Counter({ value, prefix = '', className = '' }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const check = () => {
      const el = ref.current;
      if (!el || started.current) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        started.current = true;
        const t0 = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - t0) / 1400);
          setN(value * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [value]);

  const shown = value >= 10000 ? `${Math.round(n / 1000)}k` : Math.round(n).toLocaleString();

  return <span ref={ref} className={className}>{prefix}{shown}</span>;
}
