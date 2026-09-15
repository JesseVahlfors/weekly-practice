import InventoryItem from "./InventoryItem"

const InventoryList = ({ items, handleRestock, deleteItem }) => {
    
    return (
        <div>
            {items.map( (item) => (
                <InventoryItem 
                key={item.id} 
                item={item} 
                handleRestock={handleRestock}
                deleteItem={deleteItem}
                />
            ))}
        </div>
    )
}

export default InventoryList