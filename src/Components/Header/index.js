import React from "react"
import {
  Container,
  Logo,
  StyledLink,
  LinkContainer,
  Icon,
  Counter,
} from "./style"

export default function Header({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Header.LinkContainer = function HeaderLinkContainer({ children, ...props }) {
  return <LinkContainer {...props}>{children}</LinkContainer>
}
Header.Link = function HeaderLink({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}

Header.Icon = function HeaderIcon({ ...props }) {
  return <Icon {...props} />
}

Header.Logo = function HeaderLogo({ children, ...props }) {
  return <Logo {...props}>{children}</Logo>
}

Header.Counter = function HeaderCounter({ children, ...props }) {
  return <Counter {...props}>{children}</Counter>
}
