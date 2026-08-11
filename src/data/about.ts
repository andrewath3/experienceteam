export const subNav = [
  { label: "Who we are", hash: "who-we-are" },
  { label: "What we do", hash: "what-we-do" },
  { label: "When to bring us in", hash: "when-to-bring-us-in" },
];

export const metaDescription =
  "A team of experiential producers, user-centered designers, and creative technologists, building brand experiences across Omnicom.";

export const whoWeAre = {
  eyebrow: "WHO WE ARE",
  headlineLines: [
    "We are a team of",
    "experiential producers,",
    "user-centered designers,",
    "& creative technologists.",
  ],
  accentLine: "—and we're already on your team.",
  body1:
    "We design and build brand experiences that live beyond the campaign — the things people can walk into, pick up, and take part in. We sit within OP and Studio, and we're available to any team at any Omnicom agency.",
  body2:
    "Strategy, design, and build all sit on one team, so you're not stitching three vendors together and hoping they talk to each other. We plug into how you already work — early, late, or somewhere in the messy middle.",
  /** Project slugs shown in the first image scatter, offset/varying sizes. */
  scatterSlugs: [
    "state-street-fearless-girl",
    "verizon-unbreakable-controller",
    "sas-batting-lab",
    "mgm-shoey-bar",
  ],
};

export type Capability = {
  number: string;
  verb: string;
  category: string;
  body: string;
};

export const whatWeDo = {
  eyebrow: "WHAT WE DO",
  headline:
    "We design, build, and produce brand experiences that reach audiences beyond the campaign, no matter the format.",
  intro:
    "Audiences don't just want to be talked to anymore. The work that stands out gives them something to do. That's what we take on — from a single interactive moment inside a bigger campaign through to a full build that lives on long after the flight ends.",
  capabilities: [
    {
      number: "01",
      verb: "Take a campaign further than the ad",
      category: "Digital campaign extensions",
      body: "Microsites, companion apps, social integrations, and digital extensions that give a campaign somewhere to go once someone's actually interested.",
    },
    {
      number: "02",
      verb: "Put something real in the world",
      category: "Activations and installations",
      body: "Physical builds, branded environments, and live moments — designed, engineered, and produced end to end, including the parts nobody wants to think about until week three.",
    },
    {
      number: "03",
      verb: "Make the audience part of it",
      category: "Interactive experiences",
      body: "Interactive tech, AI-driven moments, immersive environments, and hands-on experiences that turn viewers into participants.",
    },
    {
      number: "04",
      verb: "Build something that lasts",
      category: "Platforms and products",
      body: "Websites, tools, and digital products with real architecture behind them, built to be maintained rather than just launched.",
    },
  ] satisfies Capability[],
  workPointer: "See what this looks like in practice",
  /** Project slugs shown in the second image scatter. */
  scatterSlugs: [
    "lockheed-martin-field-trip-to-mars",
    "prudential-flash-forward",
    "instax-website",
    "chick-fil-a-break-room",
  ],
};

export const whenToBringUsIn = {
  eyebrow: "WHEN TO BRING US IN",
  headline:
    "We work best when we're brought in early, so we can help shape what's possible before the brief is set.",
  stages: [
    { label: "A LOOSE IDEA", question: "Could we actually do this?" },
    { label: "WRITING THE BRIEF", question: "What should the brief ask for?" },
    { label: "CONCEPTING", question: "Can it be built — and for how much?" },
    { label: "READY TO BUILD", question: "Who's going to make this?" },
  ],
  closing:
    "If you're asking any of these, ask us. The earlier we're in, the more we can shape what's possible — but there's no wrong time to get in touch.",
  budgetLine:
    "Not sure whether your budget matches the idea? Ask early — that's a quick conversation, and much better to have now than after a client has seen a concept.",
};

export const whoWeveWorkedWith = {
  eyebrow: "WHO WE'VE WORKED WITH",
};
