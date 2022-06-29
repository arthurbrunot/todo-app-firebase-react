import styled, { css } from "styled-components/macro"

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  
  ${({ theme }) => theme.medias.mobile} {
   height: auto;
  }
`

export const Image = styled.img<{ $isLoaded: boolean }>`
  ${({ $isLoaded }) => !$isLoaded && css`
    opacity: 0;
  `}
  transition: opacity 0.3s ease-in-out;
  display: block;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
`

