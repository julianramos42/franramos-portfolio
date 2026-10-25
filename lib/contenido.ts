import { readFileSync } from "fs";
import { join } from "path";

// Marcado estático de las páginas de contenido (se lee en build, no en runtime del cliente).
export const leerContenido = (nombre: string) => readFileSync(join(process.cwd(), "content", `${nombre}.html`), "utf8");
export const leerFuentes = (nombre: string) => readFileSync(join(process.cwd(), "content", `${nombre}.fonts.txt`), "utf8").trim();
