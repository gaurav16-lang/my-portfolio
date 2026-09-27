"use client";

import { useState } from "react";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op, mailto link still works
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, var(--accent), transparent 70%)" }}
      />

      <Reveal className="text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">Contact</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Let&apos;s build something.</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">
          Open to senior full-stack roles and interesting freelance work. The fastest way to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
        >
          <Mail size={16} />
          {profile.email}
        </a>
        <button
          onClick={copyEmail}
          aria-label="Copy email address"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {copied ? <Check size={16} className="text-accent-2" /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </Reveal>

      <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
        <span className="flex items-center gap-2">
          <Phone size={15} />
          {profile.phone}
        </span>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <GithubIcon size={15} />
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <LinkedinIcon size={15} />
          LinkedIn
        </a>
      </Reveal>
    </section>
  );
}
