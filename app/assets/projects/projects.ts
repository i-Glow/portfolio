import type { project } from "../../types";

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
    ],
    image: "elomradz.png",
    link: "https://www.elomradz.com",
    repository: "",
  },
  {
    title: "Buyme shopping",
    description: "Ecommerce",
    tools: ["React js", "Styled components", "Typescript", "Pocketbase"],
    image: "buyme.png",
    link: "https://www.buyme-dz.com",
    repository: "",
  },
  {
    title: "Travelious",
    description: "Traveling agency website",
    tools: ["PHP", "MySQL", "Javascript"],
    image: "travelious.png",
    link: "",
    repository: "https://github.com/i-Glow/travel-agency",
  },
  {
    title: "electro industry",
    description: "Company website",
    tools: ["React js", "Styled components", "Firebase"],
    image: "electro-industry.png",
    link: "https://www.electroindustry.io",
    repository: "",
  },
  {
    title: "Minesweeper",
    description: "Minsweeper game",
    tools: ["HTML", "CSS", "Javascript"],
    image: "minesweeper.png",
    link: "",
    repository: "https://github.com/i-Glow/Minesweeper",
  },
  {
    title: "Roadstructor",
    description: "Traffic laws learning app",
    tools: ["Tauri", "React", "Styled components"],
    image: "roadstructor.png",
    link: "",
    repository: "https://github.com/i-Glow/code-route",
  },
];

export default projects;
