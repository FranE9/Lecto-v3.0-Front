import React from "react";

const TextArea = (props) => {
  const { labelText, ...rest } = props;
  return (
    <>
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelText}
      </label>
      <textarea
        id={props.name}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        {...rest}
      ></textarea>
    </>
  );
};

export default TextArea;
