// Services/Tech Stack data - Update with your actual skills and services
export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Creating responsive, interactive, and beautiful user interfaces using modern frameworks and libraries.",
    icon: "code",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive Web Design",
      "Modern UI/UX Implementation", 
      "Performance Optimization",
      "Cross-browser Compatibility"
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building robust, scalable, and secure server-side applications and APIs.",
    icon: "server",
    technologies: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL"],
    features: [
      "RESTful API Development",
      "Database Design & Management",
      "Authentication & Authorization",
      "Server Deployment & Monitoring"
    ]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences with modern design principles.",
    icon: "palette",
    technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    features: [
      "User Interface Design",
      "Wireframing & Prototyping",
      "User Experience Research",
      "Design System Creation"
    ]
  },
  {
    id: 4,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with native performance.",
    icon: "smartphone",
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "AWS"],
    features: [
      "Cross-platform Development",
      "Native Performance",
      "App Store Deployment",
      "Push Notifications"
    ]
  },
  {
    id: 5,
    title: "Full Stack Solutions",
    description: "End-to-end web application development from concept to deployment.",
    icon: "layers",
    technologies: ["MERN Stack", "Next.js", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Complete Web Applications",
      "Database Architecture",
      "Cloud Deployment",
      "Performance Optimization"
    ]
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    description: "Setting up CI/CD pipelines and cloud infrastructure for scalable applications.",
    icon: "globe",
    technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"],
    features: [
      "Cloud Infrastructure Setup",
      "Continuous Integration/Deployment",
      "Server Configuration",
      "Performance Monitoring"
    ]
  }
];

// Tech stack categories
export const techStack = {
  frontend: [
    { name: "React", level: 95, icon: "react" },
    { name: "Next.js", level: 90, icon: "nextjs" },
    { name: "TypeScript", level: 85, icon: "typescript" },
    { name: "Tailwind CSS", level: 92, icon: "tailwind" },
    { name: "JavaScript", level: 95, icon: "javascript" }
  ],
  backend: [
    { name: "Node.js", level: 88, icon: "nodejs" },
    { name: "Python", level: 82, icon: "python" },
    { name: "Express.js", level: 85, icon: "server" },
    { name: "MongoDB", level: 80, icon: "mongodb" },
    { name: "PostgreSQL", level: 75, icon: "postgresql" }
  ],
  tools: [
    { name: "Git", level: 90, icon: "git" },
    { name: "Docker", level: 70, icon: "docker" },
    { name: "AWS", level: 75, icon: "aws" },
    { name: "Figma", level: 85, icon: "figma" },
    { name: "VS Code", level: 95, icon: "vscode" }
  ]
};

export default services;
