import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { withState } from 'recompose';
import qs from 'qs';

import { Row, Col, Card } from 'antd';
import GeoJSONMap from '../../components/GeoJSONMap';
import ScrollToTop from '../../components/ScrollToTop';

import { fuelProducedCountrySelector } from '../../store/countries';
import { areaWithCountriesSelector } from '../../store/otherSelectors';
import { AreaType, FuelIndicatorsType } from '../../utils/types';

import BasicChartContainer from '../CountryView/containers/BasicChartContainer';
import TabsComponent from '../CountryView/components/TabsComponent';

const TabsComponentWithState = withState(
  'referenceCountryCode',
  'setReferenceCountry',
  props => props.referenceCountry,
)(TabsComponent);

function AreaView(props) {
  const { area, currentTab, goTo, referenceCountry, fuelProduced } = props;
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
                <strong>Members : </strong>
                {area.countries.map((country, i) => {
                  const string = `${i > 0 ? ', ' : ''}${country.commonName}`;
                  return !country.disabled && country.isIndependent ? (
                    <Link
                      key={country.alpha2Code}
                      to={`/country/${country.alpha2Code}`}
                    >
                      {string}
                    </Link>
                  ) : (
                    string
                  );
                })}
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
        <TabsComponentWithState
          countryCode={area.code}
          currentTab={currentTab}
          onTabChange={tab => goTo(`/area/${area.code}/${tab}`)}
          referenceCountry={referenceCountry}
          fuelProduced={fuelProduced}
        />
      </Row>
    </div>
  );
}

AreaView.propTypes = {
  area: AreaType.isRequired,
  currentTab: PropTypes.string,
  goTo: PropTypes.func.isRequired,
  referenceCountry: PropTypes.string,
  fuelProduced: FuelIndicatorsType.isRequired,
};

AreaView.defaultProps = {
  currentTab: 'summary',
  referenceCountry: 'WORLD',
};

export default connect((state, props) => ({
  currentTab: props.match.params.tab,
  goTo: url => props.history.push(url),
  area: areaWithCountriesSelector(props.match.params.areaCode, state),
  referenceCountry: qs.parse(props.location.search.substr(1)).referenceCountry,
  fuelProduced: fuelProducedCountrySelector(props.match.params.areaCode, state),
}))(AreaView);
