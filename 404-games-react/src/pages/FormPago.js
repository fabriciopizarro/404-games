import '../styles/css/FormPago.css';
import {
    Link
} from 'react-router-dom';

const FormPago = () => {
    return (
        <section className="form-pago-container">
           <h1 className="form-pago__title">Formato de Pago</h1>
           <form className="formulario-pago">
               <label htmlFor="">Nombre Completo</label>
               <input
                  type="text"
                  className="form-data"
                  id="formPagoNombrePersona"
                  name="Nombre de la persona"
                  required
                  placeholder="Ingrese su nombre completo"
                />

                <label htmlFor="">Nombre del Banco</label>
                <input
                   type="text"
                   className="form-data"
                   id="formPagoBanco"
                   name="form-cita-nombre-propietario"
                   required
                   placeholder="Ingrese el nombre del banco"
                />

                <label htmlFor="">Cuenta bancaria</label>
                <input
                   type="number"
                   className="form-data"
                   id="formPagoCuentaBanco"
                   name="form-cita-nombre-propietario"
                   required
                   placeholder="Ingresesu cuenta bancaria"
                />

                <div className="button-container">
                <button className="form-button">Pagar</button>
                <Link to="/tienda" className="button-come-back">Regresar</Link>
                </div>
           </form>
        </section>
    );
}
 
export default FormPago;