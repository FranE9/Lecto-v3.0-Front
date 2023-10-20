import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import spaTitle from "../assets/images/Titulo_spa.jpg";
import engTitle from "../assets/images/Titulo_eng.jpg";
import "../css/sandbox.css";
import "../css/embla.css";

import EmblaCarousel from "./EmblaCarousel";
import { AuthContext } from "../context/AuthContext";
import { getTicketById } from "../api/ticket";
import {
  formatTicketData,
  getCurrentTicket,
  saveTicket,
} from "../utils/formatData";

const OPTIONS = { loop: true };

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
      <div className="container mx-auto px-12 rounded-lg py-6">
        <div className="card mb-3">
          <div className="border-b-4 px-6 py-3 border-indigo-600 text-2xl">
            <h1 className="mt-5">Resultados</h1>
            <div id="alertContainer"></div>
          </div>
          {data ? (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-black ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Medida
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Puntuacion
                    </th>
                  </tr>
                </thead>
                <tbody id="dataContainer">
                  <tr className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium ">
                      Parrafo
                    </th>
                    <td className="px-6 py-4">{data?.paragraph}</td>
                  </tr>
                  <tr className="border-b bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium">
                      {data.language === "spa"
                        ? "Szigriszt-Pazos / INFLESZ"
                        : "Flesch Reading Easy"}
                    </th>
                    <td className="px-6 py-4">{data?.column2}</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium ">
                      {data.language === "spa"
                        ? "Fernandez Huerta"
                        : "Fog Reading"}
                    </th>
                    <td className="px-6 py-4">{data?.column3}</td>
                  </tr>
                  <tr className="border-b bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium ">
                      {data.language === "spa"
                        ? "Legibilidad Mu"
                        : "Smog Reading"}
                    </th>
                    <td className="px-6 py-4">{data?.column4}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <h1>No se encontró un ticket con el id {ticketId}</h1>
          )}
        </div>
      </div>

      {data && (
        <div className="container mx-auto px-12 rounded-lg py-6">
          <div className="card mb-3">
            <img
              src={data?.language == "spa" ? spaTitle : engTitle}
              style={{ maxHeight: 175 }}
              className="rounded mx-auto d-block"
              alt={data?.language == "spa" ? "Escala en espanol" : "Escala en inglés"}
            />

            <section className="sandbox__carousel">
              <EmblaCarousel slides={Array.from(Array(data?.language === "spa" ? 4 : 2).keys())} options={OPTIONS} language={data?.language} />
            </section>
          </div>
        </div>
      )}
      <footer className="footer mt-auto py-3">
        <div className="container"></div>
      </footer>
    </>
  );
};
