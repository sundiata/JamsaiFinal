const items = [
  'Ramadan food packages are being packed now, 120 households on the list',
  'Clothing drive open for donations across Greater Banjul',
  'Back-to-school supplies needed before the new term'
];

export default function MarqueeBar() {
  return (
    <div className="flex h-[42px] items-center overflow-hidden whitespace-nowrap bg-accent text-surface">
      <div className="flex animate-marquee gap-12 pl-12 text-[13.5px] font-bold tracking-wide">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex gap-12">{t}<span aria-hidden="true">•</span></span>
        ))}
      </div>
    </div>
  );
}
