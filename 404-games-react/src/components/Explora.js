import unreal from '../assets/News/unreal-engine.png';
import EVE from '../assets/News/EVE.jpg';
import promoBg4 from '../assets/News/promo-bg-4.png';
import {
    Link
} from 'react-router-dom';

const Explora = () => {
    return (
        
        
        <div class="container__cards">

            <h4 className="cards__titulo"><br></br><br></br><br></br>Prueba <br></br> un juego <br></br> online ahora 
            <svg xmlns="http://www.w3.org/2000/svg" className="pedidos_vineta" viewBox="0 0 5 9"><path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path></svg>
            </h4>

            <div class="cards">
                <div class="cover__card">
                    <img src={unreal} alt="Imagen" />
                </div>
                <h2>Motor irreal</h2>
                <p>Sintonice nuestra transmisión en vivo de State of Unreal el 5 de abril para un anuncio muy especial de Unreal Engine.</p>
                <div class="footer__card">
                    <p>Aprende más</p>
                </div>
            </div>
            <div class="cards">
                <div class="cover__card">
                    <img src={promoBg4} alt="Imagen" />
                </div>
                <h2>Piedra, Papel y Tijera - Acceso</h2>
                <p>PPT es un juego tradicional digital evolucionado. Disfruta las nuevas actualizaciones ¡Juega y obtén la puntuación más alta!</p>
                <div class="footer__card">
                    <Link to="/pptGame">Gratis</Link>
                </div>
            </div>
            <div class="cards">
                <div class="cover__card">
                    <img src={EVE} alt="Imagen" />
                </div>
                <h2>Eve Online: paquete superlumínico</h2>
                <p>¡Reclame un paquete exclusivo GRATIS de Semiotique Superluminal SKIN y ropa Capsuleer!</p>
                <div class="footer__card">
                    <p>Aprende más</p>
                </div>
        </div>
    </div>
    );
}
 
export default Explora;