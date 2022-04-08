import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import FormPago from './pages/FormPago';
import JuegosGratis from './pages/JuegosGratis';
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
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
