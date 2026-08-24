import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { contact } from '../data/site.js';

const tile = 'flex flex-col gap-2 rounded-xl border border-line bg-surface p-[22px]';
const label = 'text-[11.5px] font-bold uppercase tracking-widest text-accent';
const hint = 'text-[12.5px] leading-snug text-[#6B8296]';
const field = 'w-full rounded-lg border border-[#27506F] bg-ink px-4 py-3.5 text-[15px] text-cream';
const fieldLabel = 'text-[11.5px] font-bold uppercase tracking-widest text-muted';
const formCard = 'flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-6 md:p-8';
const ghostBtn = 'rounded-lg bg-accent/15 py-3.5 text-[15px] font-bold text-accent transition-colors hover:bg-accent hover:text-surface';

export default function Contact() {
  return (
    <main>
      <PageHeader
        eyebrow="Say hello"
        title="CONTACT"
        lede="Questions, partnerships, press or collections: we answer everything."
        img="/img/MoneyFamily.jpeg"
      />

      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
          <Reveal className={tile}>
            <strong className={label}>Head office</strong>
            <span className="text-[15.5px] leading-relaxed">{contact.location}</span>
            <span className={hint}>Sorting hub in Greater Banjul; visits by arrangement.</span>
          </Reveal>
          <Reveal delay={80} className={tile}>
            <strong className={label}>Phone</strong>
            <span className="text-[15.5px] leading-relaxed">+220 7438242<br />+220 3799053</span>
            <span className={hint}>UK: {contact.phoneUk}</span>
          </Reveal>
          <Reveal delay={160} className={tile}>
            <strong className={label}>Email</strong>
            <span className="break-words text-[15.5px] leading-relaxed">{contact.email}</span>
            <span className={hint}>We reply within a few days.</span>
          </Reveal>
          <Reveal delay={240} className={tile}>
            <strong className={label}>Social</strong>
            <div className="flex flex-col gap-1.5 text-[15px] font-semibold">
              <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-night px-5 py-14 md:px-10 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 md:gap-10">
          <h2 className="font-display text-3xl font-extrabold tracking-tighter md:text-[44px]">WHAT'S YOUR ENQUIRY?</h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Three forms so your message reaches the right person first time.
          </p>
        </Reveal>

        <div className="grid items-start gap-4 md:gap-6 lg:grid-cols-2">
          <Reveal as="form" onSubmit={(e) => e.preventDefault()} className={formCard}>
            <h3 className="font-display text-[21px] font-extrabold tracking-tight">GENERAL ENQUIRY</h3>
            <p className="text-[14.5px] leading-relaxed text-body">Questions about our work, donations or how we're run.</p>
            <div className="grid gap-3.5 md:grid-cols-2">
              <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Name</span><input placeholder="Your name" className={field} /></label>
              <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Email</span><input type="email" placeholder="you@example.com" className={field} /></label>
            </div>
            <div className="grid gap-3.5 md:grid-cols-2">
              <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Phone</span><input placeholder="Optional" className={field} /></label>
              <label className="flex flex-col gap-1.5">
                <span className={fieldLabel}>Topic</span>
                <select className={field}>
                  <option>General question</option><option>About a donation</option>
                  <option>Programs &amp; impact</option><option>Press &amp; media</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className={fieldLabel}>Message</span>
              <textarea rows="5" placeholder="How can we help?" className={field} />
            </label>
            <button className="rounded-lg bg-accent py-4 text-base font-bold text-surface transition-transform hover:-translate-y-px hover:bg-accentHi">
              Send message
            </button>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            <form onSubmit={(e) => e.preventDefault()} className={formCard}>
              <h3 className="font-display text-[21px] font-extrabold tracking-tight">DONATE GOODS</h3>
              <p className="text-[14.5px] leading-relaxed text-body">Clothing, school supplies or food to collect.</p>
              <div className="grid gap-3.5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Name</span><input placeholder="Your name" className={field} /></label>
                <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Phone / WhatsApp</span><input placeholder="+220 …" className={field} /></label>
              </div>
              <div className="grid gap-3.5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className={fieldLabel}>What you have</span>
                  <select className={field}>
                    <option>Clothing</option><option>School supplies</option>
                    <option>Food</option><option>Something else</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Collection area</span><input placeholder="Where from?" className={field} /></label>
              </div>
              <button className={ghostBtn}>Arrange a collection</button>
            </form>

            <form onSubmit={(e) => e.preventDefault()} className={formCard}>
              <h3 className="font-display text-[21px] font-extrabold tracking-tight">PARTNER WITH US</h3>
              <p className="text-[14.5px] leading-relaxed text-body">Companies, schools, mosques and diaspora groups.</p>
              <div className="grid gap-3.5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Organisation</span><input placeholder="Organisation name" className={field} /></label>
                <label className="flex flex-col gap-1.5"><span className={fieldLabel}>Contact email</span><input type="email" placeholder="you@organisation.gm" className={field} /></label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className={fieldLabel}>What you have in mind</span>
                <textarea rows="3" placeholder="Sponsorship, a workplace drive, in-kind support…" className={field} />
              </label>
              <button className={ghostBtn}>Start a conversation</button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
