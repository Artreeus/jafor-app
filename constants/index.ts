import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/zafor1148?igsh=djBhNXYzNHV1YThq",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100022936741016&mibextid=ZbWKwL",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/JaforIkbal10003?t=SXC7rUhvkzSd0E0abapttA&s=09",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Secure File Encryption Tool",
    description:
    "Create a user-friendly file encryption tool using strong cryptographic algorithms. This project highlights my understanding of encryption principles and my ability to implement secure data protection measures. The tool features a clean GUI, supports various file types, and incorporates best practices in key management, demonstrating my commitment to data privacy and security.",
    image: "/projects/project-1.webp",
    link: "/",
  },
  {
    title: "Network Intrusion Detection System",
    description:
    "Develop and showcase a robust Network Intrusion Detection System (NIDS) using Python and machine learning algorithms. This project demonstrates my ability to analyze network traffic, detect anomalies, and identify potential security threats in real-time. The system utilizes cutting-edge AI techniques to adapt to evolving cyber threats, showcasing my skills in both cybersecurity and data science.",
    image: "/projects/project-2.jpeg",
    link: "/",
  },
  {
    title: "Web Application Vulnerability Scanner",
    description:
    "Design and implement a comprehensive web application vulnerability scanner that identifies common security flaws such as SQL injection, cross-site scripting (XSS), and CSRF vulnerabilities. This project showcases my knowledge of web security, my ability to think like an attacker, and my skills in developing automated security testing tools. It's a practical demonstration of my commitment to securing the digital landscape.",
    image: "/projects/project-3.jpg",
    link: "/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Jafor121",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/zafor1148?igsh=djBhNXYzNHV1YThq",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/JaforIkbal10003?t=SXC7rUhvkzSd0E0abapttA&s=09",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/jafor-ikbal-rakib-a042382b7",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Jafor121",
};
