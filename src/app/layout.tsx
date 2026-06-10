import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NeuralBackground from "@/components/NeuralBackground";
import CursorGlow from "@/components/CursorGlow";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohanraj Kulanthaivel | AI Engineer & Software Developer Portfolio",
  description: "Explore the portfolio of Mohanraj Kulanthaivel, a B.Tech IT student & AI Engineer building intelligent computer vision, IoT, and high-performance software systems.",
  keywords: [
    "Mohanraj Kulanthaivel",
    "AI Engineer",
    "Software Developer",
    "Java Developer",
    "Computer Vision Portfolio",
    "Nandha College of Technology",
    "SAP Intern",
    "Accenture Internship",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mohanraj Kulanthaivel" }],
  creator: "Mohanraj Kulanthaivel",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#FF5A1F] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CursorGlow />
          <NeuralBackground />
          <div className="relative z-10 flex-1 flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
