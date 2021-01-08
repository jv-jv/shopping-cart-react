import styled from "styled-components"

import { BasicButton } from "../Misc/style"
import { colors } from "../../styleVars"
import { Link } from "react-router-dom"

export const Container = styled.div``

export const Total = styled.h4`
  text-align: right;
  color: ${colors.light};
`
export const Empty = styled.h3`
  margin-top: 3em;
  text-align: center;
  color: ${colors.light};
  font-weight: 500;
`

export const StyledLink = styled(Link)`
  color: ${colors.light};
  font-style: italic;
  opacity: 0.7;
  font-size: 1.5rem;
`

export const Button = styled(BasicButton)`
  margin: 1rem auto;
  display: block;
`
