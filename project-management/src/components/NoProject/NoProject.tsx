import React from "react";
import Button from "../Button/Button";

const NoProject = () => {
  return (
    <div className="w-2/3 text-center mt-24">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src="./logo.png"
        alt="no-project"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button>+ Add project </Button>
      </p>
    </div>
  );
};

export default NoProject;
