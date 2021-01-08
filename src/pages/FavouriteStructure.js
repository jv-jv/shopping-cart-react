import React, { useContext } from "react"
import { Context } from "../Context"
import { Card, Container, Favourite } from "../Components"
import FavoriteIcon from "@material-ui/icons/Favorite"

export default function FavouriteStructure() {
  const { favouriteItems, addRemoveFavorite, isIncludedInFav } = useContext(
    Context
  )
  const isFavEmpty = favouriteItems.length === 0

  return isFavEmpty ? (
    <Favourite>
      <Favourite.Empty>
        {"There are no favourites. Add something from the "}
        <Favourite.Link to="/">catalog</Favourite.Link>
      </Favourite.Empty>
    </Favourite>
  ) : (
    <Container>
      {favouriteItems.map((pic, index) => (
        <Card key={index}>
          <Card.Icon
            active={isIncludedInFav(pic)}
            position="left"
            color="red"
            onClick={() => addRemoveFavorite(pic)}
          >
            <FavoriteIcon />
          </Card.Icon>
          <Card.Image src={pic.webImage.url} />
          <Card.Title>{pic.title}</Card.Title>
        </Card>
      ))}
    </Container>
  )
}
