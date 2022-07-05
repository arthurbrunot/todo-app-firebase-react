import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  flex-direction: column;
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  gap: 1rem;
  max-width: 500px;
      
  h3 {
  margin-bottom: .6rem;
  }
  
  button {
   background: #1a1a1a;
   cursor: pointer;
   border-radius: 50000px;
   width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f0ece2;
   box-shadow: ${props => props.theme.shadows.button};
   transition: all 0.3s ease-in-out;
   
   &:hover {
     box-shadow: ${props => props.theme.shadows.buttonHover};
   }
  }
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
      background: transparent;    
    }
  `}: ${({ theme }) => theme.medias.mobile}
`
