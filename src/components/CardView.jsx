import React, { useEffect, useState } from 'react'
import { CardProduct } from './CardProduct'
import { getProducts } from '../services/productService'

export const CardView = ({ handlerAdd }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const findAll = async () => {
        const productsBackend = await getProducts()
        setProducts(productsBackend)
        setIsLoading(false)
    }

    useEffect(() => {
        findAll()
    }, [])

    return (
        <>
            {isLoading &&
                <div className='alert alert-info'>Loading...</div>}
            <div className='row m-5'>
                {products.map(product => (
                    <CardProduct key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} handlerAdd={handlerAdd} />
                ))}
            </div>
        </>
    )
}
