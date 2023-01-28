import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import RouterList from "./RoutesList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />

    <BrowserRouter>
      <RouterList />
    </BrowserRouter>
  </React.StrictMode>
);
