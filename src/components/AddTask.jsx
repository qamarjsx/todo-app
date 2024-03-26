import React, { useState } from "react";

function AddTask() {
  const [task, setTask] = useState("");
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);

  const handleTaskChange = (e) => {
    setTask(e.target.value); 
    console.log(e.target.value);
  }
  return (
    <div className="w-11/12 h-11 flex justify-center mx-auto my-10">
      <input
        placeholder="write your next task"
        className="appearance-none outline-none focus:ring-1 focus:ring-orange-100 focus:ring-opacity-50 w-10/12 rounded-2xl bg-black-olive placeholder:text-orange-100 placeholder:font-extralight  text-orange-100 mr-2 text-base font-light px-3 tracking-wider"
        value={task}
        onChange={handleTaskChange}
      ></input>
      <button value={isAddBtnClicked} className="w-2/12 rounded-full bg-orange-600 ml-2 text-2xl font-semibold">
        +
      </button>
    </div>
  );
}

export default AddTask;
