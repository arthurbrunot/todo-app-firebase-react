import { MuiMyQvtFoBreakpointOverrides } from "./muiMyQvtFoTheme"

declare module "@material-ui/core/styles/createBreakpoints" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface BreakpointOverrides extends MuiMyQvtFoBreakpointOverrides {}
}
