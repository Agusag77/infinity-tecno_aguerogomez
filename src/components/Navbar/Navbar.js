import './Navbar.css'
import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'

const Navbar = () => {
    
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order')) 

    getDocs(collectionRef).then(response => {
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return { id, ...data}
      })
      setCategories(categoriesAdapted)
    })
  }, [])

    return (
        <nav className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <NavLink className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" to='/'>
                    <img src='/images/brand-name.gif' alt='logo' className="logo" />
                </NavLink>
                <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <NavLink type="button" className="btn btn-dark" to='/'>Home</NavLink>
                   <li className="dropdown">
                   <NavLink className="btn btn-dark dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</NavLink> 
                        <ul className="dropdown-menu">
                            {
                              categories.map(cat => (<NavLink className="dropdown-item" key={cat.id} to={`/category/${cat.slug}`} >{cat.label}</NavLink>))
                            }
                        </ul>
                   </li> 
                    <NavLink type="button" className="btn btn-dark">Contacto</NavLink>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar