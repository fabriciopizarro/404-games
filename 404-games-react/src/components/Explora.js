import unreal from '../assets/News/unreal-engine.png';
import PINBALL from '../assets/News/PINBALL FX.jpg';
import EVE from '../assets/News/EVE.jpg';

const Explora = () => {
    return (
        <div class="container__cards">
        <div class="cards">
            <div class="cover__card">
                <img src={unreal} alt="Imagen" />
            </div>
            <h2>Motor irreal</h2>
            <p>Sintonice nuestra transmisión en vivo de State of Unreal el 5 de abril para un anuncio muy especial de Unreal Engine.</p>
            <div class="footer__card">
                <a href="#">Aprende más</a>
            </div>
        </div>
        <div class="cards">
            <div class="cover__card">
                <img src={PINBALL} alt="Imagen" />
            </div>
            <h2>Pinball FX - Acceso anticipado</h2>
            <p>Pinball FX es un pinball digital evolucionado. Disfruta las nuevas actualizaciones ¡Juega y obtén la puntuación más alta!</p>
            <div class="footer__card">
                <a href="#">Gratis</a>
            </div>
        </div>
        <div class="cards">
            <div class="cover__card">
                <img src={EVE} alt="Imagen" />
            </div>
            <h2>Eve Online: paquete superlumínico</h2>
            <p>¡Reclame un paquete exclusivo GRATIS de Semiotique Superluminal SKIN y ropa Capsuleer!</p>
            <div class="footer__card">
                <a href="#">Aprende más</a>
            </div>
        </div>
    </div>
    );
}
 
export default Explora;