import '../styles/css/FormPago.css';
import {
    Link
} from 'react-router-dom';

const FormPago = () => {
    return (
        <section className="form-pago-container">
           <h1 className="form-pago__title">Formato de Pago</h1>
           <form className="formulario-pago">

                <input type="number" id="numTarjeta" placeholder="Numero de tarjeta" name="numeroTarjeta" className="registro__form-input" min="90000000000000" max="99999999999999" required />

                <input type="text" id="banco" placeholder="Fecha de vencimiento" name="banco" className="registro__form-input" required />

                <input type="number" id="ccv" placeholder="CCV" name="ccv" className="registro__form-input" min="90000" max="99999" required />
                
                <div className="buttons__container">
                    <button className="registro__form-button">Pagar</button>
                    <Link to="/tienda" className="button-come-back">Regresar</Link>
                </div>
           </form>
        </section>
    );
}
 
export default FormPago;