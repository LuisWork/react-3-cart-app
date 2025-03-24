import React, { useEffect, useState } from 'react'
import { CardProduct } from './CardProduct'
import { getProducts } from '../services/productService'

export const CardView = ({ handlerAdd }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getProducts())
    }, [])

    return (
        <div className='row m-5'>
            {products.map(product => (
                <CardProduct key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} handlerAdd={handlerAdd} />
            ))}
        </div>
    )
}
