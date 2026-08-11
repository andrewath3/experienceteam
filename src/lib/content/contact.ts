import { readContentFile } from "./fs";
import type { ContactFormFields, ContactPageContent } from "./types";

export function getContactPage(): ContactPageContent {
  const { data, body } = readContentFile("contact/page.md");
  return {
    eyebrow: data.eyebrow as string,
    headline: data.headline as string,
    body,
    teamsPrompt: data.teamsPrompt as string,
    teamsLabel: data.teamsLabel as string,
    submitLabel: data.submitLabel as string,
    confirmation: data.confirmation as string,
    error: data.error as string,
  };
}

export function getContactFormFields(): ContactFormFields {
  const { data } = readContentFile("contact/fields.md");
  return {
    name: data.name as ContactFormFields["name"],
    email: data.email as ContactFormFields["email"],
    agency: data.agency as ContactFormFields["agency"],
    brand: data.brand as ContactFormFields["brand"],
    details: data.details as ContactFormFields["details"],
    timing: data.timing as ContactFormFields["timing"],
  };
}

export function getIntakeEmail(): string {
  const { data } = readContentFile("contact/fields.md");
  return data.intakeEmail as string;
}
