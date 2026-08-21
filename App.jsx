import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";

import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Modal from "./components/ui/Modal";
import Badge from "./components/ui/Badge";
import Tooltip from "./components/ui/Tooltip";
import Tabs from "./components/ui/Tabs";
import Accordion from "./components/ui/Accordion";
import Input from "./components/ui/Input";
import Alert from "./components/ui/Alert";

export default function App() {
  return (
    <div className="page">
      <TopNav />

      <HeroSection />

      <main>
        {/* INTRODUCCIÓN */}
        <section
          className="section"
          id="introduccion"
        >
          <div className="section-inner">
            <p className="section-kicker">
              Acerca del proyecto
            </p>

            <h2 className="section-title">
              <i
                className="bi bi-info-circle-fill"
                aria-hidden="true"
              ></i>

              Introducción
            </h2>

            <div className="ui-card intro-card">
              <p>
                Este blog documenta la{" "}
                <strong>
                  Biblioteca UI Profesional
                </strong>
                . Aquí encontrarás descripciones,
                ejemplos visuales y fragmentos de
                código de componentes reutilizables.
              </p>

              <h3 className="content-subtitle">
                Guía rápida
              </h3>

              <ul className="feature-list">
                <li>
                  Variables CSS para colores, radios,
                  sombras y espaciados.
                </li>

                <li>
                  Layouts responsive con{" "}
                  <code>grid</code> y{" "}
                  <code>flexbox</code>.
                </li>

                <li>
                  Técnicas avanzadas como{" "}
                  <code>backdrop-filter</code>,
                  animaciones y media queries.
                </li>

                <li>
                  Estructura actual:{" "}
                  <code>/components</code>,{" "}
                  <code>/styles</code> y{" "}
                  <code>/assets</code>.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GUÍA DE ESTILOS */}
        <section
          className="section section--alt"
          id="estilos"
        >
          <div className="section-inner">
            <p className="section-kicker">
              Sistema visual
            </p>

            <h2 className="section-title">
              <i
                className="bi bi-palette-fill"
                aria-hidden="true"
              ></i>

              Guía de estilos
            </h2>

            <div className="showcase-grid">
              <div className="ui-card">
                <h3 className="component-title">
                  <i
                    className="bi bi-droplet-half"
                    aria-hidden="true"
                  ></i>

                  Paleta & Variables
                </h3>

                <p className="muted-text">
                  La identidad usa una paleta oscura
                  con acentos cian y variables
                  reutilizables para mantener
                  coherencia visual.
                </p>

                <pre className="code-block">
{`--primary: #00eaff;
--primary-soft: rgba(0, 234, 255, 0.18);
--radius: 18px;`}
                </pre>
              </div>

              <div className="ui-card">
                <h3 className="component-title">
                  <i
                    className="bi bi-type"
                    aria-hidden="true"
                  ></i>

                  Tipografía
                </h3>

                <p className="muted-text">
                  La jerarquía tipográfica combina
                  títulos de alto contraste con texto
                  de lectura cómoda y tamaños fluidos
                  mediante{" "}
                  <code>clamp()</code>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPONENTES */}
        <section
          className="section"
          id="componentes"
        >
          <div className="section-inner">
            <p className="section-kicker">
              Biblioteca visual
            </p>

            <h2 className="section-title">
              <i
                className="bi bi-grid-fill"
                aria-hidden="true"
              ></i>

              Componentes
            </h2>

            <div className="showcase-grid">
              <Card />

              <Badge />

              <Button />

              <Modal />

              <Alert />

              <Tooltip />
            </div>
          </div>
        </section>

        {/* FORMULARIOS */}
        <section
          className="section section--alt"
          id="formularios"
        >
          <div className="section-inner">
            <p className="section-kicker">
              Entrada de datos
            </p>

            <h2 className="section-title">
              <i
                className="bi bi-pen-fill"
                aria-hidden="true"
              ></i>

              Formularios
            </h2>

            <div className="showcase-grid">
              <Input />
            </div>
          </div>
        </section>

        {/* NAVEGACIÓN */}
        <section
          className="section"
          id="navegacion"
        >
          <div className="section-inner">
            <p className="section-kicker">
              Interacción
            </p>

            <h2 className="section-title">
              <i
                className="bi bi-menu-button-wide-fill"
                aria-hidden="true"
              ></i>

              Navegación
            </h2>

            <div className="showcase-grid">
              <Tabs />

              <Accordion />
            </div>
          </div>
        </section>

        {/* EJEMPLOS */}
        <section
          className="section section--alt"
          id="ejemplos"
        >
          <div className="section-inner">
            <p className="section-kicker">
              Implementación
            </p>

            <h2 className="section-title">
              <i
                className="bi bi-code-square"
                aria-hidden="true"
              ></i>

              Ejemplos de uso
            </h2>

            <div className="ui-card example-card">
              <h3 className="content-subtitle">
                Botón destacado
              </h3>

              <p className="muted-text">
                Código de ejemplo para utilizar el
                botón principal:
              </p>

              <pre className="code-block">
{`<button className="ui-btn primary">
  Acción principal
</button>`}
              </pre>

              <h3 className="content-subtitle">
                Modal
              </h3>

              <pre className="code-block">
{`import Modal from "./components/ui/Modal";

<Modal />`}
              </pre>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p>
            Blog Alejandra • Biblioteca UI Profesional
            • Diseñado por{" "}
            <strong>
              Alejandra Velez
            </strong>{" "}
            • 2025
          </p>

          <p className="footer-note">
            Proyecto académico desarrollado con React,
            Vite y CSS avanzado.
          </p>

          <a
            href="#inicio"
            className="back-to-top"
          >
            <i
              className="bi bi-arrow-up"
              aria-hidden="true"
            ></i>

            Volver al inicio
          </a>
        </div>
      </footer>
    </div>
  );
}
