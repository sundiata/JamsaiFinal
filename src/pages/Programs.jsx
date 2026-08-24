import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import CampaignCard from '../components/CampaignCard.jsx';
import { programs, futurePrograms } from '../data/site.js';

export default function Programs() {
  return (
    <main>
      <PageHeader
        eyebrow="What we do"
        title="PROGRAMS & IMPACT"
        lede="Three campaigns running today, three more we're building towards. Every one is funded gift by gift."
        img="/img/cloths.jpeg"
      />

      <section className="flex flex-col gap-8 px-5 py-14 md:px-10 md:py-20">
        <Reveal as="h2" className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">RUNNING TODAY</Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-[22px] xl:grid-cols-3">
          {programs.map((p, i) => <CampaignCard key={p.slug} program={p} delay={i * 90} long />)}
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-night px-5 py-14 md:px-10 md:py-20">
        <Reveal as="h2" className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">
          WHAT WE'RE BUILDING NEXT
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {futurePrograms.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} as="article" className="overflow-hidden rounded-xl border border-line bg-surface">
              <img src={c.img} alt={c.alt} className="h-[200px] w-full object-cover" />
              <div className="flex flex-col gap-2.5 p-6">
                <h3 className="font-display text-xl font-bold tracking-tight">{c.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-body">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
