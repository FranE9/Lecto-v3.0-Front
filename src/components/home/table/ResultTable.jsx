import React from "react";
import Table from "./Table";
import ResultRow from "./ResultRow";

const ResultTable = ({ data }) => {
  const {
    paragraph,
    phrase,
    word,
    syllable,
    language,
    column2,
    column3,
    column4,
  } = data;
  const labelSecondColumn =
    language === "spa" ? "Szigriszt-Pazos / INFLESZ" : "Flesch Reading Easy";
  const labelThirdColumn =
    language === "spa" ? "Fernandez Huerta" : "Fog Reading";
  const labelFourthColumn =
    language === "spa" ? "Legibilidad Mu" : "Smog Reading";

  return (
    <>
      <Table headers={["Frases", "Palabras", "Silabas", "Parrafos"]}>
        <ResultRow data={[{ value: phrase }, { value: word }, { value: syllable }, { value: paragraph }]} index={0} />
      </Table>
      <br />
      <Table headers={["Medida", "Puntuación", "Dificultad", "Contenido"]}>
        <ResultRow data={[{ value: labelSecondColumn, customClass: "font-medium"}, { value: column2 }]} index={0} />
        <ResultRow data={[{ value: labelThirdColumn, customClass: "font-medium"}, { value: column3 }]} index={1} />
        <ResultRow data={[{ value: labelFourthColumn, customClass: "font-medium"}, { value: column4 }]} index={2} />
      </Table>
    </>
  );
};

export default ResultTable;
