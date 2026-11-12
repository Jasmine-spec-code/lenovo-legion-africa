import {
  ArrowUpRight,
  BatteryCharging,
  ChevronRight,
  CirclePlay,
  Cpu,
  Gauge,
  Gamepad2,
  Layers3,
  Menu,
  MonitorUp,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Thermometer,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const heroImage = "/manus-storage/async-images/qeTqm59xVtG2nFnTPQT21t/image-1.webp";
const lenovoAfricaLegionUrl = "https://www.lenovo.com/za/en/legion/";

const navItems = [
  { label: "Why Legion", href: "#why-legion" },
  { label: "Highlights", href: "#highlights" },
  { label: "The setup", href: "#setup" },
];

const highlights = [
  {
    icon: Gauge,
    eyebrow: "01 / Response",
    title: "Move at the speed of your mind.",
    copy: "Every input, swap and split-second decision feels immediate when the machine is built to keep up.",
  },
  {
    icon: Thermometer,
    eyebrow: "02 / Control",
    title: "Stay cool when it gets intense.",
    copy: "Focused thermal design helps keep the session steady, from the first round to the final boss.",
  },
  {
    icon: MonitorUp,
    eyebrow: "03 / Immersion",
    title: "See the whole battlefield.",
    copy: "A sharp, expansive visual experience pulls you deeper into every world, map and creative idea.",
  },
];

const reasons = [
  { icon: Zap, label: "Fast where it matters" },
  { icon: Layers3, label: "Made for the long session" },
  { icon: BatteryCharging, label: "Ready beyond the desk" },
  { icon: ShieldCheck, label: "Confidently considered" },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return (
    <div ref={setElement} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="announcement-bar">
        <span>LEGION / PERFORMANCE WITHOUT PAUSE</span>
        <a href={lenovoAfricaLegionUrl} target="_blank" rel="noreferrer">Discover the range <ArrowUpRight size={13} /></a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Legion home">
          <Mark />
          <span>LEGION</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={lenovoAfricaLegionUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Explore laptops <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Designed for the next level</p>
          <h1 id="hero-title">Play<br /><em>unbound.</em></h1>
          <p className="hero-lede">Meet the laptop that turns your most demanding games into a world you can disappear into.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={lenovoAfricaLegionUrl} target="_blank" rel="noreferrer">Find your Legion <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#highlights"><CirclePlay size={18} /> See what makes it different</a>
          </div>
          <div className="hero-meta" aria-label="Campaign details">
            <span><i /> Gaming-first engineering</span>
            <span>Independent concept advert</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Premium gaming laptop product visual">
          <div className="visual-label visual-label-top">LEGION / 001</div>
          <div className="visual-frame">
            <img src={heroImage} alt="Sleek black gaming laptop glowing with blue and red light" />
            <div className="visual-glow" aria-hidden="true" />
            <div className="visual-scanline" aria-hidden="true" />
          </div>
          <div className="visual-spec visual-spec-top"><span>01</span><strong>FULL<br />FOCUS</strong></div>
          <div className="visual-spec visual-spec-bottom"><span>02</span><strong>NO<br />COMPROMISE</strong></div>
          <div className="visual-label visual-label-bottom">GO BEYOND THE FRAME <MoveRight size={15} /></div>
        </div>
        <a className="scroll-cue" href="#why-legion" aria-label="Scroll to why Legion section">
          <span>Scroll to explore</span><span className="scroll-line" />
        </a>
      </section>

      <section className="signal-strip" aria-label="Core campaign message">
        <div className="signal-tag">The Legion signal</div>
        <p>More than a gaming laptop.<br /><strong>A launchpad for obsession.</strong></p>
        <span className="signal-number">01—04</span>
      </section>

      <section className="story-section section-shell" id="why-legion">
        <Reveal className="section-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> Why Legion</p>
          <h2>Built for the<br /><em>deep end.</em></h2>
          <p className="section-lede">When you care about the details, the right hardware changes everything. Legion gives your ideas more room to move.</p>
        </Reveal>
        <Reveal className="story-statement" >
          <div className="statement-index">01</div>
          <p>From competitive matches to late-night creation, <span>Legion is engineered around the way you actually play.</span></p>
          <a className="arrow-link" href="#highlights" aria-label="Explore Legion highlights"><ChevronRight size={22} /></a>
        </Reveal>
      </section>

      <section className="highlights-section section-shell" id="highlights">
        <Reveal className="section-header-row">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> The highlights</p>
            <h2>Every advantage,<br /><em>considered.</em></h2>
          </div>
          <p className="header-note">No noise. Just the details that make the session feel better.</p>
        </Reveal>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Reveal key={highlight.eyebrow} className={`highlight-card card-${index + 1}`}>
                <div className="card-topline"><span>{highlight.eyebrow}</span><Icon size={22} strokeWidth={1.5} /></div>
                <div className="card-icon"><Icon size={31} strokeWidth={1.4} /></div>
                <h3>{highlight.title}</h3>
                <p>{highlight.copy}</p>
                <span className="card-corner" aria-hidden="true">+</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="feature-band" id="setup">
        <div className="feature-band-noise" aria-hidden="true" />
        <div className="section-shell feature-band-inner">
          <Reveal className="feature-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Your setup, amplified</p>
            <h2>More than<br /><em>ready.</em></h2>
            <p>Legion fits the full picture: serious performance, considered design, immersive visuals and the freedom to take your setup wherever the next session starts.</p>
            <a className="button button-light" href={lenovoAfricaLegionUrl} target="_blank" rel="noreferrer">Build your setup <ArrowUpRight size={17} /></a>
          </Reveal>
          <Reveal className="reasons-list">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div className="reason-row" key={reason.label}>
                  <span className="reason-index">0{index + 1}</span>
                  <Icon size={21} strokeWidth={1.5} />
                  <span>{reason.label}</span>
                  <ChevronRight size={17} className="reason-arrow" />
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="closing-section section-shell" id="shop">
        <Reveal className="closing-card">
          <div className="closing-orb" aria-hidden="true" />
          <div className="closing-content">
            <p className="eyebrow"><span className="eyebrow-line" /> The next level is personal</p>
            <h2>What will you<br /><em>play next?</em></h2>
            <p>Find the Legion that fits your world, your games and the way you want to show up.</p>
            <div className="closing-actions">
              <a className="button button-primary" href={lenovoAfricaLegionUrl} target="_blank" rel="noreferrer">Shop Lenovo Africa <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#top">Back to top <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="closing-mark" aria-hidden="true"><Gamepad2 size={50} strokeWidth={1} /><span>GO<br />BEYOND</span></div>
        </Reveal>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-brand"><Mark /><span>LEGION</span></div>
        <p>Independent promotional concept. Lenovo and Legion are trademarks of Lenovo. This advert is not affiliated with or endorsed by Lenovo.</p>
        <span className="footer-year">© 2026 / CONCEPT 001</span>
      </footer>
    </main>
  );
}
