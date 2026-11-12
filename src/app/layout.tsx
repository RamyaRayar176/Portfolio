import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramya R | AI & Data Science Student",
  description:
    "Portfolio of Ramya R, an Artificial Intelligence and Data Science student focused on machine learning, data analytics, Python, SQL, and intelligent solutions.",
  keywords: [
    "Ramya R",
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Python",
    "SQL",
    "Data Analytics",
    "Portfolio",
  ],
  authors: [{ name: "Ramya R" }],
  openGraph: {
    title: "Ramya R | AI & Data Science Student",
    description:
      "Portfolio of Ramya R, an Artificial Intelligence and Data Science student focused on machine learning, data analytics, Python, SQL, and intelligent solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Ramya R Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="bg-[#08080a] text-white font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#fff]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
