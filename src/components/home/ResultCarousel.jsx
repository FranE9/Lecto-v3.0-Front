import React from "react";
import spaTitleImg from "../../assets/images/Titulo_spa.jpg"
import engTitleImg from "../../assets/images/Titulo_eng.jpg";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { loop: true };

const ResultCarousel = ({ language = "es" }) => {
  const SLIDES = language === "es" ? 4 : 3;
  return (
    <div className="container mx-auto px-12 rounded-lg pt-2 pb-6">
      <div className="card mb-3">
        <img
          src={language == "es" ? spaTitleImg : engTitleImg}
          style={{ maxHeight: 125 }}
          className="rounded mx-auto d-block"
          alt={`Escala en ${language === "es" ? "espanol" : "inglés"}`}
        />
        <section className="sandbox__carousel">
          <EmblaCarousel
            slides={Array.from(Array(SLIDES).keys())}
            options={OPTIONS}
            language={language}
          />
        </section>
      </div>
    </div>
  );
};

export default ResultCarousel;
