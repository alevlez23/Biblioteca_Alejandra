export default function Tooltip() {
  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i
          className="bi bi-chat-dots-fill"
          aria-hidden="true"
        ></i>

        Tooltip
      </h3>

      <button
        type="button"
        className="tooltip"
        aria-describedby="tooltip-demo"
      >
        Pasa el mouse o usa Tab aquí

        <span
          className="tip"
          id="tooltip-demo"
          role="tooltip"
        >
          Este es un tooltip accesible.
        </span>
      </button>
    </div>
  );
}
