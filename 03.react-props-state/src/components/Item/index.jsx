import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "5px", background: "lightgreen", margin: "5px 0" }}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none", flex: 1 }}>
        {todo.text}, <em>{todo.date}</em>
      </span>
      <button onClick={() => toggleComplete(todo.id)} style={{ background: "green", color: "white" }}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)} style={{ background: "red", color: "white" }}>Delete</button>
    </div>
  );
};

export default TodoItem;

