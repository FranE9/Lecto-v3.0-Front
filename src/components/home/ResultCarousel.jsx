import React from "react";
import spaTitleImg from "../../assets/images/Titulo_spa.jpg"
import engTitleImg from "../../assets/images/Titulo_eng.jpg";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { loop: true };

const ResultCarousel = ({ language = "spa" }) => {
  return (
    <div className="container mx-auto px-12 rounded-lg py-6">
      <div className="card mb-3">
        <img
          src={language == "spa" ? spaTitleImg : engTitleImg}
          style={{ maxHeight: 175 }}
          className="rounded mx-auto d-block"
          alt={`Escala en ${language === "spa" ? "espanol" : "inglés"}`}
        />
        <section className="sandbox__carousel">
          <EmblaCarousel
            slides={Array.from(Array(language === "spa" ? 4 : 2).keys())}
            options={OPTIONS}
            language={language}
          />
        </section>
      </div>
    </div>
  );
};

export default ResultCarousel;
