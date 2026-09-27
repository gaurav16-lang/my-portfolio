import { Code2, Layers, Rocket, Users } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Rocket,
    title: "Ship end-to-end",
    body: "Independently architected and shipped Invarium.ai from a blank repo to production — auth, data model, queues, and UI.",
  },
  {
    icon: Layers,
    title: "Systems that scale",
    body: "Designed RESTful APIs and microservices on AWS, tuning latency and throughput under real production load.",
  },
  {
    icon: Code2,
    title: "AI-accelerated engineering",
    body: "Use Claude Code, Cursor, and Playwright MCP daily — for migrations, automated testing, and faster delivery.",
  },
  {
    icon: Users,
    title: "Mentor & lead",
    body: "Ran structured code reviews and technical sessions that raised code quality and team velocity.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">About</span>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          I build reliable products, end to end.
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Four years across health-tech and enterprise migrations, plus an independent product built solo.
          I care about clean architecture, fast iteration, and using AI tooling to move faster without cutting corners.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
              <p.icon size={22} className="text-accent" />
              <h3 className="mt-4 text-base font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
