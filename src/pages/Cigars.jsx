import "./../css/Cigars.css";
//import CigarRow from "../components/CigarRow";
import CigarList from "../components/CigarList";

const Cigars = () => {
    return (
        <div id="cigar">
            <h1>Cigar Selection</h1>
            <CigarList num="9" />
        </div>
    );
};

export default Cigars;