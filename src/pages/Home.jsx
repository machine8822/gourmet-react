import "./../css/Home.css";
import './../images/wine.jpg';
import './../images/cigar.jpg';

const Home = () => {
    return (
        //Apply id to it otherwise style h1 applies to all.
        <div id="home">
            <div class="home-content">
                <img src={require('./../images/rouge.jpg')} alt="Not working"/>
                <img src={require('./../images/wine.jpg')} alt="Not working"/>
                <img src={require('./../images/cigar.jpg')} alt="Not working"/>
            </div>
        </div>
    );
};

export default Home;