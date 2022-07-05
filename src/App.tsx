import React from "react"
import { Routes } from "./features/Navigation"
import { Providers } from "./Providers"
import "./App.css"

function App() {
  return (
    <Providers>
      <Routes/>
    </Providers>
  )
}

export default App
