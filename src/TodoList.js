function TodoList({ items, removeItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.key}>
          {item.task}{" "}
          <button onClick={() => removeItem(item.key)}>&times;</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
