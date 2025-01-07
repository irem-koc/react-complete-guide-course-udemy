import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

type Props = {};

const NewProject = (props: Props) => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4 list-none">
        <li>
          <button className="text-stone-800 hover:border-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button>Save</Button>
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
