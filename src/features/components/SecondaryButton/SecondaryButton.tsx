import { ButtonHTMLAttributes } from "react"

import { Component } from "../../../utilities/types"
import * as Styles from "./SecondaryButton.styles"

/** Secondary button for call to actions */
export const SecondaryButton: Component<SecondaryButtonProps> = (props) => {
  const { children, onClick, isDisabled, ...buttonProps } = props

  return (
    <Styles.Button
      onClick={!props.isDisabled ? props.onClick : undefined}
      disabled={props.isDisabled}
      $isDisabled={props.isDisabled}
      type="button"
      {...buttonProps}
    >
      {props.children}
    </Styles.Button>
  )
}

export interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Click event callback */
  onClick: () => void,

  /** Disables the button, rendering it inactive */
  isDisabled?: boolean,
}

