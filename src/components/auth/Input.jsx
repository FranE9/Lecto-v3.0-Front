import React from "react";

const Input = ({ label, name, value, onChange, type = "text", placeholder = "" }) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-800"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
};

export default Input;
