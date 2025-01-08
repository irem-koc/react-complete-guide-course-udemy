import React from "react";
import NewTask from "../NewTask/NewTask";

const Tasks = ({ onAddTask, onDeleteTask, tasksList }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {tasksList.length === 0 && (
        <p className="text-stone-800 my-4">
          This project doesnt have any tasks yet.
        </p>
      )}
      {tasksList.length >= 0 &&
        tasksList.map((task) => (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          </ul>
        ))}
    </section>
  );
};

export default Tasks;
