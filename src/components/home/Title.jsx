import React from "react";

const Title = ({ text, textClass = "" }) => {
  return (
    <div className="border-b-4 px-6 py-3 border-indigo-600 text-2xl">
      <h1 className={textClass}>{ text }</h1>
    </div>
  );
};

export default Title;
