(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{342:function(e,t,a){e.exports=a(601)},347:function(e,t,a){},601:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),c=a.n(o),i=(a(347),a(46)),u=a(612),l=a(111),s=a(311),d=a(312),m=a(25),p=a(16),f=a(244),O=a.n(f),E=a(100),y=a(313),C=a(337);function v(e,t){var a=t.objects.countries.geometries.find(function(t){return t.id===e.numericCode});return Object(m.a)({},e,{geojson:a&&Object(C.a)(t,a)})}function b(){return(b=Object(y.a)(O.a.mark(function e(){var t,a,n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("/data/countries.json"),fetch("/data/worldTopo.json")].map(function(e){return e.then(function(e){return e.json()})}));case 2:return t=e.sent,a=Object(E.a)(t,2),n=a[0],r=a[1],e.abrupt("return",n.map(function(e){return v(e,r)}));case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var h=function(){return b.apply(this,arguments)},g="COUNTRIES_LOAD_ACTION",T="COUNTRIES_RECEIVE_ACTION";function _(e){var t=e.data,a=e.errors;return{type:T,data:t,errors:a}}var N={loading:!1,loaded:!1,errors:null,data:{}};function I(e){return e.countries.loaded}function j(e){return Object(p.k)(e.countries.data).filter(function(e){return e.isIndependent})}function k(e){return Object(p.k)(e.countries.data).filter(function(e){return!e.isIndependent})}function S(e,t){return t.countries.data[e]}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(m.a)({},e,{loading:!0});case T:return Object(m.a)({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}},A=a(20),w=a(79),M=a(152);function P(e){return e.statistics.loaded}function L(e){return Object(p.k)(e.statistics.data)}function Y(e,t){return t.statistics.data[e]}function D(e,t){var a=e.statisticCode,n=e.countryCode,r=Y(a,t);return r&&r.values[n]}function W(e,t){var a=e.statisticCode,n=e.countryCode,r=Y(a,t);if(r.compute)return Object(p.k)(r.source).every(function(e){return W({statisticCode:e,countryCode:n},t)});var o=D({statisticCode:a,countryCode:n},t);return!!o&&o.loaded}function U(e,t){var a=e.statisticCode,n=e.countryCode,r=Y(a,t);if(r.compute)return H({mapOfCountryStatistics:r.source,countryCode:n},t).map(function(e){return function(t){var a=t.year,n=Object(M.a)(t,["year"]),r=e.compute(n);return Number.isNaN(r)||!Number.isFinite(r)?{year:a,value:null}:{year:a,value:r}}}(r));var o=D({statisticCode:a,countryCode:n},t);return o?o.values:[]}function x(e,t){var a=e.statisticCodes,n=e.countryCode;return a.every(function(e){return W({statisticCode:e,countryCode:n},t)})}function G(e,t){return j(t).map(function(e){return e.alpha2Code}).every(function(a){return W({statisticCode:e,countryCode:a},t)})}function H(e,t){var a,n=e.mapOfCountryStatistics,r=e.countryCode,o=e.perCapita,c=function(e,t,a){var n=Object(p.d)(function(e){return"string"===typeof e?{statisticCode:e,countryCode:t}:e},e),r=Object(p.j)(Object(p.k)(n).map(function(e){return e.countryCode})),o=Object(p.f)(r.map(function(e){return Object(A.a)({},"pop/".concat(e),{statisticCode:"POPULATION",countryCode:e})}));return Object(m.a)({},a?o:{},n)}(n,r,o),i=Object(p.d)(function(e){return Y(e.statisticCode,t)},c),u=Object(p.d)(function(e){return U(e,t)},c),l=function(e){var t=Object(p.k)(e),a=t.map(function(e){return Math.min.apply(Math,Object(w.a)(e.map(function(e){return e.year})))}),n=t.map(function(e){return Math.max.apply(Math,Object(w.a)(e.map(function(e){return e.year})))});return[Math.max.apply(Math,Object(w.a)(a)),Math.min.apply(Math,Object(w.a)(n))]}(u),s=Object(E.a)(l,2),d=s[0],f=s[1],O=Object(p.e)(function(e,t){return e.map(function(e){var a=e.year,n=e.value;return Object(A.a)({year:a},t,n)})},u),y=(a=[]).concat.apply(a,Object(w.a)(Object(p.k)(O))),C=Object(p.b)(function(e){return e.year},y);return Object.keys(C).sort().map(function(e){return Object(p.f)(C[e])}).filter(function(e){return d<=e.year&&e.year<=f}).map(function(e){return Object(m.a)({},e,Object(p.e)(function(t,a){var n="pop/".concat(c[a].countryCode);return function(e,t,a,n,r){return null===e||!t&&a?null:a?e*n/(r*t):e}(t,e[n],o,i[a].unit.factor,i[n]?i[n].unit.factor:null)},Object(p.g)(["year","pop"],e)))})}function z(e,t){var a=function(e){return e.value>.01};return Object(p.d)(function(n){return U({statisticCode:n,countryCode:e},t).some(a)},{coal:"COAL_CONSUMPTION_MTOE",gas:"GAS_CONSUMPTION_MTOE",oil:"OIL_CONSUMPTION_MTOE",hydro:"HYDRO_PRODUCTION_MTOE",nuclear:"NUCLEAR_PRODUCTION_MTOE",biofuelsWaste:"BIOFUELS_WASTE_CONSUMPTION_MTOE",solarWindTideGeoth:"GEOTH_SOLAR_WIND_TIDE_PRODUCTION_MTOE"})}function B(e,t){var a=e.statisticCode,n=e.year,r=e.perCapita,o=j(t).map(function(e){return e.alpha2Code}),c={value:a};return o.push("WORLD"),o.map(function(e){var a=H({mapOfCountryStatistics:c,countryCode:e,perCapita:r},t).find(function(e){return e.year===n});return{countryCode:e,value:a?a.value:null}})}function K(e,t){return fetch(e,t).then(function(e){return e.json()})}var F={main:"Mtoe",base:"toe",factor:Math.pow(10,6)},q={main:"TWh",base:"kWh",factor:Math.pow(10,9)},V=.33,J=1,$=[{code:"ENERGY_SELF_SUFFICIENCY",name:"Energy Self-sufficiency",description:"",unit:{main:"%",base:"%",factor:1},source:{consumption:"PRIMARY_ENERGY_CONSUMPTION_MTOE",production:"PRIMARY_ENERGY_PRODUCTION_MTOE"},startingYear:1973,endingYear:2016,sourceAttribution:"IEA",category:"Others",isIntensive:!0,compute:function(e){var t=e.consumption;return e.production/t*100}},{code:"ENERGY_INTENSITY",name:"Energy Intensity",description:"",unit:{main:"toe/million 2010 $",base:"toe/million 2010 $",factor:1},source:{energy:"PRIMARY_ENERGY_CONSUMPTION_MTOE",gdp:"GDP_2010_USD"},startingYear:1973,endingYear:2016,sourceAttribution:"IEA, World Bank",category:"Climate change",isIntensive:!0,compute:function(e){return e.energy/e.gdp*Math.pow(10,3)}},{code:"CO2_INTENSITY_OF_ENERGY",name:"CO2 Intensity of energy",description:"",unit:{main:"tCO2/toe",base:"tCO2/toe",factor:1},source:{co2:"CO2_EMISSIONS_MT",energy:"PRIMARY_ENERGY_CONSUMPTION_MTOE"},startingYear:1973,endingYear:2016,sourceAttribution:"IEA, World Bank",category:"Climate change",isIntensive:!0,compute:function(e){var t=e.energy;return e.co2/t}},{code:"RENEWABLES_PRODUCTION_MTOE",name:"Renewables production",description:"",unit:F,source:{hydro:"HYDRO_PRODUCTION_MTOE",geothSolarWindTide:"GEOTH_SOLAR_WIND_TIDE_PRODUCTION_MTOE"},startingYear:1973,endingYear:2016,sourceAttribution:"IEA",category:"Productions",compute:function(e){return e.hydro+e.geothSolarWindTide}},{code:"LOW_CARBON_ENERGY_PRODUCTION_MTOE",name:"Low-carbon energy production",description:"",unit:F,source:{hydro:"HYDRO_PRODUCTION_MTOE",geothSolarWindTide:"GEOTH_SOLAR_WIND_TIDE_PRODUCTION_MTOE",nuclear:"NUCLEAR_PRODUCTION_MTOE"},startingYear:1973,endingYear:2016,sourceAttribution:"IEA",category:"Productions",compute:function(e){return e.hydro+e.geothSolarWindTide+e.nuclear}},{code:"NUCLEAR_GENERATION_TWH",name:"Electricity generation from nuclear",description:"",unit:q,source:{nuclear:"NUCLEAR_PRODUCTION_MTOE"},startingYear:1973,endingYear:2016,sourceAttribution:"IEA",category:"Electricity",compute:function(e){return e.nuclear*V*11.63}},{code:"HYDRO_GENERATION_TWH",name:"Electricity generation from hydro",description:"",unit:q,source:{hydro:"HYDRO_PRODUCTION_MTOE"},startingYear:1973,endingYear:2016,sourceAttribution:"IEA",category:"Electricity",compute:function(e){return e.hydro*J*11.63}}];var Q="STATISTICS_LOAD_ACTION",X="STATISTICS_RECEIVE_ACTION",Z="COUNTRY_STATISTIC_LOAD_ACTION",ee="COUNTRY_STATISTIC_RECEIVE_ACTION",te="STATISTIC_LOAD_ALL_COUNTRIES_ACTION",ae="STATISTIC_RECEIVE_ALL_COUNTRIES_ACTION";function ne(e){var t=e.data,a=e.errors;return{type:X,data:t,errors:a}}function re(e){var t=e.countryCode,a=e.statisticCode,n=e.data,r=e.errors;return{type:ee,countryCode:t,statisticCode:a,data:n,errors:r}}function oe(e){var t=e.statisticCode,a=e.countries,n=e.data,r=e.errors;return{type:ae,countries:a,statisticCode:t,data:n,errors:r}}function ce(e){var t=e.statisticCode,a=e.countryCode;return function(e,n){var r=n(),o=Y(t,r);if(o.compute){var c=Object(p.k)(o.source);e(ie({statisticCodes:c,countryCode:a}))}W({statisticCode:t,countryCode:a},r)||(e(function(e,t){return{type:Z,statisticCode:e,countryCode:t}}(t,a)),function(e,t){return K("/data/".concat(e,"/").concat(t,".json"))}(t,a).then(function(n){var r=n.map(function(e){return{year:e.year,value:e.value}});e(re({countryCode:a,statisticCode:t,data:r}))}).catch(function(n){return e(re({statisticCode:t,countryCode:a,errors:n}))}))}}function ie(e){var t=e.statisticCodes,a=e.countryCode;return function(e){return Promise.all(t.map(function(t){return e(ce({statisticCode:t,countryCode:a}))}))}}var ue={loading:!0,loaded:!1,errors:null,values:[]};function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;switch(t.type){case ee:return{loading:!1,loaded:!t.errors,errors:t.errors||null,values:t.data||[]};case ae:return{loading:!1,loaded:!t.errors,errors:t.errors||null,values:t.data&&t.data.filter(function(e){return e.countryCode===a}).map(Object(p.g)(["countryCode"]))||[]};default:return e}}var se={loading:!1,loaded:!1,errors:null,data:{}};var de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(m.a)({},e,{loading:!0});case X:return Object(m.a)({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});case Z:case ee:var a=e.data[t.statisticCode],n=a.values[t.countryCode];return Object(m.a)({},e,{data:Object(m.a)({},e.data,Object(A.a)({},t.statisticCode,Object(m.a)({},a,{values:Object(m.a)({},a.values,Object(A.a)({},t.countryCode,le(n,t)))})))});case te:var r=e.data[t.statisticCode];return Object(m.a)({},e,{data:Object(m.a)({},e.data,Object(A.a)({},t.statisticCode,Object(m.a)({},r,{values:Object(m.a)({},r.values,t.countries.reduce(function(e,a){return Object(m.a)({},e,Object(A.a)({},a.alpha2Code,le(void 0,t,a.alpha2Code)))},{}))})))});case ae:var o=e.data[t.statisticCode];return Object(m.a)({},e,{data:Object(m.a)({},e.data,Object(A.a)({},t.statisticCode,Object(m.a)({},o,{values:Object(m.a)({},o.values,t.countries.reduce(function(e,a){return Object(m.a)({},e,Object(A.a)({},a.alpha2Code,le(o.values[a.alpha2Code],t,a.alpha2Code)))},{}),{WORLD:le(o.values.WORLD,t,"WORLD")})})))});default:return e}},me=Object(l.combineReducers)({countries:R,statistics:de}),pe=[Object(l.applyMiddleware)(d.a)],fe=Object(s.composeWithDevTools)({}).apply(void 0,pe),Oe=Object(l.createStore)(me,fe),Ee=(a(159),a(95)),ye=(a(357),a(157)),Ce=a(616),ve=a(615),be=a(608),he=a(613),ge=(a(143),a(26)),Te=(a(144),a(37)),_e=a(71),Ne=a(60),Ie=a(75),je=a(72),ke=a(76),Se=a(82),Re=a(609),Ae=a(610),we=a(617),Me=a(0),Pe=a.n(Me),Le=(Pe.a.shape({alpha2Code:Pe.a.string.isRequired,alpha3Code:Pe.a.string.isRequired,commonName:Pe.a.string.isRequired,capital:Pe.a.string.isRequired,area:Pe.a.number.isRequired,latlng:Pe.a.arrayOf(Pe.a.number).isRequired,geojson:Pe.a.object}),Pe.a.shape({name:Pe.a.string.isRequired,unit:Pe.a.shape({main:Pe.a.string.isRequired,base:Pe.a.string.isRequired}),perCapita:Pe.a.bool,startingYear:Pe.a.number.isRequired,endingYear:Pe.a.number.isRequired}),Pe.a.arrayOf(Pe.a.shape({year:Pe.a.number.isRequired,value:Pe.a.number.isRequired})),a(41)),Ye=a.n(Le);function De(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return a<-168.51?Ye.a.latLng(n,360+a):Ye.a.latLng(n,a).wrap()}function We(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(t=!0),t}function Ue(e){return null===e||void 0===e||Number.isNaN(e)?"NA":Number(Number(e).toPrecision(3)).toLocaleString()}function xe(e){return e.toLocaleString()}function Ge(e,t){return t?"".concat(e.base,"/capita"):e.main}var He="540px",ze="rgb(107, 185, 240)",Be="#777",Ke="linear-gradient(to right, ".concat(ze,", ").concat("#001529",")"),Fe=Object(Se.c)(ze,"#001529"),qe=function(e){return Math.log(e)};var Ve=function(e){var t=e.countries,a=e.dependentCountries,n=e.data,o=e.currentStatistic,c=e.currentYear,i=e.perCapita,u=Math.max.apply(Math,Object(w.a)(n.filter(function(e){return"WORLD"!==e.countryCode}).map(function(e){return e.value}))),l=function(e){var t=Math.max.apply(Math,Object(w.a)(e.map(function(e){return e.value}))),a=Math.min.apply(Math,Object(w.a)(e.filter(function(e){return e.value}).map(function(e){return e.value}))),n=Object(p.d)(function(e){return e.value},Object(p.c)(function(e){return e.countryCode},e));return Object(p.d)(function(e){return null===e||void 0===e?{color:Be,value:e}:0===e?{color:ze,value:e}:{color:Fe(qe(e/a)/qe(t/a)),value:e}},n)}(n);return r.a.createElement("div",{className:"WorldMap"},r.a.createElement("div",{className:"WorldMap__yearLabel"},c),r.a.createElement(Re.a,{zoom:1,center:[0,0],style:{height:He,zIndex:0},maxBounds:[[90,-180],[-90,180]],dragging:!We()},t.map(function(e){var t=l[e.alpha2Code],a=t.value,n=t.color;return r.a.createElement(Ae.a,{key:e.alpha2Code+o.code,data:e.geojson,coordsToLatLng:De,ref:function(e){return e&&e.leafletElement.setStyle({color:"white",weight:.5,fillColor:n,fillOpacity:1})}},r.a.createElement(we.a,{sticky:!0},"".concat(e.commonName,": ").concat(Ue(a))))}),a.map(function(e){return r.a.createElement(Ae.a,{key:e.alpha2Code,data:e.geojson,style:{fillOpacity:1,color:"white",weight:.5,fillColor:Be}})})),r.a.createElement("div",{className:"WorldMap__legend"},r.a.createElement("div",null,"".concat(o.name," (").concat(Ge(o.unit,i),")")),r.a.createElement("div",{className:"WorldMap__legend__colors"},r.a.createElement("div",null,r.a.createElement("div",{className:"WorldMap__legend__gradient",style:{background:Ke}}),r.a.createElement("div",{className:"WorldMap__legend__gradientRange"},r.a.createElement("div",null,"0"),r.a.createElement("div",null,Ue(u)))),r.a.createElement("div",null,r.a.createElement("div",{className:"WorldMap__legend__NA__square",style:{backgroundColor:Be}}),r.a.createElement("div",null,"NA")))))},Je=(a(602),a(336)),$e=(a(211),a(52)),Qe=(a(377),a(338)),Xe=(a(212),a(64)),Ze=a(240),et=a.n(Ze);var tt=function(e){var t,a=e.data,n=e.countries,o=e.statistics,c=e.currentStatistic,i=e.currentYear,u=e.perCapita,l=e.onRowClick,s=e.setStatistic,d=e.setYear,m=e.setPerCapita,f=e.isLoaded,O=a.filter(function(e){return null!==e.value}).map(function(e){return{countryCode:e.countryCode,country:"WORLD"===e.countryCode?"World":n.find(function(t){return t.alpha2Code===e.countryCode}).commonName,value:e.value}}),E=Object(p.b)(function(e){return e.category},o);return r.a.createElement("div",{className:"StatisticExplorer"},r.a.createElement(Xe.a,{style:{width:"100%"},placeholder:"Statistics",optionFilterProp:"title",value:c.code,showSearch:!We(),onChange:function(e){return s(e)}},Object.keys(E).map(function(e){var t=E[e];return r.a.createElement(Xe.a.OptGroup,{key:e,label:e},Object(p.i)(function(e){return e.name},t).map(function(e){return r.a.createElement(Xe.a.Option,{key:e.code,title:e.name},"".concat(e.name))}))})),r.a.createElement(Qe.a,{className:"hideOnMobile",defaultValue:i,min:c.startingYear,max:c.endingYear,onAfterChange:function(e){return d(e)},onChange:et()(d,300),included:!1,marks:(t={},Object(A.a)(t,c.startingYear,{style:{},label:"".concat(c.startingYear)}),Object(A.a)(t,c.endingYear,{style:{width:"auto",margin:"auto",left:"",right:"-15px"},label:"".concat(c.endingYear)}),t)}),r.a.createElement($e.a.Group,{style:{marginBottom:"10px"},buttonStyle:"solid",size:"small",value:u,onChange:function(e){return m(e.target.value)}},r.a.createElement($e.a.Button,{value:!1},"Absolute"),r.a.createElement($e.a.Button,{value:!0,disabled:"POPULATION"===c.code||c.isIntensive},"Per capita")),r.a.createElement(Je.a,{className:"hideOnMobile",rowKey:"countryCode",size:"small",pagination:!1,dataSource:O,loading:!f,scroll:{y:380},columns:[{title:"Country",dataIndex:"country",sorter:function(e,t){return e.country.localeCompare(t.country)},width:"auto",render:function(e){return"World"===e?r.a.createElement("strong",null,"World"):r.a.createElement("a",{href:"javascript:;"},e)}},{title:Ge(c.unit,u),dataIndex:"value",defaultSortOrder:"descend",sorter:function(e,t){return e.value-t.value},render:Ue,align:"right"}],onRow:function(e){return{onClick:function(){return l(e)}}}}))},at=Object(i.b)(function(e,t){var a=t.statisticCode,n=t.currentYear,r=t.perCapita;return{countries:j(e),dependentCountries:k(e),currentStatistic:Y(a,e),data:B({statisticCode:a,year:n,perCapita:r},e)}})(Ve),nt=Object(i.b)(function(e,t){var a=t.statisticCode,n=t.currentYear,r=t.perCapita;return{countries:j(e),statistics:L(e),currentStatistic:Y(a,e),isLoaded:G(a,e)&&(!r||G("POPULATION",e)),data:B({statisticCode:a,year:n,perCapita:r},e)}})(tt),rt=function(e){function t(){var e;return Object(_e.a)(this,t),(e=Object(Ie.a)(this,Object(je.a)(t).call(this))).state={statisticCode:"PRIMARY_ENERGY_CONSUMPTION_MTOE",currentYear:2010,perCapita:!1},e}return Object(ke.a)(t,e),Object(Ne.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.statisticCode;(0,this.props.loadStatistic)(e)}},{key:"setStatistic",value:function(e){(0,this.props.loadStatistic)(e);var t=Object(m.a)({statisticCode:e},"POPULATION"===e?{perCapita:!1}:{});this.setState(t)}},{key:"setYear",value:function(e){this.setState({currentYear:e})}},{key:"setPerCapita",value:function(e){var t=this.props.loadStatistic;e&&t("POPULATION"),this.setState({perCapita:e})}},{key:"render",value:function(){var e=this,t=this.props.history.push,a=this.state,n=a.currentYear,o=a.statisticCode,c=a.perCapita;return r.a.createElement("div",{className:"HomeView"},r.a.createElement(Te.a,null,r.a.createElement("h1",null,"Welcome to the World Energy Data Explorer")),r.a.createElement(Te.a,{gutter:{md:20}},r.a.createElement(ge.a,{md:16},r.a.createElement(at,{statisticCode:o,currentYear:n,perCapita:c})),r.a.createElement(ge.a,{md:8},r.a.createElement(nt,{statisticCode:o,currentYear:n,perCapita:c,onRowClick:function(e){return t("country/".concat(e.countryCode))},setYear:function(t){return e.setYear(t)},setStatistic:function(t){return e.setStatistic(t)},setPerCapita:function(t){return e.setPerCapita(t)}}))))}}]),t}(n.Component),ot=Object(i.b)(null,{loadStatistic:function e(t){return function(a,n){var r=n(),o=Y(t,r);o.compute&&Object(p.k)(o.source).forEach(function(t){return a(e(t))});var c=j(r);c.every(function(e){return W({statisticCode:t,countryCode:e.alpha2Code},r)})||(a(function(e,t){return{type:te,statisticCode:e,countries:t}}(t,c)),function(e){return K("/data/".concat(e,"/all.json"))}(t).then(function(e){return a(oe({statisticCode:t,countries:c,data:e}))}).catch(function(e){return a(oe({statisticCode:t,countries:c,errors:e}))}))}}})(rt),ct=(a(307),a(156)),it=a(48),ut=a(614),lt=function(e){function t(){return Object(_e.a)(this,t),Object(Ie.a)(this,Object(je.a)(t).apply(this,arguments))}return Object(ke.a)(t,e),Object(Ne.a)(t,[{key:"componentDidMount",value:function(){this.createGeoJSON()}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;e.data!==t&&(this.geojson.remove(),this.createGeoJSON())}},{key:"createGeoJSON",value:function(){var e=this.props,t=e.leaflet.map,a=e.data;this.geojson=Ye.a.geoJSON(a,{coordsToLatLng:De}).addTo(t);var n=this.geojson.getBounds();t.flyToBounds(n)}},{key:"render",value:function(){return null}}]),t}(n.Component),st=Object(it.b)(lt);var dt=function(e){var t=e.country;return r.a.createElement("div",{className:"CountryMap"},r.a.createElement(Re.a,{center:t.latlng,zoom:2,style:{height:"200px",zIndex:0}},r.a.createElement(ut.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.geojson&&r.a.createElement(st,{data:t.geojson})))},mt=a(520),pt=a(302),ft=a(604),Ot=a(611),Et=a(605),yt=a(305),Ct=a(306),vt=a(603),bt=a(308);function ht(e){var t=e.active,a=e.separator,n=e.payload,o=e.withTotal;if(t&&n&&n.length>0){var c=e.label;if(n.length<2){var i=n[0],u=i.formatter,l=void 0===u?Ue:u,s=i.unit,d=i.color,m=i.value;return r.a.createElement("div",{className:"CustomTooltip",style:{color:d}},"".concat(c," : ").concat(l(m)," ").concat(s))}var p=n.reduce(function(e,t){return e+t.value},0),f=n[0].unit;return r.a.createElement("div",{className:"CustomTooltip"},r.a.createElement("div",null,c),r.a.createElement("div",null,n.map(function(e){var t=e.formatter,n=void 0===t?Ue:t,o=e.unit,c=e.color,i=e.name,u=e.dataKey,l=e.value;return r.a.createElement("div",{key:u,style:{color:c}},"".concat(i).concat(a).concat(n(l)," ").concat(o))}),o&&r.a.createElement("div",{key:"__total__"},r.a.createElement("hr",{size:1}),"Total".concat(a).concat(Ue(p)," ").concat(f))))}return null}ht.defaultProps={label:"",withTotal:!1};var gt=ht;var Tt=function(e){var t=e.data,a=e.stacked,n=e.setStacked,o=e.perCapita,c=e.setPerCapita,i=e.sourceConsumed,u=e.statistics,l=e.title,s=u.coal.unit,d=Ge(s,o),m=a?mt.a:pt.a;return Object(p.k)(u).some(function(e){return e.unit.main!==s.main})&&console.warn("EnergyMixChart : statistics have not same units"),r.a.createElement("div",{className:"EnergyMixChart"},r.a.createElement("h3",{className:"EnergyMixChart__title"},l),r.a.createElement("div",null,r.a.createElement($e.a.Group,{buttonStyle:"solid",size:"small",value:a,onChange:function(e){return n(e.target.value)},style:{marginRight:"10px"}},r.a.createElement($e.a.Button,{value:!0},"Stacked"),r.a.createElement($e.a.Button,{value:!1},"Split")),r.a.createElement($e.a.Group,{buttonStyle:"solid",size:"small",value:o,onChange:function(e){return c(e.target.value)}},r.a.createElement($e.a.Button,{value:!1},"Absolute"),r.a.createElement($e.a.Button,{value:!0},"Per capita"))),r.a.createElement(ft.a,{height:280,width:"100%"},r.a.createElement(Ot.a,{data:t,margin:{top:10,right:0,bottom:10,left:20}},i.coal&&r.a.createElement(m,{type:"monotone",dataKey:"coal",dot:!1,activeDot:!1,name:"Coal",stroke:"black",fill:"black",stackId:"1",unit:d}),i.oil&&r.a.createElement(m,{type:"monotone",dataKey:"oil",dot:!1,activeDot:!1,name:"Oil",stroke:"grey",fill:"grey",stackId:"1",unit:d}),i.gas&&r.a.createElement(m,{type:"monotone",dataKey:"gas",dot:!1,activeDot:!1,name:"Gas",stroke:"orange",fill:"orange",stackId:"1",unit:d}),i.nuclear&&r.a.createElement(m,{type:"monotone",dataKey:"nuclear",dot:!1,activeDot:!1,name:"Nuclear",stroke:"purple",fill:"purple",stackId:"1",unit:d}),i.hydro&&r.a.createElement(m,{type:"monotone",dataKey:"hydro",dot:!1,activeDot:!1,name:"Hydroelectricity",stroke:"blue",fill:"blue",stackId:"1",unit:d}),i.biofuelsWaste&&r.a.createElement(m,{type:"monotone",dataKey:"biofuelsWaste",dot:!1,activeDot:!1,name:"Biofuels & Waste",stroke:"saddlebrown",fill:"saddlebrown",stackId:"1",unit:d}),i.solarWindTideGeoth&&r.a.createElement(m,{type:"monotone",dataKey:"solarWindTideGeoth",dot:!1,activeDot:!1,name:"Geothermy, Wind, Solar & Tide",stroke:"green",fill:"green",stackId:"1",unit:d}),o&&r.a.createElement(pt.a,{type:"monotone",dataKey:"world",dot:!1,activeDot:!1,name:"World",stroke:"red",unit:d}),r.a.createElement(Et.a,{stroke:"#ccc",opacity:.2}),r.a.createElement(yt.a,{dataKey:"year",interval:4}),r.a.createElement(Ct.a,{tickFormatter:xe,label:{value:d,angle:-90,position:"insideLeft",offset:-10}}),r.a.createElement(vt.a,{content:function(e){return r.a.createElement(gt,Object.assign({},e,{withTotal:!0}))}}),r.a.createElement(bt.a,{iconType:"circle"}))))},_t=Object(i.b)(function(e,t){var a=t.countryCode,n=t.perCapita,r=t.mapOfStatistics,o=t.worldReference;return{data:H({mapOfCountryStatistics:Object(m.a)({},r,{world:{statisticCode:o,countryCode:"WORLD"}}),countryCode:a,perCapita:n},e),statistics:Object(p.d)(function(t){return Y(t,e)},r),sourceConsumed:z(a,e)}})(Tt),Nt=function(e){function t(){var e;return Object(_e.a)(this,t),(e=Object(Ie.a)(this,Object(je.a)(t).call(this))).state={stacked:!0,perCapita:!1},e}return Object(ke.a)(t,e),Object(Ne.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.countryCode,a=e.loadStatistics,n=e.mapOfStatistics,r=e.worldReference;a({statisticCodes:Object(p.k)(n).concat(["POPULATION"]),countryCode:t}),a({statisticCodes:[r,"POPULATION"],countryCode:"WORLD"})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.countryCode,n=t.loadStatistics,r=t.mapOfStatistics;a!==e.countryCode&&n({statisticCodes:Object(p.k)(r),countryCode:a})}},{key:"setStacked",value:function(e){this.setState({stacked:e})}},{key:"setPerCapita",value:function(e){this.setState({perCapita:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.isLoaded,o=t.countryCode,c=t.mapOfStatistics,i=t.worldReference,u=this.state,l=u.stacked,s=u.perCapita;return r.a.createElement(Ee.a,{spinning:!n},r.a.createElement(_t,{title:a,countryCode:o,mapOfStatistics:c,worldReference:i,setStacked:function(t){return e.setStacked(t)},setPerCapita:function(t){return e.setPerCapita(t)},stacked:l,perCapita:s}))}}]),t}(n.Component),It=Object(i.b)(function(e,t){return{isLoaded:x({statisticCodes:Object(p.k)(t.mapOfStatistics).concat(["POPULATION"]),countryCode:t.countryCode},e)&&x({statisticCodes:[t.worldReference,"POPULATION"],countryCode:"WORLD"},e)}},{loadStatistics:ie})(Nt),jt={coal:"COAL_CONSUMPTION_MTOE",gas:"GAS_CONSUMPTION_MTOE",oil:"OIL_CONSUMPTION_MTOE",hydro:"HYDRO_PRODUCTION_MTOE",nuclear:"NUCLEAR_PRODUCTION_MTOE",biofuelsWaste:"BIOFUELS_WASTE_CONSUMPTION_MTOE",solarWindTideGeoth:"GEOTH_SOLAR_WIND_TIDE_PRODUCTION_MTOE"},kt="PRIMARY_ENERGY_CONSUMPTION_MTOE",St={coal:"COAL_ELECTRICITY_GENERATION_TWH",gas:"GAS_ELECTRICITY_GENERATION_TWH",oil:"OIL_ELECTRICITY_GENERATION_TWH",hydro:"HYDRO_GENERATION_TWH",nuclear:"NUCLEAR_GENERATION_TWH",biofuelsWaste:"BIOFUELS_WASTE_ELECTRICITY_GENERATION_TWH",solarWindTideGeoth:"GEOTH_SOLAR_WIND_TIDE_ELECTRICITY_GENERATION_TWH"},Rt="ELECTRICITY_GENERATION_TWH";var At=function(e){var t=e.countryCode;return r.a.createElement("div",{className:"SummaryTab"},r.a.createElement(It,{title:"Primary energy consumption",countryCode:t,mapOfStatistics:jt,worldReference:kt}),r.a.createElement(It,{title:"Electricity generation by fuels",countryCode:t,mapOfStatistics:St,worldReference:Rt}))},wt=function(e){function t(){return Object(_e.a)(this,t),Object(Ie.a)(this,Object(je.a)(t).apply(this,arguments))}return Object(ke.a)(t,e),Object(Ne.a)(t,[{key:"componentWillMount",value:function(){var e=this.props;(0,e.load)(Object(M.a)(e,["load"]))}},{key:"componentDidUpdate",value:function(e){var t=Object(p.g)(["load"],e),a=this.props,n=a.load,r=Object(M.a)(a,["load"]);Object(p.a)(t,r)||n(r)}},{key:"render",value:function(){return null}}]),t}(n.Component);var Mt=function(e){return Object(i.b)(null,{load:e})(wt)},Pt=Mt(ie);function Lt(e,t){return{value:t.statisticCode}}var Yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,t="object"===typeof e?function(){return e}:e;return function(e){return Object(i.b)(function(e,a){var n=t(e,a),r=Object(p.k)(n);return a.perCapita&&r.push("POPULATION"),{data:H({mapOfCountryStatistics:n,countryCode:a.countryCode,perCapita:a.perCapita},e),statistics:Object(p.d)(function(t){return Y(t,e)},n),isLoaded:x({statisticCodes:r,countryCode:a.countryCode},e),statisticCodes:r,perCapita:a.perCapita||!1}})(function(t){return r.a.createElement(Ee.a,{spinning:!t.isLoaded},r.a.createElement(Pt,{statisticCodes:t.statisticCodes,countryCode:t.countryCode}),r.a.createElement(e,t))})}};function Dt(e){if(e.active){var t=e.payload,a=e.label,n=e.filter;return r.a.createElement("div",{className:"CustomTooltip"},r.a.createElement("div",null,a),r.a.createElement("div",null,t&&t.filter(n).map(function(e){return r.a.createElement("div",{key:e.dataKey,style:{lineHeight:"22px",color:e.color}},"".concat(e.name," : ").concat(Ue(e.value)," ").concat(e.unit))})))}return null}Dt.defaultProps={label:"",filter:function(e){return e}};var Wt=function(e){var t=e.fuel,a=e.statistics,n=e.data,o=a.conso,c=a.prod;o.unit.main!==c.unit.main&&console.warn("Production and consommation have not the same unit",[c.code,o.code]);var i=o.unit.main,u=n.map(function(e){var t=Number((e.prod-e.conso).toFixed(2));return{year:e.year,prod:e.prod,conso:e.conso,export:t>0?t:null,import:t<0?-t:null,base:Math.min(e.prod,e.conso)}});return r.a.createElement("div",{className:"ProdConsoChart"},r.a.createElement("h3",null,t),r.a.createElement(ft.a,{height:250,width:"100%"},r.a.createElement(Ot.a,{data:u,margin:{top:30,right:20,bottom:5,left:20}},r.a.createElement(mt.a,{type:"monotone",dot:!1,dataKey:"base",stroke:"none",stackId:"1",activeDot:!1,fill:"none",unit:i}),r.a.createElement(mt.a,{type:"monotone",dot:!1,unit:i,name:"".concat(t," export"),dataKey:"export",activeDot:!1,stroke:"green",strokeOpacity:0,fillOpacity:.8,fill:"green",stackId:"1"}),r.a.createElement(mt.a,{type:"monotone",dot:!1,unit:i,name:"".concat(t," import"),dataKey:"import",activeDot:!1,stroke:"red",strokeOpacity:0,fillOpacity:.8,fill:"red",stackId:"1"}),r.a.createElement(pt.a,{type:"monotone",dataKey:"conso",dot:!1,unit:i,stroke:"#96281b",strokeWidth:3,name:o.name}),r.a.createElement(pt.a,{type:"monotone",dataKey:"prod",dot:!1,unit:i,stroke:"black",strokeWidth:3,strokeOpacity:.7,name:c.name}),r.a.createElement(Et.a,{stroke:"#ccc",opacity:.2}),r.a.createElement(yt.a,{dataKey:"year",interval:9}),r.a.createElement(Ct.a,{label:{value:i,position:"insideTopLeft",offset:-20}}),r.a.createElement(vt.a,{tickFormatter:xe,content:function(e){return r.a.createElement(Dt,Object.assign({},e,{filter:function(e){return"base"!==e.name}}))}}))))},Ut=a(606);function xt(e){var t=e.data,a=e.statistics,n=e.color,o=e.perCapita,c=a.value,i=Ge(c.unit,o);return r.a.createElement("div",{className:"SelfSufficiency"},r.a.createElement("strong",null,"".concat(c.name," (").concat(i,")")),r.a.createElement(ft.a,{height:200},r.a.createElement(Ut.a,{data:t},r.a.createElement(pt.a,{type:"monotone",dataKey:"value",stroke:n,strokeWidth:3,dot:!1,name:c.name,unit:" ".concat(i)}),r.a.createElement(yt.a,{dataKey:"year",interval:9,padding:{left:5,right:5}}),r.a.createElement(Ct.a,{tickFormatter:xe}),r.a.createElement(vt.a,{content:gt}))))}xt.defaultProps={color:"#2c82c9"};var Gt=xt,Ht=Yt()(Gt),zt=Yt(function(e,t){return{prod:t.prodStatisticCode,conso:t.consoStatisticCode}})(Wt);var Bt=function(e){var t=e.countryCode;return r.a.createElement("div",{className:"IndependencyTab"},r.a.createElement(Te.a,null,r.a.createElement(ge.a,{md:8,sm:24},r.a.createElement(Ht,{statisticCode:"ENERGY_SELF_SUFFICIENCY",countryCode:t,color:"#f15a22"}))),r.a.createElement(Te.a,null,r.a.createElement("h3",null,"Imports/Exports"),r.a.createElement(ge.a,{md:8,sm:24},r.a.createElement(zt,{countryCode:t,prodStatisticCode:"COAL_PRODUCTION_MTOE",consoStatisticCode:"COAL_CONSUMPTION_MTOE",fuel:"Coal"})),r.a.createElement(ge.a,{md:8,sm:24},r.a.createElement(zt,{countryCode:t,prodStatisticCode:"OIL_PRODUCTION_MTOE",consoStatisticCode:"OIL_CONSUMPTION_MTOE",fuel:"Oil"})),r.a.createElement(ge.a,{md:8,sm:24},r.a.createElement(zt,{countryCode:t,prodStatisticCode:"GAS_PRODUCTION_MTOE",consoStatisticCode:"GAS_CONSUMPTION_MTOE",fuel:"Gas"}))))},Kt=["CO2_EMISSIONS_MT","CO2_INTENSITY_OF_ENERGY","ENERGY_INTENSITY"];var Ft=function(e){var t=e.countryCode;return r.a.createElement("div",{className:"ClimateTab"},r.a.createElement(Te.a,{gutter:20},Kt.map(function(e){return r.a.createElement(ge.a,{md:24/Kt.length,sm:24},r.a.createElement(Ht,{statisticCode:e,countryCode:t}))})))},qt=["POPULATION","GDP_2010_USD"].map(function(e){return Yt({value:e})(Gt)}),Vt=Object(E.a)(qt,2),Jt=Vt[0],$t=Vt[1],Qt=[{key:"summary",tab:"Summary"},{key:"independency",tab:"Energy (in)dependency"},{key:"climate",tab:"Climate change"}],Xt={summary:function(e){return r.a.createElement(At,{countryCode:e})},independency:function(e){return r.a.createElement(Bt,{countryCode:e})},climate:function(e){return r.a.createElement(Ft,{countryCode:e})}},Zt=function(e){function t(){var e;return Object(_e.a)(this,t),(e=Object(Ie.a)(this,Object(je.a)(t).call(this))).state={currentTab:"summary"},e}return Object(ke.a)(t,e),Object(Ne.a)(t,[{key:"setTab",value:function(e){this.setState({currentTab:e})}},{key:"render",value:function(){var e=this,t=this.props.country,a=this.state.currentTab;if(!t||t.disabled)return r.a.createElement(he.a,{to:"/"});var n=t.alpha2Code,o=We()?t.flagIcon:"";return r.a.createElement("div",{className:"CountryView"},r.a.createElement(Te.a,{gutter:16},r.a.createElement(ge.a,{xs:24,sm:24,md:18},r.a.createElement(ct.a,{title:r.a.createElement("h2",null,"".concat(o," ").concat(t.commonName))},r.a.createElement("div",null,"Capital: ".concat(t.capital)),r.a.createElement("div",null,"Area: ".concat(t.area.toLocaleString()," km\xb2")),r.a.createElement(Te.a,{style:{marginTop:"20px"},gutter:10},r.a.createElement(ge.a,{xs:24,sm:24,md:24,lg:12},r.a.createElement(Jt,{countryCode:n,color:"#2c82c9"})),r.a.createElement(ge.a,{xs:24,sm:24,md:24,lg:12},r.a.createElement($t,{countryCode:n,color:"#f22613",perCapita:!0}))))),r.a.createElement(ge.a,{xs:0,sm:0,md:6},r.a.createElement("img",{style:{width:"100%",marginBottom:"20px",maxHeight:"180px"},src:"/img/flags/".concat(t.alpha3Code.toLowerCase(),".svg"),alt:"Flag of ".concat(t.commonName)}),r.a.createElement(dt,{country:t}))),r.a.createElement(Te.a,null,r.a.createElement(ct.a,{tabList:Qt,activeTabKey:a,onTabChange:function(t){return e.setTab(t)}},Xt[a](n))))}}]),t}(n.Component);Zt.defaultProps={country:null};var ea=Object(i.b)(function(e,t){return{country:S(t.match.params.countryCode,e)}})(Zt);var ta=function(){return r.a.createElement("div",{className:"AboutView"},r.a.createElement(Te.a,null,r.a.createElement(ge.a,{md:16},r.a.createElement(ct.a,{title:r.a.createElement("h1",null,"About")},r.a.createElement("p",null,"The goals of this app are:",r.a.createElement("ul",null,r.a.createElement("li",null,"to ease the vizualization of energy and economy data"),r.a.createElement("li",null,"gather different data from different place"),r.a.createElement("li",null,"propose an open-source project to do so, in order to let everybody contribute to a better understanding of these data."))),r.a.createElement("p",null,"This website has been developped by ",r.a.createElement("a",{href:"https://github.com/ewoken",rel:"noopener noreferrer"},"ewoken"),".")))))},aa=(a(595),a(88)),na=a(607),ra=(a(598),a(21));var oa=function(){return r.a.createElement("a",{href:"https://github.com/ewoken/world-data-app",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ra.a,{type:"github",theme:"outlined"}),"GitHub")};var ca=function(e){var t=e.countries,a=e.goTo;return r.a.createElement(aa.a,{mode:"horizontal",theme:"dark",selectable:!1,style:{lineHeight:"64px"}},r.a.createElement(aa.a.Item,{key:"home"},r.a.createElement(na.a,{to:"/home"},r.a.createElement("strong",null,"World Energy Data"))),r.a.createElement(aa.a.Item,null,r.a.createElement(Xe.a,{id:"mainCountrySelect",placeholder:"Countries",optionFilterProp:"title",showSearch:!We(),onSelect:function(e){a("/country/".concat(e))}},Object(p.i)(function(e){return e.commonName},t).map(function(e){return r.a.createElement(Xe.a.Option,{key:e.alpha2Code,disabled:e.disabled,title:"".concat(e.commonName," (").concat(e.alpha3Code,")")},"".concat(e.commonName).concat(e.disabled?" (No data)":""))}))),r.a.createElement(aa.a.Item,{key:"about"},r.a.createElement(na.a,{to:"/about"},"About")),r.a.createElement(aa.a.Item,null,r.a.createElement(oa,null)))},ia=Mt(function(){return function(e){return e({type:g}),h().then(function(t){return e(_({data:Object(p.c)(Object(p.h)("alpha2Code"),t)}))}).catch(function(t){return e(_({errors:t}))})}}),ua=Mt(function(){return function(e){return e({type:Q}),K("/data/statistics.json").then(function(e){return e.concat($)}).then(function(t){var a=t.map(function(e){return Object(m.a)({},e,{values:{}})});e(ne({data:Object(p.c)(Object(p.h)("code"),a)}))}).catch(function(t){return e(ne({errors:t}))})}}),la=Object(Ce.a)(Object(i.b)(function(e,t){return{countries:j(e),goTo:function(e){return t.history.push(e)}}})(ca));var sa=Object(Ce.a)(Object(i.b)(function(e){return{isLoaded:I(e)&&P(e)}})(function(e){var t=e.isLoaded;return r.a.createElement("div",{className:"AppLayout"},r.a.createElement(ia,null),r.a.createElement(ua,null),r.a.createElement(Ee.a,{size:"large",spinning:!t},r.a.createElement(ye.a,null,r.a.createElement(ye.a.Header,{style:{position:"fixed",zIndex:10,width:"100%"}},r.a.createElement(la,null)),r.a.createElement(ye.a.Content,null,!t&&r.a.createElement("div",{className:"AppLayout__splash"}),t&&r.a.createElement(ve.a,null,r.a.createElement(be.a,{path:"/home",exact:!0,component:ot}),r.a.createElement(be.a,{path:"/country/:countryCode",exact:!0,component:ea}),r.a.createElement(be.a,{path:"/about",exact:!0,component:ta}),r.a.createElement(be.a,{component:function(){return r.a.createElement(he.a,{to:{pathname:"/home"}})}}))),r.a.createElement(ye.a.Footer,null,"Sources: IEA, World Data Bank"))))}));var da=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:Oe},r.a.createElement(u.a,null,r.a.createElement(sa,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(da,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[342,2,1]]]);
//# sourceMappingURL=main.1040a33f.chunk.js.map