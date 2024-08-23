import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const element = document.getElementById("root");
if (element === null)
  throw new Error('Está faltando um elemento "root" no index.html');

const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
