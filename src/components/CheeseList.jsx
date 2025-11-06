import { useState, useEffect } from "react";
import axios from "axios";
//import "./../css/CheeseList.css";
import CheeseIndiv from "./CheeseIndiv";

const CheeseList = (props) => {
    const [cheeses, setCheeses] = useState([]);

    useEffect(() => {
        const loadCheese = async() => {
            const response = await axios.get("https://server-gourmet.onrender.com/api/cheese/");
            setCheeses(response.data.splice(0, props.num));
        };
        loadCheese();
    }, []);

    return (
        <div className="cheese-list">
            {cheeses.map((cheese) => (
                <CheeseIndiv
                    key={cheese._id}
                    id={cheese._id}
                    image={cheese.image}
                    name={cheese.name}
                    type={cheese.type}
                    location={cheese.location}
                    timeAged={cheese.timeAged}
                    price={cheese.price} />
            ))}
        </div>
    );
}

export default CheeseList;