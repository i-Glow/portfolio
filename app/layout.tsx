import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelmalek",
  description: "Abdelmalek's portfolio/personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-900">
      <body className={outfit.className}>
        {children}
        <div id="portal"></div>
      </body>
    </html>
  );
}
