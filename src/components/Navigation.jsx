import './../css/Navigation.css';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul>
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

