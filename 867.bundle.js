"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[867],{4867:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(7294),n=a(6667),r=a(5998),s=a(3439),c=a(7089),m=a(8142),E=a(2327);const o="LL6ZdOrOCKOvqt48ApmC",i="qSoUdGdoenhEPLkcS997",d="ZFupGIwFl1fv76JCDDxg",u=e=>({...e,localServerHttpEnabled:e.localServer.http.enabled,localServerHttpPort:e.localServer.http.port.toString()});function S(e){const{initValue:t}=e,{t:a}=(0,E.$)(),S=(0,r.I0)(),v=(0,r.v9)((e=>e.manager.isStared||e.manager.isLoading)),T=(0,l.useRef)(null);return l.createElement("div",{className:"iTAfe2SpwPMwUh2vpJqC"},l.createElement(c.l0,{onSubmit:async e=>{const t=(e=>({...e,trueProxyServer:e.trueProxyServer,localServer:{http:{enabled:e.localServerHttpEnabled,port:Number(e.localServerHttpPort)}}}))(e);await(0,n.Lt)(t),S(s.z.actions.setSetting(e)),T.current?.resetForm({values:e}),c.rB.success(a(m.$.SAVE_SUCCESS))},initialValues:u(t),innerRef:T},(({dirty:e,submitCount:n,isValid:r,setValues:s,submitForm:E,values:S})=>l.createElement(l.Fragment,null,l.createElement("div",{className:"w85JHPr2FKEjjjcGpTNM"},l.createElement(c.gN,{name:"defaultInterface",label:l.createElement("div",{className:i},l.createElement("span",{className:d},a(m.$.DEFAULT_INTERFACE)),l.createElement(c.u,{content:a(m.$.DEFAULT_INTERFACE_TOOLTIP),placement:c.Um.Bottom},l.createElement(c.JO,{name:c.dT.Question}))),className:o,disabled:v}),l.createElement(c.gN,{name:"trueProxyServer",label:l.createElement("div",{className:i},l.createElement("span",{className:d},a(m.$.TRUE_PROXY_SERVER)),l.createElement(c.u,{content:a(m.$.TRUE_PROXY_SERVER_TOOLTIPS)},l.createElement(c.JO,{name:c.dT.Question}))),className:o,disabled:v}),l.createElement(c.QB,{name:"localServerHttpEnabled",label:l.createElement("div",{className:i},l.createElement("span",{className:d},a(m.$.HTTP_SERVER_SWITCH_LABEL)),l.createElement(c.u,{content:a(m.$.HTTP_SERVER_SWITCH_TOOLTIP)},l.createElement(c.JO,{name:c.dT.Question}))),className:o,disabled:v}),S.localServerHttpEnabled&&l.createElement(c.gN,{name:"localServerHttpPort",label:`${a(m.$.HTTP_SERVER_PORT_LABEL)}`,className:o,disabled:v})),l.createElement("div",{className:"F5YEObsgXMGFluYGKY07"},l.createElement(c.zx,{disabled:!e,buttonType:c.Bq.Secondary,className:"qtptFzaxonR6wdP1lqZn",onClick:()=>{s(u(t))}},a(m.$.FORM_RESET)),l.createElement(c.zx,{disabled:!e||v||!r&&n>0,onClick:E},a(m.$.FORM_SAVE)))))))}function v(){const e=(0,r.I0)(),[t,a]=(0,l.useState)(!1);(0,l.useEffect)((()=>{a(!0),(0,n.$8)().then((t=>{e(s.z.actions.setSetting(t))})).finally((()=>{a(!1)}))}),[e]);const c=(0,r.v9)((e=>e.setting));return l.createElement("div",{className:"uWBL3VP9ZIt5OvmOheJq"},!t&&l.createElement(S,{initValue:c}))}}}]);