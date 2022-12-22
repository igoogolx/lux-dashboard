"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[741],{8741:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(7294),o=a(3422),s=a(5638),r=a(5365),l=a(2327),c=a(8142);const i=function({value:e}){const{t}=(0,l.$)();return e===o.o3.Proxy?n.createElement(r.Vp,{type:r.hu.Info,value:t(c.$.PROXY)}):n.createElement(r.Vp,{type:r.hu.Warning,value:t(c.$.DIRECT)})},u=function(e){const{close:t}=e,{t:a}=(0,l.$)(),[s,u]=(0,n.useState)(""),[d,m]=(0,n.useState)(null);return n.createElement(r.u_,{close:t},n.createElement("div",{className:"snirEdcmUD2Bw1yAKOd6"},n.createElement(r.II,{value:s,onChange:e=>{u(e.target.value)},className:"lcs8Zrbl1pV3Els9zlhI"}),n.createElement(r.zx,{onClick:()=>{(0,o.ED)({destination:s}).then((e=>{m(e.rule)}))}},a(c.$.SEARCH))),n.createElement("div",{className:"_fyru2fdqoXWQoeyE7ET"},n.createElement("div",{className:"GLeqgCzGh6EqHrjpKif_"},"Result:"),null!==d&&n.createElement(i,{value:d})))};var d=a(2341);var m;!function(e){e[e.Destination=0]="Destination",e[e.Process=1]="Process",e[e.Domain=2]="Domain"}(m||(m={}));const E=e=>{const t=(0,d.Xf)();let a="\\";"win32"===t?a="\\":"darwin"===t&&(a="/");const n=e.split(a);return n[n.length-1]};function p({value:e}){const{value:t,unit:a}=(0,s.E6)(e);return n.createElement(n.Fragment,null,`${t} ${a}`)}function $({value:e}){const t=(new Date).getTime()-e;return n.createElement(n.Fragment,null,function(e){const t=e/1e3,a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60),o=Math.floor(t-3600*a-60*n);let s=o.toString(),r=n.toString(),l=a.toString();return a<10&&(l=`0${a}`),n<10&&(r=`0${n}`),o<10&&(s=`0${o}`),`${l}:${r}:${s}`}(t))}function f(){const{t:e}=(0,l.$)(),[t,a]=(0,n.useState)([]),[s,d]=(0,n.useState)({tcp:0,udp:0,history:[]}),[f,h]=(0,n.useState)(""),[v,C]=(0,n.useState)(m.Process),[w,S]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=(0,o.Fu)({onMessage:e=>{a(e),d((t=>({tcp:e.filter((e=>e.metadata.network===o.Jj.Tcp)).length,udp:e.filter((e=>e.metadata.network===o.Jj.Udp)).length,history:[...t.history,e.length]})))}});return()=>{e.close()}}),[]);const D=(0,n.useMemo)((()=>[{Header:e(c.$.DESTINATION)||"",accessor:"destination",disableSortBy:!0},{Header:e(c.$.PROCESS)||"",accessor:"process",minWidth:84},{Header:e(c.$.Domain)||"",accessor:"domain"},{Header:e(c.$.RULE)||"",accessor:"rule",Cell:i},{Header:e(c.$.NETWORK)||"",accessor:"network"},{Header:e(c.$.TIME)||"",accessor:"start",Cell:$},{Header:e(c.$.DOWNLOAD)||"",accessor:"download",Cell:p},{Header:e(c.$.UPLOAD)||"",accessor:"upload",Cell:p}]),[e]),L=(0,n.useMemo)((()=>t.map((e=>({process:E(e.process),destination:`${e.metadata.destinationIP}:${e.metadata.destinationPort}`,domain:e.domain,download:e.download,upload:e.upload,network:e.metadata.network,rule:e.rule,start:e.start,id:e.id}))).filter((e=>{if(f)switch(v){case m.Domain:return e.domain.toLocaleLowerCase().includes(f.toLocaleLowerCase());case m.Process:return e.process.toLocaleLowerCase().includes(f.toLocaleLowerCase());case m.Destination:return e.destination.toLocaleLowerCase().includes(f.toLocaleLowerCase());default:throw new Error(`invalid ${f}`)}return!0}))),[t,v,f]),g=[{id:m.Destination,content:e(c.$.DESTINATION)},{id:m.Process,content:e(c.$.PROCESS)},{id:m.Domain,content:e(c.$.Domain)}];return n.createElement("div",{className:"GsNfsjFLpudvPlqiSD2T"},w&&n.createElement(u,{close:()=>{S(!1)}}),n.createElement("div",{className:"qnlbR8tyn7foo1Csxoh3"},n.createElement(r.BZ,{selectorItems:g,selectorValue:v,inputValue:f,onSelectorChange:C,onInputChange:e=>{h(e.target.value)}}),n.createElement("div",{className:"P6selSKvEjKrUBZGMX8H"},n.createElement(r.zx,{onClick:()=>{S(!0)},buttonType:r.Bq.Secondary},"Test Rule"),n.createElement(r.zx,{onClick:o.PI,buttonType:r.Bq.Blank,className:"aFuzlT9o5kKPX_keucEr"},n.createElement(r.u,{content:e(c.$.CLOSE_ALL),placement:r.Um.Bottom},n.createElement(r.JO,{name:r.dT.Trash,size:r.ZK.Medium}))))),n.createElement(r.iA,{columns:D,data:L}),n.createElement("div",{className:"uYUjaIcxUFAms48AlACf"},n.createElement("div",null,`Tcp:  ${s.tcp}`),n.createElement("div",null,`Udp:  ${s.udp}`)))}},5638:(e,t,a)=>{a.d(t,{E6:()=>s});const n=1048576,o=1024*n,s=e=>e<n?(e=>({value:(e/1024).toFixed(0),unit:"K"}))(e):e<o?(e=>({value:(e/n).toFixed(1),unit:"M"}))(e):(e=>({value:(e/o).toFixed(1),unit:"G"}))(e)}}]);