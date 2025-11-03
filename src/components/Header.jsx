import './../css/Header.css';
import logo from './../images/logoRed.png';

const Header = () => {
    return (
        <header id="main-header">
            <img src={logo} alt="Gourmet Life Logo" id="logo"/>
            <h1>Gourmet Life</h1>
            <img src={logo} alt="Gourmet Life Logo" id="logo"/>
        </header>
    );
};


export default Header;