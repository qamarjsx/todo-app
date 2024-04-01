import { useState, createContext } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
