import "./../css/Checkout.css";
import { useState } from "react";

const Checkout = () => {
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('./../images/slideshow', false, /\.(png|jpe?g|svg)$/));

    const [index, setIndex] = useState(0);

    const slideForward = () => {
        setIndex((index + 1) % images.length);
    }
    const slideBackward = () => {
        setIndex((index - 1 + images.length) % images.length);
    }
    return (
        <div id="checkout">
            <table>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Empty</td>
                    <td>0</td>
                    <td>$0.00</td>
                </tr>
            </table>

            {/*<img src={"./images/logoRed.png"} alt="Gallery" id="gallery" />*/}
            <div id="slideshow">
                <img src={images[index]} alt={images[index]} />
                <p id="forward-arrow" onClick={slideForward}>&gt;</p>
                <p id="backward-arrow" onClick={slideBackward}>&lt;</p>
            </div>
            
        </div>
    );
    
};


export default Checkout;