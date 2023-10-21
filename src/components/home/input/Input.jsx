import React from "react";

const Input = (props) => {
    const { labelText, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        { labelText }
      </label>
      <input
        id={props.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...rest}
      />
    </div>
  );
};

export default Input;
