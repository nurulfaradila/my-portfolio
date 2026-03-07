import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      "C",
      "Go",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "AssemblyScript",
      "CSS3",
      "HTML5",
    ],
  },
  {
    category: "Frontend Development",
    items: ["React", "TailwindCSS", "Bootstrap", "Vite", "Next JS", "Chart.js", "Plotly"],
  },
  {
    category: "Backend Development / APIs",
    items: [
      "FastAPI",
      "Flask",
      "Spring",
      "SQLAlchemy",
      "Celery",
      "JWT (authentication / security)",
      "Socket.io",
      "RabbitMQ",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Elasticsearch", "Redis"],
  },
  {
    category: "Data Science / AI / ML",
    items: ["NumPy", "Pandas", "PyTorch", "OpenCV"],
  },
  {
    category: "DevOps / Deployment / Tools",
    items: ["Docker", "Linux", "Vercel", "Git / GitHub", "NPM", "Prometheus"],
  },
  {
    category: "IoT / Hardware",
    items: ["Raspberry Pi", "Arduino"],
  },
  {
    category: "Testing & API Tools",
    items: ["Postman", "Testing-Library", "Swagger", "Pytest", "JSON"],
  },
];
