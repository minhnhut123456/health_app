import { ChartOptions, ColorType, createChart, DeepPartial } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

import { dayData1, dayData2 } from '#/mockData';

import classes from './style.module.css';

const chartOptions: DeepPartial<ChartOptions> = {
  layout: {
    textColor: '#ffffff',
    background: { type: ColorType.Solid, color: '#2E2E2E' },
  },
  grid: {
    horzLines: {
      visible: false,
    },
  },
  localization: {
    locale: 'ja-JP',
  },
  height: 250,
};

const intervalColors = {
  feature1: '#FFCC21',
  feature2: '#8FE9D0',
};

const Chart = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const container = ref.current;
      container.innerHTML = '';
      const chart = createChart(container, chartOptions);
      const lineSeries1 = chart.addLineSeries({ color: intervalColors.feature1 });
      const lineSeries2 = chart.addLineSeries({ color: intervalColors.feature2 });

      lineSeries1.setData(dayData1);
      lineSeries2.setData(dayData2);

      chart.timeScale().fitContent();
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.chart} ref={ref}></div>
    </div>
  );
};

export default Chart;
