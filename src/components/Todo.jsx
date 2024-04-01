import React, { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodoContext";

function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [completed, setCompleted] = useState(todo.completed);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
    todo.completed = !todo.completed;
    setTodos([...todos]);
    // console.log(todos);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((eachTodo) => eachTodo.id!== todo.id);
    setTodos(newTodos);
    console.log(todos);
  }

  return (
    <div className="w-11/12 h-14 flex justify-between items-center bg-black-olive rounded-2xl mx-auto px-2 border border-orange-100 border-opacity-50 my-5">
      <div className="flex items-center justify-start w-1/2">
        <div className="flex items-center justify-center relative">
          <input
            type="checkbox"
            className="h-7 w-7 cursor-pointer appearance-none rounded-full border-2 border-solid border-orange-600 "
            
            onChange={handleCheckboxChange}
          />
          {completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-3xl absolute"
              onClick={handleCheckboxChange}
            >
              <path
                fill="#ffedd5"
                fillRule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <input
          type="text"
          className={`text-xl appearance-none bg-transparent text-orange-100 font-bold ml-3`}
          value={todo.task}
        />
      </div>
      <div className="flex items-center justify-end w-1/2">
        <svg
          onClick={() => {
            if (todo.completed) return;

            if (isTaskEditable) {
              editTodo();
            } else setisTaskEditable((prev) => !prev);
          }}
          fill="none"
          className="text-orange-100 text-3xl mr-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M9.533 11.15A1.823 1.823 0 0 0 9 12.438V15h2.578c.483 0 .947-.192 1.289-.534l7.6-7.604a1.822 1.822 0 0 0 0-2.577l-.751-.751a1.822 1.822 0 0 0-2.578 0z" />
            <path d="M21 12c0 4.243 0 6.364-1.318 7.682C18.364 21 16.242 21 12 21c-4.243 0-6.364 0-7.682-1.318C3 18.364 3 16.242 3 12c0-4.243 0-6.364 1.318-7.682C5.636 3 7.758 3 12 3" />
          </g>
        </svg>
        <svg
          onClick={() => deleteTodo()}
          fill="none"
          className="text-orange-100 text-3xl ml-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m18 9l-.84 8.398c-.127 1.273-.19 1.909-.48 2.39a2.5 2.5 0 0 1-1.075.973C15.098 21 14.46 21 13.18 21h-2.36c-1.279 0-1.918 0-2.425-.24a2.5 2.5 0 0 1-1.076-.973c-.288-.48-.352-1.116-.48-2.389L6 9m7.5 6.5v-5m-3 5v-5m-6-4h4.615m0 0l.386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Todo;
