# 🚀 Personal Portfolio | Backend & Full-Stack Developer

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


Welcome to my personal portfolio. This is a professional showcase of technical expertise, engineering projects, and software development journey, with a strong emphasis on backend and full-stack excellence.

---

## 📝 Project Overview

A responsive portfolio platform designed to present a curated collection of advanced engineering projects. It serves as a digital representation of my skills in Backend, Full-Stack, and AI development, prioritizing clean code, modern architecture, and visual precision.

---

## ✨ Key Features

- **Modern Tech Stack**: Leveraging Next.js 15, React 19, and TypeScript for a robust, type-safe application.
- **Premium UI/UX**: Features a developer-focused aesthetic with glassmorphism, dark mode support, and smooth motion design.
- **Micro-Animations**: Advanced animations and transitions powered by Framer Motion for an engaging user experience.
- **Optimized Performance**: Built with server-side rendering (SSR) and semantic HTML for maximum speed and efficiency.

---

## 🏗️ System Architecture

The application is built on a modern, component-driven architecture using the Next.js App Router.

```mermaid
graph TD
    User([User / Browser]) <--> NextJS[[Next.js Framework]]
    subgraph Core
        NextJS --> Pages[App Router /app]
        NextJS --> Components[UI Components /components]
        NextJS --> Logic[Business Logic /lib]
    end
    subgraph Data
        Pages --> ProjectData[(Project Data /src/data)]
    end
    subgraph Presentation
        Components --> Framer[Framer Motion Animations]
        Components --> Tailwind[Tailwind CSS Styling]
    end
```

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core** | Next.js 15, React 19, TypeScript |
| **Styling** | Tailwind CSS, PostCSS |
| **Animations** | Framer Motion |
| **Tools** | ESLint, Prettier, Lucide React |

---

## 📂 Project Structure

```text
/src
├── /app          # Next.js App Router (Layouts, Pages, Global Styles)
├── /components   # Reusable UI components (Hero, Projects, Navigation)
├── /data         # Static data layers (Projects, Experience, Skills)
├── /lib          # Utility functions and shared helper logic
└── /types        # Centralized TypeScript interfaces
```

---

## 🔄 System Workflow

The following diagram illustrates the user interaction and rendering flow of the portfolio.

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant S as Server (Next.js)

    U->>B: Access Portfolio URL
    B->>S: Request Page
    S-->>B: Return Pre-rendered HTML (SSR)
    B->>B: React Hydration & Animation Initialization
    U->>B: Scroll / Hover Interaction
    B->>B: Trigger Framer Motion Micro-animations
    U->>B: Navigation / Project View
    B-->>U: Instant Responsive Updates
```

---

**Designed and Developed by Nurul Faradila Sazali**
