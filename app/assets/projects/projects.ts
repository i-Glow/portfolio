import type { project } from "../../types";

const dev = process.env.NEXT_PUBLIC_DEV === "DEV" ? "/" : "";

function generateImages(
  prefix: string,
  count: number,
  small = false
): string[] {
  return Array.from({ length: count }).map(
    (_, num) =>
      `${dev}${prefix}/${prefix}-${num + 1}${small ? "-small" : ""}.png`
  );
}

const projects: project[] = [
  {
    title: "Elomradz",
    description: "Agencies marketplace",
    tools: [
      "React js",
      "Tailwind css",
      "shadcn",
      "React Query",
      "Typescript",
      "Node.js",
      "MySQL",
      "Prisma ORM",
    ],
    thumbnail: dev + "elomradz/elomradz-1.png",
    images: generateImages("elomradz", 4),
    loadingImages: generateImages("elomradz", 4, true),
    placeholder: dev + "elomradz/elomradz-small.png",
    link: "https://www.elomradz.com",
    repository: "",
  },
  {
    title: "Dental stellar",
    description: "Dental clinic mangament system",
    tools: [
      "React js",
      "Tailwind css",
      "shadcn",
      "React Query",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
    ],
    thumbnail: dev + "dental-stellar/dental-stellar-1.png",
    images: generateImages("dental-stellar", 3),
    loadingImages: generateImages("dental-stellar", 3, false),
    placeholder: dev + "dental-stellar/dental-stellar.png",
    link: "",
    repository: "",
  },
  {
    title: "Smart School",
    description: "AI powered school managment system",
    tools: [
      "Next js",
      "Tailwind css",
      "shadcn",
      "Typescript",
      "PostgreSQL",
      "Prisma ORM",
      "OpenAI API",
    ],
    thumbnail: dev + "smart-school/smart-school-1.png",
    images: generateImages("smart-school", 4),
    loadingImages: generateImages("smart-school", 4, false),
    placeholder: dev + "smart-school/smart-school.png",
    link: "",
    repository: "",
  },
  {
    title: "Buyme shopping",
    description: "Ecommerce",
    tools: ["React js", "Styled components", "Typescript", "Pocketbase"],
    thumbnail: dev + "buyme/buyme-1.png",
    images: generateImages("buyme", 4),
    loadingImages: generateImages("buyme", 4, true),
    placeholder: dev + "buyme/buyme-small.png",
    link: "https://www.buyme-dz.com",
    repository: "",
  },
  {
    title: "Cleano",
    description: "Cleaning services platform",
    tools: ["React js", "Typescript", "Tailwind css", "shadcn"],
    thumbnail: dev + "cleano/cleano-1.png",
    images: generateImages("cleano", 4),
    loadingImages: generateImages("cleano", 4, true),
    placeholder: dev + "cleano/cleano-small.png",
    link: "https://cleaning-services-platform.onrender.com",
    repository: "https://github.com/i-Glow/cleaning-services-platform",
  },
  {
    title: "StockGG",
    description: "Inventory management system",
    tools: [
      "React js",
      "Nodejs",
      "PostgreSQL",
      "SequelizeORM",
      "Google Cloud Platform",
    ],
    thumbnail: dev + "stockgg/stockgg-1.png",
    images: generateImages("stockgg", 7),
    loadingImages: generateImages("stockgg", 7, true),
    placeholder: dev + "stockgg/stockgg-small.png",
    link: "",
    repository: "",
  },
  {
    title: "electro industry",
    description: "Company website",
    tools: ["React js", "Styled components", "Firebase"],
    thumbnail: dev + "electro-industry/electro-industry-1.png",
    images: generateImages("electro-industry", 1),
    loadingImages: generateImages("electro-industry", 1, true),
    placeholder: dev + "electro-industry/electro-industry-small.png",
    link: "https://www.electroindustry.io",
    repository: "",
  },
  {
    title: "Travelious",
    description: "Traveling agency website",
    tools: ["PHP", "MySQL", "Javascript"],
    thumbnail: dev + "travelious/travelious-1.png",
    images: generateImages("travelious", 1),
    placeholder: dev + "travelious/travelious-small.png",
    link: "",
    repository: "https://github.com/i-Glow/travel-agency",
  },
  {
    title: "Fit Fuel",
    description: "Ecommerce",
    tools: ["React js", "Tailwind css", "Firebase"],
    thumbnail: dev + "fitfuel/fitfuel-1.png",
    images: generateImages("fitfuel", 3),
    placeholder: dev + "fitfuel/fitfuel-small.png",
    link: "",
    repository: "",
  },

  {
    title: "Minesweeper",
    description: "Minsweeper game",
    tools: ["HTML", "CSS", "Javascript"],
    thumbnail: dev + "minesweeper/minesweeper-1.png",
    images: generateImages("minesweeper", 1),
    placeholder: dev + "minesweeper/minesweeper-small.png",
    link: "",
    repository: "https://github.com/i-Glow/Minesweeper",
  },
  {
    title: "Roadstructor",
    description: "Traffic laws learning app",
    tools: ["Tauri", "React", "Styled components"],
    thumbnail: dev + "roadstructor/roadstructor-1.png",
    images: generateImages("roadstructor", 1),
    placeholder: dev + "roadstructor/roadstructor-small.png",
    link: "",
    repository: "https://github.com/i-Glow/code-route",
  },
];

export default projects;
