export default function TopNav() {
  const links = [
    {
      href: "#inicio",
      label: "Inicio",
    },
    {
      href: "#estilos",
      label: "Guía de estilos",
    },
    {
      href: "#componentes",
      label: "Componentes",
    },
    {
      href: "#formularios",
      label: "Formularios",
    },
    {
      href: "#ejemplos",
      label: "Ejemplos",
    },
  ];

  return (
    <nav
      className="top-nav"
      aria-label="Navegación principal"
    >
      <div className="top-nav__inner">
        {/* MARCA */}
        <a
          className="top-nav__brand"
          href="#inicio"
        >
          Biblioteca UI
        </a>

        {/* ENLACES */}
        <div className="top-nav__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="top-nav__link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
