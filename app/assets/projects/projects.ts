import type { project } from "../../types";

const dev = process.env.ENV === "dev" ? "/" : "";

function generateImages(prefix: string, count: number): string[] {
  return Array.from({ length: count }).map(
    (_, num) => `${dev}${prefix}/${prefix}-${num + 1}.png`
  );
}

const projects: project[] = [
  {
    title: "Elomradz",
    description: "An agency hosting webapp",
    tools: [
      "React js",
      "Tailwind css",
      "shadcn",
      "Typescript",
      "Node.js",
      "MySQL",
      "Prisma ORM",
    ],
    thumbnail: dev + "elomradz.png",
    images: generateImages("elomradz", 4),
    link: "https://www.elomradz.com",
    repository: "",
  },
  {
    title: "Buyme shopping",
    description: "Ecommerce",
    tools: ["React js", "Styled components", "Typescript", "Pocketbase"],
    thumbnail: dev + "buyme.png",
    images: generateImages("buyme", 4),
    link: "https://www.buyme-dz.com",
    repository: "",
  },
  {
    title: "Travelious",
    description: "Traveling agency website",
    tools: ["PHP", "MySQL", "Javascript"],
    thumbnail: dev + "travelious.png",
    images: generateImages("travelious", 1),
    link: "",
    repository: "https://github.com/i-Glow/travel-agency",
  },
  {
    title: "Fit Fuel",
    description: "Ecommerce",
    tools: ["React js", "Tailwind css", "Firebase"],
    thumbnail: dev + "fitfuel.png",
    images: generateImages("fitfuel", 3),
    link: "",
    repository: "",
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
    thumbnail: dev + "stockgg.png",
    images: generateImages("stockgg", 7),
    link: "",
    repository: "",
  },
  {
    title: "electro industry",
    description: "Company website",
    tools: ["React js", "Styled components", "Firebase"],
    thumbnail: dev + "electro-industry.png",
    images: generateImages("electro-industry", 1),
    link: "https://www.electroindustry.io",
    repository: "",
  },
  {
    title: "Minesweeper",
    description: "Minsweeper game",
    tools: ["HTML", "CSS", "Javascript"],
    thumbnail: dev + "minesweeper.png",
    images: generateImages("minesweeper", 1),
    link: "",
    repository: "https://github.com/i-Glow/Minesweeper",
  },
  {
    title: "Roadstructor",
    description: "Traffic laws learning app",
    tools: ["Tauri", "React", "Styled components"],
    thumbnail: dev + "roadstructor.png",
    images: generateImages("roadstructor", 1),
    link: "",
    repository: "https://github.com/i-Glow/code-route",
  },
];

export default projects;
