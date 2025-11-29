import { useState, useEffect } from "react";
import axios from "axios";
import "./../css/CheeseList.css";
import CheeseIndiv from "./CheeseIndiv";
import AddCheeseDialog from "./AddCheeseDialog";

const CheeseList = (props) => {
    const [cheeses, setCheeses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        const loadCheese = async() => {
            const response = await axios.get("https://server-gourmet.onrender.com/api/cheese/");
            setCheeses(response.data.splice(0, props.num));
        };
        loadCheese();
    }, []);

    const addCheese = (props) => {
        setCheeses((cheeses) => [...cheeses, props]);
    };
    
    const openAddDialog = () => {
        setShowAddDialog(true);
    }
    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    //To update after editing cheese
    const updateCheese = (update) => {
        setCheeses(cheeses.map((cheese) => (cheese._id === update._id ? update : cheese)));
    };

    return (
        <div className="cheese-list">
            <button id="add-cheese" onClick={openAddDialog}>Add Cheese</button>

            {showAddDialog ? 
                <AddCheeseDialog closeAddDialog={closeAddDialog} addCheese={addCheese} />
             : ("")}
            
            {cheeses.map((cheese) => (
                <CheeseIndiv
                    key={cheese._id}
                    _id={cheese._id}
                    updateCheese={updateCheese}
                    image={cheese.image}
                    name={cheese.name}
                    type={cheese.type}
                    location={cheese.location}
                    timeAged={cheese.timeAged}
                    price={cheese.price} />
            ))}
        </div>
    );
}

export default CheeseList;