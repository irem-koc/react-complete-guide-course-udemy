import React, { useRef } from "react";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Input from "../Input/Input";

const NewProject = ({ onAddNewProject, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredDescription.trim() === "" ||
      enteredTitle.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAddNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <ErrorModal ref={modal} buttonCaption={"Okay"}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oopps... looks like you forget to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </ErrorModal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4 list-none">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:border-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
        <p></p>
        <div>
          <Input type="text" ref={title} textarea={false} label={"Title"} />
          <Input ref={description} textarea={true} label={"Description"} />
          <Input
            type="date"
            ref={dueDate}
            textarea={false}
            label={"Due Date"}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
