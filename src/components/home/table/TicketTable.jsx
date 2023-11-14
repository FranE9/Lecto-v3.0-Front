import React from "react";
import { useTranslation } from 'react-i18next';
import TicketRow from "./TicketRow";
import Table from "./Table";

const TicketTable = ({ tickets, handleDelete }) => {
  const { t } = useTranslation();
  return (
    <Table
      headers={[
        t('dashboard_table.ticket'),
        t('dashboard_table.estimated_time'),
        t('dashboard_table.date'),
        t('dashboard_table.time'),
        t('dashboard_table.file'),
        t('dashboard_table.language'),
        t('dashboard_table.actions'),
      ]}
    >
      {tickets.map((ticket) => (
        <TicketRow row={ticket} key={ticket._id} onDelete={handleDelete} />
      ))}
    </Table>
  );
};

export default TicketTable;
