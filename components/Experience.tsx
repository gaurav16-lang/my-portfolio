"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";

const COLLAPSED_COUNT = 5;

function ExperienceCard({ item, index }: { item: (typeof experience)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = item.points.length > COLLAPSED_COUNT;
  const visiblePoints = expanded ? item.points : item.points.slice(0, COLLAPSED_COUNT);

  return (
    <Reveal delay={index * 0.08}>
      <div className="relative pl-8 sm:pl-10">
        <span
          className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
            item.current ? "border-accent bg-accent" : "border-border bg-surface"
          }`}
        />
        {index !== experience.length - 1 && (
          <span className="absolute left-[5px] top-5 bottom-[-2.5rem] w-px bg-border" />
        )}

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-medium">{item.role}</h3>
              <p className="mt-1 text-sm text-accent">{item.company}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
                {item.period}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted">
                <MapPin size={12} />
                {item.location}
              </span>
            </div>
          </div>

          <ul className="mt-5 space-y-2.5">
            {visiblePoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                {point}
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent transition-opacity hover:opacity-80"
            >
              {expanded ? "Show less" : `Show ${item.points.length - COLLAPSED_COUNT} more`}
              <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">Experience</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Where I&apos;ve worked</h2>
      </Reveal>

      <div className="mt-12 space-y-10">
        {experience.map((item, i) => (
          <ExperienceCard key={item.company + item.period} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
