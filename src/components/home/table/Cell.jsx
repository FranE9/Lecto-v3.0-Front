import React from "react";

const Cell = ({ type = "data", children, useClassName = true, customClassName = "" }) => {
  const Tag = type === "header" ? 'th' : 'td';
  return (
    <Tag scope="col" {...(useClassName ? { className: `px-6 py-3 ${customClassName}` } : {})}>
      {children}
    </Tag>
  );
};

export default Cell;
