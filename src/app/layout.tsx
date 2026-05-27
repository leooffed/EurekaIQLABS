import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scribel | Custom Website Creation & High Conversion Rates",
  description:
    "Development of premium web solutions, automated booking systems, and e-commerce platforms. Boost your company's revenue..",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Next.js Development",
    "Website Creation",
    "SaaS",
    "SEO Optimization",
    "B2B",
  ],
  openGraph: {
    title: "Scribel Lab's | Custom Website Creation & High Conversion Rates",
    description:
      "Development of premium web solutions, automated booking systems, and e-commerce platforms. Boost your company's revenue..",
    url: "https://ScribelLabs.vercel.com", // À remplacer par votre futur domaine
    siteName: "Scribellab's",
    images: [
      {
        url: "/og-image.png", // Image à la une lors des partages LinkedIn/WhatsApp
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
