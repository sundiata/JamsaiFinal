import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { events, testimonials } from '../data/site.js';

export default function Events() {
  return (
    <main>
      <PageHeader
        eyebrow="Diary"
        title="EVENTS"
        lede="Distribution days, drives and community gatherings. Come with us, or send what you can."
        img="/img/groupclear.jpeg"
      />
      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 100} as="article" className="relative h-[340px] overflow-hidden rounded-xl md:h-[440px]">
              <img src={e.img} alt={e.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/95 from-[14%] to-transparent to-[70%]" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-7">
                <span className="text-[11.5px] font-bold uppercase tracking-widest text-accent">{e.tag}</span>
                <h3 className="font-display text-[26px] font-bold tracking-tight">{e.title}</h3>
                <p className="text-[15px] leading-relaxed text-soft">{e.body}</p>
                <Link to={e.cta.to} className="mt-1.5 self-start rounded-md bg-accent px-6 py-3 text-[14.5px] font-bold text-surface">
                  {e.cta.label}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-night px-5 py-14 md:px-10 md:py-20">
        <Reveal as="h2" className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">WHAT PEOPLE SAY</Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} as="figure" className="m-0 flex flex-col gap-5 rounded-xl border border-line bg-surface p-7">
              <blockquote className="text-[15.5px] leading-relaxed">{t.quote}</blockquote>
              <figcaption className="text-[13.5px] text-muted">
                <strong className="block font-bold text-accent">{t.name}</strong>{t.role}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
