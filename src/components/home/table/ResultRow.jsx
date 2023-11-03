import React from "react";
import Cell from "./Cell";

const ResultRow = ({ data = [], index }) => {
  //  const { label, value, customClass } = data;
  return (
    <tr className={`${index % 2 == 0 ? "bg-white" : "bg-gray-50"} border-b `}>
      {data.map(({ value, customClass = "" }, index) => (
        <Cell key={index} customClassName={customClass}>{value}</Cell>
      ))}
    </tr>
  );
};

export default ResultRow;
