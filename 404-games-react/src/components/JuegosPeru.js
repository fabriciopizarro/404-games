import '../styles/css/Landing.css';
import tvretro from "../assets/img/tvretro.png";
import tec from "../assets/videos/tec.mp4";

const JuegosPeru = () => {
    return (
        <>

            <section className="section-features">

                <div className="section-container">
                    <div className="right-column">
                        <img src={tvretro} />
                        <video className="video-yt" controls playsinline="" loop="true">
                            <source src={tec} />
                        </video>
                    </div>
                    <div className="left-column">
                        <h2 className="features-tittle">Desarrollo de juegos en Perú.</h2>
                        <h3>Conoce un poco mas sobre videojuegos desarrollados en Perú.</h3>
                    </div>
                </div>

            </section>
        </>
    );
}

export default JuegosPeru;