import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelmalek",
  description: "Abdelmalek's portfolio/personal website",
  openGraph: {
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-900">
      <link rel="icon" href="/favicon.ico" />
      <Script
        id="galink"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BD9861Z0M1"
      ></Script>
      <Script id="gascript">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BD9861Z0M1');`}
      </Script>
      <body className={outfit.className}>
        {children}
        <div id="portal"></div>
      </body>
    </html>
  );
}
