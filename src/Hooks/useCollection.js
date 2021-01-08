import { useState } from "react"

export default function useCollection(apiResponse, hasPrice) {
  const [collectionItems, setCollectionItems] = useState([])

  const calculatePrice = (pic) => {
    const lastDigit = pic.id[pic.id.length - 1]
    if (isNaN(lastDigit)) return 50
    return Number(lastDigit) * 10 + 20
  }

  function isIncludedInCollection(e) {
    return collectionItems.find((item) => item.id === e.id)
  }

  function addToCollection(e) {
    if (hasPrice) {
      const itemToAddWithPrice = apiResponse.reduce((acc, item) => {
        if (item.id !== e.id) return acc
        const itemWithPrice = { ...item, price: calculatePrice(item) }
        return [...acc, itemWithPrice]
      }, [])

      setCollectionItems((prev) => [...prev, ...itemToAddWithPrice])
    } else {
      setCollectionItems((prev) => [...prev, e])
    }
  }

  function removeFromCollection(e) {
    setCollectionItems((prev) => prev.filter((item) => item.id !== e.id))
  }

  function addRemoveFromCollection(e) {
    if (isIncludedInCollection(e)) {
      removeFromCollection(e)
    } else {
      addToCollection(e)
    }
  }

  function clearCollection() {
    setCollectionItems([])
  }

  return [
    collectionItems,
    isIncludedInCollection,
    addRemoveFromCollection,
    removeFromCollection,
    clearCollection,
    calculatePrice,
  ]
}
