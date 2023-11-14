import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PDFDocument } from "pdf-lib";
// components
import Button from "../components/home/Button";
import Select from "../components/home/input/Select";
import Input from "../components/home/input/Input";
import InputFile from "../components/home/input/InputFile";
import Form from "../components/home/Form";
import TicketTable from "../components/home/table/TicketTable";
// hooks
import { useForm } from "../hook/useForm";
import { AuthContext } from "../context/AuthContext";
// api
import { sendFile } from "../api/lecto";
import { deleteTicketById, getTicketsByUser } from "../api/ticket";
// utils
import { formatTicketData, saveTicket } from "../utils/formatData";
import { getBase64 } from "../utils/functions";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const { formState, onInputChange, onResetForm, onFileChange, onUpdateState } =
    useForm({
      archivo_pdf: "",
      inicio: "",
      final: "",
      idioma: "es",
    });

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    if (formState.archivo_pdf !== "") {
      onFileLoad();
      // console.log(formState.archivo_pdf)
    }
  }, [formState.archivo_pdf]);

  const onFileLoad = async () => {
    try {
      const base64File = await getBase64(formState.archivo_pdf);
      const pdfDoc = await PDFDocument.load(base64File);
      const pages = pdfDoc.getPages();
      onUpdateState({
        inicio: "1",
        final: pages.length.toString(),
      });
    } catch (error) {
      console.log("Error loading PDF document: ", error);
      onUpdateState({
        inicio: "",
        final: "",
      });
    }
  };

  const fetchTickets = async () => {
    const { isOk, data, message } = await getTicketsByUser(
      user.userId,
      user.token
    );
    if (!isOk) {
      alert(message);
      return;
    }
    setTickets(data?.data || []);
  };

  const handleDelete = async (ticketId) => {
    const { isOk, message } = await deleteTicketById(ticketId, user.token);
    if (!isOk) {
      alert(message);
      return;
    }
    alert(message);
    fetchTickets();
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("archivo_pdf", formState.archivo_pdf);
    formData.append("inicio", parseInt(formState.inicio));
    formData.append("final", parseInt(formState.final));
    formData.append("idioma", formState.idioma);
    formData.append("user_id", user.userId);

    const { isOk, data, message } = await sendFile(formData, user.token);
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
    <Form title="Apartado para colocar PDF" onSubmit={handleSubmit}>
      <div></div>
      <InputFile
        labelText="PDF:"
        name="archivo_pdf"
        accept=".pdf"
        type="file"
        onChange={onFileChange}
      />
      <p className="mb-4 text-base text-neutral-600 ">Solo archivos .pdf</p>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Input
          labelText="Inicio:"
          type="number"
          name="inicio"
          placeholder="1"
          required
          value={formState.inicio}
          onChange={onInputChange}
        />
        <Input
          labelText="Fin:"
          type="number"
          name="final"
          placeholder="5"
          required
          value={formState.final}
          onChange={onInputChange}
        />
      </div>
      <Select
        labelText="Seleccionar idioma"
        name="idioma"
        onChange={onInputChange}
        value={formState.idioma}
        options={[
          { name: "Español", value: "es" },
          { name: "Inglés", value: "en" },
        ]}
      />
      <Button text="Enviar" loading={loading} />
      <TicketTable handleDelete={handleDelete} tickets={tickets} />
    </Form>
  );
};
