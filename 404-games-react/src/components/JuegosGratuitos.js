import Gift from '../assets/gift-icon.svg'
import {
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                                   Juegos gratuitos 
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
                                    <img class="card-img bg-dark" src="https://i.postimg.cc/SN6fgq8W/Assassins-Creed.jpg" />
                                    
                                    <div class="card-footer rounded-bottom bg-primary d-flex justify-content-center ">
                                        <small class="text-light">GRATIS AHORA</small>
                                    </div>
                                    <div class="mt-3 ">
                                        <small class="text-light">Assassin's CreedValhalla</small>
                                    </div>
                                </div>

                            </div>

                            <div class=" col-md-3">

                                <div class="card bg-dark">
                                    <img class="card-img" src="https://i.postimg.cc/JzRcggcS/fallout76.jpg" />
                                    <div class="card-footer rounded-bottom bg-primary d-flex justify-content-center">
                                        <small class="text-light">GRATIS AHORA</small>
                                    </div>
                                    <div class="mt-3">
                                        <small class="text-light">Fallout 76</small>
                                    </div>
                                </div>

                            </div>

                            <div class=" col-md-3">

                                <div class="card bg-dark">
                                    <img src="https://i.postimg.cc/hjh0s5RT/brothers.jpg" class="card-img border-radius rounded-top" />
                                    <div class="card-footer rounded-bottom bg-black d-flex justify-content-center">
                                        <small class="text-light">Próximamente</small>
                                    </div>
                                    <div class="mt-3">
                                       <small class="text-light">Brothers: A Tale of Two Sons</small>
                                    </div>
                                </div>

                            </div>

                            <div class=" col-md-3">

                                <div class="card bg-dark">
                                    <img src="https://i.postimg.cc/SxV7prgR/vanishing.jpg" class="card-img border-radius rounded-top" />
                                    <div class="card-footer rounded-bottom bg-black d-flex  justify-content-center">
                                        <small class="text-light">Próximamente</small>
                                    </div>
                                    <div class="mt-3">
                                        <small class="text-light">The Vanishing of Ethan Carter</small>
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