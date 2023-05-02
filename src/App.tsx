import LayoutComponent from "./components/Layout"
import HomePage from "./pages/home/home.page"
import IngresoPage from "./pages/ingreso/ingreso.page"
import QuienesSomosPage from "./pages/quienes/quienes.page"
import React from "react"





function App() {

  return (
    <LayoutComponent>
      <IngresoPage/>
    </LayoutComponent>
  )
}

export default App
