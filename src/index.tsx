import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./presentation/app";
import "core/lang";
import { registerServiceWorker } from "./registerServiceWorker";
import reportWebVitals from "./reportWebVitals";

const devRoot = document.getElementById("_root") as HTMLElement;

const root = createRoot(devRoot);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

registerServiceWorker();
reportWebVitals();
