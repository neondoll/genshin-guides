import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router";

import App from "./App";
import { ThemeProvider } from "./components/theme-provider";
import store from "./store";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element (#root) not found in HTML");
}

createRoot(container).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="genshin-guides-theme">
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </StrictMode>,
);
