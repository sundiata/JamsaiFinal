import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export default function CampaignCard({ program, delay = 0, long = false }) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[#2E5C80]"
    >
      <div className="relative h-[200px] overflow-hidden md:h-[215px]">
        <img src={program.img} alt={program.alt} className="h-full w-full object-cover"
             style={{ objectPosition: program.position }} />
        <span className="absolute left-3.5 top-3.5 inline-flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-deep/80 font-display text-sm font-extrabold text-accent backdrop-blur">
          {program.num}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 pt-6">
        <span className="self-start rounded-full bg-accent/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.13em] text-accent">
          {program.tag}
        </span>
        <h3 className="font-display text-[21px] font-bold leading-tight tracking-tight md:text-[23px]">{program.title}</h3>
        <p className="text-[14.5px] leading-relaxed text-body">{long ? program.body : program.short}</p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line px-6 py-4.5">
        <span className="text-[12.5px] tracking-wide text-[#6B8296]">{program.meta}</span>
        <Link to="/donate"
              className="whitespace-nowrap rounded-md bg-accent/10 px-5 py-2.5 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-surface">
          Fund this
        </Link>
      </div>
    </Reveal>
  );
}
