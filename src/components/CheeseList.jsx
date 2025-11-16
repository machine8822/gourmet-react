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
            const response = await axios.get("http://localhost:3001/api/cheese/");
            setCheeses(response.data.splice(0, props.num));
        };
        loadCheese();
    }, []);

    const addCheeseIndiv = (props) => {
        setCheeses((cheeses) => [...cheeses, props]);
    };
    
    const openAddDialog = () => {
        setShowAddDialog(true);
    }
    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    return (
        <div className="cheese-list">
            <button id="add-cheese" onClick={openAddDialog}>Add Cheese</button>

            {showAddDialog ? 
                <AddCheeseDialog closeAddDialog={closeAddDialog} addCheese={addCheeseIndiv} />
             : ("")}
            
            {cheeses.map((cheese) => (
                <CheeseIndiv
                    key={cheese._id}
                    id={cheese._id}
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