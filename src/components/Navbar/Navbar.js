import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <NavLink className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" to='/'>
                    <img src='/images/brand-name.gif' alt='logo' className="logo" />
                </NavLink>
                <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <NavLink type="button" className="btn btn-dark" to='/'>Home</NavLink>
                    <li className="dropdown">
                   <a className="btn btn-dark dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                   <ul className="dropdown-menu">
                       <li><NavLink className="dropdown-item" to={'/category/Apple'}>Apple</NavLink></li>
                       <li><NavLink className="dropdown-item" to={'/category/Electronica'}>Electronica</NavLink></li>
                       <li><NavLink className="dropdown-item" to={'/category/Gaming'}>Gaming</NavLink></li>
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