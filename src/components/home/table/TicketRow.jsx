import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  formatDate,
  formatTime,
  getEstimatedTime,
} from "../../../utils/formatTicket";
import DeleteIcon from "../icons/DeleteIcon";
import SeeIcon from "../icons/SeeIcon";
import Cell from "./Cell";

const TicketRow = ({ row, onDelete }) => {
  const [date] = useState(new Date(row.date));

  return (
    <tr className="bg-white border-b">
      <Cell type="data">{row._id}</Cell>
      <Cell type="data">{getEstimatedTime(row?.duration || 0)}</Cell>
      <Cell type="data">{formatDate(date)}</Cell>
      <Cell type="data">{formatTime(date)}</Cell>
      <Cell type="data">{row.file}</Cell>
      <Cell type="data">{row.language === "es" ? "Espanol" : "Inglés"}</Cell>
      <Cell useClassName={false}>
        <Link
          to={`/results/${row._id}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <SeeIcon />
          <span className="sr-only">Ver</span>
        </Link>
        <button
          type="button"
          onClick={() => onDelete(row._id)}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
        >
          <DeleteIcon />
          <span className="sr-only">Eliminar</span>
        </button>
      </Cell>
    </tr>
  );
};

export default TicketRow;
