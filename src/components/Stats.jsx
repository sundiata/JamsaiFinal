import Counter from './Counter.jsx';

export default function Stats({ items, note }) {
  return (
    <section className="border-y border-line bg-surface">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {items.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col gap-1.5 px-5 py-7 md:px-8 md:py-10 ${i < items.length - 1 ? 'border-r border-line' : ''} ${i < 2 ? 'border-b border-line md:border-b-0' : ''}`}
          >
            <Counter
              value={s.value}
              prefix={s.prefix || ''}
              className="font-display text-[34px] font-extrabold leading-none tracking-tighter text-accent md:text-[46px]"
            />
            <span className="text-xs uppercase tracking-wider text-muted md:text-[13px]">{s.label}</span>
          </div>
        ))}
      </div>
      {note && (
        <p className="max-w-[1000px] border-t border-line p-5 text-[13.5px] leading-relaxed text-muted md:px-8 md:py-6 md:text-[14.5px]">
          {note}
        </p>
      )}
    </section>
  );
}
