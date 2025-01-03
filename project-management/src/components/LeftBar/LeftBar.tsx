import React from "react";

const LeftBar = () => {
  return (
    <div className="w-1/5 h-[100vh]  rounded-r-md p-10 bg-black">
      <h1 className="text-white text-md font-semibold mb-5">YOUR PROJECTS</h1>
      <button className="p-3 text-gray-300 bg-gray-300 bg-opacity-20 rounded-md">
        + Add project
      </button>
    </div>
  );
};
export default LeftBar;
