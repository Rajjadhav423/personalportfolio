import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: portfolioData.personal.description,
  keywords: ["Software Developer", "Full Stack Engineer", "Salesforce Developer", "React.js", "Next.js", "Node.js", "Python", "Machine Learning"],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
