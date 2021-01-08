import React, { useContext, useState } from "react"
import { Context } from "../Context"

import { Cart, CartItem, Modal } from "../Components"

export default function CartStructure() {
  const [isBought, setIsBought] = useState(false)
  const { cartItems, removeFromCart, clearCart } = useContext(Context)

  const isEmpty = cartItems.length > 0 ? false : true

  const cartItemsToDisplay = cartItems.map((item, index) => (
    <CartItem key={index}>
      <CartItem.Image src={item.webImage.url} />
      <CartItem.Title>
        {item.title} - <CartItem.Price>£{item.price}</CartItem.Price>
      </CartItem.Title>
      <CartItem.Button onClick={() => removeFromCart(item)}>
        Remove
      </CartItem.Button>
    </CartItem>
  ))

  function finishPurchase() {
    setIsBought(false)
    clearCart()
  }

  return (
    <Cart>
      {isEmpty ? (
        <Cart.Empty>
          {"Your cart is empty. Add something from the "}
          <Cart.Link to="/">catalog</Cart.Link>
        </Cart.Empty>
      ) : (
        <>
          {cartItemsToDisplay}
          <Cart.Total>
            Total - £{cartItems.reduce((acc, item) => acc + item.price, 0)}
          </Cart.Total>
          <Cart.Button onClick={() => setIsBought(true)}>Buy</Cart.Button>
          {isBought && (
            <Modal>
              <Modal.Container>
                <Modal.Icon fontSize="large" />
                <Modal.Text>Your purchase was successful</Modal.Text>
                <Modal.Link to="/" onClick={finishPurchase}>
                  back to Catalog
                </Modal.Link>
              </Modal.Container>
            </Modal>
          )}
        </>
      )}
    </Cart>
  )
}
