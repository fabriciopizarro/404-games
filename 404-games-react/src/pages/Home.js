import Carrousel from '../components/Carrousel';
import NewGames from '../components/NewGames';
import JuegosGratuitos from '../components/JuegosGratuitos';
import Explora from '../components/Explora';
import Promocion from '../components/Promocion';
import JuegosPeru from '../components/JuegosPeru';

// import Header from '../components/Header';

const Home = () => {
    return (
        <>

            <Carrousel />
            <NewGames />
            <Explora />
            <NewGames />
            <NewGames />
            <JuegosPeru />
            <JuegosGratuitos />
            <Promocion />
        </>
    );
}

export default Home;