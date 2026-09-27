import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">Projects</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Things I&apos;ve built</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <div
              className={`group h-full rounded-2xl border p-7 transition-colors ${
                project.featured
                  ? "border-accent/40 bg-surface"
                  : "border-border bg-surface hover:border-accent/40"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium">{project.name}</h3>
                    {project.featured && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">{project.role}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="shrink-0 rounded-full border border-border p-2 text-muted transition-colors group-hover:border-accent group-hover:text-accent"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
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
