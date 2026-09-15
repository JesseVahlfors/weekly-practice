const InventoryControls = ({lowstock, onCheckLowStock}) => {
    return(
        <div>
            <button onClick={onCheckLowStock} className={lowstock ? "active" : ""}>Low stock items only</button>
        </div>
    );
}

export default InventoryControls