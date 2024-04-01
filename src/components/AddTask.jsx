import React, { useContext, useState, useEffect } from "react";
import { TodosContext } from "../contexts/TodoContext";

function AddTask() {
  const [task, setTask] = useState("");
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    const newTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(newTodos);
    setTodos(newTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  

  const addTodo = () => {
    if (task !== "") {
      const newTodo = {
        id: Date.now(),
        task: task,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
    // console.log(todos);
  };

  

  return (
    <div className="w-11/12 h-11 flex justify-center mx-auto my-10">
      <input
        type="text"
        placeholder="write your next task"
        className="appearance-none outline-none focus:ring-1 focus:ring-orange-100 focus:ring-opacity-50 w-10/12 rounded-2xl bg-black-olive placeholder:text-orange-100 placeholder:font-extralight  text-orange-100 mr-2 text-base font-light px-3 tracking-wider"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="w-2/12 rounded-full bg-orange-600 ml-2 text-2xl font-semibold"
        onClick={addTodo}
      >
        +
      </button>
    </div>
  );
}

export default AddTask;
