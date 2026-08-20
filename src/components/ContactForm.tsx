"use client";

import { useState } from "react";
import { contactPage, contactFormFields, intakeEmail } from "@/data/contact";

/**
 * No form backend exists yet — submitting opens a pre-filled email via mailto:
 * as a working stand-in. Swap for a real backend before launch (per PRD open
 * item: "submits to a single email destination — no routing logic").
 */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agency, setAgency] = useState("");
  const [brand, setBrand] = useState("");
  const [details, setDetails] = useState("");
  const [timing, setTiming] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New project inquiry: ${name || "Untitled"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Agency / team: ${agency}`,
      brand && `Client or brand: ${brand}`,
      timing && `Roughly when: ${timing}`,
      "",
      "What they're working on:",
      details,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${intakeEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-accent/30 bg-surface px-6 py-8 text-center">
        <p className="text-lg font-semibold text-foreground">{contactPage.confirmation}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label={contactFormFields.name.label} value={name} onChange={setName} required />
        <Field id="email" label={contactFormFields.email.label} value={email} onChange={setEmail} type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="agency" label={contactFormFields.agency.label} value={agency} onChange={setAgency} required />
        <Field
          id="brand"
          label={`${contactFormFields.brand.label} (optional)`}
          value={brand}
          onChange={setBrand}
        />
      </div>
      <TextArea
        id="details"
        label={contactFormFields.details.label}
        placeholder={contactFormFields.details.placeholder}
        value={details}
        onChange={setDetails}
        required
      />
      <Field
        id="timing"
        label={`${contactFormFields.timing.label} (optional)`}
        placeholder={contactFormFields.timing.placeholder}
        value={timing}
        onChange={setTiming}
      />

      <button
        type="submit"
        className="mt-2 w-full sm:w-auto rounded-full bg-accent px-8 py-3 text-sm font-bold text-on-accent hover:bg-accent-muted transition-colors cursor-pointer"
      >
        {contactPage.submitLabel}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold tracking-wide uppercase text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-foreground placeholder:text-text-secondary/60 focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold tracking-wide uppercase text-foreground">
        {label}
      </label>
      <textarea
        id={id}
        required={required}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-foreground placeholder:text-text-secondary/60 focus:border-accent focus:outline-none resize-none"
      />
    </div>
  );
}
