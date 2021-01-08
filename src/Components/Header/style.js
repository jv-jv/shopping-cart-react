import styled from "styled-components"
import { Link } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import { colors } from "../../styleVars"

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "logo . menu"
    "links links links";
  align-items: center;
  flex-direction: column;
  color: ${colors.light};

  @media (min-width: 500px) {
    grid-template-areas: "logo . links";
  }
`
export const LinkContainer = styled.div`
  grid-area: links;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  justify-self: center;
  margin: 1em 0;

  @media (min-width: 500px) {
    display: block;
    justify-self: end;
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  color: ${colors.light};
  padding: 1em;
  text-decoration: none;
`

const dimensions = "1rem"

export const Counter = styled.div`
  position: absolute;
  top: 0;
  right: -0.35rem;
  border: 1px solid ${colors.light};
  border-radius: 50%;
  width: ${dimensions};
  height: ${dimensions};
  display: ${({ children }) => (children > 0 ? "grid" : "none")};
  place-content: center;
  font-size: 0.5rem;
`

export const Icon = styled(MenuIcon)`
  grid-area: menu;
  justify-self: end;
  margin-left: 0.5em;

  @media (min-width: 500px) {
    display: none !important;
  }
`

export const Logo = styled.div`
  grid-area: logo;
  display: flex;
  height: 4rem;
`
