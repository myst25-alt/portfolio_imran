export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: { demo?: string; github?: string };
};

export const projects: Project[] = [
  {
    id: "reel-showcase",
    title: "2025 Reel — Cinematic & Social Cuts",
    description:
      "A curated reel of my favorite sequences across travel, weddings, and brand content. Tight pacing, tasteful transitions, and clean audio sweetening.",
    tags: ["Premiere Pro", "After Effects", "Sound Design", "Color Grading"],
    image: "/projects/reel-showcase-cover.webp",
    links: { demo: "#" },
  },
  {
    id: "wedding-highlights",
    title: "Wedding Highlights — Elegant Story Cut",
    description:
      "Romantic highlight film focused on narrative beats and emotive grading, optimized for 60–90s social share.",
    tags: ["Premiere Pro", "Color Grading", "Music Sync"],
    image: "/projects/wedding-highlights-cover.webp",
    links: { demo: "#" },
  },
  {
    id: "corporate-ad",
    title: "Corporate Ad — Product Teaser",
    description:
      "Snappy, visually consistent product teaser with branded lower-thirds and logo stingers.",
    tags: ["After Effects", "Motion Graphics", "Branding"],
    image: "/projects/corporate-ad-cover.webp",
    links: { demo: "#" },
  },
  {
    id: "youtube-packages",
    title: "YouTube Package — Intro/Lower Thirds/End Screen",
    description:
      "Channel branding package with modular motion templates and consistent typography.",
    tags: ["After Effects", "Templates", "Motion Graphics"],
    image: "/projects/youtube-packages-cover.webp",
    links: { demo: "#" },
  },
  {
    id: "travel-film",
    title: "Travel Film — Color-driven Cut",
    description:
      "A vibe-focused travel cut driven by color, texture overlays, and rhythmic edits.",
    tags: ["Premiere Pro", "LUTs", "Sound Design"],
    image: "/projects/travel-film-cover.webp",
    links: { demo: "#" },
  },
];
