import './Form.css'
import { useState, createContext } from 'react';
import Swal from 'sweetalert2';

export const FormData = createContext({
    userName: "",
    phone: "",
    email: ""
})

const OrderForm = ({ data }) => {

    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!userName === (userName.length > 6) || !email === (userName.length > 6) || !phone) {
            Swal.fire({
                title: "Ingresa tus datos completos",
                icon: "warning",
            })
        }
        else if (email !== confirmEmail && email && confirmEmail) {
            Swal.fire({
                title: "Difieren los emails",
                html: "Por favor ingrese el mismo en ambos campos",
                icon: "warning"
            })
        }

        else {
            Swal.fire({
                title: "Se han guardado los datos, continua con la compra",
                icon: "success",
            })
            data(userName, phone, email)
        }
    }

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleConfirmChangeEmail = (e) => {
        setConfirmEmail(e.target.value);
    }

    return (
        <div className="container">
            <div className="py-5 text-center" id="div-form">
                <form className="needs-validation" id="form" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label className="form-label">Nombre y apellido:</label>
                            <input type="text"
                                className="form-control"
                                id="userName"
                                placeholder="Juan Perez" 
                                value={userName} onChange={handleChangeUserName} required>
                            </input>
                            <div className="invalid-feedback"> Por favor ingresa tu nombre y apellido</div>
                        </div>
                        <div className="col-sm-6" >
                            <label className="form-label">Teléfono:</label>
                            <input type="number"
                                className="form-control"
                                placeholder="" 
                                value={phone} onChange={handleChangePhone} required>
                            </input>
                            <div className="invalid-feedback">Ingresa un telefono</div>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Email:</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="juanperez@hotmail.com" 
                                value={email} onChange={handleChangeEmail} required>
                            </input>
                            <div className="invalid-feedback">Por favor ingresa un correo electronico</div>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Confirmar email:</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="juanperez@hotmail.com" 
                                value={confirmEmail} onChange={handleConfirmChangeEmail} required>
                            </input>
                            <div className="invalid-feedback"> Por favor ingresa un correo electronico</div>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={submit}>Enviar datos</button>
                </form>
            </div>
        </div>
    )
}

export default OrderForm