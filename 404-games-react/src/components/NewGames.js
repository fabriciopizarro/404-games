import '../styles/css/Games.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewGames = () => {
    return (
        <section className="primera-necesidad__container">
            <h1 className="primera-necesidad__title">Nuestros Juegos</h1>
            <div className="cards-conatiner">
                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640" class="card-img-top" alt="Foto de videojuego" />
                    <div className="card-body">
                        <h5 className="card-title">Grand Theft Auto V: Premium Edition</h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 99.90</p>
                            <p className="card-text">PEN 49.95</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>

                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/Daffodil_1P_Awareness_INT_Epic_1200x1600_1200x1600-356dd4965bde4c5dbd1000f9c97ac4b4?h=854&resize=1&w=640" class="card-img-top" alt="Foto de videojuego" />
                    <div className="card-body">
                        <h5 className="card-title">Tiny Tina's Wonderlands</h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 300</p>
                            <p className="card-text">PEN 218</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>
                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-bf2b70ddd7ad45e44e629809e1b0ad10?h=854&resize=1&w=640" class="card-img-top" alt="Foto de videojuego" />
                    <div className="card-body">
                        <h5 className="card-title">NARAKA: BLANDEPOINT</h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 99.90</p>
                            <p className="card-text">PEN 59.90</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>

                <div className="card text-center" style={{ width: '16rem' }}>
                    <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEMONSTILT_WIZNWAR_S2_1200x1600-b2171dcb9b7272a6e654f53a093e682d?h=854&resize=1&w=640" class="card-img-top" alt="Foto de videojuego" />
                    <div className="card-body"> 
                        <h5 className="card-title">DEMON'S TILT</h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 37</p>
                            <p className="card-text">PEN 20</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default NewGames;