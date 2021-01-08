import React from "react"
import { Container, Empty, StyledLink } from "./style"

export default function Favourite({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Favourite.Empty = function FavouriteEmpty({ children, ...props }) {
  return <Empty {...props}>{children}</Empty>
}

Favourite.Link = function FavouriteLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}
