import './CartWidget.css'
import cart from '../assets/cart.svg'

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            <p className="ContadorCarrito">0</p>
        </div>
    )
}

export default CartWidget