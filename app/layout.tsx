import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martı Oto Kurtarma | Bursa 7/24 Acil Yol Yardım & Çekici",
  description: "Bursa ve çevresinde 7/24 acil oto kurtarma, çekici ve yol yardım hizmetleri. Hızlı, güvenilir ve uygun fiyatlı oto çekici için hemen arayın.",
  keywords: ["bursa oto kurtarma", "bursa çekici", "bursa yol yardım", "7/24 çekici", "oto kurtarıcı", "en yakın çekici", "bursa acil çekici"],
  openGraph: {
    title: "Martı Oto Kurtarma | Bursa 7/24 Acil Yol Yardım & Çekici",
    description: "Bursa ve çevresinde 7/24 acil oto kurtarma, çekici ve yol yardım hizmetleri.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.martiotokurtarma.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}