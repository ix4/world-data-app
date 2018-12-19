import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { StatisticType } from '../../../utils/types';

function CustomTooltip(props) {
  const { active } = props;

  if (active) {
    const { payload, label, filter } = props;
    return (
      <div className="CustomTooltip">
        <div>{label}</div>
        <div>
          {payload &&
            payload.filter(filter).map(p => (
              <div
                key={p.dataKey}
                style={{ lineHeight: '22px', color: p.color }}
              >
                {`${p.name} : ${p.value.toLocaleString()} ${p.unit}`}
              </div>
            ))}
        </div>
      </div>
    );
  }
  return null;
}
CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  label: PropTypes.string,
  filter: PropTypes.func,
};
CustomTooltip.defaultProps = {
  label: '',
  filter: i => i,
};

function ProdConsoChart(props) {
  const {
    fuel,
    prodStatistic,
    consoStatistic,
    // reservesStatistic,
    data,
  } = props;

  if (consoStatistic.unit.main !== prodStatistic.unit.main) {
    // eslint-disable-next-line no-console
    console.warn('Production and consommation have not the same unit', [
      prodStatistic.code,
      consoStatistic.code,
    ]);
  }
  const unit = consoStatistic.unit.main;
  const dataWithImportAndExport = data.map(l => {
    const diff = Number((l.prod - l.conso).toFixed(2));
    return {
      year: l.year,
      prod: l.prod,
      conso: l.conso,
      export: diff > 0 ? diff : null,
      import: diff < 0 ? -diff : null,
      base: Math.min(l.prod, l.conso),
    };
  });

  return (
    <div className="ProdConsoChart">
      <h3>{fuel}</h3>
      <ResponsiveContainer height={250} width="100%">
        <ComposedChart
          data={dataWithImportAndExport}
          margin={{ top: 30, right: 20, bottom: 5, left: 20 }}
        >
          <Area
            type="monotone"
            dot={false}
            dataKey="base"
            stroke="none"
            stackId="1"
            activeDot={false}
            fill="none"
            unit={unit}
          />
          <Area
            type="monotone"
            dot={false}
            unit={unit}
            name={`${fuel} export`}
            dataKey="export"
            activeDot={false}
            stroke="green"
            strokeOpacity={0}
            fillOpacity={1}
            fill="green"
            stackId="1"
          />
          <Area
            type="monotone"
            dot={false}
            unit={unit}
            name={`${fuel} import`}
            dataKey="import"
            activeDot={false}
            stroke="red"
            strokeOpacity={0}
            fillOpacity={1}
            fill="red"
            stackId="1"
          />
          <Line
            type="monotone"
            dataKey="conso"
            dot={false}
            unit={unit}
            stroke="#880000"
            strokeWidth={3}
            name={consoStatistic.name}
          />
          <Line
            type="monotone"
            dataKey="prod"
            dot={false}
            unit={unit}
            stroke="black"
            strokeWidth={3}
            strokeOpacity={0.7}
            name={prodStatistic.name}
          />

          {/* {reservesStatisticCode && (
            <Line
              type="monotone"
              dataKey="reserves"
              dot={false}
              unit={reservesStatistic.unit}
              stroke="blue"
              strokeWidth={3}
              strokeOpacity={0.7}
              name={reservesStatistic.name}
              yAxisId="1"
            />
          )} */}

          <CartesianGrid stroke="#ccc" opacity={0.2} />
          <XAxis dataKey="year" interval={9} />
          <YAxis
            label={{ value: unit, position: 'insideTopLeft', offset: -20 }}
          />
          {/* {reservesStatisticCode && (
            <YAxis
              orientation="right"
              label={{
                value: reservesStatistic.unit,
                position: 'insideTopRight',
                offset: -20,
              }}
              yAxisId="1"
            />
          )} */}
          <Tooltip
            content={props2 => (
              <CustomTooltip {...props2} filter={p => p.name !== 'base'} />
            )}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

ProdConsoChart.propTypes = {
  prodStatistic: StatisticType.isRequired,
  consoStatistic: StatisticType.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      prod: PropTypes.number,
      conso: PropTypes.number,
    }),
  ).isRequired,
  fuel: PropTypes.string.isRequired,
};

export default ProdConsoChart;