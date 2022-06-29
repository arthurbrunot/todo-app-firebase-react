import React, { ButtonHTMLAttributes } from "react"

import { Icon, ThreeDotsLoader } from "features/components"
import { Component } from "../../../utilities/types"
import * as Styles from "./PrimaryButton.styles"

/** Primary button for call to actions */
export const PrimaryButton: Component<PrimaryButtonProps> = (props) => {
  const {
    children, onClick,
    isDestructive,
    state, idleStateProps, loadingStateProps, successStateProps, errorStateProps,
    ...buttonProps
  } = props

  const {
    idleControls,
    loadingControls,
    successControls,
    errorControls,
  } = Styles.useAnimations(state!)

  const isDisabled = props.isDisabled || state === "loading"

  const loadingState = Object.assign(defaultStates().loading, loadingStateProps)
  const successState = Object.assign(defaultStates().success, successStateProps)
  const errorState = Object.assign(defaultStates().error, errorStateProps)

  return (
    <Styles.Button
      onClick={!isDisabled ? props.onClick : undefined}
      disabled={isDisabled || props.state === "loading"}
      $isDisabled={isDisabled}
      $isDestructive={isDestructive}
      type="button"
      {...buttonProps}
    >
      <Styles.IdleState
        animate={idleControls}
        $iconPosition={idleStateProps?.iconPosition}
      >
        {idleStateProps?.icon} <span>{children}</span>
      </Styles.IdleState>

      <Styles.LoadingState
        animate={loadingControls}
        $iconPosition={loadingState?.iconPosition}
      >
        {loadingState?.icon} <span>{loadingState?.wording}</span>
      </Styles.LoadingState>

      <Styles.SuccessState
        animate={successControls}
        $iconPosition={successState?.iconPosition}
      >
        {successState?.icon} <span>{successState?.wording}</span>
      </Styles.SuccessState>

      <Styles.ErrorState
        animate={errorControls}
        $iconPosition={errorState?.iconPosition}
      >
        {errorState?.icon} <span>{errorState?.wording}</span>
      </Styles.ErrorState>
    </Styles.Button>
  )
}

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Click event callback */
  onClick?: () => void,

  /** Disables the button, rendering it inactive */
  isDisabled?: boolean,

  /** Marks the button to execute a destructive or otherwise dangerous action */
  isDestructive?: boolean,

  state?: Styles.ButtonState,
  idleStateProps?: StateProps,
  loadingStateProps?: StateProps,
  successStateProps?: StateProps,
  errorStateProps?: StateProps,
}

interface StateProps {
  wording?: string,
  icon?: JSX.Element,
  iconPosition?: Styles.StateProps["$iconPosition"],
}

PrimaryButton.defaultProps = {
  state: "idle",
}

const defaultStates = () => ({
  error: {
    icon: <Icon name="error"/>,
    iconPosition: "left",
    wording: `There was an error`,
  },
  loading: {
    icon: <ThreeDotsLoader/>,
    iconPosition: "left",
    wording: `Loading`,
  },
  success: {
    icon: <Icon name="done"/>,
    iconPosition: "left",
    wording: `Done`,
  },
})
