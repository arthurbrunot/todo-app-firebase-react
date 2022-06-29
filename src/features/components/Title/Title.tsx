import { Component } from "../../../utilities/types"
import * as Styles from "./Title.styles"

export const Title: Component<TitleProps> = props => (
  <Styles.Title
    className={props.className}
    $color={props.color}
    $size={props.size}
    $inUpperCase={props.inUppercase}
    as={props.asHeading!}
  >
    {props.children}
    {props.subtitle && <Styles.Subtitle>{props.subtitle}</Styles.Subtitle>}
  </Styles.Title>
)

export interface TitleProps {
  /** The font size of the title and subtitle */
  size?: Styles.TitleProps["$size"],

  /** The font color of the title */
  color?: Styles.TitleProps["$color"],

  /** Whether to convert the title in uppercase */
  inUppercase?: Styles.TitleProps["$inUpperCase"],

  /** Show a subtitle bellow the title */
  subtitle?: string,

  asHeading?: "h1" | "h2" | "h3" | "h4",
}

Title.defaultProps = {
  asHeading : "h1",
}
