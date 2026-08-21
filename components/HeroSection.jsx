export default function HeroSection() {
  return (
    <header
      className="hero"
      id="inicio"
    >
      <div className="hero-inner">
        {/* ===============================================
            ETIQUETA SUPERIOR
        =============================================== */}
        <span className="hero-eyebrow">
          React + Vite + CSS avanzado
        </span>

        {/* ===============================================
            TÍTULO PRINCIPAL
        =============================================== */}
        <h1 className="hero-title">
          Blog Alejandra
        </h1>

        {/* ===============================================
            SUBTÍTULO
        =============================================== */}
        <p className="hero-subtitle">
          Biblioteca UI Profesional — documentación
          y demos de componentes reutilizables.
        </p>

        {/* ===============================================
            DESCRIPCIÓN
        =============================================== */}
        <p className="hero-description">
          Colección de componentes construidos con
          variables CSS, glassmorphism, flexbox, grid,
          animaciones y media queries. Diseñados para
          ser reutilizables, accesibles y fáciles de
          integrar.
        </p>

        {/* ===============================================
            TECNOLOGÍAS
        =============================================== */}
        <div
          className="hero-icons"
          aria-label="Tecnologías utilizadas"
        >
          <i
            className="devicon-vitejs-plain colored"
            title="Vite"
            aria-label="Vite"
          ></i>

          <i
            className="devicon-html5-plain colored"
            title="HTML5"
            aria-label="HTML5"
          ></i>

          <i
            className="devicon-css3-plain colored"
            title="CSS3"
            aria-label="CSS3"
          ></i>

          <i
            className="devicon-javascript-plain colored"
            title="JavaScript"
            aria-label="JavaScript"
          ></i>

          <i
            className="devicon-react-original colored"
            title="React"
            aria-label="React"
          ></i>

          <i
            className="devicon-nodejs-plain colored"
            title="Node.js"
            aria-label="Node.js"
          ></i>
        </div>

        {/* ===============================================
            BADGES
        =============================================== */}
        <div className="hero-badges">
          <span className="neon-badge">
            Biblioteca UI Profesional
          </span>

          <span className="neon-badge">
            Por: Alejandra Velez
          </span>
        </div>
      </div>
    </header>
  );
}
