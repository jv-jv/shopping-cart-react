import React from "react"
import { MainContainer } from "./style"

export default function Container({ children, ...props }) {
  return <MainContainer {...props}>{children}</MainContainer>
}
