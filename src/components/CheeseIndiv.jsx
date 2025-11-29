import "../css/CheeseIndiv.css";
import EditCheeseDialog from "./EditCheeseDialog";
import CheeseDialog from "./CheeseDialog";
import React, { useState } from "react";

const CheeseIndiv = (props) => {
    //State for pop-up dialog
    const [showPop, setPop] = useState(false);

    const showPopDetails = () => {
        setPop(true);
    }
    const hidePopDetails = () => {
        setPop(false);
    }
    //State for edit dialog
    const [showEditDialog, setShowEditDialog] = useState(false);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };
    const closeEditDialog = () => {
        setShowEditDialog(false);
    };
    
    
    
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
            {showEditDialog?(
                <EditCheeseDialog closeDialog={closeEditDialog}
                //editCheese={editCheese}
                updateCheese={props.updateCheese}
                _id={props._id}
                name={props.name}
                image={props.image}
                type={props.type}
                location={props.location}
                timeAged={props.timeAged}
                price={props.price} />
            ):("")}
            <section className="cheese-indiv" >
                <img src={"https://server-gourmet.onrender.com/images/" + props.image} onClick={showPopDetails} alt={props.name} />
                <h1>{props.name}</h1>
                <div className="cheese-indiv-icons">
                    <a href="#" onClick={openEditDialog}>&#9998;</a>
                    <a href="#" >&#x2715;</a>
                </div>
            </section>
        </>
    );

};


export default CheeseIndiv;