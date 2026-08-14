export const subNav = [
  { label: "Who", hash: "who-we-are" },
  { label: "What", hash: "what-we-do" },
  { label: "When", hash: "when-to-bring-us-in" },
  { label: "Clients", hash: "who-weve-worked-with" },
];

export const metaDescription =
  "A team of experiential producers, user-centered designers, and creative technologists, building brand experiences across Omnicom.";

export const whoWeAre = {
  eyebrow: "WHO",
  headlineLines: [
    "We are experiential producers,",
    "user-centered designers,",
    "& creative technologists.",
  ],
  accentLine: "—and we're already on your team.",
  body: "We sit within OP and Studio, and we work with any team at any Omnicom agency. Strategy, design, and build all sit on one team, working to one plan.",
  /** Project slugs shown in the first image scatter, offset/varying sizes. */
  scatterSlugs: [
    "state-street-fearless-girl",
    "verizon-unbreakable-controller",
    "sas-batting-lab",
    "mgm-shoey-bar",
  ],
};

export type Capability = {
  category: string;
  purpose: string;
  body: string;
};

export const whatWeDo = {
  eyebrow: "WHAT",
  headline: "We design, build, and launch.",
  accentLine: "—from pop-ups to digital platforms.",
  intro:
    "Audiences don't just want to be talked to. The work that stands out gives them something to do, and it keeps working long after the campaign ends.",
  capabilities: [
    {
      category: "Digital campaign extensions",
      purpose: "Take a campaign further than the ad",
      body: "Microsites, companion apps, social integrations, and digital extensions that give a campaign somewhere to go once someone's actually interested.",
    },
    {
      category: "Activations and installations",
      purpose: "Put something real in the world",
      body: "Physical builds, branded environments, and live moments — designed, engineered, and produced end to end, including the parts nobody wants to think about until week three.",
    },
    {
      category: "Interactive experiences",
      purpose: "Make the audience part of it",
      body: "Interactive tech, AI-driven moments, immersive environments, and hands-on experiences that turn viewers into participants.",
    },
    {
      category: "Platforms and products",
      purpose: "Build something that lasts",
      body: "Websites, tools, brand portals, and digital products with real architecture behind them, built to be maintained over time.",
    },
  ] satisfies Capability[],
  /** Project slugs shown in the second image scatter. */
  scatterSlugs: [
    "lockheed-martin-field-trip-to-mars",
    "prudential-flash-forward",
    "instax-website",
    "chick-fil-a-break-room",
  ],
};

export const whenToBringUsIn = {
  eyebrow: "WHEN",
  headline:
    "We work best when we're brought in early, so we can help shape what's possible before the brief is set.",
  stages: [
    { label: "A LOOSE IDEA", question: "Could we actually do this?" },
    { label: "WRITING THE BRIEF", question: "What should the brief ask for?" },
    { label: "CONCEPTING", question: "Can it be built — and for how much?" },
    { label: "READY TO BUILD", question: "Who's going to make this?" },
  ],
  closingParagraphs: [
    "If you have any questions like these, ask us — there's no wrong time to get in touch.",
    "Not sure the budget matches the idea? That's a quick conversation, and better now than after a client's seen a concept.",
    "Still sending brand guidelines around as a PDF? We turn those into portals people actually use.",
    "Solving problems is a lot of what we do.",
  ],
};

export const whoWeveWorkedWith = {
  eyebrow: "CLIENTS",
};
