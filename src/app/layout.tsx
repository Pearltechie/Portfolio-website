import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pelumi Idowu | Frontend Software Engineer",
  description: "Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building high-performance, AI-powered web experiences.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio", "Web Development"],
  authors: [{ name: "Pelumi Idowu" }],
  openGraph: {
    title: "Pelumi Idowu | Frontend Software Engineer",
    description: "Frontend Software Engineer specializing in React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </head>
      <body className="h-full antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
