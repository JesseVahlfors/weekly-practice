import InventoryControls from "./InventoryControls"
import InventoryList from "./InventoryList"
import { useState } from "react"

const InventoryPractice = () =>  {
	const [items, setItems] = useState([
        {   
            id: 1,
            name: "Tire",
            quantity: 40,
        },
                {   
            id: 2,
            name: "Window",
            quantity: 20,
        },
                {   
            id: 3,
            name: "Steering wheel",
            quantity: 15,
        },
                {   
            id: 4,
            name: "Side Mirror",
            quantity: 50,
        },
                {   
            id: 5,
            name: "Headlamp",
            quantity: 4,
        }
    ]);
		const [lowStock, setLowStock] = useState(false);

		function handleLowstock(){
			setLowStock(current => !current);
		}

		const visibleItems = lowStock ? items.filter(item => item.quantity <= 5) : items;

		function handleRestock(itemId) {
			setItems(currentItems => currentItems.map(item => item.id === itemId ? {...item, quantity: item.quantity + 1} : item));
		}

		function deleteItem(itemId) {
			setItems(currentItems => currentItems.filter(item => item.id !== itemId));
		}




    return (
        <div className="inventory-practice">
            <InventoryControls lowstock={lowStock} onCheckLowStock={handleLowstock}/>
            <InventoryList  items={visibleItems} handleRestock={handleRestock} deleteItem={deleteItem} />
        </div>
    )
}

export default InventoryPractice