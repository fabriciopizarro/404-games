import '../../styles/css/Logeo.css';
import {
    Link
} from 'react-router-dom';
import { useState } from "react";

const Iniciar = () => {

    const [datos, setDatos] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget;
        setDatos({ ...datos, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("https://aplication-codica2.herokuapp.com/auth/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
            .then(response => response.json())
            .then(data => {
                if (data.email) {
                    localStorage.setItem('value', data.tokens.access_token);
                    window.location.href = "/home";
                }
                else {
                    alert("Credenciales incorrectas");
                }
            })

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Iniciar Sesión</h2>
            <p className="form-paragraph"> ¿Aun no tienes una cuenta? <Link to="/crear" class="form-link">Crear Cuenta</Link></p>

            <div className="form-container">

                <div className="form-group">
                    <input type="text" name="email" id="email" onChange={handleInputChange} className="form-input" placeholder=" " required title="Ingresa un Usuario válido" />
                    <label htmlFor="email" className="form-label">Email:</label>
                    <span className="form-line"></span>
                </div>

                <div className="form-group">
                    <input type="password" name="password" id="pasword" onChange={handleInputChange} className="form-input" placeholder=" " required />
                    <label htmlFor="pasword" className="form-label">Contraseña:</label>
                    <span className="form-line"></span>
                </div>

                <button className="form-submit">Ingresar</button>
            </div>
        </form>
    );
}

export default Iniciar;