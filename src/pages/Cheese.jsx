import "./../css/Cheese.css";
import CheeseRow from "../components/CheeseRow";

const Cheese = () => {
    return (
        <div id="cheese">
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location Produced</th>
                    <th>Time Aged</th>
                </tr>
                <CheeseRow 
                    image='../images/rouge.jpg'
                    name="Ruby Rouge"
                    type="Farmhouse Dutch Gouda"/>
                    
                <CheeseRow 
                    image=""
                    name="Shropshire Blue"/>
            </table>
        </div>
    );
};


export default Cheese;

