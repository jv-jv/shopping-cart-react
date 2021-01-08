import React from "react"
import { useCollection, useFetch } from "./Hooks/"
import { rijksQuery } from "./api"

const Context = React.createContext()

function ContextProvider({ children }) {
  const [apiData, setOption] = useFetch(rijksQuery)

  const [
    cartItems,
    isIncludedInCart,
    addRemoveFromCart,
    removeFromCart,
    clearCart,
    calculatePrice,
  ] = useCollection(apiData.artObjects, true)

  const [favouriteItems, isIncludedInFav, addRemoveFavorite] = useCollection(
    [],
    false
  )

  return (
    <Context.Provider
      value={{
        apiData,
        setOption,
        cartItems,
        calculatePrice,
        addRemoveFromCart,
        removeFromCart,
        clearCart,
        isIncludedInCart,
        favouriteItems,
        addRemoveFavorite,
        isIncludedInFav,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
