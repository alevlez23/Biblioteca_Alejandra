import {
  useId,
  useState,
} from "react";

export default function Accordion() {
  const [open, setOpen] =
    useState(false);

  const contentId =
    useId();

  return (
    <div className="ui-card">
      {/* ===============================================
          TÍTULO
      =============================================== */}
      <h3 className="component-title">
        <i
          className="bi bi-list-columns-reverse"
          aria-hidden="true"
        ></i>

        Accordion
      </h3>

      {/* ===============================================
          ACCORDION
      =============================================== */}
      <div className="accordion">
        <button
          type="button"
          className="accordion-header"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() =>
            setOpen(
              (value) => !value
            )
          }
        >
          <span>
            {open
              ? "Ocultar contenido"
              : "Mostrar contenido"}
          </span>

          <i
            className={
              `bi ${
                open
                  ? "bi-chevron-up"
                  : "bi-chevron-down"
              }`
            }
            aria-hidden="true"
          ></i>
        </button>

        {/* =============================================
            CONTENIDO
        ============================================= */}
        {open && (
          <div
            className="accordion-body"
            id={contentId}
          >
            Bienvenido al contenido del accordion.
            Este patrón permite mostrar información
            adicional sin saturar visualmente la
            interfaz.
          </div>
        )}
      </div>
    </div>
  );
}
