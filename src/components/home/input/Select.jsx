import React from "react";

const Select = (props) => {
  const { options = [], labelText, ...rest } = props;
  return (
    <>
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelText}
      </label>
      <select
        id={props.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        {...rest}
      >
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
