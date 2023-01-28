import App from "./App";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ShowDetails from "./Components/ShowDetails";
import EditDetails from "./Components/EditDetails";

function RouterList() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/public/:id" element={<ShowDetails />} />
      <Route path="/private/:id" element={<EditDetails />} />
    </Routes>
  );
}

export default RouterList;
