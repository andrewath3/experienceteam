export const contactPage = {
  eyebrow: "CONTACT",
  headline: "Let's chat!",
  body: "Fully briefed or still a half-formed idea in a deck someone sent you this morning — either way, send it over. We'd rather hear about it early.",
  teamsPrompt: "Just want to ask something quick?",
  teamsLabel: "Chat on MS Teams",
  submitLabel: "Send it over",
  confirmation: "Got it — thanks. Someone from the team will be in touch shortly.",
  error: "Something went wrong on our end. Try again, or just message us on Teams.",
};

export const contactFormFields = {
  name: { label: "Your name", placeholder: "" },
  email: { label: "Your email", placeholder: "" },
  agency: { label: "Agency / team", placeholder: "" },
  brand: { label: "Client or brand", placeholder: "", optional: true },
  details: {
    label: "What are you working on?",
    placeholder: "A rough description is fine. Nothing here needs to be final.",
  },
  timing: {
    label: "Roughly when?",
    placeholder: 'Even "sometime this fall" helps.',
    optional: true,
  },
};

/** Placeholder — swap in the real intake destination before launch. */
export const intakeEmail = "experience-team@placeholder.com";
