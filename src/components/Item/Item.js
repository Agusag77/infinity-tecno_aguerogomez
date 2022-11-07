import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {

    return (
        <div className="card" id="card-products" >
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Precio: U$S {price}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item