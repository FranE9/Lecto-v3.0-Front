import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import Button from "../components/home/Button";
import Select from "../components/home/input/Select";
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
    idioma: "spa",
  });

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("Texto", formState.texto);
    formData.append("Idioma", formState.idioma);

    const { isOk, data, message } = await sendText(formData, user.token);
    setLoading(false);
    if (!isOk) {
      onResetForm();
      alert(message);
      return;
    }
    const newTicket = formatTextData(data, formState.idioma);
    saveTicket(newTicket);
    navigate(`/results/${data?.id}`);
  };

  return (
    <Form onSubmit={handleSubmit} title="Apartado para colocar texto">
      <Select
        labelText="Seleccionar idioma"
        name="idioma"
        onChange={onInputChange}
        value={formState.idioma}
        options={[
          { name: "Español", value: "spa" },
          { name: "Inglés", value: "eng" },
        ]}
      />
      <TextArea
        labelText="Pega el texto aquí"
        name="texto"
        onChange={onInputChange}
        value={formState.texto}
        rows="8"
        placeholder="Ingresa el texto"
      />
      <Button text="Enviar" loading={loading} />
    </Form>
  );
};
