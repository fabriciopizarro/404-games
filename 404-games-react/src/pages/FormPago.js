import '../styles/css/FormPago.css';
import {
    Link
} from 'react-router-dom';

const FormPago = () => {
    return (
        <section className="form-pago-container">
<<<<<<< HEAD
           <h1 className="form-pago__title">Formato de Pago</h1>
           <form className="formulario-pago">
=======
            <h1 className="form-pago__title">Formato de Pago</h1>
            <form className="formulario-pago">
                <div className="datos-personales__container">
                    <input type="text" id="nombre" placeholder="Nombre Completo" name="nombre" className="registro__form-input" required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
                        title="No se aceptan caracteres especiales ni números" />

                    <input type="text" id="apellido" placeholder="Apellido Completo" name="apellido" className="registro__form-input" required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
                        title="No se aceptan caracteres especiales ni números" />
                </div>

                <input type="text" id="email" placeholder="Email" name="email" className="registro__form-input" required />

                <input type="number" id="celular" placeholder="Celular" name="celular" className="registro__form-input" min="900000000" max="999999999" required />
>>>>>>> 3158c8d0bd0a476ede22fca138aa508c6ee5f3a3

                <input type="number" id="numTarjeta" placeholder="Numero de tarjeta" name="numeroTarjeta" className="registro__form-input" min="90000000000000" max="99999999999999" required />

                <input type="text" id="banco" placeholder="Fecha de vencimiento" name="banco" className="registro__form-input" required />

<<<<<<< HEAD
                <input type="number" id="ccv" placeholder="CCV" name="ccv" className="registro__form-input" min="90000" max="99999" required />
                
=======
                <input type="number" id="codigoPostal" placeholder="Codigo Postal" name="codigoPostal" className="registro__form-input" min="90000" max="99999" required />

>>>>>>> 3158c8d0bd0a476ede22fca138aa508c6ee5f3a3
                <div className="buttons__container">
                    <Link className="registro__form-button" to="/confirm">Pagar</Link>
                    <Link className="button-come-back" to="/tienda">Regresar</Link>
                </div>
            </form>
        </section>
    );
}

export default FormPago;