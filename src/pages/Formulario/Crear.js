import '../../styles/css/Logeo.css';
import {
    Link, useNavigate
} from 'react-router-dom';
import { useState } from "react";

const Crear = () => {

    const [datos, setDatos] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget;
        setDatos({ ...datos, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("https://aplication-codica2.herokuapp.com/auth/register/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.email) {
                    navigate("/iniciar");
                }
                else {
                    alert("Credenciales incorrectas");
                }
            })

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Crear Cuenta</h2>
            <p className="form-paragraph"> ¿Ya tienes una cuenta? <Link to="/iniciar" className="form-link">Iniciar Sesión</Link></p>

            <div className="form-container">
                {/*
                <div className="form-name__lastname">
                    <div className="form-group">
                        <input type="text" id="name" onChange={handleInputChange} className="form-input" placeholder=" " required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$" title="Ingresa un nombre válido" />
                        <label htmlFor="name" className="form-label">Nombre:</label>
                        <span className="form-line"></span>
                    </div>
                    <div className="form-group">
                        <input type="text" id="lastname" onChange={handleInputChange} className="form-input" placeholder=" " required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$" title="Ingresa un nombre válido" />
                        <label htmlFor="lastname" className="form-label">Apellidos:</label>
                        <span className="form-line"></span>
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" id="phone" onChange={handleInputChange} className="form-input" placeholder=" " required pattern="[0-9]{9}" />
                    <label htmlFor="phone" className="form-label">Celular:</label>
                    <span className="form-line"></span>
                </div>
                */}
                <div className="form-group">
                    <input type="text" id="e-mail" name="email" onChange={handleInputChange} className="form-input" placeholder=" " />
                    <label htmlFor="e-mail" className="form-label">Correo:</label>
                    <span className="form-line"></span>
                </div>

                <div className="form-group">
                    <input type="text" id="user" name="username" onChange={handleInputChange} className="form-input" placeholder=" " />
                    <label htmlFor="user" className="form-label">Crea un nombre de usuario:</label>
                    <span className="form-line"></span>
                </div>

                <div className="form-group">
                    <input type="password" id="pasword" name="password" onChange={handleInputChange} className="form-input" placeholder=" " />
                    <label htmlFor="pasword" className="form-label">Contraseña:</label>
                    <span className="form-line"></span>
                </div>

                <div className="form-group">
                    <input type="password" id="pasword_confirmation" name="password_confirmation" onChange={handleInputChange} className="form-input" placeholder=" " />
                    <label htmlFor="pasword_confirmation" className="form-label">Repetir Contraseña:</label>
                    <span className="form-line"></span>
                </div>

                <button className="form-submit">Crear e Ingresar</button>
            </div>
        </form>
    );
}

export default Crear;