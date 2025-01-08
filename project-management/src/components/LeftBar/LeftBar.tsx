import React from "react";
import Button from "../Button/Button";

const LeftBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 rounded-r-xl text-stone-50 md:w-72">
      <h1 className="text-stone-200 md:text-xl text-md font-bold mb-8 uppercase">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 p-4 ";
          if (project.id === selectedProjectId) {
            console.log(project.id, "project.idproject.idproject.idproject.id");
            cssClasses += "bg-stone-800 text-stone-200";
          } else {
            cssClasses += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default LeftBar;
