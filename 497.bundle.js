"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[497],{5497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(7294),c=a(1275),l=a(2327),s=a(8142),r=a(3830),o=a(634),i=a(8648),u=a(1249);const E=()=>"0.6.7";var m=a(6575),p=a(4753),d=a(2761),N=a(2132),O=a(7390);const f={container:"TjdJt6vBTjQ08WQUpFND",desc:"d9cqNTfsMFj2fdaBXkx6",btn:"EOY6zKKPi0CJkzs_KAZR"};function C(){const{t:e}=(0,l.$)(),t=E(),[a,C]=(0,n.useState)(""),[_,b]=(0,n.useState)(!1),[k,v]=(0,n.useState)(!1);(0,n.useEffect)((()=>{(0,m.bo)().then((e=>{C(e.version)}))}),[]);const x=(0,n.useCallback)((async()=>{try{v(!0);const t=await async function(){const e=E();return!!e&&(t=e,a=(await i.Z.get("https://api.github.com/repos/igoogolx/lux/releases/latest")).data.tag_name.slice(1),1===(0,u.compare)(a,t));var t,a}();t||o.rB.info(e(s.$.NO_UPDATE_INFO)),b(t)}finally{v(!1)}}),[e]);return n.createElement("div",{className:f.container},_&&n.createElement(o.sm,{title:e(s.$.CONFIRM),content:e(s.$.NEW_VERSION_INFO),onCancel:()=>{b(!1)},confirmText:e(s.$.GO),onConfirm:()=>{(0,c.LQ)(r.Ku)}}),n.createElement(p.w,{as:"h1"},"Lux"),n.createElement("div",{className:f.desc},n.createElement(d.x,null,e(s.$.VERSION),": ",t),n.createElement(d.x,null,e(s.$.CORE_VERSION),": ",a),n.createElement("div",null,n.createElement(d.x,null,e(s.$.REPOSITORY),": "),n.createElement(N.z,{onClick:()=>{(0,c.LQ)(r.Sp)},appearance:"transparent"},n.createElement(O.r,null,r.Sp))),n.createElement(N.z,{onClick:x,disabled:k,appearance:"primary",className:f.btn},e(s.$.CHECK_UPDATE)),window.openDevTools&&n.createElement(N.z,{onClick:window.openDevTools,appearance:"primary",className:f.btn},e(s.$.OPEN_DEV_TOOLS))))}}}]);