import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`

export const CompactContainer = styled(motion.div).attrs({
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  initial: { opacity: 0, y: -50 },
  transition: { duration: 0.25 },
})`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background: white;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.card};
    width: 100%;
    padding: 3rem;
    ${theme.medias.portrait} {

    }

    ${theme.medias.mobile} {
      padding: 0;
      box-shadow: none;
      background: transparent;    }
  `}
  
`
