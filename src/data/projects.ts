import { Project } from "@/types";
import { tr } from "framer-motion/client";

export const projects: Project[] = [
  {
    id: "pcb-defect-detection-system",
    title: "PCB Defect Detection System",
    description:
      "Developed the backend architecture for an automated PCB defect detection system, ensuring scalability and reliability.",
    problem:
      "Manual PCB inspection is time-consuming, error-prone, and hard to scale in high-volume manufacturing.",
    solution:
      "Built a YOLOv8-based defect detection pipeline with FastAPI, asynchronous processing, and optimized server-side workflows for efficiency.",
    results:
      "Enabled faster, more reliable, and scalable PCB inspections by improving backend performance and automating data processing.",
    techStack: [
      "Celery",
      "Docker",
      "FastAPI",
      "PostgreSQL",
      "Python",
      "PyTorch",
      "RabbitMQ",
      "Streamlit",
      "SQLAlchemy",
      "YOLOv8",
    ],
    category: "Backend, Full-Stack, Machine Learning",
    image: "/projects/1.png",
    githubUrl: "https://github.com/nurulfaradila/pcb-defect-detection",
    featured: true,
  },
  {
    id: "manufacturing-monitoring-system",
    title: "Manufacturing Monitoring System",
    description:
      "Created a real-time backend architecture for monitoring manufacturing test results with live updates.",
    problem:
      "Production test data from manufacturing lines was fragmented across machines, delaying defect detection and impacting yield and throughput.",
    solution:
      "Designed an event-driven microservices backend for high-throughput data ingestion and low-latency processing.",
    results:
      "Increased production visibility, reduced defect response time, and delivered a scalable backend infrastructure for continuous operations.",
    techStack: [
      "aiomysql",
      "Docker",
      "FastAPI",
      "MySQL",
      "Python",
      "RabbitMQ",
      "React",
      "SQLAlchemy",
      "Tailwind CSS",
      "TypeScript",
      "Uvicorn",
    ],
    category: "Backend, Full-Stack",
    image: "/projects/2.png",
    githubUrl: "https://github.com/nurulfaradila/manufacturing-monitoring",
    featured: true,
  },
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description:
      "Built a scalable backend system for a wedding invitation e-commerce platform, supporting template customization and secure checkout.",
    problem:
      "Manual invitation ordering slowed customization and limited scalability.",
    solution:
      "Designed a clean-architecture backend and event-driven processing to handle orders, payments, and asynchronous workflows.",
    results:
      "Delivered a production-ready, scalable backend system optimized for performance and maintainability.",
    techStack: [
      "CartContext",
      "Docker",
      "Golang",
      "MySQL",
      "RabbitMQ",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
    ],
    category: "Backend, Full-Stack",
    image: "/projects/3.png",
    githubUrl: "https://github.com/nurulfaradila/performance-testing",
    featured: false,
  },
  {
    id: "website-portfolio",
    title: "Website Portfolio",
    description:
      "Developed a modern portfolio platform to present technical projects and backend engineering work.",
    problem:
      "Needed a fast and structured platform to showcase projects and technical capabilities professionally.",
    solution:
      "Built a responsive web application with performance optimization and clean component architecture.",
    results:
      "Delivered a lightweight, maintainable platform optimized for speed and accessibility.",
    techStack: [
      "ESLint",
      "Next.js",
      "PostCSS",
      "Prettier",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    category: "Full-Stack, Frontend",
    image: "/projects/4.png",
    githubUrl: "https://github.com/nurulfaradila/portfolio",
    featured: true,
  },
  {
    id: "dodo-ai-assistant",
    title: "DoDo - Local Document Assistant",
    description:
      "Developed a local RAG-based backend system enabling secure document querying without cloud dependency.",
    problem:
      "Cloud-based AI services raise privacy concerns when handling sensitive documents.",
    solution:
      "Built a local processing pipeline for secure document indexing and low-latency query execution.",
    results:
      "Implemented a low-latency backend system ensuring secure and private document handling",
    techStack: [
      "FAISS",
      "FastAPI",
      "HTML",
      "JavaScript",
      "Ollama",
      "Phi-2",
      "Python",
      "Sentence-Transformers",
    ],
    category: "AI, Backend, Full-Stack",
    image: "/projects/5.png",
    githubUrl: "https://github.com/nurulfaradila/AI_chatbot",
    featured: true,
  },
  {
    id: "ride-hailing-system",
    title: "Ride-Hailing System",
    description:
      "Built a real-time backend system to handle rider requests, driver locations, and dynamic matching.",
    problem:
      "Processing real-time location and request data reliably is complex at scale.",
    solution:
      "Implemented microservices to handle real-time ride matching and location updates.",
    results:
      "Delivered a high-performance backend supporting real-time operations at scale.",
    techStack: ["CSS", "Docker", "Elasticsearch", "Java", "Leaflet", "PostgreSQL", "RabbitMQ", "React", "Redis", "Spring Boot"],
    category: "Backend, Full-Stack",
    image: "/projects/6.png",
    githubUrl: "https://github.com/nurulfaradila/ride_hailing_system",
    featured: true,
  },
  {
    id: "rca-system",
    title: "AI-Driven Root Cause Analysis System",
    description:
      "Implemented a backend system to process PCB test logs and perform automated root cause analysis.",
    problem:
      "Manual processing of high-volume test logs delayed real-time diagnostics.",
    solution:
      "Built a scalable backend pipeline for fast log ingestion and analysis.",
    results:
      "Delivered a scalable backend for real-time diagnostics, ncreasing failure detection accuracy.",
    techStack: [
      "Docker",
      "FastAPI",
      "JWT",
      "PostgreSQL",
      "PyTorch",
      "Python",
      "React",
      "Recharts",
      "SQLAlchemy",
      "Vite",
    ],
    category: "AI, Backend, Full-Stack, Machine Learning",
    image: "/projects/7.PNG",
    githubUrl: "https://github.com/nurulfaradila/RCA_system",
    featured: true,
  },
];
