import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">Skills</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Tools of the trade</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-medium text-foreground">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
