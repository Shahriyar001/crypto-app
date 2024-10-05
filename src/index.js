// import React from "react";
// import createRoot from react-dom/client;
// import ReactDom from "react-dom";

// import App from "./";

// createRoot(<App />, document.getElementById("root"));

import React from "react";
import { createRoot } from "react-dom/client"; // Correct import

import App from "./App"; // Make sure this points to the correct App file

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create the root
root.render(<App />); // Render the App
