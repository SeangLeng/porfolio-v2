import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JENZY",
  description:
    "I am Seng Seang Leng, and Welcome to my portfolio, where I embark on a thrilling journey into the world of full stack web development.",
  keywords: ["Seng seang leng", "JENZY", "jenzy - leng", "seangleng portfolio"],
  authors: [
    {
      name: "JENZY",
      url: "https://seangleng.vercel.app/",
    },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "AFGzcKWfUIi-_4W7o5IX47AlGs9xGjXmgyi1Q_HXQ7o",
    other: {
      me: ["mr.lengseng@gmail.com"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-foreground font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <aside>
          <DotPattern
            className={cn(
              "-z-10 [mask-image:radial-gradient(500px_circle_at_top_left,white,transparent)]"
            )}
          />
          <DotPattern
            className={cn(
              "-z-10 [mask-image:radial-gradient(500px_circle_at_bottom_right,white,transparent)]"
            )}
          />
        </aside>
        <main className="z-10 text-white relative">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
