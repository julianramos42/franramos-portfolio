import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Francisco Ramos — Postproducción audiovisual",
  description:
    "Sistematizo postproducción para creadores y negocios digitales. Operaciones, flujos y calidad consistente a escala.",
  openGraph: {
    title: "Francisco Ramos — Postproducción audiovisual",
    description: "Sistemas de postproducción para escalar contenido sin perder calidad.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
