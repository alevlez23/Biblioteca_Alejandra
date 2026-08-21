import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Tab 1",
    content: "Contenido del Tab 1",
  },
  {
    id: 2,
    label: "Tab 2",
    content: "Contenido del Tab 2",
  },
  {
    id: 3,
    label: "Tab 3",
    content: "Contenido del Tab 3",
  },
  {
    id: 4,
    label: "Tab 4",
    content: "Contenido del Tab 4",
  },
  {
    id: 5,
    label: "Tab 5",
    content: "Contenido del Tab 5",
  },
];

export default function Tabs() {
  const [tab, setTab] =
    useState(1);

  const activeTab =
    tabs.find(
      (item) =>
        item.id === tab
    );

  return (
    <div className="ui-card">
      <h3 className="component-title">
        <i
          className="bi bi-toggle2-on"
          aria-hidden="true"
        ></i>

        Tabs
      </h3>

      <div
        className="tabs"
        role="tablist"
        aria-label="Ejemplo de pestañas"
      >
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={
              tab === item.id
            }
            aria-controls={
              `panel-${item.id}`
            }
            className={
              tab === item.id
                ? "tab active"
                : "tab"
            }
            onClick={() =>
              setTab(item.id)
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="tab-content"
        role="tabpanel"
        id={`panel-${activeTab.id}`}
        aria-labelledby={
          `tab-${activeTab.id}`
        }
      >
        {activeTab.content}
      </div>
    </div>
  );
}
