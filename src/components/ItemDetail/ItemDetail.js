import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        const productToAdd = { id, name, price, quantity }
        console.log(productToAdd)
    }

    return (
        <div className="item-card">
            <img src={img} className="img-card" alt={name} />
            <div className="body-card">
                <h4 className="card-title">{name}</h4>
                <p className="card-text"><u>Categoria</u>: {category}</p>
                <p className="card-text"><u>Descripcion</u>: {description}</p>
                <p className="card-text"><u>Precio</u>: U$S {price}</p>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </div>
        </div>
    )
}

export default ItemDetail