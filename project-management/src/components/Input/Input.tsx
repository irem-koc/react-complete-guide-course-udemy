import React from "react";

const Input = ({ textarea, label, ...props }) => {
  return (
    <p>
      <label className="uppercase text-stone-700" htmlFor="title">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} />
      ) : (
        <input name="title" type="text" {...props} />
      )}
    </p>
  );
};

export default Input;
