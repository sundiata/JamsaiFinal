import Reveal from './Reveal.jsx';

/** 3:4 frame matches the portrait sources, so no face is ever cropped. */
export default function TeamCard({ member, delay = 0, long = false }) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[#2E5C80]"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={member.img} alt={member.name} className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/90 to-transparent to-55%" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
            {long ? member.role : member.shortRole}
          </span>
          <h3 className="font-display text-[17px] font-bold leading-tight tracking-tight">{member.name}</h3>
        </div>
      </div>
      <p className="px-5 pb-5.5 pt-4.5 text-[13.5px] leading-relaxed text-body">{long ? member.bio : member.short}</p>
    </Reveal>
  );
}
