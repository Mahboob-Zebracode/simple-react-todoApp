import React, { useState, useEffect, useRef } from "react";

function TodoForm({ inputHandler, addItems, inputRef }) {
  return (
    <form onSubmit={addItems}>
      <h1>Add Task</h1>
      <input
        className="todoInput"
        type="text"
        onChange={(e) => inputHandler(e)}
        placeholder="Your Task"
        ref={inputRef}
      />
      <button className="addBtn" type="submit">
        Add Item
      </button>
    </form>
  );
}
export default TodoForm;
