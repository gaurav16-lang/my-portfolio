import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row sm:px-8">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span className="font-mono">Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
