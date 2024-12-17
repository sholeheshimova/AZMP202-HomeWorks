import React from "react";

const TodoFilter = ({ filterTodos, clearTodos }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
      <button onClick={() => filterTodos("all")} style={{ background: "blue", color: "white" }}>All Todos</button>
      <button onClick={() => filterTodos("completed")} style={{ background: "green", color: "white" }}>All Completed Todos</button>
      <button onClick={() => filterTodos("pending")} style={{ background: "yellow", color: "white" }}>All Pending Todos</button>
      <button onClick={clearTodos} style={{ background: "red", color: "white" }}>Clear All</button>
    </div>
  );
};

export default TodoFilter;
