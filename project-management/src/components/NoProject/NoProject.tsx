import React from "react";

const NoProject = () => {
  return (
    <div className="w-4/5 flex flex-col items-center justify-center space-y-5">
      <img width={100} src="./logo.png" alt="no-project" />
      <h1 className="text-md font-semibold">No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <button className="p-2 text-gray-300 bg-black rounded-md">
        Create new project
      </button>
    </div>
  );
};

export default NoProject;
