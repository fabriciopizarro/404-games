import Gift from '../assets/gift-icon.svg'
import {
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/Landing.css';

const JuegosGratuitos = () => {
    return (
        <section>
            <div class="container-sm rounded mt-4 px-4">
                <div class="row">
                    <div class="col">
                        <div class="row py-3">
                            <div class="col-6 d-flex justify-content-start">
                                <div>
                                    <span class="gift-icon">
                                        <img src={Gift} />
                                    </span>
                                </div>
                                <h2 class=" mt-1 px-3 color-text-light">
                                    Videojuegos Peruanos
                                </h2>
                            </div>
                            <div class="col">
                                <div class=" float-end">
                                    <Link to="/free" class="btn btn-outline-light">Ver mas</Link>
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-3 ">
                                <div class="card bg-dark">
                                    <video className="main-video" autoplay="autoplay" playsinline="" muted="true" loop="true">
                                        <source src="https://cdn.akamai.steamstatic.com/steam/apps/256823019/movie480_vp9.webm?t=1613952814" type="video/mp4" />
                                    </video>
                                    {/* <video class="card-img bg-dark" src="https://cdn.akamai.steamstatic.com/steam/apps/256823019/movie480_vp9.webm?t=1613952814" /> */}

                                    {/* <div class="card-footer rounded-bottom bg-primary d-flex justify-content-center ">
                                        <h3 class="text-light">GRATIS AHORA</h3>
                                    </div> */}
                                    <div class="mt-3 ">
                                        <h3 class="text-light">Duel on board</h3>
                                    </div>
                                </div>
                            </div>

                            <div class=" col-md-3">
                                <div class="card bg-dark">
                                    <video className="main-video" autoplay="autoplay" playsinline="" muted="true" loop="true">
                                        <source src="https://cdn.akamai.steamstatic.com/steam/apps/256825857/movie480_vp9.webm?t=1615749867" type="video/mp4" />
                                    </video>
                                    {/* <div class="card-footer rounded-bottom bg-primary d-flex justify-content-center">
                                        <h3 class="text-light">GRATIS AHORA</h3>
                                    </div> */}
                                    <div class="mt-3">
                                        <h3 class="text-light">Tunche</h3>
                                    </div>
                                </div>
                            </div>

                            <div class=" col-md-3">
                                <div class="card bg-dark">
                                    <video className="main-video" autoplay="autoplay" playsinline="" muted="true" loop="true">
                                        <source src="https://cdn.akamai.steamstatic.com/steam/apps/256860208/movie480_vp9.webm?t=1643294180" type="video/mp4" />
                                    </video>                                    {/* <div class="card-footer rounded-bottom bg-black d-flex justify-content-center">
                                        <h3 class="text-light">Próximamente</h3>
                                    </div> */}
                                    <div class="mt-3">
                                        <h3 class="text-light">Imp of the sun</h3>
                                    </div>
                                </div>
                            </div>

                            <div class=" col-md-3">
                                <div class="card bg-dark">
                                    <video className="main-video" autoplay="autoplay" playsinline="" muted="true" loop="true">
                                        <source src="https://cdn.akamai.steamstatic.com/steam/apps/256892640/movie480_vp9.webm?t=1655666409" type="video/mp4" />
                                    </video>                                    {/* <div class="card-footer rounded-bottom bg-black d-flex  justify-content-center">
                                        <h3 class="text-light">Próximamente</h3>
                                    </div> */}
                                    <div class="mt-3">
                                        <h3 class="text-light">MAGO</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default JuegosGratuitos;