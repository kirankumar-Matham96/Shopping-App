import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { registerSW } from "virtual:pwa-register";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

registerSW({ immediate: true });
