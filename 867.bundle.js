"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[867],{4867:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(7294),n=a(3422),r=a(5998),c=a(3439),s=a(3326),m=a(8142),E=a(2327);const o="LL6ZdOrOCKOvqt48ApmC",i="qSoUdGdoenhEPLkcS997",u="ZFupGIwFl1fv76JCDDxg",S=e=>({...e,localServerHttpEnabled:e.localServer.http.enabled,localServerHttpPort:e.localServer.http.port.toString()});function d(e){const{initValue:t}=e,{t:a}=(0,E.$)(),d=(0,r.I0)(),v=(0,r.v9)((e=>e.manager.isStared||e.manager.isLoading)),T=(0,l.useRef)(null);return l.createElement("div",{className:"iTAfe2SpwPMwUh2vpJqC"},l.createElement(s.F7,{onSubmit:async e=>{const t=(e=>({...e,trueProxyServer:e.trueProxyServer,localServer:{http:{enabled:e.localServerHttpEnabled,port:Number(e.localServerHttpPort)}}}))(e);await(0,n.Lt)(t),d(c.z.actions.setSetting(e)),T.current?.resetForm({values:e}),s.rB.success(a(m.$.SAVE_SUCCESS))},initialValues:S(t),innerRef:T},(({dirty:e,submitCount:n,isValid:r,setValues:c,submitForm:E,values:d})=>l.createElement(l.Fragment,null,l.createElement("div",{className:"w85JHPr2FKEjjjcGpTNM"},l.createElement(s.gN,{name:"defaultInterface",label:l.createElement("div",{className:i},l.createElement("span",{className:u},a(m.$.DEFAULT_INTERFACE)),l.createElement(s.u,{content:a(m.$.DEFAULT_INTERFACE_TOOLTIP),placement:s.Um.Bottom},l.createElement(s.JO,{name:s.dT.Question}))),className:o}),l.createElement(s.gN,{name:"trueProxyServer",label:l.createElement("div",{className:i},l.createElement("span",{className:u},a(m.$.TRUE_PROXY_SERVER)),l.createElement(s.u,{content:a(m.$.TRUE_PROXY_SERVER_TOOLTIPS)},l.createElement(s.JO,{name:s.dT.Question}))),className:o}),l.createElement(s.QB,{name:"localServerHttpEnabled",label:l.createElement("div",{className:i},l.createElement("span",{className:u},a(m.$.HTTP_SERVER_SWITCH_LABEL)),l.createElement(s.u,{content:a(m.$.HTTP_SERVER_SWITCH_TOOLTIP)},l.createElement(s.JO,{name:s.dT.Question}))),className:o}),d.localServerHttpEnabled&&l.createElement(s.gN,{name:"localServerHttpPort",label:`${a(m.$.HTTP_SERVER_PORT_LABEL)}`,className:o})),l.createElement("div",{className:"F5YEObsgXMGFluYGKY07"},l.createElement(s.zx,{disabled:!e,buttonType:s.Bq.Secondary,className:"qtptFzaxonR6wdP1lqZn",onClick:()=>{c(S(t))}},a(m.$.FORM_RESET)),l.createElement(s.zx,{disabled:!e||v||!r&&n>0,onClick:E},a(m.$.FORM_SAVE)))))))}function v(){const e=(0,r.I0)(),[t,a]=(0,l.useState)(!1);(0,l.useEffect)((()=>{a(!0),(0,n.$8)().then((t=>{e(c.z.actions.setSetting(t))})).finally((()=>{a(!1)}))}),[e]);const s=(0,r.v9)((e=>e.setting));return l.createElement("div",{className:"uWBL3VP9ZIt5OvmOheJq"},!t&&l.createElement(d,{initValue:s}))}}}]);