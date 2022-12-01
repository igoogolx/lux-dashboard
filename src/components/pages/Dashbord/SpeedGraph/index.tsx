import { useEffect } from "react";
import { useChartJs } from "@/hooks";
import { ChartConfiguration } from "chart.js";
import * as React from "react";
import { convertByte } from "@/utils/traffic";
import { TrafficItem } from "lux-js-sdk";
import i18next from "i18next";
import { TRANSLATION_KEY } from "@/i18n/locales/key";

const getConfiguration = () => {
  const configuration: ChartConfiguration = {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: i18next.t(TRANSLATION_KEY.DOWNLOAD),
          borderColor: "#280AB2",
          borderWidth: 1,
          fill: false,
          pointRadius: 0,
          data: [],
          tension: 0.2,
        },
        {
          label: i18next.t(TRANSLATION_KEY.DOWNLOAD),
          borderColor: "#fe8b56",
          borderWidth: 1,
          fill: false,
          pointRadius: 0,
          data: [],
          tension: 0.2,
        },
      ],
    },

    options: {
      animation: {},
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          border: { width: 0 },
          ticks: {
            callback: (value: number | string) => {
              const { value: convertedValue, unit } = convertByte(
                value as number
              );
              return convertedValue + unit;
            },
            autoSkip: true,
            maxTicksLimit: 6,
          },
        },
      },
    },
  };
  return configuration;
};

type SpeedGraphProps = {
  data: TrafficItem[];
};

export function SpeedGraph(props: SpeedGraphProps): JSX.Element {
  const { data } = props;

  const [chartRef, chart] = useChartJs(getConfiguration());
  useEffect(() => {
    if (chart) {
      chart.data.labels = data.map((t, index) => index);
      if (chart.data.datasets) {
        chart.data.datasets[0].data = data.map((traffic) => traffic.download);
        chart.data.datasets[1].data = data.map((traffic) => traffic.upload);
      }
      chart.update("none");
    }
  }, [chart, data]);

  return <canvas ref={chartRef} />;
}
