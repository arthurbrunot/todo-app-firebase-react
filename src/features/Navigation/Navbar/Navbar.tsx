import React from "react"
import * as Styles from "./Navbar.styles"
import { useLocation } from "react-router-dom"

export const Navbar = () => {
  const location = useLocation()
  const paths = [
    {
      path: "/",
      name: "En cours",
    },
    {
      path: "/completed",
      name: "Terminées",
    },
  ]

  return (
    <Styles.NavContainer>
      {
        paths.map((path: any) => {
          return (
            <Styles.NavItem
              key={path.path}
              href={path.path}
              isActive={location.pathname === path.path}
            >
              {path.name}
            </Styles.NavItem>
          )
        })
      }
    </Styles.NavContainer>
  )
}
