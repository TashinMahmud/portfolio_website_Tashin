export interface Screenshot {
  title: string;
  description: string;
  image: string;
}

export interface ResearchPaper {
  title: string;
  description: string;
  pdf: string;
}

export interface ProjectScreenshots {
  [key: string]: Screenshot[];
}

export interface ProjectResearchPapers {
  [key: string]: ResearchPaper[];
}

export const projectScreenshots: ProjectScreenshots = {
  "PharmaQuest": [
    {
      title: "Welcome Screen",
      description: "Beautiful landing page with soft gradient background (light blue to light pink). Features the 'PharmaQuest' title in gradient text, welcome message 'Welcome to the world of medicine adventures!', name input field, and a gradient 'Start' button with arrow icon.",
      image: "/pharmaquest-welcome.jpg"
    },
    {
      title: "World Map Game",
      description: "Interactive world map interface showing game progress. Displays 'Welcome, Tashin!' with current score (0), progress bar, and 'Countries unlocked: 1/6'. Countries like Sweden, England, Spain, Japan, Australia are marked, with Bangladesh highlighted in green as the unlocked country.",
      image: "/pharmaquest-map.jpg"
    },
    {
      title: "Quiz Question 1",
      description: "Quiz modal asking 'What is the most common antibiotic used in Bangladesh?' with four options: Amoxicillin, Ciprofloxacin, Azithromycin, and Penicillin. Features gradient header with 'Question 1/3', clean white design, and navigation buttons (Cancel/Next).",
      image: "/pharmaquest-quiz1.jpg"
    },
    {
      title: "Quiz Question 2",
      description: "Second quiz question: 'Which disease is most prevalent in Bangladesh?' Options include Malaria, Dengue, Tuberculosis (correctly selected with green highlight and checkmark), and HIV. Shows the interactive quiz system with visual feedback for correct answers.",
      image: "/pharmaquest-quiz2.jpg"
    },
    {
      title: "Country Completion",
      description: "Congratulations modal with party hat icon and 'You completed this country! Choose a Country to unlock next:' message. Features five country buttons (Japan, Australia, Sweden, Spain, England) in alternating green and blue colors, allowing players to select their next challenge.",
      image: "/pharmaquest-completion.jpg"
    }
  ],
  "FlowZen - Advanced Android Workflow Automation": [
    {
      title: "Main Dashboard",
      description: "The main FlowZen dashboard featuring six core modules: Text & Image AI, Chat with AI, Create Workflow, Maps, CamFlow, and AI Assistant. Each module shows available AI models and provides quick access to different automation features.",
      image: "/flowzen-dashboard.jpg"
    },
    {
      title: "Sign In Screen",
      description: "Clean authentication interface with email/password login and Google Sign-In options. Features the FlowZen branding with the tagline 'Be ready anywhere, anytime!' and modern dark theme design.",
      image: "/flowzen-signin.jpg"
    },
    {
      title: "AI Assistant Chat",
      description: "Intelligent AI chat interface with model selection (Gemma-3n-E2B-it-int4). The AI can handle general conversation and create specific workflows for email summarization, geofencing, and text extraction from documents.",
      image: "/flowzen-ai-chat.jpg"
    },
    {
      title: "Geofence Map",
      description: "Interactive Google Maps integration for creating location-based geofences. Features radius control (500m), expiration settings, email connection for notifications, and real-time map visualization with custom markers.",
      image: "/flowzen-geofence.jpg"
    }
  ]
};

export const projectResearchPapers: ProjectResearchPapers = {
  "Bengali Text Summarizer": [
    {
      title: "Bengali Text Summarizer Thesis",
      description: "Complete B.Sc. thesis on Bengali text summarization using Google's mT5 model. This research combines cutting-edge NLP techniques and pre-trained transformer models to generate concise, meaningful summaries of Bangla text.",
      pdf: "/bengali-text-summarizer-thesis.pdf"
    }
  ],
  "Autonomous Driving ML Model": [
    {
      title: "Autonomous Driving Research Paper",
      description: "Research paper on machine learning model for autonomous driving, enabling cars to navigate without human intervention. Showcases computer vision and deep learning for real-world applications.",
      pdf: "/autonomous-driving-research.pdf"
    }
  ],
  "Leaf Disease Detection using Few-Shot Learning": [
    {
      title: "CSE 299 Group 4 Research Report",
      description: "Comprehensive research report on advanced plant leaf disease detection using Few-Shot Learning (FSL) techniques. Implements Prototypical Networks with EfficientNet and ResNet18 backbones for agricultural disease classification.",
      pdf: "/leaf-disease-detection-research.pdf"
    },
    {
      title: "FSL Image Classification Performance Evaluation",
      description: "Detailed performance evaluation of the Few-Shot Learning image classification model, including accuracy metrics, ROC curves, confusion matrices, and classification reports.",
      pdf: "/fsl-performance-evaluation.pdf"
    }
  ]
};
