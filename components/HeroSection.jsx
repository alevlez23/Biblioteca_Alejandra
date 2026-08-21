export default function HeroSection() {
  return (
    <header
      className="hero"
      id="inicio"
    >
      <div className="hero-inner">
        <span className="hero-eyebrow">
          React + Vite + CSS avanzado
        </span>

        <h1 className="hero-title">
          Blog Alejandra
        </h1>

        <p className="hero-subtitle">
          Biblioteca UI Profesional — documentación
          y demos de componentes reutilizables.
        </p>

        <p className="hero-description">
          Colección de componentes construidos con
          variables CSS, glassmorphism, flexbox,
          grid, animaciones y media queries.
          Diseñados para ser reutilizables,
          accesibles y fáciles de integrar.
        </p>

        <div
          className="hero-icons"
          aria-label="Tecnologías utilizadas"
        >
          <i
            className="devicon-vitejs-plain colored"
            title="Vite"
          ></i>

          <i
            className="devicon-html5-plain colored"
            title="HTML5"
          ></i>

          <i
            className="devicon-css3-plain colored"
            title="CSS3"
          ></i>

          <i
            className="devicon-javascript-plain colored"
            title="JavaScript"
          ></i>

          <i
            className="devicon-react-original colored"
            title="React"
          ></i>

          <i
            className="devicon-nodejs-plain colored"
            title="Node.js"
          ></i>
        </div>

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
