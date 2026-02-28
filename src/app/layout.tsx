import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Providers from '../lib/Providers';


export const metadata: Metadata = {
  title: {
    default: "QuickHire",
    template: "%s | QuickHire",
  },
  description:
    "A modern hiring and recruitment platform frontend. Explore job postings, hiring ranges, company profiles, and candidate listings. Built with Next.js and Tailwind CSS.",
  keywords: [
    "Hiring platform",
    "Recruitment website",
    "Job portal",
    "Hiring range",
    "Next.js hiring app",
    "React recruitment UI",
    "Tailwind CSS jobs",
    "Frontend hiring system",
    "Manik Hossain",
    "manikdev",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#FFFFFF]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
