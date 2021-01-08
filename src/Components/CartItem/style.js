import styled from "styled-components"
import { colors } from "../../styleVars"
import { BasicButton } from "../Misc/style"

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid #333;
  padding: 1em 0;

  @media (min-width: 500px) {
    grid-template-columns: auto 1fr auto;
    justify-items: start;
  }
`

export const Image = styled.img`
  display: block;
  width: 250px;
  margin-right: 1em;

  @media (min-width: 500px) {
    width: 5rem;
  }
`

export const Title = styled.h4`
  color: ${colors.light};
  padding-right: 1em;
  font-weight: 500;
  letter-spacing: 0.5px;
`
export const Price = styled.span`
  font-style: italic;
  opacity: 0.6;
`

export const Button = styled(BasicButton)``
