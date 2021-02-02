import React, { useState, useEffect, useRef } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [current, setCurrent] = useState(""); //input item
  const [items, setItem] = useState([]); // todo items

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function removeItem(key) {
    const filteredItems = items.filter((item) => item.key !== key);
    setItem(filteredItems);
  }

  const inputHandler = (e) => {
    if (e.target.value !== "") {
      setCurrent(e.target.value);
    }
  };

  const addItems = (e) => {
    e.preventDefault();
    const item = { task: current, key: Date.now() };
    setItem([...items, item]);
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <hr/>
      <TodoForm
        addItems={addItems}
        inputRef={inputRef}
        inputHandler={inputHandler}
        currentValue={current}
      />
      <TodoList removeItem={removeItem} items={items} />
    </div>
  );
};

export default App;
