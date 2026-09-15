export default function CartItem({ item, onIncrease, onRemove }) {
  return (
    <article>
      <h3>{item.name}</h3>
      <p>€{item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => onIncrease(item.id)}>
        +
      </button>

      <button onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </article>
  );
}