import CartItem from "./CartItem";

export default function CartList({ items, onIncrease, onRemove }) {
  if (items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}