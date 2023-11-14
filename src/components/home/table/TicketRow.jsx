import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  return (
    <tr className="bg-white border-b">
      <Cell type="data">{row._id}</Cell>
      <Cell type="data">{getEstimatedTime(row?.duration || 0, i18n.language)}</Cell>
      <Cell type="data">{formatDate(date, i18n.language)}</Cell>
      <Cell type="data">{formatTime(date, i18n.language)}</Cell>
      <Cell type="data">{row.file}</Cell>
      <Cell type="data">{row.language === "es" ? t('languages.spa') : t('languages.eng')}</Cell>
      <Cell useClassName={false}>
        <Link
          to={`/results/${row._id}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <SeeIcon />
          <span className="sr-only">{t('dashboard_table.view')}</span>
        </Link>
        <button
          type="button"
          onClick={() => onDelete(row._id)}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
        >
          <DeleteIcon />
          <span className="sr-only">{t('dashboard_table.delete')}</span>
        </button>
      </Cell>
    </tr>
  );
};

export default TicketRow;
