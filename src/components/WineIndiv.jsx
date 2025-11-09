import "./../css/WineIndiv.css";
import {useState} from "react";
import WineDialog from "./WineDialog";

const WineIndiv = (props) => {
    const [showPop, setPop] = useState(false);

    const showPopDetails = () => {
        setPop(true);
    }

    const hidePopDetails = () => {
        setPop(false);
    }

    return (
        <>
            {showPop?(
                <WineDialog closePopDialog={hidePopDetails}
                    id={props._id}
                    name={props.name}
                    image={props.image}
                    type={props.type}
                    location={props.location}
                    price={props.price}
                    pair={props.pair} />
            ):("")}
            <section className="wine-indiv" onClick={showPopDetails}>
                <img src={"https://server-gourmet.onrender.com/images/" + props.image} alt={props.name} />
                <h1>{props.name}</h1>
            </section>
        </>
    );

};

export default WineIndiv;
