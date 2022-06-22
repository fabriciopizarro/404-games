import "../styles/css/GameInformation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const GameInformation = () => {
    return (
        <section className="container-section">
            <section className="cover">GOD OF WAR</section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/EE-4GvjKcfs"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h2>God of War</h2>
                        </div>
                        <div className="row">
                            <h1> S./120.00</h1>

                        </div>
                        <div className="row">
                            <h3 className="text-warning"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h3>
                        </div>
                        <p><i className="text-success fa fa-check-square-o" aria-hidden="true"></i> <strong>Modos de juego</strong> Multiplayer</p>
                        <p><i className="text-success fa fa-check-square-o" aria-hidden="true"></i> <strong>Platforms</strong> PlayStation 4, PC (Microsoft Windows) </p>
                        <p><i className="text-success fa fa-check-square-o" aria-hidden="true"></i> <strong>Genre</strong> Adventure, Hack and slash/Beat 'em up</p>
                        <div className="row mt-4 " >

                            <Link className="btn btn-success text-light" to="/tienda/formPago"> Buy Now</Link>
                            {/* &nbsp;
                            <a className="btn btn-danger text-light" to="/crear"><i className="fa fa-cart-plus" aria-hidden="true"></i>  Add To Cart</a> <br /><br /> */}

                        </div>

                    </div>
                </div>
            </div>

            <div className="container bg-secondary rounded">
                <div className="row p-3" >
                    <h2>Descripcion</h2>
                    <p>God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. </p>
                </div>
            </div>

            <section className="container mt-5 mb-5 border border-danger rounded">
                <div className="container">
                    <div className="row p-3">
                        <h2>Criticas</h2>
                        <div className="row mt-5 mb-5">
                            <h5 className="mt-0">XAuro8l<span className="text-warning"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                            Estupendo juego, me lo pase hace un año, lo volví a jugar, y me gustó aún más.Gráficos impresionantes, banda sonora épica y cuando completas la historia perfectamente te pueden quedar unas 20-30 horas más de juego para completar todo.

                        </div>

                        <div className="row mb-5">
                            <h5 className="mt-0">gUnterHDPro<span className="text-warning"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> </span></h5>
                            Nunca me llamó la saga God Of War pero visto que era un reinicio de la saga y la buena crítica me animé a probarlo y jamás me arrepentiré.
                        </div>


                        <div className="row mb-5">
                            <h5 class="mt-0"> Miraclex36<span class="text-warning"><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                            Nunca he sido seguidor de esta saga, pero debido al reinicio de ésta y su victoria en el GOTY 2018 me surgió la curiosidad poco después de comprar la PS4 allá por noviembre-diciembre de 2018.
                        </div>

                        <div className="row mb-5">
                            <h5 className="mt-0">Erny83.<span className="text-warning"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                            God of War es una obra maestra, por ahora para mi el mejor juego de la generación. Un juego que demuestra el potencial de la consola y la renovación de una franquicia después de muchísimos años.
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default GameInformation;