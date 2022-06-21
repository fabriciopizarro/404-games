import '../styles/css/Landing.css';
import {
    Link
} from 'react-router-dom';
import device_pile from "../assets/img/img-landing/device-pile.png";
import gamers from "../assets/videos/gamers.mp4";
import fornite from "../assets/videos/fornite.mp4";
import callOfDuty from "../assets/videos/callOfDuty.mp4";
import mobile from "../assets/img/img-landing/mobile.png";
import tv from "../assets/img/img-landing/tv.png"
import programador from "../assets/img/img-landing/programador.jpeg"

const Landing = () => {
    return (
        <>
            <header className="header-landing" id="header">
                <nav className="header-nav">
                    <div className="header-nav-container">
                        <a className="header-nav__logo-container" href="#">
                            <img
                                src="https://i.postimg.cc/Hn9C7xTX/logo-removebg-blanco.png"

                                alt="Logo 404 - Games"
                                className="header-nav__logo"
                            />
                        </a>
                        <div className="header__select-ancor-container">
                            {/* <!-- <select className="header-select" name="" id="">
              <option value="Español">Español</option>
              <option value="English">English</option>
            </select> --> */}
                            <a className="header-ancor" href="">Iniciar sesión</a>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="main">
                <div className="main-container-container">
                    <div className="main-container">
                        <h1 className="main-h1">
                            404 - Games.
                        </h1>
                        <h3 className="main-p1" id="mainSubtitle">Tus juegos preferidos a solo un click, para todos los dispositivos.</h3>
                        <p className="main-p2">
                            ¿Listo para formar parte de la mayor red gamer del Perú?.
                        </p>
                        <div className="main-correo__container">
                            <div className="main-buttom__container">
                                <button href="/formulario" className="main-buttom" type="submit">
                                    <span className="main-buttom-text"> Crear cuenta </span>
                                    <span className="main-buttom-i">
                                        <i className="fas fa-angle-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="main-img-container">
                        <div className="main-degradate"></div>
                        <div className="main-img">
                            <video className="main-video" autoplay="autoplay" playsinline="" muted="true" loop="true">
                                <source src="https://cdn2.unrealengine.com/homepage-opener-5a55a50aaa4c.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </main>

            {/* <!-- FEATURES SECTION STARTS --> */}
            <section className="section-features">
                {/* <!-- ENJOY ON YOUR TV --> */}
                <div className="section-container">
                    <div className="left-column">
                        <h2 className="features-tittle">Desde cualquier consola.</h2>
                        <h3>PlayStation, Xbox, Nintendo Switch y más.</h3>
                    </div>
                    <div className="right-column">
                        <img src={tv} />
                        <video className="video-1" autoplay="autoplay" playsinline="" muted="true" loop="true">
                            <source src={callOfDuty} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* <!-- DOWNLOAD YOU SHOW TO WATCH OFFLINE --> */}
                <div className="section-container">
                    <div className="right-column">
                        <img src={mobile} />
                        <video className="video-2" autoplay="autoplay" playsinline="" muted="true" loop="true">
                            <source src={fornite} />
                        </video>
                    </div>
                    <div className="left-column">
                        <h2 className="features-tittle">Descarga juegos en mobile.</h2>
                        <h3>Disponible para Android e iOS.</h3>
                    </div>
                </div>

                {/* <!-- WATCH EVERY WHERE --> */}
                <div className="section-container">
                    <div className="left-column">
                        <h2 className="features-tittle">Juega desde PC.</h2>
                        <h3>Encuentra juegos para Windows o Mac.</h3>
                    </div>
                    <div className="right-column">
                        <img src={device_pile} />
                        <video className="video-3" autoplay="autoplay" playsinline="" muted="true" loop="true">
                            <source src={gamers} />
                        </video>
                    </div>
                </div>
                {/* <!-- CREATE PROFILE FOR KIDS --> */}
                <div style={{ paddingTop: "50px" }} className="section2-container">
                    <div className="left-column">
                        <img src={programador} />
                    </div>
                    <div className="right-column">
                        <h2 className="features-tittle">Contacta con programadores.</h2>
                        <h3>
                            Forma parte de equipos de desarrolladores que impulsan la creacion de videojuegos en Perú.
                        </h3>
                    </div>
                </div>
            </section>
            {/* <!-- FEATURES SECTION ENDS --> */}

            <section className="faq_section" alt="seccion preguntas frecuentes">
                <div className="faq-div">
                    <div className="faq-title-container">
                        <h1 className="faq-title" alt="preguntas frecuentes">Preguntas frecuentes</h1>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" id="accordionItem">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    id="button"
                                >
                                    ¿Qué es 404 - Games?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body" id="accordion-body">
                                    404 - Games es una pagina web que ofrece una gran variedad de video juegos, para casi cualquier dispositivo. Los títulos más populares, a costos muy competitivos. Siempre hay algo nuevo que jugar. Intégrate a esta comunidad y conforma grupos de competicion para Esports, o si eres programador realiza trabajo colaborativo en creacion de videojuegos, en la primera comunidad peruana de desarrolladores en Unreal Engine.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" id="accordionItem">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    id="button"
                                >
                                    ¿Quiénes conforman 404 - Games?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body" id="accordion-body">
                                    Disfruta 404 - Games está conformado por su comunidad de jugadores, programadores y todo el grupo de
                                    profecionales que dia a dia, hacen posible que nuestros videojuegos estén al alcance del público en general.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br />
                <p className="preferences__interpretation">¿Alguna pregunta en específico?</p>
                <br />
                <div className="faq__button-container">
                    <button className="faq__button">Déjanos tu pregunta</button>
                </div>
            </section>

            <section className="email-address-container">
                <p className="email__tittle">
                    ¿Quiéres formar parte de 404 - Games ya? Ingresa tu email para crear una cuenta tener acceso a todos los recursos de la comunidad de 404 - Games.
                </p>
                <input type="email" placeholder="Email" autocomplete="email" id="id-email" maxlength="50" minlength="5" />
                <button type="submit">Comenzar</button>
            </section>

            {/* <script src="./js/script.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js"></script>
    <script src="./js/splide-extension-auto-scroll.min.js"></script>
    <script src="./js/splide.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./js/alerts.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>
    <script src="./js/chart.js"></script> */}

            {/* <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script> */}

        </>
    );
}

export default Landing;