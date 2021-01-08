import React, { useState, useEffect, useContext } from "react"
import { Context } from "../Context"

// Components
import { Card, Container, OptionsBar } from "../Components"
import { ProgressContainer } from "../Components/Misc/style"
import { CircularProgress } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import { colors } from "../styleVars"

const options = [
  "painting",
  "print",
  "photograph",
  "drawing",
  "furniture",
  "jewellery",
  "brooch",
  "bust",
]

export default function Catalog({ isMenuOpen, ...props }) {
  const {
    apiData,
    setOption,
    calculatePrice,
    addRemoveFromCart,
    isIncludedInCart,
    addRemoveFavorite,
    isIncludedInFav,
  } = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)
  const [hasImgsLoaded, setHasImgsLoaded] = useState(false)

  // UseEffects

  useEffect(() => {
    if (apiData.artObjects) {
      setIsLoading(false)
      setTimeout(() => {
        setHasImgsLoaded(true)
      }, 1000)
    }
  }, [apiData])

  // Render

  return (
    <>
      <OptionsBar isMenuOpen={isMenuOpen}>
        {options.map((option, index) => (
          <OptionsBar.Option
            key={index}
            onClick={() => {
              setIsLoading(true)
              setHasImgsLoaded(false)
              setOption(option)
            }}
          >
            {option}
          </OptionsBar.Option>
        ))}
      </OptionsBar>

      <Container style={{ position: "relative" }}>
        {!isLoading && (
          <>
            {!hasImgsLoaded && (
              <ProgressContainer>
                <CircularProgress color="secondary" />
              </ProgressContainer>
            )}

            {apiData.artObjects.map((pic, index) => (
              <Card key={index}>
                <Card.Icon
                  active={isIncludedInCart(pic)}
                  position="right"
                  color={colors.cart}
                  onClick={() => {
                    addRemoveFromCart(pic)
                  }}
                >
                  <ShoppingCartIcon />
                </Card.Icon>
                <Card.Icon
                  active={isIncludedInFav(pic)}
                  position="left"
                  color={colors.fav}
                  onClick={() => addRemoveFavorite(pic)}
                >
                  <FavoriteIcon />
                </Card.Icon>
                <Card.Image src={pic.webImage.url} />
                <Card.Title>
                  {pic.title}
                  <Card.Price>£{calculatePrice(pic)}</Card.Price>
                </Card.Title>
              </Card>
            ))}
          </>
        )}
      </Container>
    </>
  )
}
