import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Imtiaz Khondoker Akash",
  description: "Full Stack Web Developer. Skill : Javascript, Typescript, React.js, Next.js, Node.js, Express.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen flex flex-col w-full bg-gradient-to-br from-sky-50 via-emerald-50 to-indigo-50`}>
        <main >
        <ClickSpark
          sparkColor="#5975db"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="flex-1">
          {children}

          </div>
        </ClickSpark>
          <Toaster position="top-right"/>
          </main>
      </body>
    </html>
  );
}
