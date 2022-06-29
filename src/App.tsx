import React from "react"
import "./App.css"
import { Routes } from "./features/Navigation"
import { Providers } from "./Providers"

function App() {
  return (
    <Providers>
      <Routes/>
    </Providers>
  )
}

export default App
