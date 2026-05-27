export type AuthorId = "swati" | "krishnan" | "matt" | "austin" | "santosh";

export interface Author {
  id: AuthorId;
  name: string;
  role: string;
  initials: string;
  gradient: string; // tailwind gradient classes
  bio: string;
  linkedin: string;
}

export const authors: Record<AuthorId, Author> = {
  swati: {
    id: "swati",
    name: "Swati Sahu",
    role: "Growth",
    initials: "SS",
    gradient: "from-accent/80 to-orange-300",
    bio: "Swati leads growth at Nexus², working with retail and e-commerce teams to turn AI into measurable conversion.",
    linkedin: "https://www.linkedin.com/",
  },
  krishnan: {
    id: "krishnan",
    name: "Krishnan N.",
    role: "Founder",
    initials: "KN",
    gradient: "from-accent to-emerald-400",
    bio: "Krishnan founded Nexus² to build the AI layer between enterprise data and every customer surface.",
    linkedin: "https://www.linkedin.com/",
  },
  matt: {
    id: "matt",
    name: "Matt Ramanathan",
    role: "Product",
    initials: "MR",
    gradient: "from-rose-300 to-accent",
    bio: "Matt leads product at Nexus², shaping how Nexi shows up across chat, voice, search, agents and the API.",
    linkedin: "https://www.linkedin.com/",
  },
  austin: {
    id: "austin",
    name: "Austin",
    role: "Engineering",
    initials: "AU",
    gradient: "from-amber-300 to-accent",
    bio: "Austin works on the runtime and metering layer that makes conversations, minutes and tokens add up honestly.",
    linkedin: "https://www.linkedin.com/",
  },
  santosh: {
    id: "santosh",
    name: "Santosh N.",
    role: "Engineering",
    initials: "SN",
    gradient: "from-accent to-sky-300",
    bio: "Santosh builds the orchestration core — the brain that decides what Nexi does on every surface.",
    linkedin: "https://www.linkedin.com/",
  },
};
