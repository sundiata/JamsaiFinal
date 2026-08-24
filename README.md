# JamSai Foundation, React rebuild

Vite + React + Tailwind rebuild of the JamSai Family Foundation site (previously static HTML/CSS with Bootstrap 4 and jQuery).

## Run it

\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
\`\`\`

## Design

Palette is taken from the logo: deep navy (\`ink #0A1E33\`, \`surface #10304C\`) with the cyan accent
(\`accent #3EC6E0\`) and cream (\`#F2F0EA\`). Type is Archivo (display) + Public Sans (body).
All tokens live in \`tailwind.config.js\`, so a rebrand is one file.

Bootstrap, jQuery, OwlCarousel, Waypoints, CounterUp and Parallax are gone; their behaviour is
reimplemented in \`Reveal.jsx\`, \`Counter.jsx\` and \`Hero.jsx\`. All motion respects
\`prefers-reduced-motion\`.

## Structure

\`\`\`
src/
  App.jsx               routes + layout shell
  data/site.js          ALL copy: contacts, payment details, stats, programs, team,
                        testimonials, events, volunteer roles/steps/FAQs, news, gallery
  components/
    Header.jsx          sticky nav, condenses on scroll, mobile drawer
    Footer.jsx          includes the "Design by Sundiata Keita" credit
    MarqueeBar.jsx      scrolling campaign alert
    MobileDonateBar.jsx fixed Donate / WhatsApp bar on phones
    Hero.jsx            3-photo cross-fade with dot controls
    Reveal.jsx          scroll-reveal wrapper (rect check, never leaves content hidden)
    Counter.jsx         count-up numbers
    Stats.jsx           impact band + footnote
    CampaignCard.jsx    campaign card (numbered badge, tag, footer strip)
    TeamCard.jsx        3:4 portrait frame, name/role overlay
    PageHeader.jsx      typographic masthead + right-side photo behind a scrim
    DonateWidget.jsx    amount + frequency picker (extended variant on /donate)
  pages/                Home, About, Programs, Donate, Volunteer, Events, News, Gallery, Contact
public/img/             photography carried over from the old site
\`\`\`

## Editing content

Almost everything a non-developer needs to change lives in \`src/data/site.js\`: phone numbers,
bank details, impact figures, programs, team bios, testimonials, FAQs, gallery images.
No JSX edits required.

Image framing is data too: \`programs[].position\` and \`heroSlides[].position\` are CSS
\`object-position\` values, so a badly-cropped photo is a one-word fix.

## What still needs wiring

- **Donation checkout**: \`DonateWidget.jsx\` collects amount, frequency and designation, then stops
  at \`onSubmit\`. Point it at your ModemPay checkout session endpoint.
- **Forms**: contact (three), volunteer and newsletter forms are client-side only. Wire to your mail
  backend (the old \`mail/contact.php\`, EmailJS, or a serverless function).
- **Deploy rewrites**: client-side routing needs all paths to serve \`index.html\`
  (Netlify \`_redirects\`: \`/* /index.html 200\`, or the Vercel/Apache equivalent).
