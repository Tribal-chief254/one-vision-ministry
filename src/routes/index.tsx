import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroVideo from "@/assets/ccm_hero_loop.mp4.asset.json";

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

const nav = ["About", "Ministries", "Equip", "Church Planting", "Projects", "Events", "Resources"];

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

const pathway = ["Gospel", "Disciple", "Equip", "Send", "Multiply"];

const ministries = [
  ["Church Strengthening", "Helping churches become healthy, biblical and mission-minded."],
  ["Church Planting", "Developing and launching Christ-centered local churches."],
  ["Discipleship", "Making faithful disciples who make disciples."],
  ["Leadership Development", "Equipping pastors, teachers and ministry leaders."],
  ["Community Transformation", "Serving communities through practical gospel-centered ministry."],
  ["Missions & Outreach", "Mobilizing believers for local, regional and global mission."],
];

const expressions = [
  { tag: "Worship", name: "Channels of Christ Baptist Church", line: "Christ exalted. Scripture proclaimed. Grace celebrated. Disciples made." },
  { tag: "Learning", name: "CCES Seminary", line: "Better training. Stronger leaders. Greater impact." },
  { tag: "Work & Service", name: "Grace View Hotel", line: "Hospitality as ministry, sustaining the mission on the Kilifi coast." },
];

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-primary">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-overlay" />
        <div className="hero-grain absolute inset-0 opacity-60" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground">
          <a href="/" className="leading-tight">
            <span className="block font-display text-lg font-800 font-extrabold tracking-wide">CHANNELS OF CHRIST</span>
            <span className="block text-[11px] tracking-[0.4em] text-accent">MINISTRIES</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            {nav.map((n) => (
              <a key={n} href="#" className="opacity-80 transition hover:text-accent hover:opacity-100">
                {n}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
            <a href="#partner" className="bg-accent px-5 py-2.5 font-display text-sm font-semibold text-accent-foreground transition hover:bg-primary-foreground">
              Give
            </a>
          </div>
          <button className="lg:hidden text-sm font-medium" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </header>
        {open && (
          <div className="relative z-10 mx-6 border border-primary-foreground/20 bg-primary p-6 text-primary-foreground lg:hidden">
            {[...nav, "Partner", "Contact"].map((n) => (
              <a key={n} href="#" className="block py-2">{n}</a>
            ))}
          </div>
        )}

        <div className="relative z-10 mx-auto flex h-[calc(100%-96px)] max-w-7xl flex-col justify-end px-6 pb-16 text-primary-foreground md:pb-24">
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
          <div className="animate-rise mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between" style={{ animationDelay: "0.25s" }}>
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

      {/* CORE IDEA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">The Core Idea</p>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Three words that hold everything we do together.
            </h2>
          </div>
        </div>
        <div className="grid border-t border-foreground md:grid-cols-3">
          {pillars.map((p, i) => (
            <article key={p.n} className={`group py-10 md:px-8 ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : "md:pl-0"}`}>
              <span className="font-display text-sm font-semibold text-accent">{p.n}</span>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{p.title}</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PATHWAY */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-10 text-xs uppercase tracking-[0.35em] text-accent">Our Pathway</p>
          <ol className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            {pathway.map((s, i) => (
              <li key={s} className="border-l border-primary-foreground/20 pl-5">
                <span className="text-xs opacity-60">Step {i + 1}</span>
                <p className="mt-2 font-display text-2xl font-bold md:text-3xl">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXPRESSIONS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">One Ministry, Three Expressions</p>
        <h2 className="mb-14 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
          Worship, learning, work and service under one purpose.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {expressions.map((e) => (
            <div key={e.name} className="flex flex-col justify-between border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent">
              <span className="w-fit bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider">{e.tag}</span>
              <div className="mt-16">
                <h3 className="font-display text-2xl font-bold">{e.name}</h3>
                <p className="mt-3 text-muted-foreground">{e.line}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MINISTRIES */}
      <section id="ministries" className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">What We Do</p>
          <h2 className="mb-14 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Serving the Church. Equipping Leaders. Advancing the Gospel.
          </h2>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map(([t, d], i) => (
              <a key={t} href="#" className="group bg-background p-8 transition hover:bg-primary hover:text-primary-foreground">
                <span className="font-display text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-display text-xl font-bold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{d}</p>
                <span className="mt-6 inline-block text-sm font-medium text-accent">Learn more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LAUNCH */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-10 border border-foreground p-10 md:grid-cols-[1fr_auto] md:p-14">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Church Planting</p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Church Launch, January 2027</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">New churches. New believers. Multiplying disciples on the Kilifi coast.</p>
          </div>
          <a href="#" className="bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">
            Get Involved
          </a>
        </div>
      </section>

      {/* PARTNER */}
      <section id="partner" className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Together for the gospel, in Kenya and beyond.
          </h2>
          <div className="grid grid-cols-2 gap-px self-end bg-primary-foreground/15">
            {["Pray", "Give", "Serve", "Short-Term Missions", "Strategic Partnerships", "Open Doors"].map((x) => (
              <a key={x} href="#" className="bg-primary p-6 font-display font-semibold transition hover:bg-accent hover:text-accent-foreground">
                {x}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-foreground py-14 text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold tracking-wide">CHANNELS OF CHRIST MINISTRIES</p>
            <p className="mt-1 text-sm opacity-70">One Vision • One Ministry • The Master's Mission</p>
          </div>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Channels of Christ Ministries. Kilifi, Kenya.</p>
        </div>
      </footer>
    </div>
  );
}
