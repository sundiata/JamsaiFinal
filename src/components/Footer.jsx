import { Link } from 'react-router-dom';
import { contact } from '../data/site.js';

const col = (title, items) => (
  <div className="flex flex-col gap-2.5 text-sm">
    <strong className="text-[11.5px] uppercase tracking-widest text-cream">{title}</strong>
    {items.map(([to, label]) => (
      <Link key={label} to={to} className="text-muted hover:text-accent">{label}</Link>
    ))}
  </div>
);

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep px-5 pb-24 pt-12 md:px-10 md:pb-8 md:pt-16">
      <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
        <div className="flex flex-col gap-3.5">
          <span className="font-display text-xl font-extrabold uppercase tracking-tight text-cream">JamSai Foundation</span>
          <p className="text-sm leading-relaxed text-muted">
            {contact.location}<br />{contact.phone}<br />{contact.email}
          </p>
        </div>
        {col('Our work', [['/programs', 'Programs'], ['/events', 'Events'], ['/news', 'News'], ['/gallery', 'Gallery']])}
        {col('Take part', [['/donate', 'Donate'], ['/volunteer', 'Volunteer'], ['/contact', 'Partner with us'], ['/contact', 'Contact']])}
        <div className="flex flex-col gap-3">
          <strong className="text-[11.5px] uppercase tracking-widest text-cream">Newsletter</strong>
          <p className="text-sm leading-relaxed text-muted">Updates from the field, a few times a year.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address"
                   className="min-w-0 flex-1 rounded-lg border border-line bg-surface px-3.5 py-3 text-sm text-cream" />
            <button className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-surface">Join</button>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 pt-6 text-[13px] text-muted">
        <span>© JamSai Family Foundation. All rights reserved.</span>
        <span>Registered in The Gambia</span>
        <span>Design by Sundiata Keita</span>
      </div>
    </footer>
  );
}
