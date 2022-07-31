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

const port = window.getCorePort ? window.getCorePort() : 9000;
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
