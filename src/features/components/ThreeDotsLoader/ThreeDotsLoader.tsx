import * as Styles from "./ThreeDotsLoader.styles"
import { Component } from "../../../utilities/types"

export const ThreeDotsLoader: Component = () => (
  <Styles.AnimatedContainer>
    <Styles.AnimatedDot/>
    <Styles.AnimatedDot/>
    <Styles.AnimatedDot/>
  </Styles.AnimatedContainer>
)
