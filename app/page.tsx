// import Image from "next/image";   
// import Hero from "./_component/Hero";
// import BrandIntro from "./_component/BrandIntro";

// export default function Home() {
//   return (
//     <div className="">
//       <main className=" ">
//         <Hero/>
//        <BrandIntro />

//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

const IMG = {
  hero: "/images/bb.png",
  blazer:
    "https://plus.unsplash.com/premium_photo-1675186049563-000f7ac02c44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  denim:
    "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  shirt:
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
  trousers:
    "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=800&q=80",
  shoes:
    "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
  styling:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  flatlay:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  founder:
    "/images/nife.jpeg",
  rail: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
};

const NAV = [
  "Home",
  "The Edit",
  "Styling",
  "Personal Shopping",
  "About",
  "Contact",
];

const SERVICES = [
  {
    title: "Personal Styling",
    copy: "Looks curated around you, your style, your body and your lifestyle.",
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.1">
        <circle cx="16" cy="6" r="2.2" />
        <path d="M16 8.2v2.4l-11 7.6c-1 .7-.5 2.3.7 2.3h20.6c1.2 0 1.7-1.6.7-2.3l-11-7.6" />
        <path d="M16 10.6l3.6-2.4" />
      </svg>
    ),
  },
  {
    title: "Personal Shopping",
    copy: "I find the pieces you love and handle the rest, from the UK to Nigeria.",
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M7 11h18l-1.6 14.5a1.6 1.6 0 0 1-1.6 1.4H10.2a1.6 1.6 0 0 1-1.6-1.4L7 11z" />
        <path d="M12 13.5V9.6a4 4 0 0 1 8 0v3.9" />
      </svg>
    ),
  },
  {
    title: "Wardrobe Editing",
    copy: "We refine what you have and build a wardrobe that works.",
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.1">
        <rect x="6" y="6" width="20" height="21" rx="1.4" />
        <path d="M16 6v21M11 15.2v2.4M21 15.2v2.4" />
      </svg>
    ),
  },
];

const ESSENTIALS = [
  { name: "Structured Blazer", img: IMG.blazer },
  { name: "Classic Denim", img: IMG.denim },
  { name: "White Crisp Shirt", img: IMG.shirt },
  { name: "Tailored Trousers", img: IMG.trousers },
  { name: "Statement Shoes", img: IMG.shoes },
];

const STYLING_TIERS = [
  { title: "Style a Piece", copy: "See how to style something you already own." },
  { title: "Build an Outfit", copy: "Outfit ideas for a specific occasion." },
  { title: "The Full Look", copy: "Head-to-toe styling, accessories & more." },
];

const SHOPPING_STEPS = [
  "You send the item or link",
  "I find the best options",
  "I purchase & inspect",
  "I deliver it to you",
];

const TESTIMONIALS = [
  {
    quote:
      "Nifemi has an amazing eye for style. She helped me discover pieces I love and put together looks I would have never thought of. Highly recommend!",
    author: "Client",
  },
  {
    quote:
      "I sent one link from Instagram and she handled everything else. The parcel landed in Lagos two weeks later, exactly as described.",
    author: "Client",
  },
  {
    quote:
      "My wardrobe finally makes sense. Fewer things, better things, and I get dressed in five minutes now.",
    author: "Client",
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

.twe *, .twe *::before, .twe *::after { box-sizing: border-box; }
.twe {
  --cream:   #f4f0e7;
  --shell:   #F2ECE3;
  --sand:    #E9E1D5;
  --brown:   #4A3327;
  --brown-d: #3E2A1F;
  --ink:     #3A2A1E;
  --muted:   #827365;
  --line:    #D8CDBE;
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.twe img { display: block; width: 100%; height: 100%; object-fit: cover; }
.twe h1, .twe h2, .twe h3, .twe p, .twe ul { margin: 0; }
.twe ul { list-style: none; padding: 0; }
.twe a { color: inherit; text-decoration: none; }
.twe button { font-family: inherit; cursor: pointer; border: 0; background: none; color: inherit; }
.twe :focus-visible { outline: 2px solid var(--brown); outline-offset: 3px; }

.twe .serif { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 400; }
.twe .eyebrow {
  font-size: 10px; letter-spacing: .26em; text-transform: uppercase;
  color: var(--muted); font-weight: 400;
}
.twe .wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; }

/* ---------- buttons ---------- */
.twe .btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 14px 26px; font-size: 10.5px; letter-spacing: .2em;
  text-transform: uppercase; font-weight: 400;
  transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.twe .btn-solid { background: var(--brown); color: #F6F1E9; }
.twe .btn-solid:hover { background: var(--brown-d); }
.twe .btn-ghost { border: 1px solid var(--line); color: var(--ink); background: transparent; }
.twe .btn-ghost:hover { border-color: var(--brown); }
.twe .btn-outline { border: 1px solid var(--line); background: transparent; }
.twe .btn-outline:hover { border-color: var(--brown); }

.twe .arrow-link {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 10px; letter-spacing: .22em; text-transform: uppercase; color: var(--ink);
}
.twe .arrow-link svg { transition: transform .25s ease; }
.twe .arrow-link:hover svg { transform: translateX(4px); }

/* ---------- nav ---------- */
.twe .nav {
  position: sticky; top: 0; z-index: 40;
  display: flex; align-items: center; justify-content: space-between;
  gap: 24px; padding: 16px 40px;
  background: var(--cream); border-bottom: 1px solid rgba(216,205,190,.55);
}
.twe .brand-name {
  font-size: 12px; letter-spacing: .2em; text-transform: uppercase; font-weight: 400;
}
.twe .brand-sub { font-size: 9.5px; letter-spacing: .12em; color: var(--muted); margin-top: 3px; }
.twe .nav-links { display: flex; align-items: center; gap: 28px; }
.twe .nav-links a {
  font-size: 10.5px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink);
  padding-bottom: 3px; border-bottom: 1px solid transparent;
}
.twe .nav-links a.is-active { border-bottom-color: var(--brown); }
.twe .nav-links a:hover { border-bottom-color: var(--line); }
.twe .nav-right { display: flex; align-items: center; gap: 16px; }
.twe .wa {
  width: 34px; height: 34px; border-radius: 50%;
  display: grid; place-items: center; border: 1px solid var(--line); color: var(--ink);
}
.twe .burger { display: none; }

/* ---------- hero ---------- */
.twe .hero {
  display: grid; grid-template-columns: 1fr 1.08fr; align-items: center;
  gap: 40px; padding: 76px 40px 84px; max-width: 1240px; margin: 0 auto;
}
.twe .hero h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(46px, 5.6vw, 76px); line-height: 1.02; font-weight: 400;
  letter-spacing: .005em; text-transform: uppercase; margin: 22px 0 24px;
}
.twe .hero p { font-size: 14px; line-height: 1.75; color: #5C4E43; max-width: 34ch; }
.twe .hero-actions { display: flex; gap: 12px; margin: 30px 0 28px; flex-wrap: wrap; }
.twe .route { display: flex; align-items: center; gap: 10px; font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--muted); }
.twe .route .flag { font-size: 15px; letter-spacing: 0; }
.twe .hero-media { height: 520px; background: var(--shell); }

/* ---------- services strip ---------- */
.twe .services { background: var(--shell); border-top: 1px solid rgba(216,205,190,.6); }
.twe .services-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  max-width: 1240px; margin: 0 auto; padding: 0 40px;
}
.twe .service { display: flex; gap: 18px; padding: 34px 34px 34px 0; }
.twe .service + .service { border-left: 1px solid rgba(216,205,190,.85); padding-left: 34px; }
.twe .service-icon { color: var(--brown); flex: none; margin-top: 2px; }
.twe .service h3 { font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase; font-weight: 500; }
.twe .service p { font-size: 12.5px; line-height: 1.7; color: var(--muted); margin: 9px 0 14px; max-width: 30ch; }

/* ---------- essentials ---------- */
.twe .essentials { padding: 78px 0 84px; }
.twe .essentials-grid {
  display: grid; grid-template-columns: .82fr repeat(5, 1fr); gap: 16px; align-items: start;
}
.twe .essentials-intro { padding-right: 22px; }
.twe .essentials-intro h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 40px; line-height: 1.12; font-weight: 400; margin: 16px 0 16px;
}
.twe .essentials-intro p { font-size: 13px; line-height: 1.75; color: var(--muted); margin-bottom: 26px; }
.twe .card figure { margin: 0; height: 200px; background: var(--shell); }
.twe .card h3 {
  font-size: 9.5px; letter-spacing: .2em; text-transform: uppercase;
  font-weight: 500; margin: 14px 0 6px;
}
.twe .card span { font-size: 11px; color: var(--muted); }
.twe .card:hover span { color: var(--ink); }

/* ---------- split rows ---------- */
.twe .split { display: grid; grid-template-columns: 1fr 1fr; }
.twe .split-media { min-height: 440px; background: var(--shell); }
.twe .split-body { padding: 62px 68px; display: flex; flex-direction: column; justify-content: center; }
.twe .split-body h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 40px; line-height: 1.14; font-weight: 400; margin: 14px 0 18px;
}
.twe .split-body > p { font-size: 13px; line-height: 1.8; color: var(--muted); max-width: 44ch; }
.twe .bg-shell { background: var(--shell); }
.twe .bg-sand { background: var(--sand); }

.twe .tiers { margin: 32px 0 30px; }
.twe .tier {
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  padding: 16px 0; border-bottom: 1px solid rgba(216,205,190,.9); width: 100%; text-align: left;
}
.twe .tier h3 { font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase; font-weight: 500; }
.twe .tier p { font-size: 11.5px; color: var(--muted); margin-top: 5px; }
.twe .tier svg { color: var(--brown); transition: transform .25s ease; flex: none; }
.twe .tier:hover svg { transform: translateX(5px); }

.twe .checks { margin: 26px 0 30px; display: grid; gap: 12px; }
.twe .checks li { display: flex; align-items: center; gap: 12px; font-size: 12.5px; color: #5C4E43; }
.twe .checks svg { color: var(--brown); flex: none; }

/* ---------- founder ---------- */
.twe .founder { display: grid; grid-template-columns: .62fr 1.38fr; background: var(--shell); }
.twe .founder-media { min-height: 300px; background: var(--sand); }
.twe .founder-body {
  display: grid; grid-template-columns: 1.15fr .85fr; gap: 44px;
  align-items: center; padding: 48px 56px;
}
.twe .founder-body h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 32px; line-height: 1.16; font-weight: 400; margin: 12px 0 14px;
}
.twe .founder-body p { font-size: 12px; line-height: 1.8; color: var(--muted); max-width: 42ch; margin-bottom: 20px; }
.twe .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.twe .stat { border-left: 1px solid rgba(216,205,190,.95); padding-left: 18px; }
.twe .stat strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  display: block; font-size: 34px; font-weight: 500; line-height: 1;
}
.twe .stat span {
  display: block; margin-top: 8px; font-size: 9px; letter-spacing: .18em;
  text-transform: uppercase; color: var(--muted); line-height: 1.7;
}

/* ---------- testimonial ---------- */
.twe .quote { background: var(--brown); color: #F1E9DE; padding: 44px 40px 40px; }
.twe .quote-inner { max-width: 880px; margin: 0 auto; text-align: center; position: relative; }
.twe .stars { letter-spacing: .34em; font-size: 12px; color: #E7C99A; }
.twe .quote p { font-size: 15px; line-height: 1.85; margin: 16px auto 14px; max-width: 62ch; }
.twe .quote .who { font-size: 10px; letter-spacing: .24em; text-transform: uppercase; color: #C8B49E; }
.twe .q-nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px; display: grid; place-items: center;
  color: #E4D8C8; opacity: .75;
}
.twe .q-nav:hover { opacity: 1; }
.twe .q-prev { left: -46px; }
.twe .q-next { right: -46px; }

/* ---------- final cta ---------- */
.twe .cta { display: grid; grid-template-columns: 1fr 1fr; background: var(--shell); }
.twe .cta-media { min-height: 330px; background: var(--sand); }
.twe .cta-body { padding: 70px 68px; display: flex; flex-direction: column; justify-content: center; }
.twe .cta-body h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 42px; line-height: 1.12; font-weight: 400; margin-bottom: 14px;
}
.twe .cta-body p { font-size: 13px; line-height: 1.8; color: var(--muted); max-width: 40ch; margin-bottom: 26px; }

/* ---------- footer ---------- */
.twe .foot { background: var(--brown); color: #E9DFD2; padding: 40px 0 0; }
.twe .foot-grid {
  display: grid; grid-template-columns: 1.3fr 1fr 1fr 1fr; gap: 36px;
  max-width: 1240px; margin: 0 auto; padding: 0 40px 30px;
}
.twe .foot h4 {
  font-size: 9.5px; letter-spacing: .22em; text-transform: uppercase;
  color: #C0AC96; font-weight: 400; margin: 0 0 14px;
}
.twe .foot li { margin-bottom: 9px; font-size: 11.5px; color: #E2D6C7; }
.twe .foot li a:hover { color: #fff; }
.twe .foot-brand .brand-name { color: #F4ECE1; }
.twe .foot-brand p { font-size: 11.5px; color: #C7B5A1; margin-top: 10px; max-width: 30ch; line-height: 1.7; }
.twe .foot-connect li { display: flex; align-items: center; gap: 9px; }
.twe .foot-bar {
  border-top: 1px solid rgba(233,223,210,.16);
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  max-width: 1240px; margin: 0 auto; padding: 16px 40px 20px;
  font-size: 10px; letter-spacing: .08em; color: #BCA994;
}
.twe .foot-bar div { display: flex; gap: 22px; }

/* ---------- responsive ---------- */
@media (max-width: 1080px) {
  .twe .essentials-grid { grid-template-columns: repeat(3, 1fr); }
  .twe .essentials-intro { grid-column: 1 / -1; padding-right: 0; }
  .twe .founder { grid-template-columns: 1fr; }
  .twe .founder-body { grid-template-columns: 1fr; gap: 28px; padding: 40px; }
  .twe .split-body, .twe .cta-body { padding: 48px 40px; }
}
@media (max-width: 860px) {
  .twe .nav-links { display: none; }
  .twe .burger { display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid var(--line); }
  .twe .hero { grid-template-columns: 1fr; padding: 48px 24px 56px; }
  .twe .hero-media { height: 420px; order: -1; }
  .twe .services-grid { grid-template-columns: 1fr; padding: 0 24px; }
  .twe .service { padding: 26px 0; }
  .twe .service + .service { border-left: 0; border-top: 1px solid rgba(216,205,190,.85); padding-left: 0; }
  .twe .wrap { padding: 0 24px; }
  .twe .essentials-grid { grid-template-columns: repeat(2, 1fr); }
  .twe .split, .twe .cta { grid-template-columns: 1fr; }
  .twe .split-media, .twe .cta-media { min-height: 320px; }
  .twe .split-reverse .split-media { order: -1; }
  .twe .split-body, .twe .cta-body { padding: 40px 24px; }
  .twe .split-body h2, .twe .cta-body h2 { font-size: 32px; }
  .twe .stats { grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .twe .q-prev { left: -8px; }
  .twe .q-next { right: -8px; }
  .twe .quote p { font-size: 13.5px; padding: 0 24px; }
  .twe .foot-grid { grid-template-columns: 1fr 1fr; padding: 0 24px 26px; }
  .twe .foot-bar { flex-direction: column; align-items: flex-start; padding: 16px 24px 22px; }
}
@media (prefers-reduced-motion: reduce) {
  .twe * { transition: none !important; animation: none !important; }
}
`;

/* ---------- small inline icons ---------- */
const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const WhatsApp = ({ size = 15 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.52 3.76 1.44 5.34L2 22l4.96-1.6a9.8 9.8 0 0 0 5.08 1.4c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2zm0 17.9c-1.6 0-3.1-.44-4.38-1.2l-.32-.2-3.12 1 1.02-3.04-.2-.32a8.03 8.03 0 0 1-1.24-4.3c0-4.44 3.62-8.06 8.06-8.06s8.04 3.62 8.04 8.06-3.6 8.06-7.86 8.06zm4.42-6.04c-.24-.12-1.44-.72-1.66-.8-.22-.08-.38-.12-.54.12s-.62.8-.76.96c-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.94-1.2 7.3 7.3 0 0 1-1.34-1.68c-.14-.24 0-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.24 1.02.4 1.37.52.58.18 1.1.16 1.52.1.46-.08 1.44-.6 1.64-1.16.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

const Instagram = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Mail = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </svg>
);

/* ---------- page ---------- */
export default function Page() {
  const [slide, setSlide] = useState(0);
  const total = TESTIMONIALS.length;
  const go = (dir: number) => setSlide((s) => (s + dir + total) % total);
  const t = TESTIMONIALS[slide];

  return (
    <div className="twe">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* NAV */}
      <header className="nav">
        <a href="#" className="brand">
          <div className="brand-name">The Wardrobe Edit</div>
          <div className="brand-sub">Your wardrobe, but better.</div>
        </a>

        <nav className="nav-links">
          {NAV.map((item, i) => (
            <a key={item} href="#" className={i === 0 ? "is-active" : ""}>
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a href="#" className="btn btn-solid">
            Book a Consultation
          </a>
          <a href="#" className="wa" aria-label="Chat on WhatsApp">
            <WhatsApp />
          </a>
          <button className="burger" aria-label="Open menu">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.4">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div>
          <p className="eyebrow">Welcome to The Wardrobe Edit</p>
          <h1 className="serif">
            Your
            <br />
            Wardrobe,
            <br />
            But Better.
          </h1>
          <p>
            Personal styling and shopping assistance that makes getting dressed a
            little easier.
          </p>

          <div className="hero-actions">
            <a href="#edit" className="btn btn-solid">
              Explore the Edit
            </a>
            <a href="#styling" className="btn btn-ghost">
              Get Styled
            </a>
          </div>

          <div className="route">
            <span className="flag">🇬🇧</span> UK
            <span aria-hidden="true">→</span>
            <span className="flag">🇳🇬</span> Nigeria
          </div>
        </div>

        <div className="hero-media">
          <img src={IMG.hero} alt="Stylist seated in a tailored blazer and black trousers" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <a href="#" className="arrow-link">
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5 WARDROBE ESSENTIALS */}
      <section className="essentials" id="edit">
        <div className="wrap essentials-grid">
          <div className="essentials-intro">
            <p className="eyebrow">The Wardrobe Edit</p>
            <h2 className="serif">5 Wardrobe Essentials</h2>
            <p>
              You don&apos;t need more clothes...
              <br />
              you need the right pieces.
            </p>
            <a href="#" className="btn btn-outline">
              Discover the Edit
            </a>
          </div>

          {ESSENTIALS.map((item) => (
            <a href="#" className="card" key={item.name}>
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
              <h3>{item.name}</h3>
              <span>View pieces →</span>
            </a>
          ))}
        </div>
      </section>

      {/* PERSONAL STYLING */}
      <section className="split" id="styling">
        <div className="split-media">
          <img src={IMG.styling} alt="Client styled in a white shirt and tailored trousers" />
        </div>
        <div className="split-body bg-shell">
          <p className="eyebrow">Personal Styling</p>
          <h2 className="serif">
            Let&apos;s create looks
            <br />
            that feel like you.
          </h2>
          <p>
            Whether it&apos;s for work, an event, a special occasion or everyday
            life, I&apos;ll help you put together looks that are effortless,
            confident and completely you.
          </p>

          <div className="tiers">
            {STYLING_TIERS.map((tier) => (
              <button className="tier" key={tier.title}>
                <span>
                  <h3>{tier.title}</h3>
                  <p>{tier.copy}</p>
                </span>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>

          <a href="#" className="btn btn-solid" style={{ alignSelf: "flex-start" }}>
            Book a Styling Session
          </a>
        </div>
      </section>

      {/* PERSONAL SHOPPING */}
      <section className="split split-reverse">
        <div className="split-body bg-sand">
          <p className="eyebrow">Personal Shopping</p>
          <h2 className="serif">
            Seen something
            <br />
            you love?
          </h2>
          <p>
            Send it to me and I&apos;ll source it for you. From the UK to Nigeria,
            I handle the search, purchase and delivery.
          </p>

          <ul className="checks">
            {SHOPPING_STEPS.map((step) => (
              <li key={step}>
                <Check />
                {step}
              </li>
            ))}
          </ul>

          <a href="#" className="btn btn-solid" style={{ alignSelf: "flex-start" }}>
            Send a Shopping Request
          </a>
        </div>
        <div className="split-media">
          <img src={IMG.flatlay} alt="Handbag, sunglasses and neutral knitwear flatlay" />
        </div>
      </section>

      {/* MEET NIFEMI */}
      <section className="founder" id="about">
        <div className="founder-media">
          <img src={IMG.founder} alt="Nifemi, founder of The Wardrobe Edit" />
        </div>

        <div className="founder-body">
          <div>
            <p className="eyebrow">Meet Nifemi</p>
            <h2 className="serif">
              Styling is more
              <br />
              than what you wear.
            </h2>
            <p>
              It&apos;s how you show up, how you move and how you express yourself
              without saying a word. I created The Wardrobe Edit to help you do
              that, with pieces that truly work for you.
            </p>
            <a href="#" className="arrow-link">
              About The Wardrobe Edit <ArrowRight size={13} />
            </a>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>100+</strong>
              <span>
                Clients
                <br />
                Styled
              </span>
            </div>
            <div className="stat">
              <strong>500+</strong>
              <span>
                Looks
                <br />
                Curated
              </span>
            </div>
            <div className="stat">
              <strong>2</strong>
              <span>
                Countries
                <br />
                UK &amp; Nigeria
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="quote">
        <div className="quote-inner">
          <button className="q-nav q-prev" onClick={() => go(-1)} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <div className="stars" aria-label="Five star rating">
            ★★★★★
          </div>
          <p>&ldquo;{t.quote}&rdquo;</p>
          <div className="who">— {t.author}</div>

          <button className="q-nav q-next" onClick={() => go(1)} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta" id="contact">
        <div className="cta-media">
          <img src={IMG.rail} alt="Hand browsing a rail of neutral shirts" />
        </div>
        <div className="cta-body">
          <h2 className="serif">
            Ready to upgrade
            <br />
            your wardrobe?
          </h2>
          <p>
            Let&apos;s find the right pieces and create looks that make getting
            dressed effortless.
          </p>
          <a href="#" className="btn btn-solid" style={{ alignSelf: "flex-start" }}>
            Let&apos;s Work Together
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand-name">The Wardrobe Edit</div>
            <p>Personal styling and shopping, from the UK to Nigeria.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {["The Edit", "Styling", "Personal Shopping", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-connect">
            <h4>Connect</h4>
            <ul>
              <li>
                <WhatsApp size={13} /> <a href="#">WhatsApp</a>
              </li>
              <li>
                <Instagram size={13} /> <a href="#">Instagram</a>
              </li>
              <li>
                <Mail size={13} /> <a href="#">Email</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Areas</h4>
            <ul>
              <li>Lagos, Nigeria</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="foot-bar">
          <span>© 2026 The Wardrobe Edit. All rights reserved.</span>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}