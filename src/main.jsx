import React from "react";
import { createRoot } from "react-dom/client"; // Adjusted import
import App from "./App";
import { StoreContext } from "./Models/StoreContex";
import { rootStore } from "./Models/RootStore";
import "./index.css";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container); // Use createRoot
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
  );
}
