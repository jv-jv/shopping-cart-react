import React from "react"
import { Container, Option } from "./style"

export default function OptionsBar({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

OptionsBar.Option = function OptionsBarOption({ children, ...props }) {
  return <Option {...props}>{children}</Option>
}
