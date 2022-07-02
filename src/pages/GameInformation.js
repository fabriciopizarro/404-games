import "../styles/css/GameInformation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const GameInformation = () => {
    return (
        <section class="game-information-section">
            <div class="hero">
                <h1 class="hero__title">God of War</h1>
            </div>
            <section class="game-description">
                <h2 class="game__name">God of War</h2>
                <div class="game-extra-data">
                    <h1 class="game__price"> S./120.00</h1>
                    <div class="starts-container">
                        <figure class="start-image__container"><img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" alt="start" class="start-image"/></figure>
                        <figure class="start-image__container"><img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" alt="start" class="start-image"/></figure>
                        <figure class="start-image__container"><img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" alt="start" class="start-image"/></figure>
                        <figure class="start-image__container"><img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" alt="start" class="start-image"/></figure>
                        <figure class="start-image__container"><img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" alt="start" class="start-image"/></figure>
                    </div>
                </div>
                
            <div class="game-information-container">
                
                <div class="game-information__video">
                    <iframe class="game__video" src="https://www.youtube.com/embed/EE-4GvjKcfs"></iframe>
                </div>

                <div class="game-information">
                    <p class="game-information__mode"><strong>Modos de juego </strong>Multiplayer</p>
                    <p class="game-information__platform"><strong>Plataformas </strong>PlayStation 4, PC (Microsoft Windows)</p>
                    <p class="game-information__genre"><strong>Genero </strong>Adventure, Hack and slash/Beat 'em up</p>
                    <div class="buttons-container">
                        <div class="button-buy">
                            <a href="" class="button-buy__text">Buy Now</a>
                        </div>
                        <div class="button-buy">
                            <a href="" class="button-buy__text">Add to cart</a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>

        <section class="game-resume">
            <h2 class="game_title">Descripcion</h2>
            <p class="game__paragraph">God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. </p>
        </section>

        <section class="game-comentaries-container">
            <h2 class="game-comentaries__title">Comentarios</h2>
            <div class="game-comentaries-users">
                <div class="game-comentary-user">
                    <div class="game-comentary__data">
                        <h3 class="game-comentary__user-name">Gino10</h3>
                        <h4 class="game-comentary__score-satisfaction">Puntuacion: 5/5</h4>
                    </div>
                    
                    <p class="game-comentary__comentary">
                        Estupendo juego, me lo pase hace un año, lo volví a jugar, y me gustó aún más.Gráficos impresionantes, banda sonora épica y cuando completas la historia perfectamente te pueden quedar unas 20-30 horas más de juego para completar todo.
                    </p>
                </div>

                <div class="game-comentary-user">
                    <div class="game-comentary__data">
                        <h3 class="game-comentary__user-name">JofranTito</h3>
                        <h4 class="game-comentary__score-satisfaction">Puntuacion: 4/5</h4>
                    </div>
                    <p class="game-comentary__comentary">
                        Nunca me llamó la saga God Of War pero visto que era un reinicio de la saga y la buena crítica me animé a probarlo y jamás me arrepentiré.
                    </p>
                </div>

                <div class="game-comentary-user">
                    <div class="game-comentary__data">
                        <h3 class="game-comentary__user-name">ZacEfron</h3>
                        <h4 class="game-comentary__score-satisfaction">Puntuacion: 5/5</h4>
                    </div>
                    <p class="game-comentary__comentary">
                        Nunca he sido seguidor de esta saga, pero debido al reinicio de ésta y su victoria en el GOTY 2018 me surgió la curiosidad poco después de comprar la PS4 allá por noviembre-diciembre de 2018.
                    </p>
                </div>
            </div>
        </section>
    </section>
    );
}

export default GameInformation;