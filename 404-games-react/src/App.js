import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
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
          <Route path="/" element={<Home/>} />
          <Route path="/tienda" element={<Tienda/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
