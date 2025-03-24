import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardProduct = ({ id, name, description, price, handlerAdd }) => {

    const navigate = useNavigate()

    const onAddProduct = (product) => {
        handlerAdd(product)
        navigate('/cart')
    }

    return (
        <div className='col-4 my-3' key={id}>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text description'>{description}</p>
                    <p className='card-text'>${price}</p>
                    <button className='btn btn-dark' onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

