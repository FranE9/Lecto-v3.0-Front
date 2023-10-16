import React from "react";
import { useForm } from "../hook/useForm";
import { sendFile } from "../api/lecto";

export const DashboardPage = () => {

  const { formState, onInputChange, onResetForm, onFileChange } = useForm({
    archivo_pdf: '',
    inicio: '',
    final: '',
    idioma: 'spa',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("archivo_pdf", formState.archivo_pdf);
    formData.append("inicio", parseInt(formState.inicio));
    formData.append("final", parseInt(formState.final));
    formData.append("idioma", formState.idioma);

    const { isOk, data, message } = await sendFile(formData);
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
          Apartado para colocar PDF
        </div>
        <form className="p-6" onSubmit={handleSubmit}>
          <h5 className="mb-2 font-medium leading-tight text-neutral-800">
            PDF:
          </h5>
          <input
            className="block w-full text-lg text-gray-900 border border-gray-300 cursor-pointer bg-gray-50"
            id="archivo_pdf"
            name="archivo_pdf" accept=".pdf"
            type="file"
            onChange={onFileChange}
          ></input>
          <p className="mb-4 text-base text-neutral-600 ">Solo archivos .pdf</p>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="inicio"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Inicio:
              </label>
              <input
                type="number"
                id="inicio"
                name="inicio"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="1"
                required
                value={formState.inicio}
                onChange={onInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="final"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Fin:
              </label>
              <input
                type="number"
                id="final"
                name="final"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="5"
                required
                value={formState.final}
                onChange={onInputChange}
              />
            </div>
          </div>

          <label
            htmlFor="idioma"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Seleccionar idioma
          </label>
          <select
            id="idioma"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name="idioma"
            value={formState.idioma}
            onChange={onInputChange}
          >
            <option value="spa">Español</option>
            <option value="eng">Inglés</option>
          </select>

          <div className="py-6">
            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Enviar
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ticket
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tiempo estimado
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fecha
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hora
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Archivo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Idioma
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Resultados
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b"></tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};