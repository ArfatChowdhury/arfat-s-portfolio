import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naim Uddin Arafat — React Native & Full-Stack Developer",
  description:
    "Self-taught Full-Stack JavaScript developer specializing in React Native and Next.js. Building production-grade cross-platform products. Available for remote work.",
  keywords: [
    "React Native developer",
    "Full-Stack developer",
    "Next.js developer",
    "MERN stack developer",
    "remote developer",
    "freelance developer Bangladesh",
    "TypeScript developer",
    "mobile app developer",
  ],
  authors: [{ name: "Naim Uddin Arafat" }],
  creator: "Naim Uddin Arafat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naim-arafat.vercel.app",
    title: "Naim Uddin Arafat — React Native & Full-Stack Developer",
    description:
      "Self-taught Full-Stack JS & React Native developer building production-ready products.",
    siteName: "Naim Uddin Arafat Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naim Uddin Arafat — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naim Uddin Arafat — React Native & Full-Stack Developer",
    description:
      "Self-taught Full-Stack JS & React Native developer building production-ready products.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Naim Uddin Arafat",
              jobTitle: "Full-Stack JavaScript & React Native Developer",
              url: "https://naim-arafat.vercel.app",
              email: "arfatahsan60@gmail.com",
              sameAs: [
                "https://github.com/ArfatChowdhury",
                "https://www.linkedin.com/in/naim-uddin-arafat",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
