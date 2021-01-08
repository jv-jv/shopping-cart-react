import React from "react"
import { Container, Button, StyledLink, Total, Empty } from "./style"

export default function Cart({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Cart.Total = function CartTotal({ children, ...props }) {
  return <Total {...props}>{children}</Total>
}

Cart.Button = function CartButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>
}

Cart.Link = function CartStyledLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}

Cart.Empty = function CartEmpty({ children, ...props }) {
  return <Empty {...props}>{children}</Empty>
}
