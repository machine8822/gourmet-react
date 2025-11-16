import React, { useState } from "react";
import "./../css/AddCheeseDialog.css";

const AddCheeseDialog = (props) => {
    const [inputValues, setInputValues] = useState({});
    const [result, setResult] = useState("");

    const onSubmit = async (props) => {
        props.preventDefault();
        setResult("Submitting...");
        const formData = new FormData(props.target);
        const response = await fetch("http://localhost:3001/api/cheese/", {
            method: "POST",
            body: formData
        });

        if (response.status === 200) {
            setResult("Cheese added successfully!");
            props.target.reset();
            //props.addCheese(await response.json());
            props.closeAddDialog();
        } else {
            console.log("Error:", response);
            setResult(response.message);
        }
    };

    const onChange = (props) => {
        const name = props.target.name;
        const value = props.target.value;
        setInputValues((values) => ({
            ...values,
            [name]: value
        }));
    };
    const onImageChange = (props) => {
        const name = props.target.name;
        const file = props.target.files[0];
        setInputValues((values) => ({
            ...values,
            [name]: file
        }));
    };
        

    return (
        <div id="add-cheese-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeAddDialog}
                    >&times;</span>
                    <div className="add-cheese-dialog-content">
                        <h1>Add New Cheese</h1>
                        <form id="add-cheese-form" onSubmit={onSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={inputValues.name || ""} onChange={onChange} required />

                            <label htmlFor="type">Type:</label>
                            <input type="text" id="type" name="type" value={inputValues.type || ""} onChange={onChange} required />

                            <label htmlFor="location">Location Produced:</label>
                            <input type="text" id="location" name="location" value={inputValues.location || ""} onChange={onChange} required />

                            <label htmlFor="timeAged">Time Aged:</label>
                            <input type="text" id="timeAged" name="timeAged" value={inputValues.timeAged || ""} onChange={onChange} required />

                            <label htmlFor="price">Price:</label>
                            <input type="text" id="price" name="price" value={inputValues.price || ""} onChange={onChange} required />

                            <label htmlFor="image">Image:</label>
                            <input type="file" id="image" name="image" onChange={onImageChange} accept="image/*"required />

                            <img id="image-preview" src={inputValues.image != null ? URL.createObjectURL(inputValues.image) : ""} alt="Preview" />

                            <button type="submit">Add Cheese</button>
                        </form>
                        <p id="form-result">{result}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AddCheeseDialog;