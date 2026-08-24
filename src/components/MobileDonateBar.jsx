import { Link, useLocation } from 'react-router-dom';
import { contact } from '../data/site.js';

export default function MobileDonateBar() {
  const { pathname } = useLocation();
  if (pathname === '/donate') return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-line bg-deep/95 px-4 py-3 backdrop-blur-md md:hidden"
         style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}>
      <Link to="/donate" className="flex-1 rounded-lg bg-accent py-4 text-center text-[15.5px] font-bold text-surface">Donate</Link>
      <a href={contact.whatsapp} target="_blank" rel="noreferrer"
         className="rounded-lg border border-[#27506F] px-5 py-4 text-[15.5px] font-semibold text-cream">WhatsApp</a>
    </div>
  );
}
