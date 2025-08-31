# Tashin Mahmud Khan - Portfolio Website [https://tashin-mahmud.vercel.app/]

A modern, responsive portfolio website built with Next.js, React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Built with Next.js for better search engine optimization
- **Fast Performance**: Optimized for speed and performance

## 📱 Sections

1. **Home**: Hero section with name, tagline, and call-to-action buttons
2. **About Me**: Personal bio and background information
3. **Projects**: Showcase of 5 featured projects with descriptions and tech stacks
4. **Skills**: Organized skills in categories (Languages, Frameworks, Tools, Databases)
5. **Experience**: Work experience at AVARICE DIGITAL
6. **Education**: Educational background from North South University
7. **Contact**: Contact information and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Name and tagline in the Hero section
- About Me content
- Project details and descriptions
- Skills and technologies
- Experience and education details
- Contact information

### Styling
- Colors: Update the color scheme in `tailwind.config.js`
- Fonts: Modify font imports in `src/app/layout.tsx`
- Layout: Adjust spacing and layout in the component classes

### Projects
Add or modify projects in the `projects` array:
```typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["Tech1", "Tech2"],
  github: "GitHub URL",
  demo: "Live Demo URL",
  type: "Project Type"
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### Other Platforms
The site can be deployed to any static hosting platform:
- GitHub Pages
- AWS S3
- Firebase Hosting
- Surge.sh

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Breakpoints for tablet and desktop
- Optimized touch interactions
- Proper spacing for all screen sizes

## 🎨 Design Features

- **Color Scheme**: Professional blue and orange accent colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Shadows**: Subtle shadows for depth and modern feel
- **Transitions**: Smooth transitions and hover effects

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main portfolio page
├── components/          # Reusable components (future)
└── lib/                # Utility functions (future)
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Contact

- **Email**: xtashin14@gmail.com
- **GitHub**: [TashinMahmud](https://github.com/TashinMahmud)
- **LinkedIn**: [Your LinkedIn Profile]

---

Built with ❤️ by Tashin Mahmud Khan
