import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import FormPago from './pages/FormPago';
import JuegosGratis from './pages/JuegosGratis';
import JuegosPPT from './pages/JuegoPPT';
import Crear from './pages/Formulario/Crear';
import Iniciar from './pages/Formulario/Iniciar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/tienda/formPago" element={<FormPago/>} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/free" element={<JuegosGratis/>} />
          <Route path="/pptGame" element={<JuegosPPT/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/crear" element={<Crear/>} />
          <Route path="/" element={<Iniciar/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
