import "../css/CheeseIndiv.css";
import {useState} from "react";
import CheeseDialog from "./CheeseDialog";

const CheeseIndiv = (props) => {
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
                <CheeseDialog closePopDialog={hidePopDetails}
                    id={props._id}
                    name={props.name}
                    image={props.image}
                    type={props.type}
                    location={props.location}
                    timeAged={props.timeAged}
                    price={props.price} />
            ):("")}
            <section className="cheese-indiv" onClick={showPopDetails}>
                <img src={"https://server-gourmet.onrender.com/images/" + props.image} alt={props.name} />
                <h1>{props.name}</h1>
                
            </section>
        </>
    );

};


export default CheeseIndiv;