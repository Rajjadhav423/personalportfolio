import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Rajesh Jadhav | Software Developer & Full Stack Engineer",
  description: "Aspiring Software Developer with hands-on experience in full-stack web development, Salesforce CRM platform development, and machine learning research. Proficient in JavaScript/TypeScript, React.js, Next.js, Node.js, Salesforce Apex, and Python.",
  keywords: ["Software Developer", "Full Stack Engineer", "Salesforce Developer", "React.js", "Next.js", "Node.js", "Python", "Machine Learning"],
  authors: [{ name: "Rajesh Jadhav" }],
  openGraph: {
    title: "Rajesh Jadhav | Software Developer & Full Stack Engineer",
    description: "Aspiring Software Developer with expertise in full-stack development, Salesforce, and ML research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
