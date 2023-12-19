import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
// components
import Button from "../components/home/Button";
import Input from "../components/home/input/Input";
import Form from "../components/home/Form";
// hooks
import { AuthContext } from "../context/AuthContext";
// api
import { getTicketById } from "../api/ticket";
// utils
import { formatTicketData, saveTicket } from "../utils/formatData";
import { validateText } from "../utils/validation";

export const TicketsPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [ticketId, setTicketId] = useState("");

  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateText(ticketId)) {
      return Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: t("search.alert"),
      });
    }

    setLoading(true);

    const { isOk, data, message } = await getTicketById(ticketId, user.token);
    setLoading(false);
    if (!isOk) {
      onResetForm();
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    }
    const newTicket = formatTicketData(data?.data);
    saveTicket(newTicket);

    navigate(`/results/${newTicket.id}`);
  };

  return (
    <Form onSubmit={handleSubmit} title={t("search.title")}>
      <Input
        name="ticketId"
        labelText={t("search.label")}
        placeholder={t("search.placeholder")}
        onChange={(e) => setTicketId(e.target.value)}
        value={ticketId}
      />
      <Button text={t("search.submit")} loading={loading} />
    </Form>
  );
};
