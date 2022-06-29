import { createTheme } from "@material-ui/core/styles"

import { muiMyQvtFoVariables } from "./muiMyQvtFoVariables"
import { myQvtFoTheme } from "../MyQvtFoTheme"

export interface MuiMyQvtFoBreakpointOverrides {
  // Disabled (but might be required by some components of MUI (dialogs))
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  portrait: true,
  reducedLandscape: true,
  landscape: true,
}

export enum zIndexMuiTheme {
  modal = 1300
}

export const muiMyQvtFoTheme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  breakpoints: {
    values: {
      portrait: myQvtFoTheme.sizes.mobileWidth,
      reducedLandscape: myQvtFoTheme.sizes.portraitWidth,
      // eslint-disable-next-line sort-keys
      landscape: myQvtFoTheme.sizes.landscapeWidth,
    },
  },
  palette: muiMyQvtFoVariables.palette,
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
})
