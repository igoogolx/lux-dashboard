import "./i18n";
import * as React from "react";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { init } from "lux-js-sdk";
import { Provider } from "react-redux";
import { getHubAddress, stringAddress } from "@/utils/hubAddress";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { App } from "./App";
import { store } from "./reducers";

const hubAddress = getHubAddress();
init(stringAddress(hubAddress));

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <FluentProvider theme={webLightTheme} style={{ width: "100%" }}>
          <App />
        </FluentProvider>
      </Router>
    </Provider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container as HTMLElement); // createRoot(container!) if you use TypeScript
root.render(<Root />);
export { getVersion } from "@/utils/version";
export { useTestUdp } from "@/utils/testUdp";
