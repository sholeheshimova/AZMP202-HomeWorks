import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button onClick={handleSubmit} style={{ marginLeft: "5px" }}>ADD</button>
    </div>
  );
};

export default TodoInput;