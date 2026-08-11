import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { getContactFormFields, getContactPage, getIntakeEmail } from "@/lib/content/contact";
import { getGlobalContent } from "@/lib/content/global";

export const metadata: Metadata = {
  title: "Contact — Experience Team",
};

export default function ContactPage() {
  const contactPage = getContactPage();
  const contactFormFields = getContactFormFields();
  const intakeEmail = getIntakeEmail();
  const { teamsUrl } = getGlobalContent();

  return (
    <div className="px-6 md:px-10 max-w-2xl mx-auto pt-16 pb-24">
      <Eyebrow>{contactPage.eyebrow}</Eyebrow>
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
        {contactPage.headline}
      </h1>
      <p className="mt-5 text-lg text-text-secondary leading-relaxed">{contactPage.body}</p>

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-border-subtle bg-surface px-5 py-4">
        <p className="text-sm text-text-secondary">{contactPage.teamsPrompt}</p>
        <a
          href={teamsUrl}
          className="ml-auto shrink-0 rounded-full border border-accent/40 px-4 py-2 text-sm font-bold text-foreground hover:border-accent transition-colors"
        >
          {contactPage.teamsLabel}
        </a>
      </div>

      <div className="mt-10">
        <ContactForm contactPage={contactPage} contactFormFields={contactFormFields} intakeEmail={intakeEmail} />
      </div>
    </div>
  );
}
