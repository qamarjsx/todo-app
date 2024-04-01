import { useState, useEffect, useContext } from "react";
import AddTask from "./components/AddTask";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { TodosContext, TodosProvider } from "./contexts/TodoContext";

function App() {
  const { todos, setTodos } = useContext(TodosContext);
  return (
    <>
      <div className="bg-rich-black h-screen overflow-x-hidden overflow-y-auto">
        <Header />
        <Counter />
        <AddTask />
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default App;
