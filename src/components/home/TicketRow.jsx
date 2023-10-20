import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  formatDate,
  formatTime,
  getEstimatedTime,
} from "../../utils/formatTicket";

const TicketRow = ({ row, onDelete }) => {
  const [date] = useState(new Date(row.date));

  return (
    <tr className="bg-white border-b">
      <td scope="col" className="px-6 py-3">
        {row._id}
      </td>
      <td scope="col" className="px-6 py-3">
        {getEstimatedTime(row?.duration || 0)}
      </td>
      <td scope="col" className="px-6 py-3">
        {formatDate(date)}
      </td>
      <td scope="col" className="px-6 py-3">
        {formatTime(date)}
      </td>
      <td scope="col" className="px-6 py-3">
        {row.file}
      </td>
      <td scope="col" className="px-6 py-3">
        {row.language === "spa" ? "Espanol" : "Inglés"}
      </td>
      <td scope="col">
        <Link
          to={`/results/${row._id}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="sr-only">Ver</span>
        </Link>
        <button
          type="button"
          onClick={() => onDelete(row._id)}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          <span className="sr-only">Eliminar</span>
        </button>
      </td>
    </tr>
  );
};

export default TicketRow;
