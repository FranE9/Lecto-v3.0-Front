import React from "react";
import TicketRow from "./TicketRow";
import Table from "./Table";

const TicketTable = ({ tickets, handleDelete }) => {
  return (
    <Table
      headers={[
        "Ticket",
        "Tiempo estimado",
        "Fecha",
        "Hora",
        "Archivo",
        "Idioma",
        "Acciones",
      ]}
    >
      {tickets.map((ticket) => (
        <TicketRow row={ticket} key={ticket._id} onDelete={handleDelete} />
      ))}
    </Table>
  );
};

export default TicketTable;
