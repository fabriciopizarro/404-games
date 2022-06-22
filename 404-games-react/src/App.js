import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import FormPago from './pages/FormPago';
import GameInformation from './pages/GameInformation';
import JuegosGratis from './pages/JuegosGratis';
import JuegosPPT from './pages/JuegoPPT';
import Crear from './pages/Formulario/Crear';
import Iniciar from './pages/Formulario/Iniciar';
import Landing from './pages/Landing';
import Confirm from './pages/Confirm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const isPathActive = (path) => {
    if (window.location.pathname === path) return true
    return false
  }
  return (
    <Router>
      {
        isPathActive("/") ? null : <Header />
      }

      <main>
        <Routes>
          <Route path="/tienda/formPago" element={<FormPago />} />
          <Route path="/GameInformation" element={<GameInformation />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/free" element={<JuegosGratis />} />
          <Route path="/pptGame" element={<JuegosPPT />} />
          <Route path="/home" element={<Home />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/iniciar" element={<Iniciar />} />
          <Route index path="/" element={<Landing />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
