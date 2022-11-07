import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import { MrMiyagi } from '@uiball/loaders'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return <div className='loader'><MrMiyagi size={60} lineWeight={3.5} speed={0.8} color="black" /></div>
    }

    if (error) {
        return (
            <div>
                <h1>Ha ocurrido un error, disculpe las molestias!</h1>
                <Link to='/'><button className="btn btn-success">Home</button></Link>
            </div>
        )
    }

    return (
        <div className="main">
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer