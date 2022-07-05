import styled from "styled-components"

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
`
export const NavItem = styled.a<NavbarProps>`
  text-decoration: none;
  color: ${props => props.isActive ? "white" : "#1a1a1a"};
  text-align: center;
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  border:1px solid #1a1a1a;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: #1a1a1a;
  }
  background: ${props => props.isActive ? "#1a1a1a" : "transparent"};
}
`

export interface NavbarProps {
  isActive: boolean,
}
