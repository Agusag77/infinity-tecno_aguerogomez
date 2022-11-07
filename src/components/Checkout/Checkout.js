import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import  OrderForm  from "../Form/Form"
import Swal from "sweetalert2"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const [userData, setUserData] = useState(false)
    const [dataSubmit, setDataSubmit] = useState({})

    const data = (userName, phone, email) =>{
        setDataSubmit({userName, phone, email})
        setUserData(true)
    }
   
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
       
        try {
            const order = {
                buyer: dataSubmit,
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date()),
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, order)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2500)

                Swal.fire({
                    title: "Gracias por su compra",
                    text:`El id de su orden es: ${orderAdded.id}`,
                    icon: "success",
                })
            } else {
                Swal.fire({
                    title: "Algunos productos no se encuentran en stock",
                    icon: "warning",
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }    
    }

    if(loading) {
        return <h1 className="py-4 text-center">Se esta generando su orden...</h1>
    }

    return (
        <div className="checkout">
            <h1 className="py-4 text-center">Checkout</h1>
            <OrderForm data={data} />
            <div className="py-4 text-center">
            {userData ?<button className="btn btn-success" onClick={handleSubmit}>Checkout</button>: ""}
            </div>
        </div>
    )
}

export default Checkout