import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AquaNime - Japanese Culture Community Engaged in Creativity",
  description:
    "Komunitas kreatif jejepangan berdomisili Jabodetabek & Jawa Barat. Tempat ide liar jadi nyata!",
  keywords: [
    "anime",
    "manga",
    "japanese culture",
    "community",
    "creativity",
    "aquanime",
    "event jejepangan",
    "komunitas anime",
  ],
  authors: [{ name: "AquaNime Community" }],
  openGraph: {
    title: "AquaNime - Japanese Culture Community",
    description:
      "Komunitas kreatif jejepangan berdomisili Jabodetabek & Jawa Barat",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
