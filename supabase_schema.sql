-- ============================================================
-- PORTFOLIO GLOBAL ADMIN ENGINE — Supabase Schema
-- Run this entire script in: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. SITE CONFIG (single row, id = 1)
CREATE TABLE IF NOT EXISTS site_config (
  id              INTEGER PRIMARY KEY DEFAULT 1,
  name            TEXT NOT NULL DEFAULT 'Tashin Mahmud Khan',
  subtitle        TEXT NOT NULL DEFAULT 'AI Engineer & Automation Developer',
  bio             TEXT NOT NULL DEFAULT 'Software Developer and AI Engineer specializing in autonomous agents and intelligent automation.',
  terminal_version TEXT NOT NULL DEFAULT 'v1.0.0',
  updated_at      TIMESTAMPTZ DEFAULT now()
);

-- Seed the single config row
INSERT INTO site_config (id, name, subtitle, bio, terminal_version)
VALUES (
  1,
  'Tashin Mahmud Khan',
  'AI Engineer & Automation Developer',
  'Software Developer and AI Engineer specializing in autonomous agents and intelligent automation. I bridge the gap between complex machine learning research and production-ready full-stack applications.',
  'v1.0.0'
) ON CONFLICT (id) DO NOTHING;

-- 2. PROJECTS
CREATE TABLE IF NOT EXISTS projects (
  id            SERIAL PRIMARY KEY,
  title         TEXT NOT NULL,
  description   TEXT NOT NULL,
  tech          TEXT[] NOT NULL DEFAULT '{}',
  github        TEXT,
  demo          TEXT,
  type          TEXT NOT NULL,
  impact_metric TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- Seed projects from static portfolio data
INSERT INTO projects (title, description, tech, github, demo, type, impact_metric) VALUES
  ('AI Sales Agent', 'Intelligent conversational agent designed to handle inbound business inquiries, qualify leads, and smoothly hand off to human representatives when necessary.', ARRAY['FastAPI','Python','OpenAI','Webhooks'], '#', NULL, 'Backend Integration', 'Cross-platform FastAPI integration (WhatsApp/FB/IG).'),
  ('eBay Automation', 'End-to-end automation suite for managing complex eBay storefronts, including bulk inventory updates, pricing algorithms, and order synchronization.', ARRAY['Node.js','eBay API','PostgreSQL','Cron Jobs'], '#', NULL, 'E-Commerce Pipeline', 'High-volume CSV processing & sync logic.'),
  ('B2B Lead Engine', 'Highly scalable pipeline orchestrating Apollo.io, Hunter, and custom scrapers to continuously supply fresh, verified business leads directly into a CRM.', ARRAY['n8n','REST APIs','Puppeteer','Google Sheets API'], NULL, NULL, 'Workflow Automation', 'Automated 1,000+ lead verifications/mo using n8n.'),
  ('Stylemate', 'AI-driven fashion companion app that curates outfits based on current trends, user preferences, and wardrobe availability.', ARRAY['React Native','TypeScript','TensorFlow','FastAPI'], '#', NULL, 'Mobile ML App', 'Multi-factor wardrobe scoring & recommendation engine.'),
  ('Bengali Text Summarizer', 'A machine learning project utilizing Google''s mT5 model to summarize Bangla text efficiently.', ARRAY['Python','mT5 Model','NLP','Machine Learning'], 'https://github.com/TashinMahmud/Bangla-Text-Summarizer-using-ML-and-NLP', NULL, 'Research Project & Thesis', 'State-of-the-art NLP mT5 sequence generation.'),
  ('Autonomous Driving ML Model', 'A machine learning model for autonomous driving, enabling the car to navigate without human intervention.', ARRAY['Python','Computer Vision','Deep Learning'], 'https://github.com/TashinMahmud/Autonomous-Driving-ML-Model', NULL, 'Research Project', 'Real-time visual navigation inference.'),
  ('Leaf Disease Detection (FSL)', 'Advanced plant leaf disease detection system using Few-Shot Learning (FSL) techniques.', ARRAY['Python','PyTorch','Few-Shot Learning'], 'https://github.com/TashinMahmud/leaf-disease-detection-fsl', NULL, 'Agricultural AI', '5-way 5-shot minimal data classification.'),
  ('FlowZen', 'A comprehensive Android application integrating multiple automation capabilities and smart features using on-device AI.', ARRAY['Kotlin','TensorFlow Lite','Android Jetpack'], 'https://github.com/TashinMahmud/-FlowZen---Advanced-Android-Workflow-Automation-App', NULL, 'On-Device AI App', 'Edge-based neural network execution.'),
  ('PharmaQuest', 'An interactive web game featuring medicine-related quizzes for different countries on a world map.', ARRAY['TypeScript','React','TailwindCSS'], 'https://github.com/TashinMahmud/pharmaquest', NULL, 'Interactive Web Game', 'Responsive geographical quiz pipeline.');

-- 3. SKILLS
CREATE TABLE IF NOT EXISTS skills (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL,
  is_visible  BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Seed all skills
INSERT INTO skills (name, category) VALUES
  ('Python','Language'), ('TypeScript','Language'), ('Kotlin','Language'),
  ('JavaScript','Language'), ('Java','Language'), ('C++','Language'),
  ('C','Language'), ('HTML','Language'), ('CSS','Language'), ('PHP','Language'), ('SQL','Language'),
  ('FastAPI','Backend'), ('Node.js','Backend'), ('Django','Backend'),
  ('REST APIs','Backend'), ('GraphQL','Backend'), ('Microservices','Backend'),
  ('Next.js','Frontend'), ('React','Frontend'), ('WordPress','Frontend'),
  ('n8n','Automation'),
  ('OpenAI','AI/ML'), ('TensorFlow','AI/ML'), ('PyTorch','AI/ML'),
  ('Keras','AI/ML'), ('Scikit-learn','AI/ML'), ('Machine Learning','AI/ML'),
  ('Deep Learning','AI/ML'), ('Computer Vision','AI/ML'), ('NLP','AI/ML'),
  ('Few-Shot Learning','AI/ML'), ('Transfer Learning','AI/ML'),
  ('Neural Networks','AI/ML'), ('Data Preprocessing','AI/ML'),
  ('PostgreSQL','Database'), ('MySQL','Database'), ('MongoDB','Database'), ('SQLite','Database'),
  ('Docker','DevOps'), ('AWS','DevOps'), ('Google Cloud','DevOps'),
  ('Heroku','DevOps'), ('Vercel','DevOps'), ('Git','DevOps'), ('GitHub','DevOps'),
  ('Visual Studio Code','Tools'), ('Jupyter Notebook','Tools'),
  ('Google Colab','Tools'), ('PyCharm','Tools'), ('STM32','Tools'), ('AutoCAD','Tools');

-- 4. EXPERIENCE
CREATE TABLE IF NOT EXISTS experience (
  id         SERIAL PRIMARY KEY,
  role       TEXT NOT NULL,
  company    TEXT NOT NULL,
  period     TEXT NOT NULL,
  points     TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Seed experience
INSERT INTO experience (role, company, period, points) VALUES
  ('AI Agent and Automation Developer', 'SoftVence', 'Feb 2026 - Present',
   ARRAY['AI agent development and automation solutions.', 'Building intelligent workflow automation systems.', 'Integrating AI/ML models into production applications.']),
  ('Web Developer', 'AVARICE DIGITAL', '2023 - Dec 2025',
   ARRAY['Website designing and development.', 'WordPress development and customization.', 'Frontend and backend application logic.']);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects    ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills      ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience  ENABLE ROW LEVEL SECURITY;

-- Public can read everything
CREATE POLICY "Public read site_config"  ON site_config  FOR SELECT USING (true);
CREATE POLICY "Public read projects"     ON projects     FOR SELECT USING (true);
CREATE POLICY "Public read skills"       ON skills       FOR SELECT USING (true);
CREATE POLICY "Public read experience"   ON experience   FOR SELECT USING (true);

-- Only authenticated users (you) can write
CREATE POLICY "Auth write site_config"   ON site_config  FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth write projects"      ON projects     FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth write skills"        ON skills       FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth write experience"    ON experience   FOR ALL USING (auth.role() = 'authenticated');
