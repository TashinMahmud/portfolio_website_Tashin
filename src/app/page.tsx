'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Phone,
  MapPin,
  X,
  Zap
} from 'lucide-react';
import { projectScreenshots, projectResearchPapers } from '../data/screenshots';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const openScreenshotModal = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeScreenshotModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Bengali Text Summarizer",
      description: "A machine learning project utilizing Google's mT5 model to summarize Bangla text efficiently. This project combines cutting-edge NLP techniques and pre-trained transformer models to generate concise, meaningful summaries of Bangla text. This is also my B.Sc. thesis project.",
      tech: ["Python", "mT5 Model", "NLP", "Machine Learning", "Bengali Language Processing", "Transformers"],
      github: "https://github.com/TashinMahmud/Bangla-Text-Summarizer-using-ML-and-NLP",
      demo: "#",
      type: "Research Project & Thesis"
    },
    {
      title: "Autonomous Driving ML Model",
      description: "A machine learning model for autonomous driving, enabling the car to navigate without human intervention. This project showcases my skills in computer vision and deep learning for real-world applications.",
      tech: ["Python", "Jupyter Notebook", "Computer Vision", "Deep Learning", "Machine Learning"],
      github: "https://github.com/TashinMahmud/Autonomous-Driving-ML-Model",
      demo: "#",
      type: "Research Project"
    },
    {
      title: "Leaf Disease Detection using Few-Shot Learning",
      description: "Advanced plant leaf disease detection system using Few-Shot Learning (FSL) techniques. Implements Prototypical Networks with EfficientNet and ResNet18 backbones for agricultural disease classification with minimal training data. Features 5-way 5-shot learning, comprehensive dataset support (PlantVillage), and real-time disease classification capabilities.",
      tech: ["Python", "PyTorch", "Few-Shot Learning", "Prototypical Networks", "EfficientNet", "ResNet18", "Computer Vision", "Agricultural AI"],
      github: "https://github.com/TashinMahmud/leaf-disease-detection-fsl",
      demo: "#",
      type: "Research Project"
    },
    {
      title: "PharmaQuest",
      description: "An interactive web game featuring medicine-related quizzes for different countries on a world map. Players unlock new countries by scoring 80% or higher, with progress saved in the browser. Features a modern, lively UI with interactive world map navigation.",
      tech: ["TypeScript", "React", "TailwindCSS", "Interactive Maps", "Quiz System", "Local Storage"],
      github: "https://github.com/TashinMahmud/pharmaquest",
      demo: "#",
      type: "Web Application"
    },
    {
      title: "FlowZen - Advanced Android Workflow Automation",
      description: "A comprehensive Android application that integrates multiple automation capabilities, workflow management, and smart features using on-device AI models. Features include AI assistant, workflow automation, email summarization, Telegram integration, CamFlow (AI image analysis), maps & geofencing, and Gmail integration.",
      tech: ["Kotlin", "Android Jetpack Compose", "TensorFlow Lite", "AI/ML", "Workflow Automation", "Telegram Bot API", "Google Maps API", "Gmail API"],
      github: "https://github.com/TashinMahmud/-FlowZen---Advanced-Android-Workflow-Automation-App",
      demo: "#",
      type: "Mobile App"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and TailwindCSS. Features dark mode, smooth animations, and professional design.",
      tech: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      github: "#",
      demo: "#",
      type: "Web Development"
    }
  ];

  const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "HTML", "CSS", "PHP", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Django", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "WordPress"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook", "Google Colab", "PyCharm", "STM32", "AutoCAD"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    ml_ai: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Few-Shot Learning", "Transfer Learning", "Neural Networks", "Data Preprocessing"],
    cloud_deployment: ["AWS", "Google Cloud", "Heroku", "Vercel", "Docker", "REST APIs", "GraphQL", "Microservices"]
  };



  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''} bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20`}>
      {/* Tech-Inspired Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Tech Icons and Images */}
        <motion.div
          className="absolute top-20 left-20 text-blue-400/20 dark:text-blue-600/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Code size={80} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-32 text-purple-400/20 dark:text-purple-600/20"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Database size={60} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-1/4 text-cyan-400/20 dark:text-cyan-600/20"
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Globe size={70} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-1/4 text-indigo-400/20 dark:text-indigo-600/20"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Brain size={50} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 text-green-400/20 dark:text-green-600/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Github size={40} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 left-1/3 text-pink-400/20 dark:text-pink-600/20"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Zap size={55} />
        </motion.div>
        
        <motion.div
          className="absolute top-2/3 left-1/2 text-orange-400/20 dark:text-orange-600/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Smartphone size={45} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-1/3 text-teal-400/20 dark:text-teal-600/20"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Mail size={35} />
        </motion.div>
        
        {/* Additional Tech Icons */}
        <motion.div
          className="absolute top-1/6 left-1/6 text-yellow-400/20 dark:text-yellow-600/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Download size={30} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/6 text-red-400/20 dark:text-red-600/20"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <ExternalLink size={40} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/6 right-1/6 text-indigo-400/20 dark:text-indigo-600/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <X size={25} />
        </motion.div>
        
        <motion.div
          className="absolute top-2/3 left-1/6 text-emerald-400/20 dark:text-emerald-600/20"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Phone size={35} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-1/6 text-violet-400/20 dark:text-violet-600/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 31,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <MapPin size={30} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 right-1/2 text-rose-400/20 dark:text-rose-600/20"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 33,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sun size={20} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/2 text-amber-400/20 dark:text-amber-600/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Moon size={20} />
        </motion.div>
        
        {/* Floating Tech Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 via-cyan-400/8 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/8 to-blue-700/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-3/4 w-64 h-64 bg-gradient-to-r from-cyan-300/10 via-blue-400/8 to-indigo-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 0.9, 1],
                  y: [0, -5, 5, 0],
                  x: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.3,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                      "linear-gradient(45deg, #8b5cf6, #ec4899)",
                      "linear-gradient(45deg, #ec4899, #f59e0b)",
                      "linear-gradient(45deg, #f59e0b, #10b981)",
                      "linear-gradient(45deg, #10b981, #3b82f6)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="p-1 rounded-lg"
                >
                  <Code className="text-white" size={28} />
                </motion.div>
              </motion.div>
              <span>Tashin</span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  rotate: 180,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 8px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative overflow-hidden"
              >
                <motion.div
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.03)_0%,transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-16"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0 flex justify-center"
            >
              <div className="relative">
                <motion.div 
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-2xl bg-gray-100 dark:bg-gray-800"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    boxShadow: [
                      "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                      "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
                      "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <img
                    src="/profile-picture.jpg"
                    alt="Tashin Mahmud Khan - Software Developer & AI Engineer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't load
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.parentElement;
                      if (placeholder) {
                        placeholder.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                            <div class="text-center">
                              <div class="text-6xl mb-2">👤</div>
                              <div class="text-sm">Add your profile picture</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </motion.div>
                {/* Enhanced decorative elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 -right-4 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 text-center"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  scale: [1, 1.02, 1],
                  y: [0, -2, 0]
                }}
                transition={{
                  backgroundPosition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  textShadow: "0 0 30px rgba(30, 64, 175, 0.4)",
                  backgroundSize: "200% 200%",
                  backgroundImage: "linear-gradient(45deg, #3b82f6, #1e40af, #1e3a8a, #0f172a, #1e3a8a, #1e40af, #3b82f6)"
                }}
              >
                Tashin Mahmud Khan
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                SOFTWARE DEVELOPER / AI ENGINEER
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Computer Science graduate with a strong foundation in AI and machine learning. 
                Passionate about applying data-driven solutions to real-world problems. Seeking an opportunity 
                to grow as an AI/ML engineer. Also interested in web development and have worked on a number 
                of WordPress websites.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
                      "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
                      "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Code size={20} />
                    View My Projects
                  </motion.div>
                </motion.button>
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(107, 114, 128, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(107, 114, 128, 0.3)",
                      "0 20px 25px -5px rgba(107, 114, 128, 0.4)",
                      "0 10px 15px -3px rgba(107, 114, 128, 0.3)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  onClick={() => {
                    // Create a temporary link element to download the resume
                    const link = document.createElement('a');
                    link.href = '/resume.pdf'; // Make sure to place your resume.pdf in the public folder
                    link.download = 'Tashin_Mahmud_Khan_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Download size={20} />
                    Download Resume
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Get In Touch
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400">Let's connect and build something amazing together!</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center ml-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group ml-12"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white"
              >
                <Phone size={18} />
              </motion.div>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">01816209396</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                x: -10,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group ml-12"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white"
              >
                <Mail size={18} />
              </motion.div>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">xtashin14@gmail.com</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group ml-12"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white"
              >
                <MapPin size={18} />
              </motion.div>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Dhaka, Bangladesh</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                x: -10,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group ml-12"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="p-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg text-white"
              >
                <Github size={18} />
              </motion.div>
              <a 
                href="https://github.com/TashinMahmud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                github.com/TashinMahmud
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-3 md:col-span-2 justify-center p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white"
              >
                <Linkedin size={18} />
              </motion.div>
              <a 
                href="https://www.linkedin.com/in/tashin-mahmud-khan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                linkedin.com/in/tashin-mahmud-khan
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                x: 5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              I am a Computer Science and Engineering graduate from North South University, Bangladesh, 
              with a strong foundation in artificial intelligence and machine learning. My academic journey 
              has been driven by a passion for applying data-driven solutions to real-world problems.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                x: 5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              My interests span across AI, Machine Learning, and Full-Stack Web Development. I enjoy 
              working on projects that combine these domains, from developing intelligent web applications 
              to building machine learning models for practical use cases.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                x: 5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Beyond technical skills, I value teamwork, problem-solving, and effective communication. 
              I believe in continuous learning and staying updated with the latest technologies in the 
              rapidly evolving field of computer science.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Projects Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.02)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.02)_0%,transparent_50%)]"></div>
        
        {/* Tech Icons Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 text-blue-400/10 dark:text-blue-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Code size={30} />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-20 text-purple-400/10 dark:text-purple-600/10"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 29,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <ExternalLink size={25} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-1/4 text-green-400/10 dark:text-green-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 31,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Github size={20} />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              My Projects
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                  borderColor: "#3b82f6"
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 cursor-pointer group"
              >
                <div className="mb-4">
                  <motion.span 
                    className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {project.type}
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                        }}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded cursor-pointer transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      x: 3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Github size={16} />
                    </motion.div>
                    Code
                  </motion.a>
                  {(projectScreenshots[project.title as keyof typeof projectScreenshots] || projectResearchPapers[project.title as keyof typeof projectResearchPapers]) ? (
                    <motion.button
                      onClick={() => openScreenshotModal(project)}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      whileHover={{ 
                        scale: 1.05,
                        x: 3,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                      Demo
                    </motion.button>
                  ) : (
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      whileHover={{ 
                        scale: 1.05,
                        x: 3,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                      Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-indigo-900/30 relative overflow-hidden">
        {/* Tech Icons Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 text-blue-400/10 dark:text-blue-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Code size={40} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-20 text-purple-400/10 dark:text-purple-600/10"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Database size={35} />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-10 text-green-400/10 dark:text-green-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Globe size={30} />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/3 text-indigo-400/10 dark:text-indigo-600/10"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Brain size={25} />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 right-1/4 text-teal-400/10 dark:text-teal-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Github size={20} />
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white"
                >
                  <Code size={20} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Programming Languages</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                    }}
                    className="px-3 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white"
                >
                  <Globe size={20} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Frameworks & Tools</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.3)"
                    }}
                    className="px-3 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white"
                >
                  <Database size={20} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Databases</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 10px 15px -3px rgba(147, 51, 234, 0.3)"
                    }}
                    className="px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white"
                >
                  <Brain size={20} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Machine Learning & AI</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {skills.ml_ai.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3)"
                    }}
                    className="px-3 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-white"
                >
                  <Globe size={20} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Cloud & Deployment</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud_deployment.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 10px 15px -3px rgba(20, 184, 166, 0.3)"
                    }}
                    className="px-3 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Tech Icons Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 left-16 text-indigo-400/10 dark:text-indigo-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Brain size={45} />
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-16 text-green-400/10 dark:text-green-600/10"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Globe size={50} />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 text-blue-400/10 dark:text-blue-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 37,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Code size={35} />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/4 text-purple-400/10 dark:text-purple-600/10"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Database size={40} />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/3 text-cyan-400/10 dark:text-cyan-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 33,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Mail size={25} />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Experience & Education
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="text-blue-600" size={24} />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Experience
                </motion.h3>
              </motion.div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Web Developer
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      AVARICE DIGITAL • 2023 - Present
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• Website designing and development</li>
                      <li>• WordPress development and customization</li>
                      <li>• Frontend and backend development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(34, 197, 94, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Brain className="text-green-600" size={24} />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Education
                </motion.h3>
              </motion.div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      B.Sc. in Computer Science and Engineering
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                      North South University • 2020 - 2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Thesis:</strong> "Bengali Text Summarizer: An advanced summarizing of Bengali news articles"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Contact Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.02)_0%,transparent_50%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.02)_0%,transparent_50%)]"></div>
        
        {/* Tech Icons Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 left-16 text-blue-400/10 dark:text-blue-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Mail size={30} />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-16 text-green-400/10 dark:text-green-600/10"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 27,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Github size={25} />
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-1/3 text-purple-400/10 dark:text-purple-600/10"
            animate={{
              rotate: [0, 360],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Linkedin size={20} />
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Get In Touch
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              I'm always open to discussing new opportunities and interesting projects.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="mailto:xtashin14@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail size={20} />
                </motion.div>
                Email Me
              </motion.a>
              <motion.a
                href="https://github.com/TashinMahmud"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github size={20} />
                </motion.div>
                GitHub
              </motion.a>
            </div>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="mailto:xtashin14@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ 
                  scale: 1.3,
                  y: -5,
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/TashinMahmud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ 
                  scale: 1.3,
                  y: -5,
                  rotate: -5
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tashin-mahmud-khan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ 
                  scale: 1.3,
                  y: -5,
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot Modal */}
      {showModal && selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeScreenshotModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title} - Screenshots
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive app showcase and features
                </p>
              </div>
              <button
                onClick={closeScreenshotModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Check if it's a research project with papers */}
              {projectResearchPapers[selectedProject.title as keyof typeof projectResearchPapers] ? (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Research Papers & Documentation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Click on any paper to view the full research document
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectResearchPapers[selectedProject.title as keyof typeof projectResearchPapers]?.map((paper, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all cursor-pointer border-2 border-transparent hover:border-blue-500"
                        onClick={() => window.open(paper.pdf, '_blank')}
                      >
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-48 mb-4 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-6xl mb-2">📄</div>
                            <div className="text-lg font-medium">Research Paper</div>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {paper.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {paper.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <span className="text-sm font-medium">Click to view PDF →</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Show screenshots for application projects */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectScreenshots[selectedProject.title as keyof typeof projectScreenshots]?.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all"
                    >
                      <div className="rounded-lg h-48 mb-4 overflow-hidden bg-gray-200 dark:bg-gray-600">
                        <img 
                          src={screenshot.image} 
                          alt={screenshot.title}
                          className="w-full h-full object-contain bg-gray-100 dark:bg-gray-600"
                          onError={(e) => {
                            // Fallback to placeholder if image doesn't load
                            e.currentTarget.style.display = 'none';
                            const placeholder = e.currentTarget.parentElement;
                            if (placeholder) {
                              placeholder.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                                  <div class="text-center">
                                    <div class="text-4xl mb-2">📱</div>
                                    <div class="text-sm">Add ${screenshot.title} screenshot</div>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {screenshot.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Tashin Mahmud Khan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
