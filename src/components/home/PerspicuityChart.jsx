import React, { useMemo, useState } from "react";
import { Chart } from "react-charts";
import { useTranslation } from "react-i18next";
import { formatChartData } from "../../utils/formatData";
import { getParagraph } from "../../utils/functions";
import ParagraphModal from "./modals/ParagraphModal";

const PerspicuityChart = ({ chartData = [], lang = "es" }) => {
  const data = formatChartData(chartData, lang);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [paragraphSelected, setParagraphSelected] = useState(null);

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.paragraph,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.value,
      },
    ],
    []
  );

  const onParagraghClick = (datum, e) => {
    if (datum) {
      setParagraphSelected(getParagraph(datum.index));
      setShowModal(true);
      console.log("index: ", datum.index);
      console.log("datum clicked: ", getParagraph(datum.index));
    }
  };

  const onHideModal = () => {
    setShowModal(false);
    setParagraphSelected(null);
  };

  return (
    <>
      <aside className="block relative w-3/5 mx-auto">
        <p
          className="text-black text-1rem leading-6 absolute bottom-0 left-0 ml-[-30px] transform rotate-[-90deg]"
          style={{
            transformOrigin: "0 0",
            bottom: 90,
          }}
        >
          {t("chart.yLabel")}
        </p>
        <div
          style={{
            height: `${320}px`,
          }}
        >
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
              onClickDatum: onParagraghClick,
            }}
          />
        </div>
      </aside>
      <p className="text-black text-1rem letter-spacing-[1px] text-center">
        {t("chart.xLabel")}
      </p>
      {paragraphSelected && (
        <ParagraphModal
          visible={showModal}
          onHide={onHideModal}
          data={paragraphSelected}
        />
      )}
    </>
  );
};

export default PerspicuityChart;
