import React from "react";
import Input from "../Input/Input";

type Props = {};

const NewProject = (props: Props) => {
  return (
    <div>
      <menu className="flex list-none">
        <li>
          <button className="text-stone-600 hover:border-stone-600">
            Cancel
          </button>
        </li>
        <li>
          <button className="text-stone-200 bg-stone-800">Save</button>
        </li>
      </menu>
      <div>
        <Input textarea={false} label={"Title"} />
        <Input textarea={true} label={"Description"} />
        <Input textarea={false} label={"Due Date"} />
      </div>
    </div>
  );
};

export default NewProject;
