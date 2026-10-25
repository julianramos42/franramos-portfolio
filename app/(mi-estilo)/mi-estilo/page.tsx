import Script from "next/script";
import { leerContenido } from "@/lib/contenido";
import "./mi-estilo.css";

export default function Page() {
  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: leerContenido("mi-estilo") }} />
      <Script src="/js/mi-estilo.js" strategy="afterInteractive" />
    </>
  );
}
