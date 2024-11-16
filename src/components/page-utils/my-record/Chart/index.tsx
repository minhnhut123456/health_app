import clsx from 'clsx';
import { ChartOptions, ColorType, createChart, DeepPartial } from 'lightweight-charts';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';

import {
  dayData1,
  dayData2,
  monthData1,
  monthData2,
  weekData1,
  weekData2,
  yearData1,
  yearData2,
} from '#/mockData';

import classes from './style.module.css';

type Props = {
  style?: CSSProperties;
};

const intervalColors = {
  feature1: '#FFCC21',
  feature2: '#8FE9D0',
};

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
  height: 200,
};

const seriesKey = {
  D: 'day',
  W: 'week',
  M: 'month',
  Y: 'year',
} as const;

type SeriesKey =
  | typeof seriesKey.D
  | typeof seriesKey.W
  | typeof seriesKey.M
  | typeof seriesKey.Y;

const seriesData = {
  [seriesKey.D]: {
    title: '日',
    feature1: dayData1,
    feature2: dayData2,
  },
  [seriesKey.W]: {
    title: '週',
    feature1: weekData1,
    feature2: weekData2,
  },
  [seriesKey.M]: {
    title: '月',
    feature1: monthData1,
    feature2: monthData2,
  },
  [seriesKey.Y]: {
    title: '週',
    feature1: yearData1,
    feature2: yearData2,
  },
};

const Chart = ({ style }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<SeriesKey>(seriesKey.D);

  const drawChart = useCallback((interval: SeriesKey) => {
    console.log(interval, 'vjdsnvjh');
    if (ref.current) {
      const container = ref.current;
      container.innerHTML = '';
      const data = seriesData[interval];
      const chart = createChart(container, chartOptions);
      const lineSeries1 = chart.addLineSeries({ color: intervalColors.feature1 });
      const lineSeries2 = chart.addLineSeries({ color: intervalColors.feature2 });

      lineSeries1.setData(data.feature1);
      lineSeries2.setData(data.feature2);

      chart.timeScale().fitContent();
    }
  }, []);

  useEffect(() => {
    drawChart(seriesKey.D);
  }, [drawChart]);

  return (
    <div className={classes.outer}>
      <div className={classes.wrapper} style={style}>
        <div className={classes.header}>
          <div className={classes.title}>BODY RECORD</div>
          <div className={classes.date}>2021.05.21</div>
        </div>
        <div className={classes.chart} ref={ref}></div>
        <div className={classes.chartBtns}>
          {Object.entries(seriesData).map(([key, { title }]) => (
            <button
              key={key}
              className={clsx(classes.chartBtn, active === key && classes.activeChartBtn)}
              onClick={() => {
                if (active !== key) {
                  drawChart(key as SeriesKey);
                  setActive(key as SeriesKey);
                }
              }}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
