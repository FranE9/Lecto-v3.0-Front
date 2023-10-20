import React from "react";
import { useForm } from "../hook/useForm";
import { sendText } from "../api/lecto";

export const TicketsPage = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    texto: "",
    idioma: "spa",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Texto", formState.texto);
    formData.append("Idioma", formState.idioma);

    const { isOk, data, message } = await sendText(formData);
    if (!isOk) {
      onResetForm();
      alert(message);
      return;
    }

    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto px-12 rounded-lg shadow-xl py-6">
        <div className="border-b-4 px-6 py-3 border-indigo-600 text-2xl">
          Consultar Ticket
        </div>
        <form className="p-6" onSubmit={handleSubmit}>
          <label
            htmlFor="texto"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ticket
          </label>
          <input
            id="texto"
            name="texto"
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingresa un ticket"
            onChange={onInputChange}
            value={formState.texto}
          ></input>
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
