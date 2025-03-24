import React from 'react'
import { useItemsCart } from './hooks/useItemsCart'
import { NavBar } from './components/NavBar'
import { CartRoutes } from './routes/CartRoutes'

export const CartApp = () => {

  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart()

  return (
    <>
      <NavBar />
      <div className='container'>
        <h3 className='text-center m-5 display-5'>Cart App</h3>
        <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProductCart={handlerDeleteProductCart} />
      </div>
    </>
  )
}
