"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 h-[560px] w-full" />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full opacity-20 blur-3xl sm:h-96 sm:w-96"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 -z-10 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            Open to impactful engineering roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
          >
            {profile.name}
            <span className="mt-2 block text-2xl font-medium text-gradient sm:text-4xl">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>

            <div className="ml-1 flex items-center gap-3 text-muted">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="transition-colors hover:text-foreground"
              >
                <Mail size={19} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-8 text-sm text-muted"
          >
            <span>{profile.location}</span>
            <span className="hidden sm:inline">·</span>
            <span>5+ years of full-stack development experience</span>
            <span className="hidden sm:inline">·</span>
            <span>MERN · NestJS · AWS</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs lg:max-w-sm"
        >
          <div
            aria-hidden
            className="animate-float pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
          />
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface p-2 shadow-2xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem]">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
