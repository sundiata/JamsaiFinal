import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const links = [
  ['/about', 'About'],
  ['/programs', 'Programs'],
  ['/events', 'Events'],
  ['/news', 'News'],
  ['/gallery', 'Gallery'],
  ['/volunteer', 'Volunteer'],
  ['/contact', 'Contact']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cls = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${isActive ? 'text-accent' : 'text-soft hover:text-cream'}`;

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${scrolled ? 'border-line bg-deep/95' : 'border-line/50 bg-ink/80'}`}>
      <div className={`flex items-center justify-between px-5 transition-[padding] md:px-10 ${scrolled ? 'py-3' : 'py-4 md:py-[18px]'}`}>
        <Link to="/" className="flex items-center gap-3 text-cream hover:text-cream">
          <img src="/img/jamsailogo.jpeg" alt="JamSai Foundation" className="h-10 w-10 rounded-lg object-cover" />
          <span className="font-display text-lg font-extrabold uppercase tracking-tight">JamSai</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={cls}>{label}</NavLink>)}
          <Link to="/donate"
                className="rounded-md bg-accent px-6 py-2.5 text-sm font-bold text-surface transition-transform hover:-translate-y-px hover:bg-accentHi hover:text-surface">
            Donate
          </Link>
        </nav>

        <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}
                className="flex flex-col items-end gap-1.5 p-2.5 lg:hidden">
          <span className="block h-0.5 w-5 bg-cream" />
          <span className="block h-0.5 w-5 bg-cream" />
          <span className="block h-0.5 w-3.5 bg-cream" />
        </button>
      </div>

      {open && (
        <div className="flex animate-slidedown flex-col border-t border-line bg-deep px-5 pb-6 pt-3.5 lg:hidden">
          {[['/', 'Home'], ...links].map(([to, label]) => (
            <NavLink key={to} to={to} className="border-b border-[#14344C] py-3.5 text-base font-semibold text-soft">
              {label}
            </NavLink>
          ))}
          <Link to="/donate" className="mt-3.5 rounded-lg bg-accent py-4 text-center text-base font-bold text-surface">
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
