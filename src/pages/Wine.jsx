import "./../css/Wine.css";
//import WineRow from "../components/WineRow";
import WineList from "../components/WineList";

const Wine = () => {
    return (
        <div id="wine">
            <h1>Wine Selection</h1>
            <WineList num="9" />
        </div>
    );
};

export default Wine;