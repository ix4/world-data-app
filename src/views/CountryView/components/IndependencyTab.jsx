import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import buildChart from '../../../HOC/buildChart';
import ProdConsoChart from './ProdConsoChart';
import BasicChartContainer from '../containers/BasicChartContainer';

const ProdConsoChartContainer = buildChart({
  mapOfCountryStatisticsSelector: (state, props) => ({
    prod: props.prodStatisticCode,
    conso: props.consoStatisticCode,
  }),
})(ProdConsoChart);

function IndependencyTab(props) {
  const { countryCode, fuelProducedOrConsumed } = props;
  return (
    <div className="IndependencyTab">
      <Row>
        <Col md={8} sm={24}>
          <BasicChartContainer
            statisticCode="ENERGY_SELF_SUFFICIENCY"
            countryCode={countryCode}
            color="#f15a22"
          />
        </Col>
      </Row>
      <Row gutter={20}>
        <h3>Imports/Exports</h3>
        {fuelProducedOrConsumed.coal && (
          <Col md={8} sm={24}>
            <ProdConsoChartContainer
              countryCode={countryCode}
              prodStatisticCode="COAL_PRODUCTION_MTOE"
              consoStatisticCode="COAL_CONSUMPTION_MTOE"
              fuel="Coal"
              title="Coal Trade"
            />
          </Col>
        )}
        {fuelProducedOrConsumed.oil && (
          <Col md={8} sm={24}>
            <ProdConsoChartContainer
              countryCode={countryCode}
              prodStatisticCode="OIL_PRODUCTION_MTOE"
              consoStatisticCode="OIL_CONSUMPTION_MTOE"
              fuel="Oil"
              title="Oil Trade"
            />
          </Col>
        )}
        {fuelProducedOrConsumed.gas && (
          <Col md={8} sm={24}>
            <ProdConsoChartContainer
              countryCode={countryCode}
              prodStatisticCode="GAS_PRODUCTION_MTOE"
              consoStatisticCode="GAS_CONSUMPTION_MTOE"
              fuel="Gas"
              title="Gas Trade"
            />
          </Col>
        )}
      </Row>
    </div>
  );
}

IndependencyTab.propTypes = {
  countryCode: PropTypes.string.isRequired,
  fuelProducedOrConsumed: PropTypes.shape({
    coal: PropTypes.bool,
    oil: PropTypes.bool,
    gas: PropTypes.bool,
  }).isRequired,
};

export default IndependencyTab;
