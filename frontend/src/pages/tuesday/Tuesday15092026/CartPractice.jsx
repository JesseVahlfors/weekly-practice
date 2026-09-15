import { useState } from "react";
import CartControls from "./CartControls";
import CartList from "./CartList";

const initialItems = [
  { id: 1, name: "Keyboard", price: 59, quantity: 1 },
  { id: 2, name: "Mouse", price: 29, quantity: 2 },
  { id: 3, name: "Monitor", price: 249, quantity: 1 },
  { id: 4, name: "USB Cable", price: 12, quantity: 3 },
];

export default function CartPractice() {
  const [items, setItems] = useState(initialItems);
  const [hideSingleItems, setHideSingleItems] = useState(false);

  const visibleItems = hideSingleItems
    ? items.filter((item) => item.quantity > 1)
    : items;

  function increaseQuantity(id) {
    setItems(
      items => items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      }),
    );
  }

  function removeItem(id) {
    setItems(items => items.filter((item) => item.id !== id));
  }

  return (
    <section>
      <h2>Shopping Cart Debugging</h2>

      <CartControls
        hideSingleItems={hideSingleItems}
        onToggleFilter={() => setHideSingleItems(hideSingleItems => !hideSingleItems)}
      />

      <CartList
        items={visibleItems}
        onIncrease={increaseQuantity}
        onRemove={removeItem}
      />
    </section>
  );
}