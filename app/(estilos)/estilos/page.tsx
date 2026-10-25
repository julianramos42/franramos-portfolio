import Script from "next/script";
import { leerContenido } from "@/lib/contenido";
import "./estilos.css";

export default function Page() {
  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: leerContenido("estilos") }} />
      <Script src="/js/estilos.js" strategy="afterInteractive" />
    </>
  );
}
