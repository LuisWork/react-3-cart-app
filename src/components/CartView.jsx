import { useEffect, useState } from "react"
import { calculateTotal } from "../services/productService"
import { useNavigate } from "react-router-dom"

export const CartView = ({ items, handlerDelete }) => {

const [total, setTotal] = useState(0)

const navigate = useNavigate()

useEffect(() => {
    setTotal(calculateTotal(items))
}, [items])

const onDeleteProductCart = (id) => {
    handlerDelete(id)
}

const onCatalog = () => {
    navigate('/catalog')
}

    return (
        <div className='col'>
            <div>
                <h2 className="text-center my-5">Carro de Compras</h2>
            </div>
            <table className='table table-hover table-striped border rounded'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.product.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td><button className='btn btn-danger' onClick={() => onDeleteProductCart(item.product.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className='fw-bold text-end' colSpan={3}>Total</td>
                        <td className='fw-bold text-star' colSpan={2}>{total}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="btn btn-success" onClick={onCatalog}>Seguir comprando!</button>
        </div>
    )
}
