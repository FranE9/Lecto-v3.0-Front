import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { CSVLink } from "react-csv";
import { useTranslation } from 'react-i18next';
import "../css/sandbox.css";
import "../css/embla.css";
// components
import Title from "../components/home/Title";
import Layout from "../components/home/Layout";
import ResultTable from "../components/home/table/ResultTable";
import ResultCarousel from "../components/home/ResultCarousel";
import Button from "../components/home/Button";
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
import {
  DEFAULT_STYLE_BTN,
  ENGLISH_HEADERS,
  SPANISH_HEADERS,
  getHeaders,
} from "../utils/constants";
import PerspicuityChart from "../components/home/PerspicuityChart";

export const ResultsPage = () => {
  const { ticketId } = useParams();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

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
    Modal.setAppElement("#root");
  }, []);

  return (
    <Layout shadow={false}>
      <div className="card mb-3">
        <Title text={t('results.title')} textClass="mt-5" />
        {data ? (
          <>
            <ResultTable data={data} />
            <div className="flex justify-between">
              <CSVLink
                data={data?.paragraphInfo || []}
                headers={
                  getHeaders(
                    data?.language === "es" ? SPANISH_HEADERS : ENGLISH_HEADERS
                  ) || []
                }
                className={`${DEFAULT_STYLE_BTN} h-11 my-6`}
              >
                {t('results.download')}
              </CSVLink>
              <Button
                text={t('results.show')}
                type="button"
                onClick={() => setShowModal(true)}
              />
            </div>
            <PerspicuityChart
              chartData={data?.paragraphInfo || []}
              lang={data?.language || "es"}
            />
          </>
        ) : (
          <h1>{t('results.not_found')} {ticketId}</h1>
        )}
      </div>

      {data && (
        <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
          <div className="flex flex-row-reverse">
            <Button
              text="X"
              type="button"
              onClick={() => setShowModal(false)}
              containerClassName="px-6"
            />
          </div>
          <ResultCarousel language={data?.language || "es"} />
        </Modal>
      )}
    </Layout>
  );
};
