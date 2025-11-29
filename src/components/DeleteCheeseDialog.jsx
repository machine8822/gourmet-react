import "../css/CheeseDialog.css";
import React, { useState } from "react";

const DeleteCheeseDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteCheeseDialog = async () => {
        setResult("Deleting...");
        const response = await fetch(`https://server-gourmet.onrender.com/api/cheese/${props._id}`, {
            method: "DELETE"
        });
        if (response.status === 200) {
            setResult("Cheese deleted successfully!");
            props.deleteCheese(props._id);
            props.closeDialog();
        } else {
            console.log("Error:", response);
            setResult(response.message);
        }
    };

    return (
        <div id="delete-cheese-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeDialog}
                    >&times;</span>
                    <div className="cheese-delete-content">
                        <h2 id="delete-text">Are you sure you want to delete {props.name}?</h2>
                        <div id="delete-cheese-buttons">
                            <button onClick={deleteCheeseDialog}>Yes</button>
                            <button onClick={props.closeDialog}>Cancel</button>
                        </div>
                        <p>{result}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DeleteCheeseDialog;
