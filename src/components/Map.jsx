import React from "react";
import "../css/Map.css";

const Map = () => {
    return (
        <div className="map-container">
            <iframe className="Map" title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d88902.60644252776!2d-81.22394772911905!3d34.0986530258287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f89f6381a8c743%3A0x4d62ebcece60a07a!2sCarolina%20Charcuterie%20Company!5e0!3m2!1sen!2sus!4v1760656568145!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;

