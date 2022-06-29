import React from "react"
import { MuiMyQvtFoThemeProvider, MyQvtFoThemeProvider  } from "features/theme"

export const Providers: React.FC = ({ children }) => (
  <MyQvtFoThemeProvider>
    <MuiMyQvtFoThemeProvider>
      {children}
    </MuiMyQvtFoThemeProvider>
  </MyQvtFoThemeProvider>
)
