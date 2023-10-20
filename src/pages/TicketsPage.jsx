import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getTicketById } from "../api/ticket";
import { AuthContext } from "../context/AuthContext";
import { formatTicketData, saveTicket } from "../utils/formatData";

export const TicketsPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!ticketId) {
      alert("Ingresa un id para buscar")
      return;
    }

    const { isOk, data, message } = await getTicketById(ticketId, user.token);
    if (!isOk) {
      onResetForm();
      alert(message);
      return;
    }
    const newTicket = formatTicketData(data?.data);
    saveTicket(newTicket);

    navigate(`/results/${newTicket.id}`);
  };

  return (
    <>
      <div className="container mx-auto px-12 rounded-lg shadow-xl py-6">
        <div className="border-b-4 px-6 py-3 border-indigo-600 text-2xl">
          Consultar Ticket
        </div>
        <form className="p-6" onSubmit={handleSubmit}>
          <label
            htmlFor="ticketId"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ticket
          </label>
          <input
            id="ticketId"
            name="ticketId"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingresa un ticket"
            onChange={(e) => setTicketId(e.target.value)}
            value={ticketId}
          />
          <div className="py-6">
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded"
            >
              Consultar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
