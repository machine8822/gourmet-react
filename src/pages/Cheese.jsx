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
                    <th>Price</th>
                </tr>
                <CheeseRow 
                    image="./images/Rouge.jpg"
                    name="Ruby Rouge"
                    type="Farmhouse Dutch Gouda"
                    location="Netherlands"
                    timeAged="6-7 Months"
                    price="$12.99/lb"/>
                <CheeseRow 
                    image="./images/Shropshire.jpg"
                    name="Shropshire Blue"
                    type="Blue Cheese"
                    location="England"
                    timeAged="3 Months"
                    price="$9.99/lb"/>
                <CheeseRow
                    image="../images/Camembert.jpg"
                    name="Camembert"
                    type="Soft Cow Milk Cheese"
                    location="France"
                    timeAged="5-6 Months"
                    price="$15.99/lb"/>
                <CheeseRow
                    image="../images/Appenzeller.jpg"
                    name="Appenzeller"
                    type="Hard Cow Milk Cheese"
                    location="Switzerland"
                    timeAged="3-6 Months"
                    price="$19.99/lb"/>
                <CheeseRow
                    image="../images/Humboldt.jpg"
                    name="Humboldt Fog"
                    type="Goat Milk Cheese"
                    location="USA"
                    timeAged="2-3 Weeks"
                    price="$11.99/lb"/>
            </table>
        </div>
    );
};


export default Cheese;

