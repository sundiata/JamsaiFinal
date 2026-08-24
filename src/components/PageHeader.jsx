/**
 * Typographic page masthead: eyebrow, hairline rule, title + lede.
 * A photo fills the otherwise-empty right side behind a navy scrim (>=900px).
 */
export default function PageHeader({ eyebrow, title, lede, img }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-night px-5 py-8 md:px-10 md:pb-12 md:pt-14">
      {img && (
        <div className="absolute inset-y-0 right-0 hidden w-[46%] min-[900px]:block">
          <img src={img} alt="" aria-hidden="true"
               className="h-full w-full object-cover" style={{ objectPosition: 'center 12%' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/90 to-night/50" />
        </div>
      )}
      <div className="relative grid max-w-[1100px] items-center gap-2.5 lg:grid-cols-[auto_1px_1fr] lg:gap-9">
        <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
        <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-accent to-transparent lg:block" />
        <div className="flex flex-col">
          <h1 className="font-display text-[34px] font-extrabold leading-[0.98] tracking-tighter md:text-[52px]">{title}</h1>
          <p className="mt-1 max-w-[620px] text-[15.5px] leading-relaxed text-soft md:mt-2.5 md:text-[17px]">{lede}</p>
        </div>
      </div>
    </section>
  );
}
