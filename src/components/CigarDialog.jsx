import "../css/CigarDialog.css";

const CigarDialog = (props) => {
    return (
        <div id="cigar-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closePopDialog}
                    >&times;</span>
                    <div className="cigar-dialog-content">
                        <img src={"https://server-gourmet.onrender.com/images/" + props.image} alt={props.name} />
                        <h1>{props.name}</h1>
                        <p>Type: {props.type}</p>
                        <p>Location Produced: {props.location}</p>
                        <p>Price: {props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CigarDialog;


