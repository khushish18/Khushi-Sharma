import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khushi Sharma — Software Developer",
    template: "%s | Khushi Sharma",
  },
  description:
    "Personal portfolio of Khushi Sharma, Software Developer pursuing B.Tech in IIOT at Vivekananda Institute of Professional Studies — Technical Campus (VIPS-TC). CGPA: 9.412.",
  keywords: [
    "Khushi Sharma",
    "Software Developer",
    "IIOT Engineer",
    "VIPS-TC",
    "B.Tech IIOT",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Khushi Sharma" }],
  openGraph: {
    title: "Khushi Sharma — Software Developer",
    description:
      "Personal portfolio of Khushi Sharma, Software Developer & IIOT Student at VIPS-TC.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#19221E] font-sans selection:bg-[#234E46] selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
