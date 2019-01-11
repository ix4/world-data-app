import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { Row, Col, Card } from 'antd';
import GeoJSONMap from '../../components/GeoJSONMap';
import ScrollToTop from '../../components/ScrollToTop';

import { areaWithCountriesSelector } from '../../store/otherSelectors';
import { fuelProducedOrConsumedCountrySelector } from '../../store/countries';

import { AreaType } from '../../utils/types';

import SummaryTab from '../CountryView/components/SummaryTab';
import IndependencyTab from '../CountryView/components/IndependencyTab';
import ClimateTab from '../CountryView/components/ClimateTab';
import BasicChartContainer from '../CountryView/containers/BasicChartContainer';

const tabList = [
  { key: 'summary', tab: 'Summary' },
  { key: 'independency', tab: 'Energy (in)dependency' },
  { key: 'climate', tab: 'Climate change' },
];

const IndependencyTabContainer = connect((state, props) => ({
  fuelProducedOrConsumed: fuelProducedOrConsumedCountrySelector(
    props.countryCode,
    state,
  ),
}))(IndependencyTab);

const tabContent = {
  summary: areaCode => <SummaryTab countryCode={areaCode} />,
  independency: areaCode => <IndependencyTabContainer countryCode={areaCode} />,
  climate: areaCode => <ClimateTab countryCode={areaCode} />,
};

function AreaView(props) {
  const { area, currentTab, goTo } = props;
  const latlng = [
    area.countries.reduce((s, c) => c.latlng[0] + s, 0) / area.countries.length,
    area.countries.reduce((s, c) => c.latlng[1] + s, 0) / area.countries.length,
  ];

  if (!area) {
    return <Redirect to="/" />;
  }

  return (
    <div className="AreaView">
      <ScrollToTop areaCode={area.code} />
      <Row gutter={16}>
        <Col xs={24} sm={24} md={18}>
          <Card title={<h2>{`${area.name}`}</h2>}>
            {area.code !== 'WORLD' && (
              <div>
                {`Members : `}
                {area.countries.map((country, i) => (
                  <Link
                    key={country.alpha2Code}
                    to={`/country/${country.alpha2Code}`}
                  >
                    {`${i > 0 ? ', ' : ''}${country.commonName}`}
                  </Link>
                ))}
              </div>
            )}
            <Row style={{ marginTop: '20px' }} gutter={10}>
              <Col xs={24} sm={24} md={24} lg={12}>
                <BasicChartContainer
                  statisticCode="POPULATION"
                  countryCode={area.code}
                  color="#2c82c9"
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <BasicChartContainer
                  statisticCode="GDP_2010_USD"
                  countryCode={area.code}
                  color="#f22613"
                  perCapita
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={0} sm={0} md={6}>
          <GeoJSONMap geojson={area.geojson} center={latlng} />
        </Col>
      </Row>
      <Row>
        <Card
          key={currentTab}
          tabList={tabList}
          activeTabKey={currentTab}
          onTabChange={tab => goTo(`/area/${area.code}/${tab}`)}
        >
          {tabContent[currentTab](area.code)}
        </Card>
      </Row>
    </div>
  );
}

AreaView.propTypes = {
  area: AreaType.isRequired,
  currentTab: PropTypes.string,
  goTo: PropTypes.func.isRequired,
};

AreaView.defaultProps = {
  currentTab: 'summary',
};

export default connect((state, props) => ({
  currentTab: props.match.params.tab,
  goTo: url => props.history.push(url),
  area: areaWithCountriesSelector(props.match.params.areaCode, state),
}))(AreaView);
