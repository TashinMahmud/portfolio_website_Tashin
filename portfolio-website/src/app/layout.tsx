import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tashin Mahmud Khan - Software Developer & AI Engineer",
  description: "Portfolio of Tashin Mahmud Khan, a CSE Graduate from North South University, Bangladesh. Specializing in AI, Machine Learning, and Full-Stack Web Development.",
  keywords: ["Tashin Mahmud Khan", "Software Developer", "AI Engineer", "Machine Learning", "Web Development", "North South University", "Bangladesh"],
  authors: [{ name: "Tashin Mahmud Khan" }],
  creator: "Tashin Mahmud Khan",
  openGraph: {
    title: "Tashin Mahmud Khan - Software Developer & AI Engineer",
    description: "Portfolio of Tashin Mahmud Khan, a CSE Graduate from North South University, Bangladesh.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
