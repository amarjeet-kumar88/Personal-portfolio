import { SkillItem } from "@/types/skill";

export type Project = {
  title: string;
  description: string;
  impact: string;
  tech: SkillItem[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "DevOps CI/CD Pipeline",
    description:
      "Automated build, test and deployment pipeline using Docker and GitHub Actions.",
    impact: "Reduced deployment time from minutes to seconds",
    tech: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
    ],
    github: "#",
  },
  {
    title: "StudyNotion – EdTech Platform",
    description:
      "A MERN-based EdTech platform enabling course creation, enrollment, progress tracking, and secure user authentication.",
    impact:
      "Improved learning experience with role-based access and optimized media handling",
    tech: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "JWT", icon: "jwt" },
    ],
    github: "https://github.com/amarjeet-kumar88/StudyNotion-Hosting",
    live: "https://studynotion-frontend-puce.vercel.app/",
  },

  {
    title: "GiftWallah – E-Commerce App",
    description:
      "A modern e-commerce application for gifting solutions with secure payments, real-time notifications, and order management.",
    impact:
      "Integrated Razorpay payments and Twilio notifications for seamless order updates",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "Twilio", icon: "twilio" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Docker", icon: "docker" },
    ],
    github: "https://github.com/amarjeet-kumar88/GiftWallahApp",
    live: "#",
  },

  {
    title: "Amarjeet-LMS – Learning Management System",
    description:
      "A feature-rich Learning Management System built with Next.js focusing on course management, payments, and admin dashboards.",
    impact:
      "Designed scalable LMS architecture suitable for real-world educational platforms",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "shadcn/ui", icon: "shadcn" },
      { name: "Razorpay", icon: "razorpay" },
    ],
    github: "https://github.com/amarjeet-kumar88/amarjeet-lms",
    live: "https://amarjeet-lms.vercel.app/",
  },

  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application supporting instant messaging, online status, and live updates using WebSockets.",
    impact:
      "Enabled low-latency real-time communication with scalable socket architecture",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Socket.IO", icon: "socketio" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
    github: "https://github.com/amarjeet-kumar88/Chat_Application",
    live: "https://chat-application-two-silk.vercel.app/",
  },
];
