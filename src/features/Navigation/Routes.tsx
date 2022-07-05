import React from "react"
import {
  Routes as IRoutes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"
import { LoginForm } from "../Authentication"
import { RegisterForm, Reset } from "../Authentication"
import { Homepage } from "../Homepage"
import { CompletedTodos } from "../CompletedTodosPage"

export const Routes = () => {
  return (
    <Router>
      <IRoutes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/completed" element={<CompletedTodos />} />
      </IRoutes>
    </Router>
  )
}
