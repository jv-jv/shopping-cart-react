import React from "react"
import { Container, Image, Title, Price, Button } from "./style"

export default function CartItem({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

CartItem.Image = function CartItemImage({ src, ...props }) {
  return <Image src={src} {...props} />
}

CartItem.Title = function CartItemTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}

CartItem.Price = function CartItemPrice({ children, ...props }) {
  return <Price {...props}>{children}</Price>
}

CartItem.Button = function CartItemButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>
}
