import '../styles/css/Games.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const NewGames = () => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/games/%22")
        .then(response => response.json())
        .then(data => setResult(data))
    }, [])
    return (

        <section className="pedidos" id="pedidos" >

            <div className="pedidostitulo-container">
                <h2 className="pedidostitulo">Más vendidos
                    <svg className="pedidos_vineta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 9"><path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path></svg>
                </h2>
            </div>

            <div className="pedidosdiv">

                <div className="pedidospedidos">
                   {result.map(game => (
                    <section className="pedidosproducto animateanimated animatebackInLeft">
                        <figure className="pedidosimagen">
                            <img className="pedidosimagen-producto" src={game.image} alt="imagen de video juego" />
                        </figure>
                        <div className="pedidoscontainer">
                            <p className="pedidoscontainer-data-titulo">{game.name}</p>
                        </div>
                        <div className="pedidoscontainer-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">{game.price}</p>
                        </div>
                    </section>
                    ))}
                </div>
            </div>
        </section>

        /*
        <section className="pedidos" id="pedidos" >

            <div className="pedidos__titulo-container">
                <h2 className="pedidos__titulo">Más vendidos
                    <svg className="pedidos_vineta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 9"><path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path></svg>
                </h2>
            </div>

            <div className="pedidos__div">

                <div className="pedidos__pedidos">

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FootballManager2022_SportsInteractive_S2_1200x1600-5377adfa5fd611bd6726995ece5b04ef?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Football Manager 2022</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/offer/b6b2ef0cc19a4adaaa1cf6c7ed000dfa/EGS_GodfallUltimateEdition_CounterplayGames_Editions_S2_1200x1600-ac41b1de47d9dcad22626c856e5dd598?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Godfall: Ultimate Edition</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/1368a7f14c3344bbaededbae528fafed/offer/EGS_DeadCells_MotionTwin_S2-1200x1600-34d9d5ebca89e17e0a26ddb2cb158b75.jpg?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">DeadCells</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/spt-assets/2deb44109e22450f93bd3bc28d2609f2/download-nowhere-prophet-offer-dwhj1.png?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Nowhere Prophet</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/spt-assets/cb90945c8de248e39d4ca0a61a2175ea/download-rogue-invader-offer-dqafx.png?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Rogue Invader</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/spt-assets/92e27e09d324479a8179d955f0e322e9/download-he-will-shoot-offer-nossq.jpg?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">He will shoot</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/spt/7bbe5d88-253c-4584-b195-ccd4703bc043/download-flat-heroes-offer-45db2c03.jpg?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Flat heroes</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/spt-assets/16546f00799e4658b63d345e17ec0243/download-janitor-bleeds-offer-tdqm9.png?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Janitor Bleeds</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/offer/65a9273ec61f4bb6b94461eb1ce8ec23/EGS_PCBuildingSimulator2_SpiralHouseLtd_S2_1200x1600-9d894c93110374afb5ff0f666a05c792?h=854&resize=1&w=640" alt="imagen de video juego" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">PC Building Simulator</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/offer/47bf168a2214456fb7bd4c217e2a4fd6/EGS_DisneySpeedstorm_Gameloft_S2_1200x1600-c6ea539d688767a32db247f951875ace?h=854&resize=1&w=640" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Assassins creed Origins</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>

                    <section className="pedidos__producto animate__animated animate__backInLeft">
                        <figure className="pedidos__imagen">
                            <img className="pedidos__imagen-producto" src="https://cdn1.epicgames.com/offer/933ada2ec45e4184ae840d64c99e0ba9/RoCo_EGS_2_1200x1600-3f66364da32c8695fa9fcb8c7093f190?h=854&resize=1&w=640" />
                        </figure>
                        <div className="pedidos__container">
                            <p className="pedidos__container-data-titulo">Assassins creed Origins</p>
                        </div>
                        <div className="pedidos__container-button-container">
                            <Link className="pedidos__container-button" to="/GameInformation">Comprar</Link>

                            <p className="pedidos-precio">PEN 79.00</p>
                        </div>
                    </section>


                </div>
            </div>
        </section>
        */
    );
}

export default NewGames;