export default function CartControls({
  hideSingleItems,
  onToggleFilter,
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={hideSingleItems}
        onChange={onToggleFilter}
      />
      Hide items with quantity 1
    </label>
  );
}