import "./i18n";
import * as React from "react";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { init } from "lux-js-sdk";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { Provider } from "react-redux";
import getHubPort from "@/utils/getHubPort";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { store } from "./reducers";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const port = getHubPort();
init(`localhost:${port}`);

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container as HTMLElement); // createRoot(container!) if you use TypeScript
root.render(<Root />);
