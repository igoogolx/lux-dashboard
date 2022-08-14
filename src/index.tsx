import "./i18n";
import * as React from "react";
import * as ReactDOM from "react-dom";
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

ReactDOM.render(<Root />, document.getElementById("app"));
