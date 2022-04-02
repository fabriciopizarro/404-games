import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import FormPago from './pages/FormPago';
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
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
