import { MuiThemeProvider } from "@material-ui/core/styles"
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles"
import { create } from "jss"
import React from "react"
import { StylesProvider } from "@material-ui/styles"

import { muiMyQvtFoTheme } from "./muiMyQvtFoTheme"

const generateClassName = createGenerateClassName()
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point") || undefined,
})

export const MuiMyQvtFoThemeProvider: React.FC = (props) => (
  <MuiThemeProvider theme={muiMyQvtFoTheme}>
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      {props.children}
    </StylesProvider>
  </MuiThemeProvider>
)
