import styled from "styled-components"

export const Container = styled.div`
  position: relative; // for icons
  display: grid;
  grid-template-rows: 1fr 1fr auto auto;
  justify-self: center;
  max-width: 350px;
  height: 400px;
  border: 5px solid #fff;
  border-radius: 2rem;
  overflow: hidden;
`

export const Title = styled.div`
  position: relative;
  grid-column: 1 /-1;
  grid-row: 4 / 5;
  min-height: 3em;
  margin: 0 0.5rem 0.5rem 0.5rem;
  padding: 0.75rem;
  border-radius: 1rem;
  background-color: #fff9;
  font-weight: 500;
  font-size: 1em;
  align-self: end;
`

export const Price = styled.h2`
  position: absolute;
  top: -1.65em;
  right: -0.2em;
  padding: 0.2em 0.5em;
  background-color: #95bfcc;
  font-size: 1rem;
  border-radius: 9999px;
`

export const Image = styled.img`
  grid-row: 1 / 5;
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const postionSpacing = "0.75em"

export const Icon = styled.div`
  position: absolute;
  top: ${postionSpacing};
  ${({ position }) => `${position}: ${postionSpacing}`};
  color: ${({ active, color }) => (active ? color : "grey")};
`
