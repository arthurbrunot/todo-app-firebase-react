import styled, { css } from "styled-components"
import { SecondaryButtonProps } from "./SecondaryButton"

export const Button = styled.button<ButtonProps>`
  ${({ theme, $isDisabled }) => css`
    height: auto;
    width: 100%;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${theme.colors.primary};
    font-size: ${theme.typography.fontSizeButton};
    font-weight: ${theme.typography.fontWeightBold};
    line-height:25px;
    letter-spacing: ${theme.typography.textFontFamily};
    text-transform: uppercase;
    
    background-color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.sizes.borderRadiusButton};
    box-shadow: ${theme.shadows.button};
    outline: none;

    cursor: pointer;
    
    transition: all 250ms;
    will-change: transform;

    ${$isDisabled && css`
      pointer-events: none;
      color: ${theme.colors.grey700};
      background-color: ${theme.colors.grey300};
      box-shadow: none;
    `}

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
interface ButtonProps {
  $isDisabled: SecondaryButtonProps["isDisabled"],
}
