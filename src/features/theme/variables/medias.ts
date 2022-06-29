/* eslint-disable sort-keys */
import { sizes } from "./sizes"

export const medias = {
  landscape: `@media (min-width: ${sizes.landscapeWidth + 1}px)`,
  mobile: `@media (max-width: ${sizes.mobileWidth - 1}px)`,
  portrait: `@media (max-width: ${sizes.portraitWidth - 1}px)`,
  reducedLandscape: `@media (min-width: ${sizes.portraitWidth}px) and (max-width: ${sizes.landscapeWidth}px)`,
  reducedLandscapeAndPortrait: `@media (max-width: ${sizes.landscapeWidth}px)`,
}
