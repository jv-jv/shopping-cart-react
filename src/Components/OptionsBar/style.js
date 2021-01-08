import styled from "styled-components"
import { colors } from "../../styleVars"

export const Container = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "grid" : "none")};
  grid-gap: 0.5rem;
  padding: 1em 0;

  @media (min-width: 850px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`
export const Option = styled.div`
  border: 1px solid ${colors.light};
  color: ${colors.light};
  padding: 0.75em 1em;
  text-align: center;
  cursor: pointer;
  transition: transform 250ms ease-in;

  &:active {
    transform: scale(0.9);
  }
`
