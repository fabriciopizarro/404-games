import '../styles/css/Games.css';
import {
    Link
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Tienda = () => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/games/listofgames")
        .then(response => response.json())
        .then(data => setResult(data))
    }, [])

    return (
        <>
            <section className="pedidos" id="pedidos" >
                <div className="pedidos__div">
                    <div className="pedidos__titulo-container">
                        <h2 className="pedidos__titulo">Todos nuestros juegos
                            <svg xmlns="http://www.w3.org/2000/svg" className="pedidos_vineta" viewBox="0 0 5 9"><path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path></svg>
                        </h2>
                        <div className="pedidos_vineta">

                        </div>
                    </div>
                    <div className="pedidos__pedidos">
                        {result.map(item => (  
                            <section className="pedidos__producto animate__animated animate__backInLeft">
                            
                            <figure className="pedidos__imagen">
                                <img className="pedidos__imagen-producto" src={item.image} alt="imagen de video juego" />
                            </figure>
                            <div className="pedidos__container">
                                <p className="pedidos__container-data-titulo">{item.name}</p>
                            </div>
                            <div className="pedidos__container-button-container">
                                <Link className="pedidos__container-button" to="/tienda/formPago">PEN {item.price}</Link>
                            </div>
                        </section>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

export default Tienda;