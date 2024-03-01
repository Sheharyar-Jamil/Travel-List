function Stats({ newItemObj }) {
  if (!newItemObj.length) {
    return (
      <p className="stats">
        <em>Start adding some items on your packing list 🚀</em>
      </p>
    );
  }
  const numItems = newItemObj.length;
  const packedItems = newItemObj.filter(function (item) {
    return item.packed;
  }).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `
          You have ${numItems} items on your list, and you already packed
          ${packedItems} (${percentage}%)
        `}
      </em>
    </footer>
  );
}

export default Stats;
