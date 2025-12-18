import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/ui/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amarjeet Kumar | Full Stack Developer",
  description:
    "Full Stack Developer skilled in Next.js, React, TypeScript, Node.js, DevOps & Cloud. Open to software engineering opportunities.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "DevOps Engineer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Amarjeet Kumar" }],
  openGraph: {
    title: "Amarjeet Kumar | Full Stack Developer",
    description:
      "Building scalable, high-performance web applications with modern technologies.",
    url: "https://your-domain.vercel.app",
    siteName: "Amarjeet Portfolio",
    images: [
      {
        url: "/images/hero-boy.png",
        width: 1200,
        height: 630,
        alt: "Amarjeet Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
