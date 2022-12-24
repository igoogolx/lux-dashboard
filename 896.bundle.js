"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[896],{8896:(e,a,t)=>{t.r(a),t.d(a,{default:()=>D});var n=t(7294),r=t(3422),l=t(5998),s=t(2580),c=t(5365),d=t(8142),o=t(2327);const i="PEOeiOlksHX8UigbjTlz",u="S4n_y3jUYBUxA6OVIHRw",m="vcud7SglcOjHAKf3K8P_",p="q31gkOLNCkBALk8NkJb5";var E=t(5638);var f;function v(e){const{value:a,type:t=f.Speed}=e,{value:r,unit:l}=(0,E.E6)(a);return n.createElement("span",{className:"WTDuUtr5_3BFlalSHCqs"},n.createElement("span",{className:"s76FCWrzxtq18t9pJdta"},r),n.createElement("span",{className:"DE4APrAnsvTdCrejWEjn"},t===f.Speed?`${l}/S`:l))}!function(e){e[e.Speed=0]="Speed",e[e.Total=1]="Total"}(f||(f={}));var y,N=t(5071),b=t(2631);function O(e){const{data:a}=e,[t,r]=(0,N.jf)({type:"line",data:{labels:[],datasets:[{label:b.ZP.t(d.$.DOWNLOAD),borderColor:"#22ce70",borderWidth:1.5,fill:!1,pointRadius:0,data:[],tension:.2},{label:b.ZP.t(d.$.UPLOAD),borderColor:"#ff6573",borderWidth:1,fill:!1,pointRadius:0,data:[],tension:.2}]},options:{animation:{},maintainAspectRatio:!1,scales:{x:{grid:{display:!1},ticks:{display:!1}},y:{border:{width:0,dash:[5,5]},grid:{color:"#50585b"},ticks:{callback:e=>{const{value:a,unit:t}=(0,E.E6)(e);return a+t},autoSkip:!0,maxTicksLimit:6}}}}});return(0,n.useEffect)((()=>{r&&(r.data.labels=a.map(((e,a)=>a)),r.data.datasets&&(r.data.datasets[0].data=a.map((e=>e.download)),r.data.datasets[1].data=a.map((e=>e.upload))),r.update("none"))}),[r,a]),n.createElement("canvas",{ref:t})}!function(e){e[e.Proxy=0]="Proxy",e[e.Direct=1]="Direct"}(y||(y={}));const T={[y.Proxy]:d.$.PROXY,[y.Direct]:d.$.DIRECT};function w(e){const{speed:a,total:t,type:r}=e,l=a.length?a[a.length-1]:{upload:0,download:0},{t:s}=(0,o.$)();return n.createElement("div",{className:"z4S8s6jIiqyIDf8rBtwM"},n.createElement("div",{className:"MfIBCWbDt2IsJ2ToWxQ6"},n.createElement("div",{className:"zUbsa0wFSygvJqMQiAQ2"},n.createElement("div",{className:"msJbjrJgf9cwyv_pjmVg"},n.createElement(c.u,{content:s(T[r])},n.createElement(c.JO,{name:r===y.Proxy?c.dT.Plane:c.dT.ToTop,size:c.ZK.Large})))),n.createElement("div",{className:"T3r04grQ27CxlsxX0f0Z"},n.createElement("div",{className:i},n.createElement("div",{className:u},"Speed",n.createElement(c.JO,{name:c.dT.Flash})),n.createElement("div",{className:m},n.createElement("div",{className:p},n.createElement(c.JO,{name:c.dT.ArrowUp}),n.createElement(v,{value:l.upload})),n.createElement("div",{className:p},n.createElement(c.JO,{name:c.dT.ArrowDown}),n.createElement(v,{value:l.download})))),n.createElement("div",{className:i},n.createElement("div",{className:u},"Total",n.createElement(c.JO,{name:c.dT.Database})),n.createElement("div",{className:m},n.createElement("div",{className:p},n.createElement(c.JO,{name:c.dT.ArrowUp}),n.createElement(v,{value:t.upload,type:f.Total})),n.createElement("div",{className:p},n.createElement(c.JO,{name:c.dT.ArrowDown}),n.createElement(v,{value:t.download,type:f.Total})))))),n.createElement("div",{className:"Snic_869FL_E7iNGGLLh"},n.createElement(O,{data:a})))}var x=t(1560);function D(){const e=(0,l.v9)((e=>{const a={proxy:[],direct:[]};return e.traffics.now.forEach((e=>{a.proxy.push(e.proxy),a.direct.push(e.direct)})),a})),a=(0,l.v9)((e=>e.traffics.total)),t=(0,l.I0)();return(0,n.useEffect)((()=>{const e=(0,r.fN)({onMessage:e=>{t(s.KZ.actions.addNow({traffic:e}))},onError:()=>{e.close()}}),a=(0,r.C6)({onMessage:e=>{t(s.KZ.actions.setTotal({traffic:e}))},onError:()=>{a.close()}});return()=>{e.close()}}),[t]),e&&a?n.createElement("div",{className:"boXa8Cm6mewdGlVEAh1v"},n.createElement(w,{speed:e.proxy,total:a.proxy,type:y.Proxy}),n.createElement(w,{speed:e.direct,total:a.direct,type:y.Direct})):n.createElement(n.Fragment,null)}x.kL.register(x.ST,x.jn,x.od,x.f$,x.Dx,x.uw)},5071:(e,a,t)=>{t.d(a,{dj:()=>E,jb:()=>p,jf:()=>m});var n=t(7294),r=t(1560),l=t(4021),s=t(5998),c=t(3422),d=t(842),o=t(5365),i=t(8142),u=t(2327);const m=e=>{const a=(0,n.useRef)(null),t=(0,n.useRef)();return(0,n.useEffect)((()=>{if(a.current&&!t.current){const n=a.current;n&&(t.current=new r.kL(n,e))}}),[e]),[a,t.current]},p=()=>{const e=(0,s.I0)();return(0,n.useCallback)((async a=>{e(l.D.actions.updateOne({delay:{id:a,loading:!0}}));try{const t=await(0,c.NP)({id:a});e(l.D.actions.updateOne({delay:{id:a,value:t.delay}}))}catch(t){e(l.D.actions.updateOne({delay:{id:a,value:-1}}))}finally{e(l.D.actions.updateOne({delay:{id:a,loading:!1}}))}}),[e])},E=()=>{const e=(0,s.I0)(),{t:a}=(0,u.$)();return(0,n.useCallback)((async t=>{e(d.b.actions.updateOne({data:{id:t,loading:!0}}));try{const n=await(0,c.Z9)({id:t});e(d.b.actions.updateOne({data:{id:t,result:n.result}})),n.result?o.rB.success(a(i.$.UDP_OK_NOTIFICATION)):o.rB.error(a(i.$.UDP_FAILED_NOTIFICATION))}catch(a){e(d.b.actions.updateOne({data:{id:t,result:!1}}))}finally{e(d.b.actions.updateOne({data:{id:t,loading:!1}}))}}),[e,a])}},5638:(e,a,t)=>{t.d(a,{E6:()=>l});const n=1048576,r=1024*n,l=e=>e<n?(e=>({value:(e/1024).toFixed(0),unit:"K"}))(e):e<r?(e=>({value:(e/n).toFixed(1),unit:"M"}))(e):(e=>({value:(e/r).toFixed(1),unit:"G"}))(e)}}]);