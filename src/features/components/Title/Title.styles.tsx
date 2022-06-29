import styled, { CSSProperties, css } from "styled-components/macro"

export const Title = styled.h1.attrs<TitleProps, TitleAttrsProps>(props => {
  let fontSize: TitleAttrsProps["fontSize"],
    fontWeight: TitleAttrsProps["fontWeight"],
    color: TitleAttrsProps["color"]

  switch (props.$color) {
    case "primary":
      color = props.theme.colors.primary
      break
    case "secondary":
      color = props.theme.colors.secondary
      break
    default:
      color = props.theme.colors.black
  }
  switch (props.$size) {
    case "extraLarge":
      fontSize = props.theme.typography.fontSizeTitleExtraBig
      fontWeight = props.theme.typography.fontWeightBold
      break
    case "large":
      fontSize = props.theme.typography.fontSizeTitleBig
      fontWeight = props.theme.typography.fontWeightBold
      break
    default:
      fontSize = props.theme.typography.fontSizeTitle
      fontWeight = props.theme.typography.fontWeightSemiBold
  }

  return { color, fontSize, fontWeight }
})<TitleProps>`
  ${({ $inUpperCase, color, fontSize, fontWeight }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    ${$inUpperCase && css`text-transform: uppercase`};
    color: ${color};
  `}
`

export interface TitleProps {
  $size?: "extraLarge" | "large" | "medium",
  $color?: "primary" | "black" | "secondary",
  $inUpperCase?: boolean,
  as: string,
}

interface TitleAttrsProps {
  fontSize: string,
  fontWeight: CSSProperties["fontWeight"],
  color: CSSProperties["color"],
}

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-size: 0.5em;
    color: ${theme.colors.black};
    font-weight: ${theme.typography.fontWeightLight}
  `}
`
