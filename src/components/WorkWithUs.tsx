"use client";

import { useState } from "react";

/**
 * Placeholder contact mechanism — intake mechanism is TBD (PRD open item #1).
 * Swap INTAKE_EMAIL / TEAMS_CONTACT_URL below once the real destination is decided.
 * Submission opens a pre-filled email via mailto: as a working stand-in until a
 * real form backend (Microsoft Forms, etc.) is wired up.
 */
const INTAKE_EMAIL = "experience-team@placeholder.com";
const TEAMS_CONTACT_URL = "#";

export default function WorkWithUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agency, setAgency] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Intake request: ${name || "New project"}`;
    const body = `Name: ${name}\nEmail: ${email}\nAgency/Team: ${agency}\n\nProject details:\n${details}`;
    window.location.href = `mailto:${INTAKE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      id="work-with-us"
      className="rounded-xl border border-accent/30 bg-surface px-6 py-8 md:px-10 md:py-10"
    >
      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">Bring us in</h3>
      <p className="mt-2 text-text-secondary max-w-xl">
        Have a project that might need this? Reach out before the brief is set — the earlier, the
        more we can help shape it.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="intake-name" className="text-xs font-bold tracking-wide uppercase text-accent-muted">
              Name
            </label>
            <input
              id="intake-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-foreground placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="intake-email" className="text-xs font-bold tracking-wide uppercase text-accent-muted">
              Email
            </label>
            <input
              id="intake-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-foreground placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
              placeholder="you@agency.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="intake-agency" className="text-xs font-bold tracking-wide uppercase text-accent-muted">
            Agency / Team
          </label>
          <input
            id="intake-agency"
            type="text"
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-foreground placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
            placeholder="e.g. McCann"
          />
        </div>

        <div>
          <label htmlFor="intake-details" className="text-xs font-bold tracking-wide uppercase text-accent-muted">
            Project details
          </label>
          <textarea
            id="intake-details"
            required
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-foreground placeholder:text-text-secondary/60 focus:border-accent focus:outline-none resize-none"
            placeholder="What are you working on, and where are you in the process?"
          />
        </div>

        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-accent px-6 py-3 text-sm font-bold text-[#0d1620] hover:bg-accent-muted transition-colors cursor-pointer"
          >
            Send request
          </button>
          <a
            href={TEAMS_CONTACT_URL}
            className="w-full sm:w-auto text-center rounded-full border border-accent/40 px-6 py-3 text-sm font-bold text-foreground hover:border-accent transition-colors"
          >
            Message us on Teams
          </a>
        </div>
      </form>

      <p className="mt-4 text-xs text-text-secondary">
        Contact path placeholder — swap in the real form destination / Teams link before launch.
      </p>
    </div>
  );
}
