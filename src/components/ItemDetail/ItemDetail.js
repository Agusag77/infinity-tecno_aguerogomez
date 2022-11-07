import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addItem, getProductQuantity } = useCart()
    const [goCart, setGoCart] = useState(false);
    const navigate = useNavigate()
    const notify = () => toast.success('Producto agregado al carrito!', {icon: '🛒',})

    const handleOnAdd = (quantity) => {
        const productToAdd = { id, name, price, quantity }
        setGoCart(true)
        addItem(productToAdd, quantity)
        notify()
    } 
    
    const quantityAdded = getProductQuantity(id)

    return (
        <div className="item-card">
            <img src={img} className="img-card" alt={name} />
            <div className="body-card">
                <h3 className="card-title">{name}</h3>
                <p className="card-text"><u>Categoria</u>: {category}</p>
                <p className="card-text"><u>Descripcion</u>: {description}</p>
                <p className="card-text"><u>Precio</u>: U$S {price}</p>
                <p className="card-text"><u>Stock</u>: {stock}</p>
                { goCart ? false : stock!==0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded}/> : <h5>Sin stock</h5> }
                { !goCart ? true :<Link to='/cart'><button className="btn btn-success">Terminar compra</button></Link> }
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>Volver ⬅️ </button>
                <Toaster />
            </div>
        </div>
    )
}

export default ItemDetail