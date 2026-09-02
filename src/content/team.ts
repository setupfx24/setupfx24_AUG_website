export type TeamMember = {
  name: string;
  role: string;
  /** Path under /public. Leave undefined until the headshot exists. */
  image?: string;
};

export type TeamCategory = {
  id: string;
  title: string;
  blurb: string;
  /**
   * Real people only. Empty means the grid renders `placeholders` blank frames
   * instead — the site must never show invented names or stock faces as staff.
   */
  members: TeamMember[];
  /** Frames to draw while `members` is empty. */
  placeholders: number;
};

export const TEAM_CATEGORIES: TeamCategory[] = [
  {
    id: "owner",
    title: "Leadership",
    blurb: "The person accountable for every platform we ship.",
    members: [
      {
        name: "Shivam Singh",
        role: "Founder & Director",
        // The file on disk carries a space; encoded so the URL stays valid.
        image: "/images/Shivam%20Singh.png",
      },
    ],
    placeholders: 1,
  },
  {
    id: "development",
    title: "Development",
    blurb:
      "Engineers building the trading terminal, risk logic and back office.",
    // Files on disk carry spaces; encoded so the URLs stay valid.
    members: [
      {
        name: "Vibhooti Tiwari",
        role: "Senior Developer",
        image: "/images/Vibhooti%20Tiwari.png",
      },
      {
        name: "Vaishanv Kumbhar",
        role: "Senior Developer",
        image: "/images/Vaishanv%20Kumbhar.png",
      },
      {
        name: "Tarun Dewangan",
        role: "Developer",
        image: "/images/Tarun%20Dewangan.png",
      },
      {
        name: "Harishankar Banjare",
        role: "Developer",
        image: "/images/Harishankar%20Banjare.png",
      },
      {
        name: "Shivam Kumar",
        role: "Developer",
        image: "/images/Shivam%20Kumar.png",
      },
      {
        name: "Omkar Mishra",
        role: "Developer",
        image: "/images/Omkar%20Mishra.png",
      },
    ],
    placeholders: 6,
  },
  {
    id: "management",
    title: "Management",
    blurb: "Scoping, planning and delivery — the people who own your timeline.",
    // Files on disk carry spaces; encoded so the URLs stay valid.
    members: [
      {
        name: "Suresh Chaudhary",
        role: "Senior Manager",
        image: "/images/Suresh%20Chaudhary.png",
      },
      {
        name: "Nidhi Kashyap",
        role: "Operation Manager",
        // Lowercase "k" matches the file on disk.
        image: "/images/Nidhi%20kashyap.png",
      },
      {
        name: "Ayush Thakur",
        role: "Sales Executive",
        image: "/images/Ayush%20Thakur.png",
      },
    ],
    placeholders: 3,
  },
  {
    id: "design",
    title: "Designing",
    blurb: "UI/UX for dense data and fast decisions, across web and mobile.",
    // Files on disk carry spaces; encoded so the URLs stay valid.
    members: [
      {
        name: "Dewanng Kumar",
        role: "UI Designer, Social Media Management",
        image: "/images/Dewanng%20Kumar.png",
      },
    ],
    placeholders: 1,
  },
];
