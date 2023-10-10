import React from "react";

export const DashboardPage = () => {
  return (
    <div class="container mx-auto px-12 rounded-lg shadow-xl py-6">
      <div class="border-b-4 px-6 py-3 border-indigo-600 text-2xl">
        Apartado para colocar PDF
      </div>
      <div class="p-6">
        <h5 class="mb-2 font-medium leading-tight text-neutral-800">PDF:</h5>
        <input
          class="block w-full text-lg text-gray-900 border border-gray-300 cursor-pointer bg-gray-50"
          id="large_size"
          type="file"
        ></input>
        <p class="mb-4 text-base text-neutral-600 ">Solo archivos .pdf</p>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="inicio"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Inicio:
            </label>
            <input
              type="number"
              id="inicio"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="1"
              required
            />
          </div>
          <div>
            <label
              for="fin"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Fin:
            </label>
            <input
              type="number"
              id="fin"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="5"
              required
            />
          </div>
        </div>

        <label
          for="idioma"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Seleccionar idioma
        </label>
        <select
          id="idioma"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="spa" selected>
            Español
          </option>
          <option value="eng">Inglés</option>
        </select>

        <div class="py-6">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Enviar
        </button>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Ticket
                </th>
                <th scope="col" class="px-6 py-3">
                  Tiempo estimado
                </th>
                <th scope="col" class="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" class="px-6 py-3">
                  Hora
                </th>
                <th scope="col" class="px-6 py-3">
                  Archivo
                </th>
                <th scope="col" class="px-6 py-3">
                  Idioma
                </th>
                <th scope="col" class="px-6 py-3">
                  Resultados
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b"></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
