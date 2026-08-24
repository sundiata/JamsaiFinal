import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { volunteerRoles, volunteerSteps, volunteerFaqs, contact } from '../data/site.js';

const field = 'w-full rounded-lg border border-[#27506F] bg-ink px-4 py-3.5 text-[15px] text-cream';
const fieldLabel = 'text-[11.5px] font-bold uppercase tracking-widest text-muted';
const stepCard = 'flex flex-col gap-2.5 rounded-xl border border-line bg-surface p-6';

export default function Volunteer() {
  return (
    <main>
      <PageHeader
        eyebrow="Get involved"
        title="VOLUNTEER"
        lede="Thirty-four members already give their time. Sorting, packing, delivering, teaching, there is room for what you're good at."
        img="/img/GroupFour.jpeg"
      />

      <section className="flex flex-col gap-8 px-5 py-14 md:px-10 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 md:gap-10">
          <h2 className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">WHERE WE NEED HANDS</h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            No minimum commitment. Some people give one Saturday a year, some give every week.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {volunteerRoles.map((r, i) => (
            <Reveal key={r.title} delay={i * 80} className={stepCard}>
              <span className="font-display text-3xl font-extrabold leading-none text-accent">{r.num}</span>
              <strong className="text-[16.5px] font-bold">{r.title}</strong>
              <span className="text-[14.5px] leading-relaxed text-body">{r.body}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-night px-5 py-14 md:px-10 md:py-20">
        <Reveal as="h2" className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">HOW JOINING WORKS</Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {volunteerSteps.map((s, i) => (
            <Reveal key={s.num} delay={i * 90} className={stepCard}>
              <span className="font-display text-3xl font-extrabold leading-none text-accent">{s.num}</span>
              <strong className="text-[16.5px] font-bold">{s.title}</strong>
              <span className="text-[14.5px] leading-relaxed text-body">{s.body}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid items-start gap-8 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex flex-col gap-6">
          <img src="/img/GroupFour.jpeg" alt="Volunteers at a distribution day"
               className="h-[280px] w-full rounded-xl object-cover" />
          <h2 className="font-display text-[28px] font-extrabold tracking-tighter">GOOD TO KNOW</h2>
          <div className="flex flex-col">
            {volunteerFaqs.map((f) => (
              <div key={f.q} className="flex flex-col gap-1.5 border-b border-line py-5">
                <strong className="text-[15.5px] font-bold">{f.q}</strong>
                <span className="text-[14.5px] leading-relaxed text-body">{f.a}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} as="form" onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-6 md:p-8">
          <h3 className="font-display text-[22px] font-extrabold tracking-tight">SIGN UP TO VOLUNTEER</h3>
          <p className="text-[14.5px] leading-relaxed text-body">We'll get back to you within a few days.</p>

          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="flex flex-col gap-1.5"><span className={fieldLabel}>First name</span><input placeholder="Fatou" className={field} /></label>
            <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Last name</span><input placeholder="Jallow" className={field} /></label>
          </div>
          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Email</span><input type="email" placeholder="you@example.com" className={field} /></label>
            <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Phone / WhatsApp</span><input placeholder="+220 …" className={field} /></label>
          </div>
          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Where you are</span><input placeholder="Serrekunda, or London" className={field} /></label>
            <label className="flex flex-col gap-1.5">
              <span className={fieldLabel}>Availability</span>
              <select className={field}>
                <option>Weekends</option><option>Weekdays</option>
                <option>Occasional / one-off days</option><option>Remote only</option>
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className={fieldLabel}>Where you'd like to help</span>
            <select className={field}>
              {volunteerRoles.map((r) => <option key={r.title}>{r.title}</option>)}
              <option>Wherever I'm needed</option>
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={fieldLabel}>Anything else?</span>
            <textarea rows="4" placeholder="Skills, questions, or what drew you to JamSai." className={field} />
          </label>

          <button className="rounded-lg bg-accent py-4 text-base font-bold text-surface transition-transform hover:-translate-y-px hover:bg-accentHi">
            Become a volunteer
          </button>
          <span className="text-[12.5px] leading-snug text-[#6B8296]">
            Prefer to talk first? Message us on <a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>.
          </span>
        </Reveal>
      </section>
    </main>
  );
}
