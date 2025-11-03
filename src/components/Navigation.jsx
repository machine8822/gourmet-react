import './../css/Navigation.css';
import {Link} from "react-router-dom";
import { useState} from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }
    return (
        <nav id="main-nav">
            <div id="arrow" onClick={toggleMenu}></div>
            <ul id="nav-items" className={menuOpen ? "" : "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cheese">Cheese</Link></li>
                <li><Link to="/wine">Wine</Link></li>
                <li><Link to="/cigars">Cigars</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;

