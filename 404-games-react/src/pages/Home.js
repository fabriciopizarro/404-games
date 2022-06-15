import Carrousel from '../components/Carrousel';
import NewGames from '../components/NewGames';
import JuegosGratuitos from '../components/JuegosGratuitos';
import Explora from '../components/Explora';
import Promocion from '../components/Promocion';

const Home = () => {
    return (
        <>
           <Carrousel/>
           <NewGames/>
           <Explora/>
           <NewGames/>
           <NewGames/>
           <JuegosGratuitos/>
           <Promocion/>
        </>
    );
}
 
export default Home;