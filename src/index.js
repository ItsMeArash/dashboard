import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import "./index.css";

import { ContextProvider } from "./context/ContextProvider.js";

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById("root")
);
