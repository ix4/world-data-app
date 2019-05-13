import worldTopo from 'world-atlas/world/110m.json'; // TODO
import countriesData from 'world-countries/countries'; // TODO
import { merge } from 'topojson-client';
import { indexBy } from 'ramda';

const indexedCountries = {
  ...indexBy(c => c.cca2, countriesData),
  SU: { ccn3: 810 },
};

function computeGeojson(area) {
  const countryAlpha3Codes = area.countryCodes.map(
    countryCode => indexedCountries[countryCode].ccn3,
  );
  const geometries = worldTopo.objects.countries.geometries.filter(c =>
    countryAlpha3Codes.includes(c.id),
  );
  return merge(worldTopo, geometries);
}

export default async function getAreas() {
  const res = await fetch('/data/areas.json');
  const data = await res.json();

  return data.map(area => ({
    ...area,
    alpha2Code: area.code,
    commonName: area.name,
    geojson: area.countryCodes ? computeGeojson(area) : null,
  }));
}