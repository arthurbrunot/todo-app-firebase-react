import * as Styles from "./TextInput.styles"
import React, { ChangeEvent, InputHTMLAttributes } from "react"

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, isDisabled, ...inputProps } = props
  return <Styles.Container>
    <Styles.Label>{label}</Styles.Label>
    <Styles.Input
      ref={ref}
      disabled={props.isDisabled}
      {...inputProps}
    />
  </Styles.Container>
})

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  isDisabled?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}
