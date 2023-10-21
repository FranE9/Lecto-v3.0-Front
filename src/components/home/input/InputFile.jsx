import React from "react";

const InputFile = (props) => {
    const { labelText, ...rest } = props;
  return (
    <>
      <h5 className="mb-2 font-medium leading-tight text-neutral-800">{labelText}</h5>
      <input
        className="block w-full text-lg text-gray-900 border border-gray-300 cursor-pointer bg-gray-50"
        id={props.name}
        {...rest}
      />
    </>
  );
};

export default InputFile;
