import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal wrapper. Uses a rect check on scroll/resize rather than an
 * IntersectionObserver so a missed frame can never leave content invisible:
 * anything at or above 95% of the viewport height is shown and stays shown.
 */
export default function Reveal({ delay = 0, className = '', as: Tag = 'div', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return undefined;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) setShown(true);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    const t = setInterval(check, 400); // catches layout shifts from late-loading images
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      clearInterval(t);
    };
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
