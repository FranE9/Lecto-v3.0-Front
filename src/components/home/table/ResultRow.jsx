import React from "react";
import Cell from "./Cell";

const ResultRow = ({ label, value, index }) => {
  return (
    <tr className={`${index % 2 == 0 ? "bg-white" : "bg-gray-50"} border-b `}>
      <Cell customClassName="font-medium">{label}</Cell>
      <Cell>{value}</Cell>
    </tr>
  );
};

export default ResultRow;
