(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{337:function(e,t,a){e.exports=a(597)},342:function(e,t,a){},597:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),c=a.n(o),i=(a(342),a(41)),l=a(609),u=a(110),s=a(304),d=a(305),m=a(26),p=a(24),f=a(330),v=a(240),y=a(241),C=["AD","LI","MH","FM","MC","PW","SM","TV","VA"];function b(e){var t=y.objects.countries.geometries.find(function(t){return t.id===e.ccn3});return{id:Number(e.ccn3),alpha2Code:e.cca2,commonName:e.name.common,alpha3Code:e.cca3,numericCode:e.ccn3,region:e.region,subregion:e.subregion,isIndependent:e.independent,area:e.area,capital:e.capital[0],latlng:e.latlng,disabled:C.includes(e.cca2),geojson:t&&Object(f.a)(y,t)}}var h=function(){return Promise.resolve(v.filter(function(e){return e.independent}).map(b))},O="COUNTRIES_LOAD_ACTION",E="COUNTRIES_RECEIVE_ACTION";function g(e){var t=e.data,a=e.errors;return{type:E,data:t,errors:a}}var j={loading:!1,loaded:!1,errors:null,data:{}};function k(e){return e.countries.loaded}function S(e){return Object(p.i)(e.countries.data)}function N(e,t){return t.countries.data[e]}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)({},e,{loading:!0});case E:return Object(m.a)({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});default:return e}},T=a(79),_=a(20);function I(e,t){return fetch(e,t).then(function(e){return e.json()})}var M="STATISTICS_LOAD_ACTION",x="STATISTICS_RECEIVE_ACTION",A="COUNTRY_STATISTIC_LOAD_ACTION",L="COUNTRY_STATISTIC_RECEIVE_ACTION",P="STATISTIC_LOAD_ALL_COUNTRIES_ACTION",R="STATISTIC_RECEIVE_ALL_COUNTRIES_ACTION";function D(e){var t=e.data,a=e.errors;return{type:x,data:t,errors:a}}function U(e){var t=e.countryCode,a=e.statisticCode,n=e.data,r=e.errors;return{type:L,countryCode:t,statisticCode:a,data:n,errors:r}}function Y(e){var t=e.statisticCode,a=e.countries,n=e.data,r=e.errors;return{type:R,countries:a,statisticCode:t,data:n,errors:r}}var z={loading:!0,loaded:!1,errors:null,values:[]};function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;switch(t.type){case L:return{loading:!1,loaded:!t.errors,errors:t.errors||null,values:t.data||[]};case R:return{loading:!1,loaded:!t.errors,errors:t.errors||null,values:t.data&&t.data.filter(function(e){return e.countryCode===a}).map(Object(p.f)(["countryCode"]))||[]};default:return e}}var W={loading:!1,loaded:!1,errors:null,data:{}};function K(e){return e.statistics.loaded}function B(e){return Object(p.i)(e.statistics.data)}function F(e,t){return t.statistics.data[e]}function G(e,t){var a=e.statisticCode,n=e.countryCode;return F(a,t).values[n]}function H(e,t){var a=G({statisticCode:e.statisticCode,countryCode:e.countryCode},t);return!!a&&a.loaded}function V(e,t){var a=e.statisticCodes,n=e.countryCode;return a.every(function(e){return H({statisticCode:e,countryCode:n},t)})}function J(e,t){var a,n=e.mapOfStatisticCodes,r=e.countryCode,o=Object(p.c)(function(e){return function(e,t){var a=G({statisticCode:e.statisticCode,countryCode:e.countryCode},t);return a?a.values:[]}({statisticCode:e,countryCode:r},t)},n),c=Object(p.i)(o),i=c.map(function(e){return Math.min.apply(Math,Object(T.a)(e.map(function(e){return e.year})))}),l=c.map(function(e){return Math.max.apply(Math,Object(T.a)(e.map(function(e){return e.year})))}),u=Math.max.apply(Math,Object(T.a)(i)),s=Math.min.apply(Math,Object(T.a)(l)),d=Object(p.d)(function(e,t){return e.map(function(e){var a=e.year,n=e.value;return Object(_.a)({year:a},t,n)})},o),m=(a=[]).concat.apply(a,Object(T.a)(Object(p.i)(d))),f=Object(p.a)(function(e){return e.year},m);return Object.keys(f).sort().map(function(e){var t=f[e];return Object(p.e)(t)}).filter(function(e){return u<=e.year&&e.year<=s})}function $(e,t){var a=e.statisticCode,n=e.year,r=e.perCapita,o=S(t),c=F(a,t),i=Object(m.a)({value:a},r?{pop:"POPULATION"}:{});return o.map(function(e){var a=e.alpha2Code,o=J({mapOfStatisticCodes:i,countryCode:a},t).find(function(e){return e.year===n});return{countryCode:a,value:!o||null===o.value||!o.pop&&r?null:r?o.value*c.unit.factor/o.pop:o.value}})}function Q(e){var t=e.statisticCode,a=e.countryCode;return function(e,n){var r=n();H({statisticCode:t,countryCode:a},r)||(e(function(e,t){return{type:A,statisticCode:e,countryCode:t}}(t,a)),function(e,t){return I("/data/".concat(e,"/").concat(t,".json"))}(t,a).then(function(n){var r=n.map(function(e){return{year:e.year,value:e.value}});e(U({countryCode:a,statisticCode:t,data:r}))}).catch(function(n){return e(U({statisticCode:t,countryCode:a,errors:n}))}))}}function X(e){var t=e.statisticCodes,a=e.countryCode;return function(e,n){return Promise.all(t.map(function(t){return Q({statisticCode:t,countryCode:a})(e,n)}))}}function Z(e){return function(t,a){var n=S(a());n.every(function(t){return H({statisticCode:e,countryCode:t.alpha2Code},a())})||(t(function(e,t){return{type:P,statisticCode:e,countries:t}}(e,n)),function(e){return I("/data/".concat(e,"/all.json"))}(e).then(function(a){return t(Y({statisticCode:e,countries:n,data:a}))}).catch(function(a){return t(Y({statisticCode:e,countries:n,errors:a}))}))}}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(m.a)({},e,{loading:!0});case x:return Object(m.a)({},e,{loading:!1,loaded:!t.errors,errors:t.errors||null,data:t.data||{}});case A:case L:var a=e.data[t.statisticCode],n=a.values[t.countryCode];return Object(m.a)({},e,{data:Object(m.a)({},e.data,Object(_.a)({},t.statisticCode,Object(m.a)({},a,{values:Object(m.a)({},a.values,Object(_.a)({},t.countryCode,q(n,t)))})))});case P:var r=e.data[t.statisticCode];return Object(m.a)({},e,{data:Object(m.a)({},e.data,Object(_.a)({},t.statisticCode,Object(m.a)({},r,{values:Object(m.a)({},r.values,t.countries.reduce(function(e,a){return Object(m.a)({},e,Object(_.a)({},a.alpha2Code,q(void 0,t,a.alpha2Code)))},{}))})))});case R:var o=e.data[t.statisticCode];return Object(m.a)({},e,{data:Object(m.a)({},e.data,Object(_.a)({},t.statisticCode,Object(m.a)({},o,{values:Object(m.a)({},o.values,t.countries.reduce(function(e,a){return Object(m.a)({},e,Object(_.a)({},a.alpha2Code,q(o.values[a.alpha2Code],t,a.alpha2Code)))},{}))})))});default:return e}},te=Object(u.combineReducers)({countries:w,statistics:ee}),ae=[Object(u.applyMiddleware)(d.a)],ne=Object(s.composeWithDevTools)({}).apply(void 0,ae),re=Object(u.createStore)(te,ne),oe=(a(347),a(152)),ce=(a(154),a(95)),ie=a(612),le=a(613),ue=a(604),se=a(608),de=(a(205),a(27)),me=(a(206),a(51)),pe=a(69),fe=a(59),ve=a(74),ye=a(70),Ce=a(75),be=a(82),he=a(605),Oe=a(606),Ee=a(611),ge=a(0),je=a.n(ge),ke=(je.a.shape({alpha2Code:je.a.string.isRequired,alpha3Code:je.a.string.isRequired,commonName:je.a.string.isRequired,capital:je.a.string.isRequired,area:je.a.number.isRequired,latlng:je.a.arrayOf(je.a.number).isRequired,geojson:je.a.object}),je.a.shape({name:je.a.string.isRequired,unit:je.a.shape({main:je.a.string.isRequired,base:je.a.string.isRequired}),perCapita:je.a.bool,startingYear:je.a.number.isRequired,endingYear:je.a.number.isRequired}),je.a.arrayOf(je.a.shape({year:je.a.number.isRequired,value:je.a.number.isRequired})),a(332)),Se=a(40),Ne=a.n(Se);function we(e){var t=Object(ke.a)(e,2),a=t[0],n=t[1];return a<-168.51?Ne.a.latLng(n,360+a):Ne.a.latLng(n,a).wrap()}function Te(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(t=!0),t}var _e=v.filter(function(e){return!e.independent}).map(b),Ie="540px",Me="rgb(107, 185, 240)",xe="#777",Ae="linear-gradient(to right, ".concat(Me,", ").concat("#001529",")"),Le=Object(be.c)(Me,"#001529"),Pe=function(e){return Math.log(e)};var Re=function(e){var t=e.countries,a=e.data,n=e.currentStatistic,o=e.currentYear,c=e.perCapita,i=Math.max.apply(Math,Object(T.a)(a.map(function(e){return e.value}))),l=function(e){var t=Math.max.apply(Math,Object(T.a)(e.map(function(e){return e.value}))),a=Math.min.apply(Math,Object(T.a)(e.filter(function(e){return e.value}).map(function(e){return e.value}))),n=Object(p.c)(function(e){return e.value},Object(p.b)(function(e){return e.countryCode},e));return Object(p.c)(function(e){return null===e||void 0===e?{color:xe,value:"NA"}:0===e?{color:Me,value:0}:{color:Le(Pe(e/a)/Pe(t/a)),value:e}},n)}(a);return r.a.createElement("div",{className:"WorldMap"},r.a.createElement("div",{className:"WorldMap__yearLabel"},o),r.a.createElement(he.a,{zoom:1,center:[0,0],style:{height:Ie,zIndex:0},maxBounds:[[90,-180],[-90,180]],dragging:!Te()},t.map(function(e){var t=l[e.alpha2Code],a=t.value,o=t.color;return r.a.createElement(Oe.a,{key:e.alpha2Code+n.code,data:e.geojson,coordsToLatLng:we,ref:function(e){return e&&e.leafletElement.setStyle({color:o,fillColor:o,fillOpacity:1})}},r.a.createElement(Ee.a,{sticky:!0},"".concat(e.commonName,": ").concat(a.toLocaleString())))}),_e.map(function(e){return r.a.createElement(Oe.a,{key:e.alpha2Code,data:e.geojson,style:{fillOpacity:1,stroke:!1,fillColor:xe,color:xe}})})),r.a.createElement("div",{className:"WorldMap__legend"},r.a.createElement("div",{className:"WorldMap__legend__gradient"},r.a.createElement("div",null,"".concat(n.name," (").concat(c?"".concat(n.unit.base,"/capita"):n.unit.main,")")),r.a.createElement("div",{className:"WorldMap__legend__gradientColor",style:{background:Ae}}),r.a.createElement("div",{className:"WorldMap__legend__gradientRange"},r.a.createElement("div",null,"0"),r.a.createElement("div",null,i.toLocaleString()))),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0"),r.a.createElement("div",{className:"WorldMap__legend__NA__square",style:{backgroundColor:xe}}),r.a.createElement("div",null,"NA"))))},De=(a(598),a(328)),Ue=(a(207),a(50)),Ye=(a(370),a(331)),ze=(a(208),a(66)),qe=a(236),We=a.n(qe);var Ke=function(e){var t,a=e.data,n=e.countries,o=e.statistics,c=e.currentStatistic,i=e.currentYear,l=e.perCapita,u=e.onRowClick,s=e.setStatistic,d=e.setYear,m=e.setPerCapita,f=a.filter(function(e){return null!==e.value}).map(function(e){return{countryCode:e.countryCode,country:n.find(function(t){return t.alpha2Code===e.countryCode}).commonName,value:e.value}});return r.a.createElement("div",{className:"StatisticExplorer"},r.a.createElement(ze.a,{style:{width:"100%"},placeholder:"Statistics",optionFilterProp:"title",value:c.code,showSearch:!Te,onChange:function(e){return s(e)}},Object(p.h)(function(e){return e.name},o).map(function(e){return r.a.createElement(ze.a.Option,{key:e.code,title:e.name},"".concat(e.name))})),r.a.createElement(Ye.a,{className:"hideOnMobile",defaultValue:i,min:c.startingYear,max:c.endingYear,onAfterChange:function(e){return d(e)},onChange:We()(d,300),included:!1,marks:(t={},Object(_.a)(t,c.startingYear,{style:{},label:"".concat(c.startingYear)}),Object(_.a)(t,c.endingYear,{style:{width:"auto",margin:"auto",left:"",right:"-15px"},label:"".concat(c.endingYear)}),t)}),r.a.createElement(Ue.a.Group,{style:{marginBottom:"10px"},buttonStyle:"solid",size:"small",value:l,onChange:function(e){return m(e.target.value)}},r.a.createElement(Ue.a.Button,{value:!1},"Absolute"),r.a.createElement(Ue.a.Button,{value:!0,disabled:"POPULATION"===c.code},"Per capita")),r.a.createElement(De.a,{className:"hideOnMobile",rowKey:"countryCode",size:"small",pagination:!1,dataSource:f,scroll:{y:380},columns:[{title:"Country",dataIndex:"country",sorter:function(e,t){return e.country.localeCompare(t.country)},width:"auto",render:function(e){return r.a.createElement("a",{href:"javascript:;"},e)}},{title:l?"".concat(c.unit.base,"/capita"):c.unit.main,dataIndex:"value",defaultSortOrder:"descend",sorter:function(e,t){return e.value-t.value},render:function(e){return e.toLocaleString()},align:"right"}],onRow:function(e){return{onClick:function(){return u(e)}}}}))},Be=Object(i.b)(function(e,t){var a=t.statisticCode,n=t.currentYear,r=t.perCapita;return{countries:S(e),currentStatistic:F(a,e),data:$({statisticCode:a,year:n,perCapita:r},e)}})(Re),Fe=Object(i.b)(function(e,t){var a=t.statisticCode,n=t.currentYear,r=t.perCapita;return{countries:S(e),statistics:B(e),currentStatistic:F(a,e),data:$({statisticCode:a,year:n,perCapita:r},e)}})(Ke),Ge=function(e){function t(){var e;return Object(pe.a)(this,t),(e=Object(ve.a)(this,Object(ye.a)(t).call(this))).state={statisticCode:"PRIMARY_ENERGY_MTOE",currentYear:2010,perCapita:!1},e}return Object(Ce.a)(t,e),Object(fe.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.statisticCode;(0,this.props.loadStatistic)(e)}},{key:"setStatistic",value:function(e){(0,this.props.loadStatistic)(e);var t=Object(m.a)({statisticCode:e},"POPULATION"===e?{perCapita:!1}:{});this.setState(t)}},{key:"setYear",value:function(e){this.setState({currentYear:e})}},{key:"setPerCapita",value:function(e){var t=this.props.loadStatistic;e&&t("POPULATION"),this.setState({perCapita:e})}},{key:"render",value:function(){var e=this,t=this.props.history.push,a=this.state,n=a.currentYear,o=a.statisticCode,c=a.perCapita;return r.a.createElement("div",{className:"HomeView"},r.a.createElement(me.a,null,r.a.createElement("h1",null,"Welcome to the World Energy Data Explorer")),r.a.createElement(me.a,{gutter:{md:20}},r.a.createElement(de.a,{md:16},r.a.createElement(Be,{statisticCode:o,currentYear:n,perCapita:c})),r.a.createElement(de.a,{md:8},r.a.createElement(Fe,{statisticCode:o,currentYear:n,perCapita:c,onRowClick:function(e){return t("country/".concat(e.countryCode))},setYear:function(t){return e.setYear(t)},setStatistic:function(t){return e.setStatistic(t)},setPerCapita:function(t){return e.setPerCapita(t)}}))))}}]),t}(n.Component),He=Object(i.b)(null,{loadStatistic:Z})(Ge),Ve=a(509),Je=a(575),$e=a(601),Qe=a(607),Xe=a(602),Ze=a(584),et=a(585),tt=a(600),at=a(301);function nt(e){var t=e.active,a=e.payload;if(t&&a&&a.length>0){var n=e.label,o=a[0].unit,c=a.reduce(function(e,t){return e+t.value},0);return r.a.createElement("div",{className:"CustomTooltip"},r.a.createElement("div",null,n),r.a.createElement("div",null,a&&a.map(function(e){return r.a.createElement("div",{key:e.dataKey,style:{lineHeight:"22px",color:e.color}},"".concat(e.name," : ").concat(e.value.toLocaleString()," ").concat(e.unit))}),r.a.createElement("div",{key:"total",style:{lineHeight:"22px",color:"red"}},"Total : ".concat(Number(c.toFixed(2)).toLocaleString()," ").concat(o))))}return null}nt.defaultProps={label:""};var rt=function(e){var t=e.data,a=e.stacked,n=e.setStacked,o=e.perCapita,c=e.setPerCapita,i=o?" toe/capita":" Mtoe",l=t.map(function(e){return Object(m.a)({},e,{total:Number((e.coal+e.oil+e.gas+e.hydro+e.nuclear+e.renewables).toFixed(2))})}),u=o?l.map(function(e){return Object(m.a)({},e,Object(p.c)(function(t){return Number((t*Math.pow(10,6)/e.population).toFixed(2))},Object(p.f)(["year","population"],e)))}):l,s=t.some(function(e){return e.coal>=.01}),d=t.some(function(e){return e.oil>=.01}),f=t.some(function(e){return e.gas>=.01}),v=t.some(function(e){return e.nuclear>=.01}),y=t.some(function(e){return e.hydro>=.01}),C=t.some(function(e){return e.renewables>=.01}),b=a?Ve.a:Je.a;return r.a.createElement("div",{className:"PrimaryEnergyChart"},r.a.createElement("h3",{className:"PrimaryEnergyChart__title"},"Primary Energy Consumption"),r.a.createElement("div",null,r.a.createElement(Ue.a.Group,{buttonStyle:"solid",size:"small",value:a,onChange:function(e){return n(e.target.value)},style:{marginRight:"10px"}},r.a.createElement(Ue.a.Button,{value:!0},"Stacked"),r.a.createElement(Ue.a.Button,{value:!1},"Split")),r.a.createElement(Ue.a.Group,{buttonStyle:"solid",size:"small",value:o,onChange:function(e){return c(e.target.value)}},r.a.createElement(Ue.a.Button,{value:!1},"Absolute"),r.a.createElement(Ue.a.Button,{value:!0},"Per capita"))),r.a.createElement($e.a,{height:300,width:"100%"},r.a.createElement(Qe.a,{data:u,margin:{top:10,right:0,bottom:10,left:0}},s&&r.a.createElement(b,{type:"monotone",dataKey:"coal",dot:!1,activeDot:!1,name:"Coal",stroke:"black",fill:"black",stackId:"1",unit:i}),d&&r.a.createElement(b,{type:"monotone",dataKey:"oil",dot:!1,activeDot:!1,name:"Oil",stroke:"grey",fill:"grey",stackId:"1",unit:i}),f&&r.a.createElement(b,{type:"monotone",dataKey:"gas",dot:!1,activeDot:!1,name:"Gas",stroke:"orange",fill:"orange",stackId:"1",unit:i}),v&&r.a.createElement(b,{type:"monotone",dataKey:"nuclear",dot:!1,activeDot:!1,name:"Nuclear",stroke:"purple",fill:"purple",stackId:"1",unit:i}),y&&r.a.createElement(b,{type:"monotone",dataKey:"hydro",dot:!1,activeDot:!1,name:"Hydroelectricity",stroke:"blue",fill:"blue",stackId:"1",unit:i}),C&&r.a.createElement(b,{type:"monotone",dataKey:"renewables",dot:!1,activeDot:!1,name:"Other renewables",stroke:"green",fill:"green",stackId:"1",unit:i}),r.a.createElement(Xe.a,{stroke:"#ccc",opacity:.2}),r.a.createElement(Ze.a,{dataKey:"year",interval:4}),r.a.createElement(et.a,{label:{value:i,angle:-90,position:"insideLeft"}}),r.a.createElement(tt.a,{content:nt}),r.a.createElement(at.a,{iconType:"circle"}))))},ot={coal:"COAL_CONSUMPTION_MTOE",gas:"GAS_CONSUMPTION_MTOE",oil:"OIL_CONSUMPTION_MTOE",hydro:"HYDRO_CONSUMPTION_MTOE",nuclear:"NUCLEAR_CONSUMPTION_MTOE",renewables:"NON_HYDRO_RENEWABLES_CONSUMPTION_MTOE",population:"POPULATION"},ct=Object(p.i)(ot),it=Object(i.b)(function(e,t){var a=t.countryCode;return{data:J({mapOfStatisticCodes:ot,countryCode:a},e)}})(rt),lt=function(e){function t(){var e;return Object(pe.a)(this,t),(e=Object(ve.a)(this,Object(ye.a)(t).call(this))).state={stacked:!0,perCapita:!1},e}return Object(Ce.a)(t,e),Object(fe.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.countryCode;(0,e.loadStatistics)({statisticCodes:ct,countryCode:t})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.countryCode,n=t.loadStatistics;a!==e.countryCode&&n({statisticCodes:ct,countryCode:a})}},{key:"setStacked",value:function(e){this.setState({stacked:e})}},{key:"setPerCapita",value:function(e){this.setState({perCapita:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.isLoaded,n=t.countryCode,o=this.state,c=o.stacked,i=o.perCapita;return r.a.createElement(ce.a,{spinning:!a},r.a.createElement(it,{countryCode:n,setStacked:function(t){return e.setStacked(t)},setPerCapita:function(t){return e.setPerCapita(t)},stacked:c,perCapita:i}))}}]),t}(n.Component),ut=Object(i.b)(function(e,t){return{isLoaded:V({statisticCodes:ct,countryCode:t.countryCode},e)}},{loadStatistics:X})(lt);function st(e){if(e.active){var t=e.payload,a=e.label,n=e.filter;return r.a.createElement("div",{className:"CustomTooltip"},r.a.createElement("div",null,a),r.a.createElement("div",null,t&&t.filter(n).map(function(e){return r.a.createElement("div",{key:e.dataKey,style:{lineHeight:"22px",color:e.color}},"".concat(e.name," : ").concat(e.value.toLocaleString()," ").concat(e.unit))})))}return null}st.defaultProps={label:"",filter:function(e){return e}};var dt=function(e){var t=e.fuel,a=e.prodStatistic,n=e.consoStatistic,o=e.data;n.unit!==a.unit&&console.warn("Production and consommation have not the same unit",[a.code,n.code]);var c=n.unit.main,i=o.map(function(e){var t=Number((e.prod-e.conso).toFixed(2));return{year:e.year,prod:e.prod,conso:e.conso,export:t>0?t:null,import:t<0?-t:null,base:Math.min(e.prod,e.conso)}});return r.a.createElement("div",{className:"ProdConsoChart"},r.a.createElement("h3",null,t),r.a.createElement($e.a,{height:250,width:"100%"},r.a.createElement(Qe.a,{data:i,margin:{top:30,right:20,bottom:5,left:20}},r.a.createElement(Ve.a,{type:"monotone",dot:!1,dataKey:"base",stroke:"none",stackId:"1",activeDot:!1,fill:"none",unit:c}),r.a.createElement(Ve.a,{type:"monotone",dot:!1,unit:c,name:"".concat(t," export"),dataKey:"export",activeDot:!1,stroke:"green",strokeOpacity:0,fillOpacity:1,fill:"green",stackId:"1"}),r.a.createElement(Ve.a,{type:"monotone",dot:!1,unit:c,name:"".concat(t," import"),dataKey:"import",activeDot:!1,stroke:"red",strokeOpacity:0,fillOpacity:1,fill:"red",stackId:"1"}),r.a.createElement(Je.a,{type:"monotone",dataKey:"conso",dot:!1,unit:c,stroke:"#880000",strokeWidth:3,name:n.name}),r.a.createElement(Je.a,{type:"monotone",dataKey:"prod",dot:!1,unit:c,stroke:"black",strokeWidth:3,strokeOpacity:.7,name:a.name}),r.a.createElement(Xe.a,{stroke:"#ccc",opacity:.2}),r.a.createElement(Ze.a,{dataKey:"year",interval:9}),r.a.createElement(et.a,{label:{value:c,position:"insideTopLeft",offset:-20}}),r.a.createElement(tt.a,{content:function(e){return r.a.createElement(st,Object.assign({},e,{filter:function(e){return"base"!==e.name}}))}}))))},mt=Object(i.b)(function(e,t){return{prodStatistic:F(t.prodStatisticCode,e),consoStatistic:F(t.consoStatisticCode,e),data:J({mapOfStatisticCodes:{prod:t.prodStatisticCode,conso:t.consoStatisticCode},countryCode:t.countryCode},e)}})(dt),pt=function(e){function t(){return Object(pe.a)(this,t),Object(ve.a)(this,Object(ye.a)(t).apply(this,arguments))}return Object(Ce.a)(t,e),Object(fe.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.consoStatisticCode,a=e.prodStatisticCode,n=e.countryCode;(0,e.loadStatistics)({statisticCodes:[t,a],countryCode:n})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.countryCode,n=t.loadStatistics,r=[t.consoStatisticCode,t.prodStatisticCode];a!==e.countryCode&&n({statisticCodes:r,countryCode:a})}},{key:"render",value:function(){var e=this.props,t=e.isLoaded,a=e.fuel,n=e.consoStatisticCode,o=e.prodStatisticCode,c=e.countryCode;return r.a.createElement(ce.a,{spinning:!t},r.a.createElement(mt,{fuel:a,consoStatisticCode:n,prodStatisticCode:o,countryCode:c}))}}]),t}(n.Component),ft=Object(i.b)(function(e,t){return{isLoaded:V({statisticCodes:[t.prodStatisticCode,t.consoStatisticCode],countryCode:t.countryCode},e)}},{loadStatistics:X})(pt),vt=a(71),yt=a(610),Ct=function(e){function t(){return Object(pe.a)(this,t),Object(ve.a)(this,Object(ye.a)(t).apply(this,arguments))}return Object(Ce.a)(t,e),Object(fe.a)(t,[{key:"componentDidMount",value:function(){this.createGeoJSON()}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;e.data!==t&&(this.geojson.remove(),this.createGeoJSON())}},{key:"createGeoJSON",value:function(){var e=this.props,t=e.leaflet.map,a=e.data;this.geojson=Ne.a.geoJSON(a,{coordsToLatLng:we}).addTo(t);var n=this.geojson.getBounds();t.flyToBounds(n)}},{key:"render",value:function(){return null}}]),t}(n.Component),bt=Object(vt.b)(Ct);var ht=function(e){var t=e.country;return r.a.createElement("div",{className:"CountryMap"},r.a.createElement(he.a,{center:t.latlng,zoom:2,style:{height:"300px",zIndex:0}},r.a.createElement(yt.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.geojson&&r.a.createElement(bt,{data:t.geojson})))};function Ot(e){var t=e.country;if(!t||t.disabled)return r.a.createElement(se.a,{to:"/"});var a=t.alpha2Code;return r.a.createElement("div",{className:"CountryView"},r.a.createElement(me.a,{gutter:16},r.a.createElement(de.a,{xs:24,sm:24,md:18},r.a.createElement("h2",null,t.commonName),r.a.createElement("div",null,"Capital: ".concat(t.capital)),r.a.createElement("div",null,"Area: ".concat(t.area.toLocaleString()," km\xb2")),r.a.createElement("div",null,r.a.createElement(ut,{countryCode:t.alpha2Code}))),r.a.createElement(de.a,{xs:0,sm:0,md:6},r.a.createElement("img",{style:{height:"100px"},src:"/img/flags/".concat(t.alpha3Code.toLowerCase(),".svg"),alt:"Flag of ".concat(t.commonName)}),r.a.createElement(ht,{country:t}))),r.a.createElement(me.a,null,r.a.createElement("h3",null,"Imports/Exports"),r.a.createElement(de.a,{md:8,sm:24},r.a.createElement(ft,{countryCode:a,prodStatisticCode:"COAL_PRODUCTION_MTOE",consoStatisticCode:"COAL_CONSUMPTION_MTOE",fuel:"Coal"})),r.a.createElement(de.a,{md:8,sm:24},r.a.createElement(ft,{countryCode:a,prodStatisticCode:"OIL_PRODUCTION_MTOE",consoStatisticCode:"OIL_CONSUMPTION_MTOE",fuel:"Oil"})),r.a.createElement(de.a,{md:8,sm:24},r.a.createElement(ft,{countryCode:a,prodStatisticCode:"GAS_PRODUCTION_MTOE",consoStatisticCode:"GAS_CONSUMPTION_MTOE",fuel:"Gas"}))))}Ot.defaultProps={country:null};var Et=Object(i.b)(function(e,t){return{country:N(t.match.params.countryCode,e)}})(Ot),gt=(a(599),a(329));var jt=function(){return r.a.createElement("div",{className:"AboutView"},r.a.createElement(me.a,null,r.a.createElement(de.a,{md:16},r.a.createElement(gt.a,{title:r.a.createElement("h1",null,"About")},r.a.createElement("p",null,"The goals of this app are:",r.a.createElement("ul",null,r.a.createElement("li",null,"to ease the vizualization of energy and economy data"),r.a.createElement("li",null,"gather different data from different place"),r.a.createElement("li",null,"propose an open-source project to do so, in order to let everybody contribute to a better understanding of these data."))),r.a.createElement("p",null,"This website has been developped by ",r.a.createElement("a",{href:"https://github.com/ewoken",rel:"noopener noreferrer"},"ewoken"),".")))))},kt=(a(591),a(88)),St=a(603),Nt=(a(594),a(19));var wt=function(){return r.a.createElement("a",{href:"https://github.com/ewoken/world-data-app",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Nt.a,{type:"github",theme:"outlined"}),"GitHub")};var Tt=function(e){var t=e.countries,a=e.goTo;return r.a.createElement(kt.a,{mode:"horizontal",theme:"dark",selectable:!1,style:{lineHeight:"64px"}},r.a.createElement(kt.a.Item,{key:"home"},r.a.createElement(St.a,{to:"/home"},r.a.createElement("strong",null,"World Energy Data"))),r.a.createElement(kt.a.Item,null,r.a.createElement(ze.a,{id:"mainCountrySelect",placeholder:"Countries",optionFilterProp:"title",showSearch:!Te(),onSelect:function(e){a("/country/".concat(e))}},Object(p.h)(function(e){return e.commonName},t).map(function(e){return r.a.createElement(ze.a.Option,{key:e.alpha2Code,disabled:e.disabled,title:"".concat(e.commonName," (").concat(e.alpha3Code,")")},"".concat(e.commonName).concat(e.disabled?" (No data)":""))}))),r.a.createElement(kt.a.Item,{key:"home"},r.a.createElement(St.a,{to:"/about"},"About")),r.a.createElement(kt.a.Item,null,r.a.createElement(wt,null)))},_t=a(245);function It(e){var t=e.loadFunctions,a=e.isLoadedSelector,o=void 0===a?function(){return!1}:a,c=e.mapStateToProps,l=void 0===c?function(){}:c,u=function(e){return function(a,n){return t.map(function(t){return t(e)(a,n)})}};return function(e){var t=e?Object(i.b)(l)(e):function(){return null};return Object(i.b)(function(e,t){return{isLoaded:o(t,e)}},{load:u})(function(e){function a(){return Object(pe.a)(this,a),Object(ve.a)(this,Object(ye.a)(a).apply(this,arguments))}return Object(Ce.a)(a,e),Object(fe.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.load;e.isLoaded;t(Object(_t.a)(e,["load","isLoaded"]))}},{key:"render",value:function(){var e=this.props,a=e.isLoaded,n=(e.load,Object(_t.a)(e,["isLoaded","load"]));return a?r.a.createElement(t,n):null}}]),a}(n.Component))}}var Mt=It({loadFunctions:[function(){return function(e){return e({type:O}),h().then(function(t){return e(g({data:Object(p.b)(Object(p.g)("alpha2Code"),t)}))}).catch(function(t){return e(g({errors:t}))})}}]})(),xt=It({loadFunctions:[function(){return function(e){return e({type:M}),I("/data/statistics.json").then(function(t){var a=t.map(function(e){return Object(m.a)({},e,{values:{}})});e(D({data:Object(p.b)(Object(p.g)("code"),a)}))}).catch(function(t){return e(D({errors:t}))})}}]})(),At=(It({loadFunctions:[function(e){return Z(e.statisticCode)}]})(),Object(ie.a)(Object(i.b)(function(e,t){return{countries:S(e),goTo:function(e){return t.history.push(e)}}})(Tt)));var Lt=Object(ie.a)(Object(i.b)(function(e){return{isReady:k(e)&&K(e)}})(function(e){var t=e.isReady;return r.a.createElement("div",{className:"AppLayout"},r.a.createElement(Mt,null),r.a.createElement(xt,null),!t&&r.a.createElement(ce.a,{size:"large"}),t&&r.a.createElement(oe.a,null,r.a.createElement(oe.a.Header,{style:{position:"fixed",zIndex:10,width:"100%"}},r.a.createElement(At,null)),r.a.createElement(oe.a.Content,null,r.a.createElement(le.a,null,r.a.createElement(ue.a,{path:"/home",exact:!0,component:He}),r.a.createElement(ue.a,{path:"/country/:countryCode",exact:!0,component:Et}),r.a.createElement(ue.a,{path:"/about",exact:!0,component:jt}),r.a.createElement(ue.a,{component:function(){return r.a.createElement(se.a,{to:{pathname:"/home"}})}}))),r.a.createElement(oe.a.Footer,null,"Sources: IEA, EIA, World Data Bank")))}));var Pt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:re},r.a.createElement(l.a,null,r.a.createElement(Lt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[337,2,1]]]);
//# sourceMappingURL=main.61a78c17.chunk.js.map