import '../styles/css/JuegosPeru.css';
import tvretro from "../assets/img/tvretro.png";
import fornite from "../assets/videos/fornite.mp4";

const JuegosPeru = () => {
    return (
        <>

            <section className="peru_section-features">
                <div className="peru_section-container">
                    <div className="peru_right-column">
                        <img className="peru_img-2" src={tvretro} />
                        <iframe className="peru_video-2" width="560" height="315" src="https://www.youtube.com/embed/FWgErYAkUlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        {/* <video className="peru_video-2" autoplay="autoplay" playsinline="" muted="true" loop="true">
                        </video> */}
                    </div>
                    <div className="peru_left-column">
                        <h2 className="peru_features-tittle">Descarga juegos en mobile.</h2>
                        <h3>Disponible para Android e iOS.</h3>
                    </div>
                </div >
            </section >
        </>
    );
}

export default JuegosPeru;