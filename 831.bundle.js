"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[831],{8831:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(7294),n=a(1275),l=a(2327),c=a(8142);const o="https://github.com/igoogolx/lux",r=`${o}/releases/latest`;var i=a(8726),m=a(8648),u=a(1249),d=a(6058);var E=a(3422);const N="oJz7d3XaUIrz36UZfdG7",v="EOY6zKKPi0CJkzs_KAZR";function C(){const{t:e}=(0,l.$)(),t=(0,d.b)(),[a,C]=(0,s.useState)(""),[O,f]=(0,s.useState)(!1),[p,b]=(0,s.useState)(!1);(0,s.useEffect)((()=>{(0,E.bo)().then((e=>{C(e.version)}))}),[]);const x=(0,s.useCallback)((async()=>{try{b(!0);const t=await async function(){const e=(0,d.b)();return!!e&&(t=e,a=(await m.Z.get("https://api.github.com/repos/igoogolx/lux/releases/latest")).data.tag_name.slice(1),1===(0,u.compare)(a,t));var t,a}();t||i.rB.info(e(c.$.NO_UPDATE_INFO)),f(t)}finally{b(!1)}}),[e]);return s.createElement("div",{className:"TjdJt6vBTjQ08WQUpFND"},O&&s.createElement(i.sm,{title:e(c.$.CONFIRM),content:e(c.$.NEW_VERSION_INFO),onCancel:()=>{f(!1)},confirmText:e(c.$.GO),onConfirm:()=>{(0,n.LQ)(r)}}),s.createElement("div",{className:"NBImCJQx6QJgtv3pGw5P"},"Lux"),s.createElement("div",{className:"d9cqNTfsMFj2fdaBXkx6"},s.createElement("div",null,e(c.$.VERSION),": ",t),s.createElement("div",{onClick:()=>{(0,n.LQ)(o)},className:N},e(c.$.CORE_VERSION),": ",a),s.createElement("div",{onClick:()=>{(0,n.LQ)(o)},className:N},e(c.$.REPOSITORY),": ",o),s.createElement(i.zx,{onClick:x,disabled:p,buttonType:i.Bq.Primary,className:v},e(c.$.CHECK_UPDATE)),window.openDevTools&&s.createElement(i.zx,{onClick:window.openDevTools,buttonType:i.Bq.Primary,className:v},e(c.$.OPEN_DEV_TOOLS))))}}}]);