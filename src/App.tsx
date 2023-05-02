import LayoutComponent from "./components/Layout"
import HomePage from "./pages/home/home.page"
import QuienesSomosPage from "./pages/quienes/quienes.page"
import React from "react"





function App() {

  return (
    <LayoutComponent>
      <QuienesSomosPage />
    </LayoutComponent>
  )
}

export default App
