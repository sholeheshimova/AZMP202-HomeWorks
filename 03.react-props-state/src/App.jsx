import React, { useState } from "react";
import TodoInput from "./components/Input";
import TodoItem from "./components/Item";
import TodoFilter from "./components/Filter";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const filterTodos = (type) => {
    setFilter(type);
  };

  const getFilteredTodos = () => {
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    if (filter === "pending") return todos.filter((todo) => !todo.completed);
    return todos;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoFilter filterTodos={filterTodos} clearTodos={clearTodos} />
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
      </div>
      <p>
        You have{" "}
        <strong style={{ color: "red" }}>{todos.filter((todo) => !todo.completed).length}</strong> pending todos
      </p>
    </div>
  );
};

export default App;
