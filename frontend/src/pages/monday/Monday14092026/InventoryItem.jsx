const InventoryItem = ({item, handleRestock, deleteItem}) => {
      return (
				<div id={item.id}>
					<p>{item.name}</p>
					<p>{item.quantity}</p>
					<button onClick={()=> handleRestock(item.id)}>Restock</button>
					<button onClick={()=> deleteItem(item.id)}>Delete</button>
				</div>
			)
}

export default InventoryItem