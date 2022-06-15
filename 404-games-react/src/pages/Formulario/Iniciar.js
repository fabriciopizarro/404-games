import '../../styles/css/Logeo.css';
import {
    Link
} from 'react-router-dom';

const Iniciar = () => {
    return (
        <form class="form">
            <h2 class="form-title">Iniciar Sesión</h2>
            <p class="form-paragraph"> ¿Aun no tienes una cuenta? <Link to="/crear" class="form-link">Crear Cuenta</Link></p>

            <div class="form-container">

                <div class="form-group">
                    <input type="text" id="user" class="form-input" placeholder=" " required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$" title="Ingresa un Usuario válido" />
                    <label for="user" class="form-label">Usuario:</label>
                    <span class="form-line"></span>
                </div>

                <div class="form-group">
                    <input type="password" id="pasword" class="form-input" placeholder=" " required />
                    <label for="pasword" class="form-label">Contraseña:</label>
                    <span class="form-line"></span>
                </div>

                <Link to="/home" class="form-submit">Ingresar</Link>
            </div>
        </form>
    );
}
 
export default Iniciar;