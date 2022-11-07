import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
     
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
 
    return(   
        <div className="counter">          
             <div className="control">
                 <button className="btn btn-dark" onClick={decrement}>-</button>
                 <h4 className="number">{quantity}</h4>
                 <button className="btn btn-dark" onClick={increment}>+</button>
             </div>
             <div>
                 <button className="btn btn-primary" onClick={() => onAdd(quantity)}>Adquirir producto</button> 
             </div>
        </div>
    )
}

export default ItemCount