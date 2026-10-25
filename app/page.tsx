import Carrusel from "@/components/Carrusel";
import IntroVideo from "@/components/IntroVideo";
import { ArrowIcon } from "@/components/Icons";
import { PERSONAS } from "@/data/personas";
import ScrollTop from "@/components/ScrollTop";

const MAIL = "mailto:hola@soyfranramos.com";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <ScrollTop />
          <nav className="links">
            <a href="#inicio" className="m" aria-current="page">Francisco</a>
            <a href="#proyectos" className="m">Trabajos</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href={MAIL} className="btn btn-light">
            Contactar <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="wrap hero" id="inicio">
          <span className="pill mono">Postproducción audiovisual</span>
          <h1>
            <span className="l">¿Vas a seguir persiguiendo editores</span>{" "}
            <span className="l">o empezamos a trabajar juntos?</span>
          </h1>
          <p className="lead">
            Centralizo la edición de tu contenido para que tengas un estándar de calidad, entregas previsibles y un
            sistema con editores de video.
          </p>
          <div className="row">
            <a href={MAIL} className="btn btn-light">
              Contactar <ArrowIcon />
            </a>
            <a href="#proyectos" className="btn btn-ghost">Ver trabajos</a>
          </div>
        </section>

        <section className="wrap intro" id="video">
          <IntroVideo />
        </section>

        <div className="wrap"><hr className="sep" /></div>

        <section className="wrap sobre" id="sobre">
          <h2>Postproducción audiovisual para creadores y negocios digitales.</h2>
          <div className="txt">
            <p>Trabajo con creadores y negocios digitales que necesitan ayuda con su edición y editores</p>
            <p>
              Mi rol es centralizar la edición, organizar flujos de trabajo y crear un sistema que mantenga la calidad
              y una producción constante del contenido.
            </p>
          </div>
          <div className="enfoque">
            <span className="mono">Enfoque</span>
            <ul>
              <li>Edición escalable</li>
              <li>Estándar de calidad</li>
              <li>Procesos claros</li>
              <li>Comunicación fluida</li>
            </ul>
          </div>
        </section>

        <div className="wrap"><hr className="sep" /></div>

        <section className="personas" id="proyectos">
          <div className="wrap head">
            <h2>Personas presentes en proyectos editados.</h2>
            <span className="mono">{PERSONAS.length} registros</span>
          </div>
          <Carrusel />
        </section>

        <div className="wrap"><hr className="sep" /></div>

        <section className="wrap cta-sec" id="contacto">
          <div className="cta">
            <h2>Si llegaste hasta acá, probablemente ya sabés lo que necesitás</h2>
            <p>Contame qué estás produciendo y vemos si tiene sentido trabajar juntos.</p>
            <div className="row">
              <a href={MAIL} className="btn btn-light">
                Contactar <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="wrap"><hr className="sep" /></div>
      <footer className="wrap">
        <div className="foot">
          <div className="who">
            <span className="badge">FR</span>
            <div>
              <b>Francisco Ramos</b>
              <span>Postproducción audiovisual</span>
            </div>
          </div>
          <span className="mono">© 2026 — Todos los derechos reservados</span>
        </div>
      </footer>
    </>
  );
}
