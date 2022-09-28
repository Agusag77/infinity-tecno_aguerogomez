import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from '../assets/brand-name.gif'

const Navbar = () => {
    return (
        <nav className="container-fluid">
           <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" href='../'>
                   <img src={logo} alt='logo' className="logo"/>
                </a>
                <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                   <button type="button" className="btn btn-dark">Home</button>
                   <button type="button" className="btn btn-dark">Productos</button>
                   <button type="button" className="btn btn-dark">Contacto</button>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar