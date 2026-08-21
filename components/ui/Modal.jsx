import {
  useEffect,
  useId,
  useState,
} from "react";

export default function Modal() {
  const [open, setOpen] =
    useState(false);

  const titleId =
    useId();

  const descriptionId =
    useId();

  /* ===============================================
     CERRAR CON ESCAPE
  =============================================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <div className="ui-card">
      {/* =============================================
          TÍTULO
      ============================================= */}

      <h3 className="component-title">
        <i
          className="bi bi-window-fullscreen"
          aria-hidden="true"
        ></i>

        Modal
      </h3>

      {/* =============================================
          BOTÓN ABRIR
      ============================================= */}

      <button
        type="button"
        className="ui-btn primary"
        onClick={() =>
          setOpen(true)
        }
      >
        Aviso importante
      </button>

      {/* =============================================
          MODAL
      ============================================= */}

      {open && (
        <div
          className="modal-overlay"
          role="presentation"
          onMouseDown={() =>
            setOpen(false)
          }
        >
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby={
              titleId
            }
            aria-describedby={
              descriptionId
            }
            onMouseDown={(
              event
            ) =>
              event.stopPropagation()
            }
          >
            {/* =====================================
                BOTÓN X
            ===================================== */}

            <button
              type="button"
              className="modal-close"
              aria-label="Cerrar ventana"
              onClick={() =>
                setOpen(false)
              }
            >
              <i
                className="bi bi-x-lg"
                aria-hidden="true"
              ></i>
            </button>

            {/* =====================================
                CONTENIDO
            ===================================== */}

            <h4 id={titleId}>
              Ventana Modal
            </h4>

            <p
              id={
                descriptionId
              }
            >
              Este es un modal con efecto
              glassmorphism, adaptable a
              pantallas pequeñas y compatible
              con la tecla Escape.
            </p>

            {/* =====================================
                BOTÓN CERRAR
            ===================================== */}

            <button
              type="button"
              className="ui-btn outline"
              onClick={() =>
                setOpen(false)
              }
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
