import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// components
import Button from "../components/home/Button";
import TextArea from "../components/home/input/TextArea";
import Form from "../components/home/Form";
// hooks
import { useForm } from "../hook/useForm";
import { AuthContext } from "../context/AuthContext";
// api
import { sendText } from "../api/lecto";
// utils
import { formatTextData, saveTicket } from "../utils/formatData";

export const TextPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { formState, onInputChange, onResetForm } = useForm({
    texto: "",
  });

  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("Texto", formState.texto);

    const { isOk, data, message } = await sendText(formData, user.token);
    setLoading(false);
    if (!isOk) {
      onResetForm();
      alert(message);
      return;
    }
    const newTicket = formatTextData(data);
    saveTicket(newTicket);
    navigate(`/results/${data?.id}`);
  };

  return (
    <Form onSubmit={handleSubmit} title={t('text.title')}>
      <TextArea
        labelText={t('text.label')}
        name="texto"
        onChange={onInputChange}
        value={formState.texto}
        rows="8"
        placeholder={t('text.placeholder')}
      />
      <Button text={t('text.send')} loading={loading} />
    </Form>
  );
};
