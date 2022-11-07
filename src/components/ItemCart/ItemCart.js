import { useCart } from '../../context/CartContext'
import './ItemCart.css'
import trash from './assets/trash.svg'

const ItemCart = ({ product }) => {
    const { removeItem } = useCart()

    return (
        <div className="card" id="item-cart">
            <div className="card-body" id="body-card-product" >
                <h4 className="card-title">{product.name}</h4>
                <h5 className="price">Precio: U$S {product.price}</h5>
                <h5 className="quantity">Cantidad: {product.quantity}</h5>
                <button type="button" className="btn btn-danger" onClick={() => removeItem(product.id)}><img src={trash} alt='delete-widget' className='delete-img'/></button>
            </div>
        </div>
    )
}

export default ItemCart