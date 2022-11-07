import './Cart.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import ItemCart from "../ItemCart/ItemCart"
import Swal from "sweetalert2"


const Cart = () => {
    const { cart, total, clearCart } = useCart();

    if (cart.length === 0)
        return (
            <div id="cart-empty">
                <h4> No hay productos en el carrito </h4>
                <Link className="cart-empty__btn" to='/'>Comenzar compra</Link>
            </div>
        )

    return (
        <div id='cart' >
            {cart.map(products => <ItemCart key={products.id} product={products} />)}
            <h3 className="total-cart"><u>Total a Pagar:</u> U$S {total}</h3>
            <div className="buttons-cart" >
                <button className="btn btn-danger" onClick={() => {
                    clearCart()
                    Swal.fire({
                        title: "Carrito Vacio",
                        icon: "success",
                    })
                }}
                >Limpiar carrito</button>
                <Link to='/checkout' className="btn btn-success">Finalizar compra</Link>
            </div>
        </div>
    )
};

export default Cart 