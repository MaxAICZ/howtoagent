import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "HowToAgent.ai - Learn to Build AI Agents That Actually Work",
  description:
    "The practical guide to building, deploying, and monetizing AI agents. From zero to production-ready agents that generate real value.",
  openGraph: {
    title: "HowToAgent.ai - Learn to Build AI Agents That Actually Work",
    description:
      "The practical guide to building, deploying, and monetizing AI agents.",
    url: "https://howtoagent.ai",
    siteName: "HowToAgent.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HowToAgent.ai",
    description:
      "The practical guide to building, deploying, and monetizing AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
