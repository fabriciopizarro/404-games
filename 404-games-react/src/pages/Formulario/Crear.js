import '../../styles/css/Logeo.css';
import {
    Link
} from 'react-router-dom';

const Crear = () => {
    return (
        <form class="form">
            <h2 class="form-title">Crear Cuenta</h2>
            <p class="form-paragraph"> ¿Ya tienes una cuenta? <a href="./Iniciar.html" class="form-link">Iniciar Sesión</a></p>

            <div class="form-container">

                <div class="form-name__lastname">
                    <div class="form-group">
                        <input type="text" id="name" class="form-input" placeholder=" " required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$" title="Ingresa un nombre válido" />
                        <label for="name" class="form-label">Nombre:</label>
                        <span class="form-line"></span>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastname" class="form-input" placeholder=" " required pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$" title="Ingresa un nombre válido" />
                        <label for="lastname" class="form-label">Apellidos:</label>
                        <span class="form-line"></span>
                    </div>
                </div>

                <div class="form-group">
                    <input type="text" id="phone" class="form-input" placeholder=" " required pattern="[0-9]{9}" />
                    <label for="phone" class="form-label">Celular:</label>
                    <span class="form-line"></span>
                </div>

                <div class="form-group">
                    <input type="text" id="e-mail" class="form-input" placeholder=" " />
                    <label for="e-mail" class="form-label">Correo:</label>
                    <span class="form-line"></span>
                </div>

                <div class="form-group">
                    <input type="text" id="user" class="form-input" placeholder=" " />
                    <label for="user" class="form-label">Crea un nombre de usuario:</label>
                    <span class="form-line"></span>
                </div>

                <div class="form-group">
                    <input type="password" id="pasword" class="form-input" placeholder=" " />
                    <label for="pasword" class="form-label">Contraseña:</label>
                    <span class="form-line"></span>
                </div>

                <Link to="/home" class="form-submit">Crear e Ingresar</Link>
            </div>
        </form>
    );
}
 
export default Crear;