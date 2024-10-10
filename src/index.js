// import React from "react";
// import createRoot from react-dom/client;
// import ReactDom from "react-dom";

// import App from "./";

// createRoot(<App />, document.getElementById("root"));

import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App"; // Make sure this points to the correct App file
import "antd/dist/antd";
import { Provider } from "react-redux";
import { store } from "./app/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create the root
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
); // Render the App
