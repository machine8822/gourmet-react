import "./../css/Checkout.css";

const Checkout = () => {
    //document.getElementById("gallery").onpointerdown = Gallery;
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

            <img src={"../images/logoRed.png"} alt="Gallery" id="gallery" />
            
        </div>
    );
    
};

let count = 0;
function Gallery() {
    const gall = document.getElementById("gallery");
    alert("Gallery clicked");
    if(count === 0) {
        gall.scr= require('../images/wine5.jpg');
        count++;
        alert("First image");
        return;
    }
};


export default Checkout;