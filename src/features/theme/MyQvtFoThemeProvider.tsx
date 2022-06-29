import { ThemeProvider } from "styled-components"
import { myQvtFoTheme } from "features/theme/MyQvtFoTheme"
import { Component } from "utilities/types"

export const MyQvtFoThemeProvider: Component = ({ children }) => (
  <ThemeProvider theme={myQvtFoTheme}>{children}</ThemeProvider>
)
