import Gift from '../assets/gift-icon.svg'
import {
    NavLink
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const JuegosGratuitos = () => {
    return (
        <section>
            <div class="container-fluid  bg-free rounded mt-4 px-4">

                <div class="row">

                    <div class="col">

                        <div class="row py-3">

                            <div class="col-8 d-flex justify-content-start">

                                <div>
                                    <span class="gift-icon">
                                       <img src={Gift} />
                                    </span>
                                
                                </div>
                                <h2 class=" mt-1 px-3 color-text-light">
                                   Juegos gratuitos temporales
                                </h2>
                           

                            </div>

                            <div class="col">

                                <div class=" float-end">
                                   <NavLink to="/free" class="btn btn-outline-light">Ver mas</NavLink>
                                </div>

                            </div>

                        </div>

                        <div class="row">

                            <div class="col-6 col-md-3">

                                <div class="card">
                                    <img class="card-img" src="https://i.postimg.cc/SN6fgq8W/Assassins-Creed.jpg" />
                                    
                                    <div class="card-footer rounded-bottom bg-primary d-flex flex-row justify-content-center">
                                        <small class="text-center font-weight-bold color-text-01">GRATIS AHORA</small>
                                    </div>
                                    <div class="mt-3">
                                        <small class="d-block w-100 font-weight-bold color-text-01">Assassin's CreedValhalla</small>
                                        <p class="d-block w-100 text-muted">Gratis hasta el 07 abr a la(s) 10:00</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-6 col-md-3">

                                <div class="card">
                                    <img class="card-img" src="https://i.postimg.cc/JzRcggcS/fallout76.jpg" />
                                    <div class="card-footer rounded-bottom bg-primary d-flex flex-row justify-content-center">
                                        <small class="text-center font-weight-bold color-text-01">GRATIS AHORA</small>
                                    </div>
                                    <div class="mt-3">
                                        <small class="d-block w-100 font-weight-bold color-text-01">Fallout 76</small>
                                        <p class="d-block w-100 text-muted">Gratis hasta el 07 abr a la(s) 10:00</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-6 col-md-3">

                                <div class="card">
                                    <img src="https://i.postimg.cc/hjh0s5RT/brothers.jpg" class="card-img border-radius rounded-top" />
                                    <div class="card-footer rounded-bottom bg-black d-flex flex-row justify-content-center">
                                        <small class="text-center font-weight-bold color-text-01">Próximamente</small>
                                    </div>
                                    <div class="mt-3">
                                       <small class="d-block w-100 font-weight-bold color-text-01">Brothers: A Tale of Two Sons</small>
                                       <p class="d-block w-100 text-muted">Gratis del 07 abr al 14 abr</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-6 col-md-3">

                                <div class="card">
                                    <img src="https://i.postimg.cc/SxV7prgR/vanishing.jpg" class="card-img border-radius rounded-top" />
                                    <div class="card-footer rounded-bottom bg-black d-flex flex-row justify-content-center">
                                        <small class="text-center font-weight-bold color-text-01">Próximamente</small>
                                    </div>
                                    <div class="mt-3">
                                        <small class="d-block w-100 font-weight-bold color-text-01">The Vanishing of Ethan Carter</small>
                                        <p class="d-block w-100 text-muted">Gratis del 07 abr al 14 abr</p>
                                    </div>
                                </div>

                            </div>
                        

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
 
export default JuegosGratuitos;