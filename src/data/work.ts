export type WorkItem = {
  client: string;
  title: string;
  image: string;
  /** Awards/recognition for this project, if any — empty for now, populate as they come in. */
  awards?: string[];
  /** Budget band, from the project scale tracker. */
  budget?: string;
  /** Production timeline, from the project scale tracker. */
  timeline?: string;
  /** Production partner, from the project scale tracker. */
  partner?: string;
};

export const work: WorkItem[] = [
  { client: "State Street", title: "Fearless Girl", image: "/case-studies/state-street-fearless-girl.jpg", awards: [] },
  {
    client: "Verizon",
    title: "The Unbreakable Controller",
    image: "/case-studies/verizon-unbreakable-controller.jpg",
    awards: [],
    budget: "$200–300k",
    timeline: "13–16 Weeks",
    partner: "BPL",
  },
  { client: "Annovera", title: "Website & Companion App", image: "/case-studies/annovera-website-app.jpg", awards: [] },
  {
    client: "Lockheed Martin",
    title: "Robot Recruiter",
    image: "/case-studies/lockheed-martin-robot-recruiter.jpg",
    awards: [],
    budget: "$200–300k",
    timeline: "21–24 Weeks",
    partner: "Patten",
  },
  { client: "Mastercard", title: "Tap, Go & Play", image: "/case-studies/mastercard-tap-go-play.jpg", awards: [] },
  {
    client: "Lockheed Martin",
    title: "Field Trip to Mars",
    image: "/case-studies/lockheed-martin-field-trip-to-mars.jpg",
    awards: [],
    partner: "Framestore",
  },
  { client: "NY Lottery", title: "Must Love Dogs", image: "/case-studies/ny-lottery-must-love-dogs.jpg", awards: [] },
  {
    client: "Prudential",
    title: "Flash Forward",
    image: "/case-studies/prudential-flash-forward.jpg",
    awards: [],
    budget: "$200–300k",
    timeline: "8–12 Weeks",
  },
  { client: "Instax", title: "Website", image: "/case-studies/instax-website.jpg", awards: [] },
  { client: "State Street", title: "The Loudest Bell", image: "/case-studies/state-street-loudest-bell.jpg", awards: [] },
  {
    client: "MGM",
    title: "Shoey Bar",
    image: "/case-studies/mgm-shoey-bar.jpg",
    awards: [],
    budget: "$200–300k",
    timeline: "8–12 Weeks",
  },
  {
    client: "SAS",
    title: "The Batting Lab",
    image: "/case-studies/sas-batting-lab.jpg",
    awards: [],
    budget: "$400–600k",
    timeline: "13–16 Weeks",
    partner: "Volvox",
  },
  { client: "Lysol", title: "Mini Labs", image: "/case-studies/lysol-mini-labs.jpg", awards: [] },
  {
    client: "Chick-fil-A",
    title: "The Break Room",
    image: "/case-studies/chick-fil-a-break-room.jpg",
    awards: [],
    budget: "$750k+",
    timeline: "25+ Weeks",
    partner: "Factory 360",
  },
  { client: "Mucinex", title: "Monsters in Waiting", image: "/case-studies/mucinex-monsters-in-waiting.jpg", awards: [] },
];
