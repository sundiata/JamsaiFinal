import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { contact, newsPosts } from '../data/site.js';

export default function News() {
  return (
    <main>
      <PageHeader
        eyebrow="Updates"
        title="NEWS & STORIES"
        lede="Field notes from our campaigns, and coverage of the foundation in the Gambian press."
        img="/img/groupTwo.jpeg"
      />
      <section className="flex flex-col gap-8 px-5 py-14 md:px-10 md:py-20">
        <Reveal as="article" className="grid gap-5 rounded-2xl border border-line bg-surface p-4 md:p-6 lg:grid-cols-2 lg:gap-11">
          <img src="/img/agieHubandGroup.jpeg" alt="Foundation members with the community"
               className="h-[240px] w-full rounded-xl object-cover md:h-[320px]" />
          <div className="flex flex-col justify-center gap-3.5">
            <span className="text-[11.5px] font-bold uppercase tracking-widest text-accent">Press · Voice Gambia</span>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tighter">
              JamSai Foundation in the national press
            </h2>
            <p className="max-w-lg text-[15.5px] leading-relaxed text-body">
              Coverage of our distribution work and community campaigns, collected on Voice Gambia.
            </p>
            <a href={contact.press} target="_blank" rel="noreferrer" className="self-start border-b border-accent pb-1 text-[14.5px] font-bold">
              Read the coverage →
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {newsPosts.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} as="article" className="overflow-hidden rounded-xl border border-line bg-surface">
              <img src={p.img} alt={p.title} className="h-[200px] w-full object-cover" />
              <div className="flex flex-col gap-2.5 p-6">
                <span className="text-[11.5px] font-bold uppercase tracking-widest text-accent">{p.tag}</span>
                <h3 className="font-display text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
