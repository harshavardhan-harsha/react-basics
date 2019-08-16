import React, { useState } from "react";
import "./hooks.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add todo.." />
    </form>
  );
}

function HookApp() {
  const [todos, setTodos] = useState([
    { text: "learn react hooks", isCompleted: false },
    { text: "build a cool app", isCompleted: false },
    { text: "buy some milk", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default HookApp;
