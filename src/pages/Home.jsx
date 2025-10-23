import "./../css/Home.css";

const Home = () => {
    return (
        //Apply id to it otherwise style h1 applies to all.
        <div id="home">
            <div class="home-content">
                <img src="./../images/rouge.jpg" alt="Not Working"></img>
                <img src="./../images/Wine.jpg" alt="Not Working"></img>
                <img src="./images/cigar.jpg" alt="Not Working"></img>
            </div>
        </div>
    );
};

export default Home;