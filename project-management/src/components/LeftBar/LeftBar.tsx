import React from "react";
import Button from "../Button/Button";

const LeftBar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 rounded-r-xl text-stone-50 md:w-72">
      <h1 className="text-stone-200 md:text-xl text-md font-bold mb-8 uppercase">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default LeftBar;
