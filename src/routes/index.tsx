import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/alex-runtime-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Runtime — Software Engineering News" },
      {
        name: "description",
        content:
          "Software engineering news that actually matters. Curated news, tools, and war stories for software engineers.",
      },
      { property: "og:title", content: "Alex Runtime — Software Engineering News" },
      {
        property: "og:description",
        content:
          "Software engineering news that actually matters. Curated news, tools, and war stories for software engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-bg px-6 py-16 font-display text-brand-text">
      {/* Soft radial glow behind the card */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(3, 178, 235, 0.15) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <img
          src={logo}
          alt="Alex Runtime logo"
          width={140}
          height={140}
          className="h-36 w-36 rounded-full shadow-[0_0_40px_rgba(3,178,235,0.25)]"
        />

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Alex Runtime
        </h1>

        <p className="mt-4 text-lg text-brand-muted">
          Software engineering news that actually matters.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://www.youtube.com/@AlexRuntime"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-cyan px-6 py-3 text-base font-semibold text-brand-bg shadow-lg shadow-brand-cyan/20 transition hover:bg-brand-cyan/90 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-brand-bg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>

          <a
            href="https://alexruntime.kit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-cyan/30 bg-brand-card px-6 py-3 text-base font-semibold text-brand-text transition hover:border-brand-cyan hover:bg-brand-cyan/10 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-brand-bg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get the newsletter
          </a>
        </div>

        <p className="mt-8 max-w-xs text-sm text-brand-muted/80">
          Curated news, tools, and war stories for engineers shipping real code.
        </p>
      </div>

      <footer className="absolute bottom-6 text-xs text-brand-muted/60">
        © {new Date().getFullYear()} Alex Runtime
      </footer>
    </main>
  );
}
