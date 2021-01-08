import styled from "styled-components"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { colors } from "../../styleVars"
import { Link } from "react-router-dom"

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0009;
  display: grid;
  place-content: center;
`

export const Container = styled.div`
  padding: 3em;
  background-color: #ddd;
  display: flex;
  display: grid;
  grid-template-areas:
    "icon text"
    "link link";
  align-items: center;
`
export const Icon = styled(CheckCircleIcon)`
  margin-right: 0.2em;
`

export const Text = styled.h4`
  color: ${colors.dark};
  margin: 0;
`
export const StyledLink = styled(Link)`
  margin-top: 0.5em;
  grid-area: link;
  text-align: center;
`
