"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[451],{5451:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var l=n(7294),a=n(6575),r=n(5638),o=n(5060),c=n(2327),d=n(8142),s=n(5201),u=n(4656),i=n(1588),m=n(8861),p=n(2132),E=n(8870),C=n(6475),h=n(8403);const f={wrapper:"GsNfsjFLpudvPlqiSD2T",toolbar:"qnlbR8tyn7foo1Csxoh3",input:"aKGCZGzKFxBcvElaeRcW",actions:"P6selSKvEjKrUBZGMX8H",closeAll:"aFuzlT9o5kKPX_keucEr",footer:"uYUjaIcxUFAms48AlACf"},v=(e,t)=>{let n="\\";"win32"===t?n="\\":"darwin"===t&&(n="/");const l=e.split(n);return l[l.length-1]};function $(e){const{value:t}=e,{value:n,unit:a}=(0,r.E6)(t);return l.createElement(l.Fragment,null,`${n} ${a}`)}function w(e){const{value:t}=e,n=(new Date).getTime()-t;return l.createElement(l.Fragment,null,function(e){const t=e/1e3,n=Math.floor(t/3600),l=Math.floor((t-3600*n)/60),a=Math.floor(t-3600*n-60*l);let r=a.toString(),o=l.toString(),c=n.toString();return n<10&&(c=`0${n}`),l<10&&(o=`0${l}`),a<10&&(r=`0${a}`),`${c}:${o}:${r}`}(n))}function I(){const{t:e}=(0,c.$)(),[t,n]=(0,l.useState)([]),[r,I]=(0,l.useState)({tcp:0,udp:0,history:[]}),[g,K]=(0,l.useState)(""),[k,A]=(0,l.useState)("win32");(0,l.useEffect)((()=>{(0,a.Z$)().then((e=>{A(e.os)}))}),[]),(0,l.useEffect)((()=>{const e=(0,a.Fu)({onMessage:e=>{n(e),I((t=>({tcp:e.filter((e=>e.metadata.network===a.Jj.Tcp)).length,udp:e.filter((e=>e.metadata.network===a.Jj.Udp)).length,history:[...t.history,e.length]})))}});return()=>{e.close()}}),[]);const P=(0,l.useMemo)((()=>[(0,s.p)({columnId:"destination",renderHeaderCell:()=>"Destination",renderCell:e=>l.createElement(u.K,{truncate:!0},e.destination)}),(0,s.p)({columnId:"process",renderHeaderCell:()=>"Process",renderCell:e=>l.createElement(u.K,{truncate:!0},e.process)}),(0,s.p)({columnId:"domain",renderHeaderCell:()=>"Domain",renderCell:e=>l.createElement(u.K,{truncate:!0},e.domain)}),(0,s.p)({columnId:"rule",renderHeaderCell:()=>e(d.$.RULE),renderCell:t=>{let n;return n=t.rule===a.o3.Proxy?l.createElement(o.Vp,{type:o.hu.Info,value:e(d.$.PROXY)}):l.createElement(o.Vp,{type:o.hu.Warning,value:e(d.$.DIRECT)}),l.createElement(u.K,null,n)}}),(0,s.p)({columnId:"network",renderHeaderCell:()=>e(d.$.NETWORK),renderCell:e=>l.createElement(u.K,null,e.network)}),(0,s.p)({columnId:"start",renderHeaderCell:()=>e(d.$.TIME),renderCell:e=>l.createElement(u.K,null,l.createElement(w,{value:e.start}))}),(0,s.p)({columnId:"data",renderHeaderCell:()=>e(d.$.DATA),renderCell:e=>l.createElement(u.K,null,l.createElement($,{value:e.download+e.upload}))})]),[e]),N=(0,h.Z)("(min-width: 1024px)"),S=(0,l.useMemo)((()=>t.map((e=>({process:v(e.process,k),destination:`${e.metadata.destinationIP}:${e.metadata.destinationPort}`,domain:e.domain,download:e.download,upload:e.upload,network:e.metadata.network,rule:e.rule,start:e.start,id:e.id}))).filter((e=>!g||[e.domain,e.process,e.destination].some((e=>e.toLocaleLowerCase().includes(g.toLocaleLowerCase())))))),[t,k,g]);return l.createElement("div",{className:f.wrapper},l.createElement("div",{className:f.toolbar},l.createElement(i.I,{value:g,onChange:e=>{K(e.target.value)},contentAfter:l.createElement(E.dOe,null),placeholder:e(d.$.SEARCH_CONNECTION_TIP),className:f.input}),l.createElement("div",{className:f.actions},l.createElement(m.u,{content:e(d.$.CLOSE_ALL),relationship:"description"},l.createElement(p.z,{onClick:a.PI,className:f.closeAll,icon:l.createElement(C.X10,null)},"Close All")))),l.createElement(o.iA,{columns:P,data:S,height:N?600:300}),l.createElement("div",{className:f.footer},l.createElement("div",null,`TCP:  ${r.tcp}`),l.createElement("div",null,`UDP:  ${r.udp}`)))}},5638:(e,t,n)=>{n.d(t,{E6:()=>r});const l=1048576,a=1024*l,r=e=>e<l?(e=>({value:(e/1024).toFixed(0),unit:"K"}))(e):e<a?(e=>({value:(e/l).toFixed(1),unit:"M"}))(e):(e=>({value:(e/a).toFixed(1),unit:"G"}))(e)}}]);