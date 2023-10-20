import React from "react";
import spaTitle from "../assets/images/Titulo_spa.jpg";

import "../css/sandbox.css";
import "../css/embla.css";

import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const ResultsPage = () => {
  return (
    <>
      <div className="container mx-auto px-12 rounded-lg shadow-xl py-6">
        <div className="card mb-3">
          <div className="border-b-4 px-6 py-3 border-indigo-600 text-2xl">
            <h1 className="mt-5">Resultados</h1>
            <div id="alertContainer"></div>
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-black ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Medida
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Puntuacion
                  </th>
                </tr>
              </thead>
              <tbody id="dataContainer">
                <tr class="bg-white border-b ">
                  <th scope="row" class="px-6 py-4 font-medium ">
                    Parrafo
                  </th>
                  <td class="px-6 py-4"> </td>
                </tr>
                <tr class="border-b bg-gray-50 ">
                  <th scope="row" class="px-6 py-4 font-medium">
                    Szigriszt-Pazos / INFLESZ
                  </th>
                  <td class="px-6 py-4"> </td>
                </tr>
                <tr class="bg-white border-b ">
                  <th scope="row" class="px-6 py-4 font-medium ">
                    Fernandez Huerta
                  </th>
                  <td class="px-6 py-4"> </td>
                </tr>
                <tr class="border-b bg-gray-50 ">
                  <th scope="row" class="px-6 py-4 font-medium ">
                    Legibilidad Mu
                  </th>
                  <td class="px-6 py-4"> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12 rounded-lg shadow-xl py-6">
        <div className="card mb-3">
          <img
            src={spaTitle}
            style={{ maxHeight: 175 }}
            className="rounded mx-auto d-block"
            alt="Escala en español"
          />

          <section className="sandbox__carousel">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </div>
      </div>
      <footer className="footer mt-auto py-3">
        <div className="container"></div>
      </footer>
    </>
  );
};
