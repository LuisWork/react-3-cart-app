import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CardView } from '../components/CardView'
import { CartView } from '../components/CartView'

export const CartRoutes = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems }) => {
    return (
        <Routes>
            <Route path='catalog' element={<CardView handlerAdd={handlerAddProductCart} />} />
            <Route path='cart' element={(
                (
                    cartItems?.length <= 0) ?
                    <div className='alert alert-info mt-5'>
                        <p>El carro de compras esta vacio.</p>
                    </div> :
                    (
                        <div className='row m-4'>
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
            )} />
            <Route path='/' element={<Navigate to={'/catalog'} />} />
        </Routes>
    )
}
