import React from "react"
import styled, { css } from "styled-components/macro"
import { motion, useAnimation } from "framer-motion"

import { PrimaryButtonProps } from "./PrimaryButton"

export const Button = styled.button<ButtonProps>`
  ${({ theme, $isDisabled, $isDestructive }) => css`
    height: 5rem;
    width: 100%;

    font-size: ${theme.typography.fontSizeButton};
    font-weight: ${theme.typography.fontWeightBold};
    letter-spacing: ${theme.typography.textFontFamily};
    text-transform: uppercase;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    overflow: hidden;
    border: none;
    border-radius: ${theme.sizes.borderRadiusButton};
    box-shadow: ${theme.shadows.button};
    outline: none;
    cursor: pointer;
    position: relative;
    transition: all 250ms;
    will-change: transform;

    ${$isDestructive && css`
      &, ${IdleState} {
        background-color: ${theme.colors.dangerDark};
      }

      ${LoadingState} {
        background-color: ${theme.colors.danger};
      }
    `}
    ${$isDisabled && css`
      pointer-events: none;
      color: ${theme.colors.grey700};
      background-color: ${theme.colors.grey300};

      ${IdleState} {
        color: ${theme.colors.grey700};
        background-color: ${theme.colors.grey300};
      }

      box-shadow: none;
    `}
    &:focus {
      outline: none;
    }

    &:hover {
      box-shadow: ${theme.shadows.buttonHover};
      transform: perspective(500px) translateZ(3px);
    }

    &:active {
      box-shadow: ${theme.shadows.button};
      transform: perspective(500px) translateZ(0px);
    }
  `}
`

export interface ButtonProps {
  $isDisabled?: PrimaryButtonProps["isDisabled"],
  $isDestructive: PrimaryButtonProps["isDestructive"],
}

export const State = styled(motion.div)<StateProps>`
  width: 100%;
  height: 100%;
  left: 0;
  border-radius: ${({ theme }) => theme.sizes.borderRadiusButton};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  column-gap: 0.5rem;

  padding: 1.3rem;

  ${({ $iconPosition }) => $iconPosition === "right" && css`
    flex-flow: row-reverse;
  `}
`

export interface StateProps {
  $iconPosition?: "left" | "right",
}

export const IdleState = styled(State)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    top: 0;
  `}
`

export const LoadingState = styled(State)`
  display: flex;
  background: ${({ theme }) => theme.colors.primaryMedium};
  color: white;
  top: -100%;
  position: absolute;
`

export const SuccessState = styled(State)`
  display: flex;
  background: ${({ theme }) => theme.colors.success};
  color: white;
  top: -100%;
  position: absolute;
`

export const ErrorState = styled(State)`
  display: flex;
  background: ${({ theme }) => theme.colors.danger};
  color: white;
  top: -100%;
  position: absolute;
`

export type ButtonState = "idle" | "loading" | "success" | "error"

export function useAnimations(state: ButtonState) {
  const controls = {
    error: useAnimation(),
    idle: useAnimation(),
    loading: useAnimation(),
    success: useAnimation(),
  }

  const previousState = React.useRef<ButtonState>("idle")
  const isAnimating = React.useRef(false)

  React.useEffect(() => {
    function setStatesPreviousPosition() {
      Object.entries(controls).forEach(([ controlName, control ]) => {
        if (controlName === previousState.current) {
          control.set({
            top: 0,
            zIndex: 2,
          })
        }
        else {
          control.set({
            top: 0,
            zIndex: 1,
          })
        }
      })
    }

    async function startAnimation(state: ButtonState) {
      isAnimating.current = true

      controls[state].set({
        top: "-100%",
        zIndex: 3,
      })

      await controls[state].start({
        top: 0,
        transition: { duration: 0.5 },
      })
      previousState.current = state
      isAnimating.current = false
    }

    if (previousState.current !== state && !isAnimating.current) {
      setStatesPreviousPosition()
      startAnimation(state)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return {
    errorControls: controls.error,
    idleControls: controls.idle,
    loadingControls: controls.loading,
    successControls: controls.success,
  }
}

