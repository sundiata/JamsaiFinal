import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import Stats from '../components/Stats.jsx';
import CampaignCard from '../components/CampaignCard.jsx';
import TeamCard from '../components/TeamCard.jsx';
import DonateWidget from '../components/DonateWidget.jsx';
import { stats, impactNote, programs, team, events, payment } from '../data/site.js';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats items={stats} note={impactNote} />

      <section className="flex flex-col gap-7 px-5 py-14 md:gap-9 md:px-10 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 md:gap-10">
          <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tighter md:text-[44px]">
            THREE CAMPAIGNS, RUNNING RIGHT NOW
          </h2>
          <p className="max-w-xs text-[15px] leading-relaxed text-muted">
            Each one is funded gift by gift. Choose where your money goes.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-[22px] xl:grid-cols-3">
          {programs.map((p, i) => <CampaignCard key={p.slug} program={p} delay={i * 90} />)}
        </div>
      </section>

      <section className="flex flex-col gap-7 bg-night px-5 py-14 md:gap-9 md:px-10 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">THE PEOPLE BEHIND IT</h2>
          <Link to="/about" className="text-[14.5px] font-bold">More about us →</Link>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-[22px] xl:grid-cols-4">
          {team.map((m, i) => <TeamCard key={m.name} member={m} delay={i * 80} />)}
        </div>
      </section>

      <section className="grid items-center gap-8 bg-cream px-5 py-14 text-surface md:px-10 md:py-20 lg:grid-cols-[1fr_460px] lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <span className="text-[11.5px] font-bold uppercase tracking-widest text-[#1E6C86]">Give in one minute</span>
          <h2 className="font-display text-3xl font-extrabold leading-none tracking-tighter text-surface md:text-[46px]">
            PICK AN AMOUNT. WE'LL DO THE REST.
          </h2>
          <p className="max-w-lg text-[16.5px] leading-relaxed text-[#465C6E]">
            Card, mobile money or bank transfer: every route lands with the same treasurer and the same records.
          </p>
          <div className="grid gap-3.5 pt-2 md:grid-cols-2 md:gap-x-7">
            <div className="text-sm leading-snug text-[#465C6E]">
              <strong className="mb-1 block text-[11.5px] uppercase tracking-widest text-surface">Mobile money</strong>
              Wave {payment.wave} · APS {payment.aps}
            </div>
            <div className="text-sm leading-snug text-[#465C6E]">
              <strong className="mb-1 block text-[11.5px] uppercase tracking-widest text-surface">Bank transfer</strong>
              {payment.bank} · {payment.account}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}><DonateWidget /></Reveal>
      </section>

      <section className="grid items-center gap-8 border-b border-line px-5 py-14 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <img src="/img/groupTwo.jpeg" alt="Community gathering with the foundation"
               className="h-[260px] w-full rounded-xl object-cover md:h-[420px]" />
        </Reveal>
        <Reveal as="figure" delay={120} className="m-0 flex flex-col gap-5">
          <span className="font-display text-5xl leading-[0.6] text-accent">“</span>
          <blockquote className="text-xl font-medium leading-snug tracking-tight md:text-[26px]">
            The school materials provided by JamSai Foundation have significantly improved attendance in our village.
            Children are now eager to come to school with their new supplies.
          </blockquote>
          <figcaption className="text-sm text-muted">
            <strong className="font-bold text-cream">Sheihk Taal</strong> · Alkalo of Tallen Wollof
          </figcaption>
          <Link to="/news" className="self-start border-b border-accent pb-1 text-[14.5px] font-bold">
            More stories from the field →
          </Link>
        </Reveal>
      </section>

      <section className="flex flex-col gap-7 px-5 py-14 md:gap-9 md:px-10 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">UPCOMING</h2>
          <Link to="/events" className="text-[14.5px] font-bold">All events →</Link>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 100} as="article" className="relative h-[260px] overflow-hidden rounded-xl md:h-[300px]">
              <img src={e.img} alt={e.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/95 from-[12%] to-transparent to-[72%]" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                <span className="text-[11.5px] font-bold uppercase tracking-widest text-accent">{e.tag}</span>
                <h3 className="font-display text-2xl font-bold tracking-tight">{e.title}</h3>
                <p className="text-[14.5px] leading-snug text-soft">{e.short}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
