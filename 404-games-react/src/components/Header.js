import {
    Link
} from 'react-router-dom';
import '../styles/css/Header.css';

const Header = () => {
    return (
        <header id="header" className="header">
            <nav className="header-nav">
                <Link className="header-nav__logo-container" to="/home">
                    <img className="header-nav__logo" src="https://thumbs.dreamstime.com/b/hexagon-gaming-logo-colorful-vector-design-hexagon-game-gaming-logo-design-168547122.jpg" alt="Logo" />
                </Link>
                <label className="header-nav__icon-container" for="menu">
                    <i id="header-icon" className="fas fa-bars" ></i>
                </label>
                <input className="header-nav__checkbox" type="checkbox" name="menu" id="menu" />
                <ul className="header-nav__list">
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to="/home">INICIO</Link>
                    </li>
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to="/tienda">TIENDA</Link>
                    </li>
                    <li className="header-nav__item">
                        <a className="header-nav__link" href="https://www.levelup.com/noticias" target="_blank">NOTICIAS</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;