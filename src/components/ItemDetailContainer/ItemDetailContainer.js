import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Link, useParams} from 'react-router-dom'
import { MrMiyagi } from '@uiball/loaders'
import { getProduct } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {

    const { productId } = useParams()

    const getProductWithCategory = () => getProduct(productId)

    const { data: products, error, loading } = useAsync(getProductWithCategory, [productId])

    if(loading) {
        return <div className='loader'><MrMiyagi size={60} lineWeight={3.5} speed={0.8} color="black"/></div>
    }

    if(error) {
        return (
        <div>
            <h1>Ha ocurrido un error, disculpe las molestias!</h1>
            <Link to='/'><button className="btn btn-success">Home</button></Link>
        </div>
        )
    }

    return(
        <div className='ItemDetailContainer' >  
            <ItemDetail key= {products.id}  {...products} />
        </div>
    )
}

export default ItemDetailContainer