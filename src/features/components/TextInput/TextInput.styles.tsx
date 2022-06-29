import styled, { css } from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: 5rem;
    border-radius: ${theme.sizes.borderRadiusButton};
    padding: 1.5rem 2.5rem;
    border: 1px solid ${theme.colors.borderDark};
    
    // Input text
    color: ${theme.colors.grey500};
    font-size: ${theme.typography.fontSizeTextMedium};
    
    &::placeholder{
      color: ${theme.colors.grey500};
    }
    
    &:focus-visible {
      outline: ${theme.colors.primary} auto 1px;
    }
  `}
 
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizeLabel};
    text-transform: uppercase;
  `}
`
