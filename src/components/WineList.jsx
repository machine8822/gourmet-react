import {useState, useEffect} from "react";
import axios from "axios";
import WineIndiv from "./WineIndiv";

const WineList = (props) => {
    const [wines, setWines] = useState([]);

    useEffect(() => {
        const loadWines = async() => {
            const response = await axios.get("https://server-gourmet.onrender.com/api/wine/");
            setWines(response.data.splice(0, props.num));
        };
        loadWines();
    }, []);

    return (
        <div className="wine-list">
            {wines.map((wine) => (
                <WineIndiv
                    key={wine._id}
                    id={wine._id}
                    image={wine.image}
                    name={wine.name}
                    type={wine.type}
                    location={wine.location}
                    price={wine.price}
                    pair={wine.pair} />
            ))}
        </div>
    );
}

export default WineList;

