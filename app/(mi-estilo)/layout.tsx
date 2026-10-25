import type { Metadata } from "next";
import { leerFuentes } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Tu estilo de edición — Francisco Ramos",
  description: "Subí tus referencias y Claude arma tu estilo de edición propio: un SOP en PDF con cada regla dibujada, animaciones de ejemplo y una ficha para que cualquier editor lo replique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href={leerFuentes("mi-estilo")} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
