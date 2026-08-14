import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import BgScript from "@/components/BgScript";
import FloatingOrbsBackground from "@/components/FloatingOrbsBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalContactBanner from "@/components/GlobalContactBanner";
import { basePath } from "@/lib/base-path";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Experience Team",
  description: "Producers, designers, strategists, and creative technologists working across OP and Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        style={{ "--bg-image-url": `url(${basePath}/site-bg.svg)` } as React.CSSProperties}
      >
        <ThemeScript />
        <BgScript />
        <FloatingOrbsBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <GlobalContactBanner />
        <Footer />
      </body>
    </html>
  );
}
