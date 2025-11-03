import {Outlet} from "react-router-dom";
import Header from './components/Header';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


const Layout = () => {
    return (
        <>
            <Header />
            <Navigation />

            <Outlet />

            <Contact />
            <Footer />
        </>
    );
};

export default Layout;
