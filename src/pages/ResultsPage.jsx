import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../css/sandbox.css";
import "../css/embla.css";
// components
import ResultCarousel from "../components/home/ResultCarousel";
import Title from "../components/home/Title";
import Layout from "../components/home/Layout";
import ResultTable from "../components/home/table/ResultTable";
// hooks
import { AuthContext } from "../context/AuthContext";
// api
import { getTicketById } from "../api/ticket";
// utils
import {
  formatTicketData,
  getCurrentTicket,
  saveTicket,
} from "../utils/formatData";

export const ResultsPage = () => {
  const { ticketId } = useParams();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const foundTicket = getCurrentTicket(ticketId);
      if (foundTicket) {
        setData(foundTicket);
      } else {
        const { isOk, data, message } = await getTicketById(
          ticketId,
          user.token
        );
        if (!isOk) {
          alert(message);
          return;
        }
        const formattedTicket = formatTicketData(data?.data);
        saveTicket(formattedTicket);
        setData(formattedTicket);
      }
    };

    if (ticketId) fetchData();
  }, []);

  return (
    <>
      <Layout shadow={false}>
        <div className="card mb-3">
          <Title text="Resultados" textClass="mt-5" />
          {data ? (
            <ResultTable data={data} />
          ) : (
            <h1>No se encontró un ticket con el id {ticketId}</h1>
          )}
        </div>
      </Layout>

      {data && <ResultCarousel language={data?.language || "spa"} />}
    </>
  );
};
