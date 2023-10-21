import React from "react";
import Header from "./Header";

const Table = ({ headers = [], children }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <Header data={headers} />
        </thead>
        <tbody>
            { children }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
