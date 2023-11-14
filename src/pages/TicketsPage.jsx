import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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

export const TicketsPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [ticketId, setTicketId] = useState("");

  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!ticketId) {
      alert(t('search.alert'));
      return;
    }

    const { isOk, data, message } = await getTicketById(ticketId, user.token);
    setLoading(false);
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
    <Form onSubmit={handleSubmit} title={t('search.title')}>
      <Input
        name="ticketId"
        labelText={t('search.label')}
        placeholder={t('search.placeholder')}
        onChange={(e) => setTicketId(e.target.value)}
        value={ticketId}
        required
      />
      <Button text={t('search.submit')} loading={loading} />
    </Form>
  );
};
