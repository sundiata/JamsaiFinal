import { useState } from 'react';

const amounts = [250, 500, 1000];

export default function DonateWidget({ extended = false }) {
  const [amount, setAmount] = useState(500);
  const [custom, setCustom] = useState('');
  const [freq, setFreq] = useState('once');

  const shown = custom ? custom : `D${amount.toLocaleString()}`;
  const tab = (v) =>
    `flex-1 rounded-full py-2.5 text-sm transition-colors ${freq === v ? 'bg-surface font-bold text-cream' : 'font-semibold text-[#667C8E]'}`;
  const amt = (v) =>
    `rounded-lg py-3.5 text-base font-bold text-surface transition-colors ${amount === v && !custom ? 'border-2 border-accent bg-[#E8F7FC]' : 'border border-[#DCD9D0] bg-white'}`;
  const field = 'rounded-lg border border-[#DCD9D0] bg-white px-4 py-3.5 text-[15px] text-surface';

  return (
    <form onSubmit={(e) => { e.preventDefault(); /* TODO: create a ModemPay checkout session */ }}
          className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-[0_18px_40px_rgba(6,20,31,0.18)]">
      {extended && <h2 className="font-display text-2xl font-extrabold tracking-tight text-surface">MAKE A GIFT</h2>}

      <div className="flex gap-1.5 rounded-full bg-[#EFEDE6] p-1.5">
        <button type="button" onClick={() => setFreq('once')} className={tab('once')}>One-off</button>
        <button type="button" onClick={() => setFreq('monthly')} className={tab('monthly')}>Monthly</button>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {amounts.map((v) => (
          <button key={v} type="button" onClick={() => { setAmount(v); setCustom(''); }} className={amt(v)}>
            D{v.toLocaleString()}
          </button>
        ))}
      </div>

      <input value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Other amount" className={field} />

      {extended && (
        <>
          <select className={field} defaultValue="">
            <option value="">Where it's needed most</option>
            <option>Clothing reuse &amp; upcycling</option>
            <option>School supply campaign</option>
            <option>Ramadan food supply</option>
          </select>
          <input placeholder="Your name" className={field} />
          <input type="email" placeholder="Email address" className={field} />
        </>
      )}

      <button className="rounded-lg bg-surface py-4 text-base font-bold text-cream transition-transform hover:-translate-y-px hover:bg-[#1A4463]">
        {freq === 'monthly' ? `Give ${shown} monthly` : `Give ${shown}`}
      </button>

      {extended ? (
        <span className="text-center text-[12.5px] text-[#667C8E]">Secure checkout via ModemPay.</span>
      ) : (
        <div className="flex items-center gap-3.5 border-t border-[#EFEDE6] pt-2">
          <img src="/img/QRcodePay.jpeg" alt="ModemPay QR code" className="h-14 w-14 rounded-md object-cover" />
          <span className="text-[13px] leading-snug text-[#667C8E]">Or scan to pay with ModemPay from your phone.</span>
        </div>
      )}
    </form>
  );
}
