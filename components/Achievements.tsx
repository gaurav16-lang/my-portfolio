import { Award, GraduationCap, Trophy } from "lucide-react";
import { achievements, certifications, education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Highlights</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Notable achievements</h2>
          </Reveal>

          <div className="mt-8 space-y-4">
            {achievements.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                  <Trophy size={18} className="mt-0.5 shrink-0 text-accent-2" />
                  <p className="text-sm leading-relaxed text-muted">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Background</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Education</h2>
          </Reveal>

          <div className="mt-8 space-y-4">
            {education.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                  <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted">{item.place}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={(education.length + i) * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                  <Award size={18} className="shrink-0 text-accent-2" />
                  <p className="text-sm text-muted">{cert}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
