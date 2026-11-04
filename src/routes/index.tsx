import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import heroVideo from "@/assets/ccm_hero_loop.mp4.asset.json";
import logo from "@/assets/ccm_logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Channels of Christ Ministries | One Vision, One Ministry, The Master's Mission" },
      {
        name: "description",
        content:
          "Channels of Christ Ministries unites the Church, the Seminary, and Grace View Hotel in one purpose: making disciples.",
      },
      { property: "og:title", content: "Channels of Christ Ministries" },
      {
        property: "og:description",
        content: "One Vision. One Ministry. The Master's Mission. Kilifi, Kenya and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["About", "#about"],
  ["Ministries", "#ministries"],
  ["Expressions", "#expressions"],
  ["Church Planting", "#launch"],
  ["Partner", "#partner"],
];

const pillars = [
  {
    n: "01",
    title: "One Vision",
    body: "To see lives transformed, leaders equipped, and communities strengthened through the gospel of Jesus Christ.",
  },
  {
    n: "02",
    title: "One Ministry",
    body: "Channels of Christ Ministries unites the Church, the Seminary, and Grace View Hotel in one purpose: making disciples through worship, learning, work, and service.",
  },
  {
    n: "03",
    title: "The Master's Mission",
    body: "We serve Christ by making disciples who make disciples, equipping faithful servants, and multiplying gospel witness for His glory.",
  },
];

const pathway = [
  ["Gospel", "Proclaiming Christ crucified and risen to every person we meet."],
  ["Disciple", "Walking with new believers into faithful, obedient lives."],
  ["Equip", "Training servants in Scripture, doctrine and ministry practice."],
  ["Send", "Commissioning workers into churches, villages and nations."],
  ["Multiply", "Disciples making disciples, churches planting churches."],
];

const ministries = [
  ["Church Strengthening", "Helping churches become healthy, biblical and mission-minded."],
  ["Church Planting", "Developing and launching Christ-centered local churches."],
  ["Discipleship", "Making faithful disciples who make disciples."],
  ["Leadership Development", "Equipping pastors, teachers and ministry leaders."],
  ["Community Transformation", "Serving communities through practical gospel-centered ministry."],
  ["Missions & Outreach", "Mobilizing believers for local, regional and global mission."],
];

const expressions = [
  {
    tag: "Worship",
    name: "Channels of Christ Baptist Church",
    line: "Christ exalted. Scripture proclaimed. Grace celebrated. Disciples made.",
    detail: "A local family of believers gathering each Lord's Day to worship, pray, and be shaped by the Word.",
  },
  {
    tag: "Learning",
    name: "CCES Seminary",
    line: "Better training. Stronger leaders. Greater impact.",
    detail: "Biblical and theological training for pastors, teachers and ministry leaders across the region.",
  },
  {
    tag: "Work & Service",
    name: "Grace View Hotel",
    line: "Hospitality as ministry, sustaining the mission on the Kilifi coast.",
    detail: "Every stay serves guests well and helps fund gospel work, training and outreach.",
  },
];

const stats = [
  ["3", "Expressions of one ministry"],
  ["6", "Areas of gospel work"],
  ["5", "Steps on our pathway"],
  ["2027", "Next church launch"],
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] ${light ? "text-accent" : "text-muted-foreground"}`}>
      <span className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/95 py-2 backdrop-blur" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className={`flex items-center rounded-full bg-background transition-all ${scrolled ? "p-0" : "p-1.5 shadow-lg"}`}>
            <img src={logo.url} alt="Channels of Christ Ministries" className={`object-contain transition-all duration-500 ${scrolled ? "h-14 w-14" : "h-16 w-16"}`} />
          </a>
          <nav className={`hidden items-center gap-8 text-sm lg:flex ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            {nav.map(([n, h]) => (
              <a key={n} href={h} className="relative opacity-85 transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:opacity-100 hover:after:w-full">
                {n}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href="#contact" className={`text-sm ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>Contact</a>
            <a href="#partner" className="bg-accent px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground transition hover:bg-primary hover:text-primary-foreground">
              Give
            </a>
          </div>
          <button
            className={`font-display text-sm font-semibold uppercase tracking-wider lg:hidden ${scrolled || open ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="mx-4 mt-3 border border-border bg-background p-6 lg:hidden">
            {[...nav, ["Contact", "#contact"]].map(([n, h]) => (
              <a key={n} href={h} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-display font-semibold last:border-0">
                {n}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-primary">
        <video className="absolute inset-0 h-full w-full scale-105 object-cover" src={heroVideo.url} autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-overlay" />
        <div className="hero-grain absolute inset-0 opacity-60" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 text-primary-foreground md:pb-20">
          <p className="animate-rise mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent">
            <span className="h-px w-10 bg-accent" /> Kilifi, Kenya and beyond
          </p>
          <h1 className="animate-rise max-w-5xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
            One Vision<span className="text-accent">.</span>
            <br />
            One Ministry<span className="text-accent">.</span>
            <br />
            <span className="text-accent">The Master's</span> Mission.
          </h1>
          <div className="animate-rise mt-10 flex flex-col gap-8 border-t border-primary-foreground/20 pt-8 md:flex-row md:items-end md:justify-between" style={{ animationDelay: "0.25s" }}>
            <p className="max-w-xl text-base font-light leading-relaxed opacity-85 md:text-lg">
              Equipping believers, developing leaders and strengthening churches for gospel transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#ministries" className="bg-accent px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground transition hover:bg-primary-foreground">
                Explore Ministries
              </a>
              <a href="#partner" className="border border-primary-foreground/50 px-7 py-4 font-display text-sm font-semibold uppercase tracking-wider transition hover:border-accent hover:text-accent">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-border bg-accent py-5 text-accent-foreground">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-xl font-extrabold uppercase tracking-tight md:text-2xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["One Vision", "One Ministry", "The Master's Mission", "Gospel", "Disciple", "Equip", "Send", "Multiply"].map((w) => (
              <span key={`${k}-${w}`} className="flex items-center gap-12">
                {w} <span className="text-primary">✦</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* ABOUT / CORE IDEA */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>The Core Idea</Eyebrow>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Three words that hold everything we do together.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              We are not three separate works. We are one ministry with one purpose, expressed through worship, learning, work and service.
            </p>
            <div className="relative mt-12 hidden h-48 w-48 lg:block">
              <img src={logo.url} alt="" className="animate-spin-slow absolute inset-0 h-full w-full object-contain opacity-10" />
              <img src={logo.url} alt="" className="relative h-full w-full object-contain" />
            </div>
          </Reveal>
          <div>
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <article className="group grid grid-cols-[auto_1fr] gap-8 border-t border-foreground/80 py-12 last:border-b">
                  <span className="font-display text-5xl font-extrabold text-accent transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl">{p.n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-4xl">{p.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.08} className={`py-12 ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""}`}>
              <p className="font-display text-5xl font-extrabold text-primary md:text-6xl">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PATHWAY */}
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow light>Our Pathway</Eyebrow>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
              From the first hearing of the gospel to a multiplying church.
            </h2>
          </Reveal>
          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-[11px] hidden h-px bg-primary-foreground/20 md:block" />
            <ol className="grid gap-12 md:grid-cols-5 md:gap-8">
              {pathway.map(([s, d], i) => (
                <Reveal key={s} delay={i * 0.12}>
                  <li className="relative">
                    <span className="relative z-10 block h-6 w-6 rounded-full border-4 border-primary bg-accent" />
                    <p className="mt-6 text-xs uppercase tracking-widest opacity-60">Step {i + 1}</p>
                    <p className="mt-2 font-display text-3xl font-bold">{s}</p>
                    <p className="mt-3 text-sm leading-relaxed opacity-70">{d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* EXPRESSIONS: tabbed editorial */}
      <section id="expressions" className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <Eyebrow>One Ministry, Three Expressions</Eyebrow>
          <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Worship, learning, work and service under one purpose.
          </h2>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            {expressions.map((e, i) => (
              <button
                key={e.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex w-full items-baseline gap-6 border-t border-border py-7 text-left transition-all last:border-b ${active === i ? "pl-4" : "opacity-50 hover:opacity-80"}`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">{e.tag}</span>
                <span className="font-display text-2xl font-bold md:text-3xl">{e.name}</span>
              </button>
            ))}
          </div>
          <div key={active} className="animate-rise relative overflow-hidden bg-primary p-10 text-primary-foreground md:p-14">
            <span className="absolute -right-6 -top-10 font-display text-[12rem] font-extrabold leading-none text-primary-foreground/5">
              0{active + 1}
            </span>
            <p className="relative text-xs uppercase tracking-[0.35em] text-accent">{expressions[active].tag}</p>
            <h3 className="relative mt-6 font-display text-3xl font-bold md:text-4xl">{expressions[active].line}</h3>
            <p className="relative mt-6 max-w-md leading-relaxed opacity-75">{expressions[active].detail}</p>
            <a href="#contact" className="relative mt-10 inline-block border-b border-accent pb-1 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Visit {expressions[active].name.split(" ").slice(-2).join(" ")} →
            </a>
          </div>
        </div>
      </section>

      {/* MINISTRIES: list rows */}
      <section id="ministries" className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mb-14 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Serving the Church. Equipping Leaders. Advancing the Gospel.
            </h2>
          </Reveal>
          <ul>
            {ministries.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <li>
                  <a href="#contact" className="group grid items-center gap-4 border-t border-foreground/20 py-8 transition-colors md:grid-cols-[80px_1fr_1fr_40px] md:gap-8">
                    <span className="font-display text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-2xl font-bold transition-transform duration-500 group-hover:translate-x-3 md:text-3xl">{t}</h3>
                    <p className="text-muted-foreground">{d}</p>
                    <span className="hidden text-2xl text-accent opacity-0 transition-all duration-500 group-hover:opacity-100 md:block">→</span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* LAUNCH */}
      <section id="launch" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 md:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <Eyebrow light>Church Planting</Eyebrow>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">
              Church Launch<br /><span className="text-accent">January 2027</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed opacity-75">
              New churches. New believers. Multiplying disciples on the Kilifi coast. Pray with us, give toward the launch, or join the team.
            </p>
            <a href="#partner" className="mt-8 inline-block bg-accent px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground transition hover:bg-background hover:text-foreground">
              Get Involved
            </a>
          </Reveal>
        </div>
      </section>

      {/* SCRIPTURE */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="font-display text-3xl font-bold leading-snug md:text-5xl">
            "Go therefore and make disciples of all nations<span className="text-accent">.</span>"
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-muted-foreground">Matthew 28:19</p>
        </Reveal>
      </section>

      {/* PARTNER */}
      <section id="partner" className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Partner With Us</Eyebrow>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Together for the gospel, in Kenya and beyond.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed opacity-75">
              Every prayer, gift and hour of service strengthens churches, trains leaders and carries the gospel further.
            </p>
          </Reveal>
          <div className="self-end">
            {["Pray", "Give", "Serve", "Short-Term Missions", "Strategic Partnerships"].map((x, i) => (
              <Reveal key={x} delay={i * 0.06}>
                <a href="#contact" className="group flex items-center justify-between border-t border-primary-foreground/20 py-5 font-display text-xl font-semibold transition-colors hover:text-accent md:text-2xl">
                  {x}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 pt-20">
          <div className="flex flex-col gap-10 border-b border-background/15 pb-16 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Come worship, learn and serve with us<span className="text-accent">.</span>
            </h2>
            <form className="flex w-full max-w-md border-b border-background/40 focus-within:border-accent" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email for updates" className="flex-1 bg-transparent py-4 text-background outline-none placeholder:text-background/50" />
              <button className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Subscribe</button>
            </form>
          </div>

          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="inline-block rounded-full bg-background p-2">
                <img src={logo.url} alt="Channels of Christ Ministries" className="h-20 w-20 object-contain" />
              </div>
              <p className="mt-6 max-w-xs text-sm leading-relaxed opacity-70">
                One Vision • One Ministry • The Master's Mission
              </p>
            </div>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">Explore</p>
              {nav.map(([n, h]) => (
                <a key={n} href={h} className="block py-1.5 text-sm opacity-75 transition hover:text-accent hover:opacity-100">{n}</a>
              ))}
            </div>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">Expressions</p>
              {expressions.map((e) => (
                <a key={e.name} href="#expressions" className="block py-1.5 text-sm opacity-75 transition hover:text-accent hover:opacity-100">{e.name}</a>
              ))}
            </div>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">Visit</p>
              <p className="text-sm leading-relaxed opacity-75">Kilifi, Kenya</p>
              <a href="mailto:info@channelsofchrist.org" className="mt-2 block text-sm opacity-75 hover:text-accent">info@channelsofchrist.org</a>
              <div className="mt-6 flex gap-4 text-sm">
                {["Facebook", "YouTube", "Instagram"].map((s) => (
                  <a key={s} href="#" className="opacity-75 hover:text-accent hover:opacity-100">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="select-none whitespace-nowrap text-center font-display text-[13vw] font-extrabold uppercase leading-[0.8] tracking-tighter text-background/5">
            Channels of Christ
          </p>
        </div>
        <div className="border-t border-background/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs opacity-60 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Channels of Christ Ministries. All rights reserved.</p>
            <p>Kilifi, Kenya</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
