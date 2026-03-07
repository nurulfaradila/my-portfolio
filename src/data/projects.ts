import { Project } from "@/types";
import { tr } from "framer-motion/client";

export const projects: Project[] = [
  {
    id: "pcb-defect-detection-system",
    title: "PCB Defect Detection System",
    description:
      "Developed a backend system for an automated PCB defect detection system with real-time monitoring capabilities.",
    problem:
      "Manual PCB inspection is slow, error-prone, and hard to scale for large production volumes.",
    solution:
      "Implemented an asynchronous YOLOv8 detection pipeline with FastAPI and a dashboard interface to track inspection results in real-time.",
    results:
      "Automated PCB inspection, enhancing speed, consistency, and production efficiency.",
    techStack: [
      "Celery",
      "Docker",
      "FastAPI",
      "PostgreSQL",
      "Pydantic",
      "Python",
      "PyTorch",
      "RabbitMQ",
      "SQLAlchemy",
      "Streamlit",
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
      "Developed a scalable backend and dashboard system to capture, process, and monitor production test data in real time.",
    problem:
      "Production test data from multiple machines was inconsistent and hard to track",
    solution:
      "Built a scalable backend system with APIs and WebSockets to process test data and broadcast live results to a dashboard.",
    results:
      "Improved operational control by enabling immediate action on quality issues to ensure consistent production output",
    techStack: [
      "Docker",
      "FastAPI",
      "MySQL",
      "Python",
      "RabbitMQ",
      "React",
      "Recharts",
      "SQLAlchemy",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
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
      "Built a scalable backend system for a wedding invitation platform, supporting template customization, order management and secure checkout.",
    problem:
      "Processing orders and payments manually created bottlenecks and inconsistent results.",
    solution:
      "Implemented asynchronous processing and clean-architecture backend design to streamline order and payment operations.",
    results:
      "Delivered a reliable backend that improves processing speed and ensures smooth operations.",
    techStack: [
      "Docker",
      "Golang",
      "MySQL",
      "RabbitMQ",
      "React",
      "React Context",
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
      "Developed a web platform to showcase technical projects with efficient backend services and interactive frontend.",
    problem:
      "Presenting technical projects professionally was challenging due to slow, unstructured, and non-optimized platforms.",
    solution:
      "Built a Next.js and TypeScript application with server-side rendering, modular components, and optimized data flow.",
    results:
      "Delivered a fast, maintainable, and scalable platform highlighting backend efficiency and clean project presentation.",
    techStack: [
      "ESLint",
      "Next.js",
      "PostCSS",
      "Prettier",
      "PostCSS",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    category: "Backend, Frontend",
    image: "/projects/4.png",
    githubUrl: "https://github.com/nurulfaradila/portfolio",
    featured: true,
  },
  {
    id: "dodo-ai-assistant",
    title: "DoDo - Local Document Assistant",
    description:
      "Developed a local AI-driven RAG backend with an interactive web interface for secure document exploration.",
    problem:
      "Handling sensitive documents on cloud AI services risks data leaks and compliance issues.",
    solution:
      "Built an end-to-end local pipeline combining semantic search, vector indexing, and on-device LLM inference for fast and private document access.",
    results:
      "Delivered a secure and responsive system that accelerates document retrieval while keeping data fully private",
    techStack: [
      "FAISS",
      "FastAPI",
      "LangChain",
      "Ollama",
      "Phi",
      "Pydantic",
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
      "Developed a high-performance backend and interactive frontend to manage real-time ride requests, driver tracking, and dynamic matching.",
    problem:
      "Processing live ride requests and driver locations at the same time was hard to scale.",
    solution:
      "Built microservices with Spring Boot, Redis, RabbitMQ, and Elasticsearch, connected to a React dashboard for real-time updates.",
    results:
      "Delivered a fast and reliable ride-hailing system that works smoothly even with many users at once.",
    techStack: ["Axois", "CSS", "Docker", "Elasticsearch", "Java", "Leaflet", "PostgreSQL", "RabbitMQ", "React", "Redis", "Spring Boot", "Spring Data JPA", "Vite"],
    category: "Backend, Full-Stack",
    image: "/projects/6.png",
    githubUrl: "https://github.com/nurulfaradila/ride_hailing_system",
    featured: true,
  },
  {
    id: "rca-system",
    title: "Root Cause Analysis System",
    description:
      "Built an end-to-end system to automatically process data logs and pinpoint failure causes using backend services and a dynamic frontend.",
    problem:
      "High-volume data logs made it difficult to quickly identify production failures and take corrective action.",
    solution:
      "Implemented a FastAPI backend with asynchronous log ingestion, ML-based failure analysis, and a React dashboard for instant visualization of production issues.",
    results:
      "Reduced detection time, improved accuracy of root cause analysis, and enabled real-time monitoring.",
    techStack: [
      "Docker",
      "FastAPI",
      "JWT",
      "PostgreSQL",
      "Prometheus",
      "Pydantic",
      "PyTorch",
      "Python",
      "React",
      "Recharts",
      "SQLAlchemy",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
    ],
    category: "Backend, Full-Stack, Machine Learning",
    image: "/projects/7.PNG",
    githubUrl: "https://github.com/nurulfaradila/RCA_system",
    featured: true,
  },
];
