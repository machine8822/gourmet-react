import "../css/CheeseDialog.css";
import React, { useState } from "react";

const EditCheeseDialog = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        name: props.name,
        type: props.type,
        location: props.location,
        timeAged: props.timeAged,
        price: props.price,
        image: props.image
    });
    const [result, setResult] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };
    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs(values => ({...values, [name]: value}));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Submitting...");
        const formData = new FormData(event.target);
        const response = await fetch(`https://server-gourmet.onrender.com/api/cheese/${props._id}`, {
            method: "PUT",
            body: formData
        });

        if (response.status === 200) {
            setResult("Cheese updated successfully!");
            event.target.reset(); //resets form fields
            //props.editCheese(await response.json());
            props.updateCheese(await response.json());
            props.closeDialog();
        } else {
            console.log("Error:", response);
            setResult(response.message);
        }
    };

    return (
        <div id="edit-cheese-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeDialog}
                    >&times;</span>
                    <form id="edit-cheese-form" onSubmit={onSubmit}>
                        <h1>Edit Cheese</h1>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={inputs.name || ""} onChange={handleChange} required />

                        <label htmlFor="type">Type:</label>
                        <input type="text" id="type" name="type" value={inputs.type || ""} onChange={handleChange} required />

                        <label htmlFor="location">Location Produced:</label>
                        <input type="text" id="location" name="location" value={inputs.location || ""} onChange={handleChange} required />

                        <label htmlFor="timeAged">Time Aged:</label>
                        <input type="text" id="timeAged" name="timeAged" value={inputs.timeAged || ""} onChange={handleChange} required />

                        <label htmlFor="price">Price:</label>
                        <input type="text" id="price" name="price" value={inputs.price || ""} onChange={handleChange} required />

                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" />

                        <img id="image-preview" src={inputs.image instanceof File ? URL.createObjectURL(inputs.image) : "https://server-gourmet.onrender.com/images/" + props.image} alt="" />

                        <button type="submit">Save Changes</button>
                    </form>
                    <p id="form-result">{result}</p>
                </div>
            </div>
        </div>

    );
};







export default EditCheeseDialog;
