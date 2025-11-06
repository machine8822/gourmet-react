import "./../css/Cheese.css";
//import CheeseRow from "../components/CheeseRow";
import CheeseList from "../components/CheeseList";

const Cheese = () => {
    return (
        <div id="cheese">
            <h1>Cheese Selection</h1>
            {/*
                <CheeseRow 
                    image="./images/rouge.jpg"
                    name="Ruby Rouge"
                    type="Farmhouse Dutch Gouda"
                    location="Netherlands"
                    timeAged="6-7 Months"
                    price="$12.99/lb"/>*/}
            <CheeseList num="9" />
        </div>
    );
};


export default Cheese;

