import { SimpleInterpolation, css } from "styled-components"

export const mixins = {
  webkitClampText: (numberOfLines: number): SimpleInterpolation => css`
    // The following properties are mainly valid in Webkit only
    // They are used to auto-ellipsis the text after 2 lines
    // https://stackoverflow.com/questions/3922739/limit-text-length-to-n-lines-using-css
    display: -webkit-box;
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${numberOfLines};
  `,
}
