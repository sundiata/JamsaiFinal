import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Stats from '../components/Stats.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { aboutStats, impactNote, team } from '../data/site.js';

export default function About() {
  return (
    <main>
      <PageHeader
        eyebrow="Who we are"
        title="ABOUT JAMSAI"
        lede="The families of Jammeh and Saidy Kunda came together to leave a lasting positive mark on society, and JamSai Foundation is what that became."
        img="/img/agieHubandGroup.jpeg"
      />

      <section className="grid items-center gap-8 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">GIVING WITH PURPOSE</h2>
          <p className="text-[17px] leading-relaxed text-soft">
            JamSai Foundation is committed to supporting people in need, individuals, families and communities, through
            gifts in kind and in cash. We give with purpose, reaching hearts and homes across rural Gambia.
            Together we restore dignity, uplift lives, and share hope.
          </p>
          <div className="flex flex-col gap-4 pt-2">
            <div className="rounded-r-xl border-l-[3px] border-accent bg-surface p-6">
              <strong className="mb-2 block text-[11.5px] uppercase tracking-widest text-accent">Our mission</strong>
              <span className="text-base leading-relaxed">Supporting women and children to access essential opportunities and resources.</span>
            </div>
            <div className="rounded-r-xl border-l-[3px] border-accent bg-surface p-6">
              <strong className="mb-2 block text-[11.5px] uppercase tracking-widest text-accent">Our vision</strong>
              <span className="text-base leading-relaxed">
                A community where women and children are empowered with meaningful opportunities to live a dignified
                life and create a better future.
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <img src="/img/MoneyFamily.jpeg" alt="A family receiving support"
               className="h-[300px] w-full rounded-xl object-cover md:h-[520px]" />
        </Reveal>
      </section>

      <Stats items={aboutStats} note={impactNote} />

      <section className="flex flex-col gap-8 px-5 py-14 md:px-10 md:py-20">
        <Reveal as="h2" className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">
          THE PEOPLE BEHIND IT
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-[22px] xl:grid-cols-4">
          {team.map((m, i) => <TeamCard key={m.name} member={m} delay={i * 80} long />)}
        </div>
      </section>
    </main>
  );
}
