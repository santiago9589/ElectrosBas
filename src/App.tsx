import LayoutComponent from "./components/Layout"
import HomePage from "./pages/home/home.page"
import IngresoPage from "./pages/ingreso/ingreso.page"
import QuienesSomosPage from "./pages/quienes/quienes.page"
import {Route,Routes} from "react-router-dom";

import React from "react"

function App() {

  return (
    <LayoutComponent>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/ingreso" element={<IngresoPage />}/>
        <Route path="/quienessomos" element={<QuienesSomosPage />}/>
      </Routes>
    </LayoutComponent>
  )
}

export default App
