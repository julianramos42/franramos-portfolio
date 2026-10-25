import type { Metadata } from "next";
import { leerFuentes } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Estilos de edición — Francisco Ramos",
  description: "Estilos de edición explicados con sus recursos en movimiento y las reglas para que tu editor los repita en cada video.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href={leerFuentes("estilos")} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
