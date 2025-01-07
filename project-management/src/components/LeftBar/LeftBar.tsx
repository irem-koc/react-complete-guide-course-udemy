import React from "react";

const LeftBar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 rounded-r-xl text-stone-50 md:w-72">
      <h1 className="text-stone-200 md:text-xl text-md font-bold mb-8 uppercase">
        Your Projects
      </h1>
      <button className="px-4 py-2 text-xs md:text-base text-stone-400 hover:bg-stone-600 bg-stone-700 hover:text-stone-100 bg-opacity-20 rounded-md">
        + Add project
      </button>
    </aside>
  );
};
export default LeftBar;
