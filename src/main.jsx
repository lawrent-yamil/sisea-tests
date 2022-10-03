import React from "react";
import ReactDOM from "react-dom/client";
import Catalogo from "/src/components/catalogo.jsx";
import Encabezado from "/src/components/Encabezado.jsx";
import Pie from "/src/components/pie.jsx";
import HomePage from "./HomePage.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import "/src/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Encabezado />
    <Routes>
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/" index element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
    <Pie />
  </HashRouter>
);
