import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import DonateWidget from '../components/DonateWidget.jsx';
import { payment, contact } from '../data/site.js';

const card = 'flex flex-col gap-2.5 rounded-xl border border-line bg-surface p-6';
const label = 'text-[11.5px] font-bold uppercase tracking-widest text-accent';

export default function Donate() {
  return (
    <main>
      <PageHeader
        eyebrow="Give"
        title="DONATE"
        lede="Card, mobile money, bank transfer or goods: every route lands with the same treasurer and the same records."
        img="/img/givingOne.jpeg"
      />
      <section className="grid items-start gap-6 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-[460px_1fr] lg:gap-12">
        <Reveal><DonateWidget extended /></Reveal>
        <Reveal delay={120} className="flex flex-col gap-4">
          <div className={card}>
            <strong className={label}>Mobile money</strong>
            <span className="text-base leading-relaxed">Wave {payment.wave}<br />APS {payment.aps}</span>
          </div>
          <div className={card}>
            <strong className={label}>Bank transfer</strong>
            <span className="text-base leading-relaxed">{payment.bank}<br />Account {payment.account}</span>
          </div>
          <div className={card}>
            <strong className={label}>Scan to pay</strong>
            <div className="flex items-center gap-4">
              <img src="/img/QRcodePay.jpeg" alt="ModemPay QR code" className="h-[92px] w-[92px] rounded-lg object-cover" />
              <span className="text-[14.5px] leading-snug text-body">Open your phone camera and scan to pay with ModemPay.</span>
            </div>
          </div>
          <div className={card}>
            <strong className={label}>Give goods, not cash</strong>
            <span className="text-[14.5px] leading-relaxed text-body">
              Clothing, school supplies and food are always welcome. Message us on WhatsApp and we'll arrange collection.
            </span>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="text-[14.5px] font-bold">
              Arrange a collection →
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
