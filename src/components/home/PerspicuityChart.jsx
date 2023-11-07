import React, { useMemo } from "react";
import { Chart } from "react-charts";
import { formatChartData } from "../../utils/formatData";

const PerspicuityChart = ({ chartData = [], lang = "spa" }) => {
  const data = formatChartData(chartData, lang);

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

  return (
    <>
      <aside className="block relative w-3/5 mx-auto">
        <p className="text-black text-1rem leading-6 absolute bottom-0 left-0 ml-[-30px] transform rotate-[-90deg]" style={{
          transformOrigin: "0 0",
          bottom: 90
        }}>
          Perspicuidad
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
            }}
          />
        </div>
      </aside>
      <p className="text-black text-1rem letter-spacing-[1px] text-center">
        Número de parráfo
      </p>
    </>
  );
};

export default PerspicuityChart;
