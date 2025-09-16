import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono as JetBrainsMono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const jetbrains = JetBrainsMono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Imran Portfolio",
  description: "Modern portfolio with clean, animated UI",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable}`}>{children}</body>
    </html>
  );
}
