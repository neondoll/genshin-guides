import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router";

import App from "./App";
import { store } from "./store";
import "./index.css";

const theme = {
  preset: Aura,
  // Default options
  options: {
    prefix: "p",
    darkModeSelector: "system",
    cssLayer: false,
    cssVariables: true,
    scoped: false,
  },
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element (#root) not found in HTML");
}

createRoot(container).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PrimeReactProvider theme={theme}>
          <App />
        </PrimeReactProvider>
      </Provider>
    </HashRouter>
  </StrictMode>,
);
