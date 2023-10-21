import React from "react";
import Cell from "./Cell";

const Header = ({ data = [] }) => {
  return (
    <tr>
      {data.map((header, index) => (
        <Cell key={index} type="header">
          {header}
        </Cell>
      ))}
    </tr>
  );
};

export default Header;
