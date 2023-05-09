import LayoutComponent from "./components/Layout"
import HomePage from "./pages/home/home.page"
import IngresoPage from "./pages/ingreso/ingreso.page"
import QuienesSomosPage from "./pages/quienes/quienes.page"
import { Route, Routes } from "react-router-dom";

import React from "react"
import ServiciosPage from "./pages/servicios/servicios.page";
import UbicacionPage from "./pages/ubicacion/ubicacion.page";

function App() {

  return (
    <LayoutComponent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingreso" element={<IngresoPage />} />
        <Route path="/quienessomos" element={<QuienesSomosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
      </Routes>
    </LayoutComponent>
  )
}

export default App
