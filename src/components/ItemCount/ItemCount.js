import './ItemCount.css'
import { useState } from 'react'

// const ItemCount = () => {
//     const initial = 0
//     const stock = 5
//     const [count, setCount] = useState(initial)

//     const decrement = () => {
//         if(count > 0) {
//             setCount(count - 1)
//         }
//     }

//     const increment = () => {
//         if(count < stock) {
//             setCount(count + 1)
//         }
//     }

//     const reset = () => {
//         setCount(0)
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <h2>Stock: {stock}</h2>
//             <button onClick={decrement}>Restar</button>
//             <button onClick={increment}>Sumar</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
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
                 <button className="btn btn-secondary" onClick={decrement}>-</button>
                 <h4 className="number">{quantity}</h4>
                 <button className="btn btn-secondary" onClick={increment}>+</button>
             </div>
             <div>
                 <button className="btn btn-primary" onClick={() => onAdd(quantity)}>Adquirir producto</button>
             </div>
        </div>
    )
 
 }

export default ItemCount