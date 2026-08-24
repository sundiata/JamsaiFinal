import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { gallery } from '../data/site.js';

export default function Gallery() {
  return (
    <main>
      <PageHeader
        eyebrow="In pictures"
        title="GALLERY"
        lede="Distribution days, community visits and the people who make it happen."
        img="/img/happykids.jpeg"
      />
      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="grid auto-rows-[240px] gap-3 md:auto-rows-[260px] md:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 60} className={g.tall ? 'md:row-span-2' : ''}>
              <img src={g.src} alt={g.alt} className="h-full w-full rounded-xl object-cover" />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
