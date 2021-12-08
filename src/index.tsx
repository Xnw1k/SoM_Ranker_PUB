import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CtxProvider } from "./Store/Provider";

ReactDOM.render(
  <React.StrictMode>
    <CtxProvider>
      <App />
    </CtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
