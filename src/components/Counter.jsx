import React, { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodoContext";

function Counter() {
  const { todos, setTodos } = useContext(TodosContext);
  
  return (
    <div className="w-11/12 flex items-center border-[0.5px] border-solid rounded-3xl border-orange-100 mx-auto my-10 py-14">
      <div className="h-1/2 w-2/3 text-orange-100 flex flex-col items-center">
        <h1 className="font-bold text-3xl mb-0.5">Todo Done</h1>
        <p className="font-extralight tracking-widest text-2xl mt-0.5">
          keep it up
        </p>
      </div>
      <div className="h-20 w-20 bg-orange-600 rounded-full">
        <h1 className="text-rich-black text-3xl text-left font-bold relative left-[20%] top-1/4">
        {todos.filter((todo) => todo.completed).length}/{todos.length}
        </h1>
      </div>
    </div>
  );
}

export default Counter;
