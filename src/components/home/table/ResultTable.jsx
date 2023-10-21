import React from "react";
import Table from "./Table";
import ResultRow from "./ResultRow";

const ResultTable = ({ data }) => {
  const { paragraph, language, column2, column3, column4 } = data;
  const labelSecondColumn =
    language === "spa" ? "Szigriszt-Pazos / INFLESZ" : "Flesch Reading Easy";
  const labelThirdColumn =
    language === "spa" ? "Fernandez Huerta" : "Fog Reading";
  const labelFourthColumn =
    language === "spa" ? "Legibilidad Mu" : "Smog Reading";
    
  return (
    <Table headers={["Medida", "Puntuación"]}>
      <ResultRow label="Parrafo" value={paragraph} index={0} />
      <ResultRow label={labelSecondColumn} value={column2} index={1} />
      <ResultRow label={labelThirdColumn} value={column3} index={2} />
      <ResultRow label={labelFourthColumn} value={column4} index={3} />
    </Table>
  );
};

export default ResultTable;
