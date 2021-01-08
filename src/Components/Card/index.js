import React from "react"
import { Container, Title, Price, Image, Icon } from "./style"

export default function Card({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Card.Title = function CardTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}

Card.Price = function CardPrice({ children, ...props }) {
  return <Price {...props}>{children}</Price>
}

Card.Image = function CardImage({ ...props }) {
  return <Image {...props} />
}

Card.Icon = function CardIcon({ children, position, ...props }) {
  return (
    <Icon position={position} {...props}>
      {children}
    </Icon>
  )
}
