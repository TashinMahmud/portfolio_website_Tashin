import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://tashin-mahmud.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tashin Mahmud Khan — AI Engineer & Software Developer",
  description:
    "Portfolio of Tashin Mahmud Khan, a CSE Graduate from North South University, Bangladesh. Specializing in AI Agents, Machine Learning, Automation, and Full-Stack Web Development.",
  keywords: [
    "Tashin Mahmud Khan", "AI Engineer", "Automation Developer", "Machine Learning",
    "Full-Stack Developer", "Next.js", "FastAPI", "Python", "North South University", "Bangladesh",
  ],
  authors: [{ name: "Tashin Mahmud Khan", url: siteUrl }],
  creator: "Tashin Mahmud Khan",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Tashin Mahmud Khan — AI Engineer & Software Developer",
    description:
      "CSE Graduate specializing in AI Agents, Machine Learning, and Full-Stack Development. Available for integration.",
    url: siteUrl,
    siteName: "Tashin Mahmud Khan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tashin Mahmud Khan — AI Engineer & Software Developer",
    description:
      "CSE Graduate specializing in AI Agents, Machine Learning, and Full-Stack Development.",
    creator: "@tashinmahmud",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
