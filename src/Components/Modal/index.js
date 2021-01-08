import React from "react"
import { Background, Container, Icon, Text, StyledLink } from "./style"

export default function Modal({ children, ...props }) {
  return <Background {...props}>{children}</Background>
}

Modal.Container = function ModalContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Modal.Icon = function ModalIcon({ ...props }) {
  return <Icon {...props} />
}

Modal.Text = function ModalText({ children, ...props }) {
  return <Text {...props}>{children}</Text>
}

Modal.Link = function ModalLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}
