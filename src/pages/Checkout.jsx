import "./../css/Checkout.css";

const Checkout = () => {
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




export default Checkout;