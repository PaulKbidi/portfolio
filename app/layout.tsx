import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Paul K Bidi — Portfolio", template: "%s | Paul K Bidi" },
  description: "Portfolio : projets, compétences et contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} `}>
            <Header />
            <main className="mx-auto max-w-5xl p-4">
                {children}
            </main>
      </body>
    </html>
  );
}