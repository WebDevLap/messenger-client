import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material";
import { theme } from "@shared/config/material.config.ts";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store.ts";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MaterialThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </ReduxProvider>
  </MaterialThemeProvider>
);
