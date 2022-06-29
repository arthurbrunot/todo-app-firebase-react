/* eslint-disable @typescript-eslint/no-empty-interface */
// globals.d.ts
import { MyQvtFoTheme } from "features/theme"

declare module "styled-components" {
  export interface DefaultTheme extends MyQvtFoTheme {}
}
