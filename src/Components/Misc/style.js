import styled from "styled-components"
import { CircularProgress } from "@material-ui/core"
import { colors } from "../../styleVars"

export const StyledProgress = styled(CircularProgress)`
  width: 300px;
  height: 300px;
`

export const ProgressContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 3rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.dark};
  z-index: 999;
`

export const BasicButton = styled.button`
  background-color: transparent;
  color: ${colors.light};
  border: 1px solid ${colors.light};
  padding: 0.5em 1.5em;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 250ms ease-in;

  &:active {
    transform: scale(0.9);
  }
`
