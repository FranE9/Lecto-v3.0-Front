import React from "react";
import { useForm } from "../hook/useForm";
import { sendText } from "../api/lecto";

export const DashboardPage2 = () => {
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
          Apartado para colocar texto
        </div>
        <form className="p-6" onSubmit={handleSubmit}>
          <label
            htmlFor="idioma"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Seleccionar idioma
          </label>
          <select
            id="idioma"
            name="idioma"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={onInputChange}
            value={formState.idioma}
          >
            <option value="spa">Español</option>
            <option value="eng">Inglés</option>
          </select>

          <label
            htmlFor="texto"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Pega el texto aqui
          </label>
          <textarea
            id="texto"
            name="texto"
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Lorem ipsum dolor sit amet"
            onChange={onInputChange}
            value={formState.texto}
          ></textarea>
          <div className="py-6">
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
