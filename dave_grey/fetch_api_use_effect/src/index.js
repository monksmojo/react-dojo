import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root_dom = document.getElementById("root");
const reactDom = createRoot(root_dom);

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
