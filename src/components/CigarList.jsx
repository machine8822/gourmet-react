import {useState, useEffect} from "react";
import axios from "axios";
import "../css/CigarList.css";
import CigarIndiv from "./CigarIndiv";

const CigarList = (props) => {
    const [cigars, setCigars] = useState([]);

    useEffect(() => {
        const loadCigars = async() => {
            const response = await axios.get("https://server-gourmet.onrender.com/api/cigars/");
            setCigars(response.data.splice(0, props.num));
        }; 
        loadCigars();
    }, []);

    return (
        <div className="cigar-list">
            {cigars.map((cigar) => (
                <CigarIndiv
                    key={cigar._id}
                    id={cigar._id}
                    image={cigar.image}
                    name={cigar.name}
                    type={cigar.type}
                    location={cigar.location}
                    price={cigar.price} />
            ))}
        </div>
    );
}

export default CigarList;

