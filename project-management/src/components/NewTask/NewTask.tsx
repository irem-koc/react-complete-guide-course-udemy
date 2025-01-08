import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChangeTask(e) {
    setEnteredTask(e.target.value);
  }
  function handleClickAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={handleChangeTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClickAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
