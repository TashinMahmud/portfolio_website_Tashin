export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  type: string;
  impactMetric: string;
}

export const featuredProjects: Project[] = [
  {
    title: "AI Sales Agent",
    description: "Intelligent conversational agent designed to handle inbound business inquiries, qualify leads, and smoothly hand off to human representatives when necessary.",
    tech: ["FastAPI", "Python", "OpenAI", "Webhooks"],
    github: "#",
    type: "Backend Integration",
    impactMetric: "Cross-platform FastAPI integration (WhatsApp/FB/IG)."
  },
  {
    title: "eBay Automation",
    description: "End-to-end automation suite for managing complex eBay storefronts, including bulk inventory updates, pricing algorithms, and order synchronization.",
    tech: ["Node.js", "eBay API", "PostgreSQL", "Cron Jobs"],
    github: "#",
    type: "E-Commerce Pipeline",
    impactMetric: "High-volume CSV processing & sync logic."
  },
  {
    title: "B2B Lead Engine",
    description: "Highly scalable pipeline orchestrating Apollo.io, Hunter, and custom scrapers to continuously supply fresh, verified business leads directly into a CRM.",
    tech: ["n8n", "REST APIs", "Puppeteer", "Google Sheets API"],
    type: "Workflow Automation",
    impactMetric: "Automated 1,000+ lead verifications/mo using n8n."
  },
  {
    title: "Stylemate",
    description: "AI-driven fashion companion app that curates outfits based on current trends, user preferences, and wardrobe availability.",
    tech: ["React Native", "TypeScript", "TensorFlow", "FastAPI"],
    github: "#",
    type: "Mobile ML App",
    impactMetric: "Multi-factor wardrobe scoring & recommendation engine."
  },
  {
    title: "Bengali Text Summarizer",
    description: "A machine learning project utilizing Google's mT5 model to summarize Bangla text efficiently. This project combines cutting-edge NLP techniques and pre-trained transformer models.",
    tech: ["Python", "mT5 Model", "NLP", "Machine Learning"],
    github: "https://github.com/TashinMahmud/Bangla-Text-Summarizer-using-ML-and-NLP",
    type: "Research Project & Thesis",
    impactMetric: "State-of-the-art NLP mT5 sequence generation."
  },
  {
    title: "Autonomous Driving ML Model",
    description: "A machine learning model for autonomous driving, enabling the car to navigate without human intervention. Showcases skills in computer vision and deep learning.",
    tech: ["Python", "Computer Vision", "Deep Learning"],
    github: "https://github.com/TashinMahmud/Autonomous-Driving-ML-Model",
    type: "Research Project",
    impactMetric: "Real-time visual navigation inference."
  },
  {
    title: "Leaf Disease Detection (FSL)",
    description: "Advanced plant leaf disease detection system using Few-Shot Learning (FSL) techniques. Implements Prototypical Networks with EfficientNet and ResNet18 backbones.",
    tech: ["Python", "PyTorch", "Few-Shot Learning"],
    github: "https://github.com/TashinMahmud/leaf-disease-detection-fsl",
    type: "Agricultural AI",
    impactMetric: "5-way 5-shot minimal data classification."
  },
  {
    title: "FlowZen",
    description: "A comprehensive Android application integrating multiple automation capabilities, workflow management, and smart features using on-device AI models.",
    tech: ["Kotlin", "TensorFlow Lite", "Android Jetpack"],
    github: "https://github.com/TashinMahmud/-FlowZen---Advanced-Android-Workflow-Automation-App",
    type: "On-Device AI App",
    impactMetric: "Edge-based neural network execution."
  },
  {
    title: "PharmaQuest",
    description: "An interactive web game featuring medicine-related quizzes for different countries on a world map. Players unlock new countries by scoring high.",
    tech: ["TypeScript", "React", "TailwindCSS"],
    github: "https://github.com/TashinMahmud/pharmaquest",
    type: "Interactive Web Game",
    impactMetric: "Responsive geographical quiz pipeline."
  }
];

export const techStack = [
  // Existing skills
  { name: "Python", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Kotlin", category: "Language" },
  { name: "FastAPI", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "n8n", category: "Automation" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },

  // Programming Languages
  { name: "JavaScript", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "C", category: "Language" },
  { name: "HTML", category: "Language" },
  { name: "CSS", category: "Language" },
  { name: "PHP", category: "Language" },
  { name: "SQL", category: "Language" },

  // Frameworks & Libraries
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Keras", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "WordPress", category: "Frontend" },

  // Databases
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "SQLite", category: "Database" },

  // Machine Learning & AI
  { name: "Machine Learning", category: "AI/ML" },
  { name: "Deep Learning", category: "AI/ML" },
  { name: "Computer Vision", category: "AI/ML" },
  { name: "NLP", category: "AI/ML" },
  { name: "Few-Shot Learning", category: "AI/ML" },
  { name: "Transfer Learning", category: "AI/ML" },
  { name: "Neural Networks", category: "AI/ML" },
  { name: "Data Preprocessing", category: "AI/ML" },

  // Cloud & Deployment
  { name: "AWS", category: "DevOps" },
  { name: "Google Cloud", category: "DevOps" },
  { name: "Heroku", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Microservices", category: "Backend" },

  // Developer Tools
  { name: "Git", category: "DevOps" },
  { name: "GitHub", category: "DevOps" },
  { name: "Visual Studio Code", category: "Tools" },
  { name: "Jupyter Notebook", category: "Tools" },
  { name: "Google Colab", category: "Tools" },
  { name: "PyCharm", category: "Tools" },
  { name: "STM32", category: "Tools" },
  { name: "AutoCAD", category: "Tools" },
];
