import React from "react";
import { useTranslation } from 'react-i18next';
import Table from "./Table";
import ResultRow from "./ResultRow";
import {
  getFernandezValue,
  getFleschValue,
  getFogValue,
  getMuValue,
  getSmogValue,
  getSzigrisztValue,
} from "../../../utils/functions";

const ResultTable = ({ data }) => {
  const {
    paragraphs,
    phrases,
    words,
    syllables,
    language,
    column2,
    column3,
    column4,
  } = data;

  const { t } = useTranslation();

  const isSpa = language === "es";

  const labelSecondColumn = isSpa
    ? "Szigriszt-Pazos / INFLESZ"
    : "Flesch Reading Easy";
  const labelThirdColumn = isSpa ? "Fernandez Huerta" : "Fog Reading";
  const labelFourthColumn = isSpa ? "Legibilidad Mu" : "Smog Reading";

  const [row23, row24] = isSpa
    ? getSzigrisztValue(column2)
    : getFleschValue(column2);
  const [row33, row34] = isSpa ? getFernandezValue(column3) : getFogValue(column3);
  const [row43, row44] = isSpa ? getMuValue(column4) : getSmogValue(column4);

  return (
    <>
      <Table headers={[t('result_table.phrase'), t('result_table.words'), t('result_table.syllables'), t('result_table.paragraphs')]}>
        <ResultRow
          data={[
            { value: phrases },
            { value: words },
            { value: syllables },
            { value: paragraphs },
          ]}
          index={0}
        />
      </Table>
      <br />
      <Table headers={[t('result_table.measure'), t('result_table.score'), t('result_table.difficulty'), t('result_table.content')]}>
        <ResultRow
          data={[
            { value: labelSecondColumn, customClass: "font-medium" },
            { value: column2 },
            { value: row23 },
            { value: row24 },
          ]}
          index={0}
        />
        <ResultRow
          data={[
            { value: labelThirdColumn, customClass: "font-medium" },
            { value: column3 },
            { value: row33 },
            { value: row34 },
          ]}
          index={1}
        />
        <ResultRow
          data={[
            { value: labelFourthColumn, customClass: "font-medium" },
            { value: column4 },
            { value: row43 },
            { value: row44 },
          ]}
          index={2}
        />
      </Table>
    </>
  );
};

export default ResultTable;
