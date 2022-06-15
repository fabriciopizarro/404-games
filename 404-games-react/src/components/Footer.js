import '../styles/css/Footer.css';
import egLogo from '../assets/img/eg-logo.svg';
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import twiter from '../assets/img/twitter.svg';
import urLogo from '../assets/img/ur-logo.svg';
import youtube from '../assets/img/youtube.svg';

const documentReady = () => {
    let button = document.getElementById("footerScrollToTopContainer");

    var rootElement = document.documentElement;

    function backToTop() {
        rootElement.scrollTo(
            {
                top: 0 ,
                behavior: 'smooth',
            }
        ) 
    }
    
    button.addEventListener("click", backToTop);
};
document.addEventListener('DOMContentLoaded', documentReady);

const Footer = () => {

    return (
        <footer class="footer">
        <article class="footer__credits-container">

            <section class="footer__credits-up">

                <article class="footer-credits-up__items-container">

                    <div class="footer-credits-up__links-icons">
                        <ul class="footer-credits-up__links-icons">
                            <li class="footer-credits-up__links">
                                <a href="https://www.youtube.com/watch?v=avzaRIJDVlI&ab_channel=DaehanChoi"
                                    class="footer-credits-up__link-icon">
                                    <img src={youtube} alt="youtubeIcon" class="footer-credits-up__icon" />
                                </a>
                            </li>
                            <li class="footer-credits-up__links">
                                <a href="https://www.facebook.com" class="footer-credits-up__link-icon">
                                    <img src={facebook} alt="facebookIcon" class="footer-credits-up__icon" />
                                </a>
                            </li>
                            <li class="footer-credits-up__links">
                                <a href="https://www.instagram.com"
                                    class="footer-credits-up__link-icon">
                                    <img src={instagram} alt="instagramIcon"
                                        class="footer-credits-up__icon" />
                                </a>
                            </li>
                            <li class="footer-credits-up__links">
                                <a href="https://twitter.com" class="footer-credits-up__link-icon">
                                    <img src={twiter} alt="twitterIcon" class="footer-credits-up__icon" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-credits-up__arrow-content" id="footerScrollToTopContainer">
                        <button type="button" class="footer-credits-up__arrow-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                class="footer-credits-up__arrow">
                                <title />
                                <g data-name="Layer 2" id="Layer_2">
                                    <path
                                        d="M1,16A15,15,0,1,1,16,31,15,15,0,0,1,1,16Zm2,0A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z"
                                        fill="#6c6c6c" />
                                    <path
                                        d="M10.41,19.87,16,14.29l5.59,5.58a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41L16.64,12.1a.91.91,0,0,0-1.28,0L9,18.46a1,1,0,0,0,0,1.41H9A1,1,0,0,0,10.41,19.87Z"
                                        fill="#6c6c6c" />
                                </g>
                            </svg>
                        </button>

                    </div>

                </article>

                <article class="footer-credits-up__list-container">
                    <section class="footer-credits-up__resources-list-content">
                        <ul class="footer-credits-up__resources-list">

                            
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/site/es-ES/careers"
                                    class="footer-credits-up__link">Empleo</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/site/es-ES/about"
                                    class="footer-credits-up__link">Empresa</a>
                            </li>
                            
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/site/es-ES/ux"
                                    class="footer-credits-up__link">Investigación</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://store.epicgames.com/es-ES/eula" class="footer-credits-up__link">CLUF
                                    tienda</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://dev.epicgames.com/en-US/home" class="footer-credits-up__link">Servicios
                                    en linea</a>
                            </li>
                            
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/site/es-ES/news" class="footer-credits-up__link">Epic
                                    Newsroom</a>
                            </li>
                        </ul>
                    </section>
                </article>

                <article class="footer-credits-up__list-container">
                    <div class="footer-credits-up__made-list-content">
                        <ul class="footer-credits-up__made-list">
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/battlebreakers/es-ES/home"
                                    class="footer-credits-up__link">Battle Breakers</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/fortnite/es-ES/home"
                                    class="footer-credits-up__link">Fornite</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/infinityblade/en-US/home"
                                    class="footer-credits-up__link">Infinite Blade</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/roborecall/en-US/home"
                                    class="footer-credits-up__link">Robo Recall</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://store.epicgames.com/es-MX/p/shadow-complex"
                                    class="footer-credits-up__link">Shadow Complex</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/unrealtournament/en-US/"
                                    class="footer-credits-up__link">Unreal Tournament</a>
                            </li>
                        </ul>
                    </div>
                </article>

            </section>

            <hr class="footer__line-divider" />

            <section class="footer__credits-down">
                <article class="footer-credits-down__content">
                    <div class="footer-credits-down__paragraph-content">
                        <p class="footer-credits-down__paragraph">
                            &copy; 2022, 404 Games, Inc., 404 Games, el
                            logotipo de 404 Games, Unreal, Unreal Engine, el
                            logotipo de Unreal Engine, Unreal Tournament y el logotipo de Unreal Tournament son
                            marcas comerciales o marcas registradas por 404 Games, Inc. tanto en Estados Unidos de
                            América com en el resto del mundo. Otras marcas o nombres de productos son marcas
                            comerciales de sus respectivos proietarios. Las transacciones fuera de EE.UU. se
                            realizan a través de 404 Games International, S.à r.l.
                        </p>
                    </div>      
                   
                </article>
            </section>
        </article>
    </footer>
    );
}
 
export default Footer;