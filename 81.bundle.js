"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[81],{7081:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),n=a(6575),r=a(5998),c=a(5060),o=a(1275),d=a(2327),s=a(8142),u=a(5201),m=a(4656),i=a(1588),p=a(2132),E=a(8870),h=a(7484),C=a.n(h),v=a(7763),g=a.n(v),f=a(8403);const w={wrapper:"nrQNbpXTc6DWET7_gbI2",toolbar:"bCym_SmeimM9gS_XqCez",logBtn:"VOUHprgJvo_pwa8rsD9K",input:"RdMkITATx8IQ009q8onn",payload:"px1wfdzMY41XFBdlSJVF"};function T(e){const{value:t}=e,a=new Date(t);return l.createElement("div",null,C()(a).format("HH:mm:ss"))}function _(e){const{value:t}=e;return l.createElement(c.Vp,{type:t,value:t})}function I(e){const{value:t,searchedWords:a}=e;return l.createElement(c.u,{content:t,placement:c.Um.TopStart},l.createElement("div",{className:w.payload},l.createElement(g(),{searchWords:a,autoEscape:!0,textToHighlight:t})))}function b(){const{t:e}=(0,d.$)(),t=(0,r.v9)((e=>e.logger.logs)),[a,h]=(0,l.useState)(""),C=(0,l.useMemo)((()=>[(0,u.p)({columnId:"type",renderHeaderCell:()=>e(s.$.TYPE),renderCell:e=>l.createElement(m.K,null,l.createElement(_,{value:e.type}))}),(0,u.p)({columnId:"time",renderHeaderCell:()=>e(s.$.TIME),renderCell:e=>l.createElement(m.K,null,l.createElement(T,{value:e.time}))}),(0,u.p)({columnId:"content",renderHeaderCell:()=>e(s.$.CONTENT),renderCell:e=>l.createElement(m.K,null,l.createElement(I,{value:e.payload,searchedWords:[a]}))})]),[a,e]),v=(0,l.useMemo)((()=>t.filter((e=>e.payload.toLocaleLowerCase().includes(a.toLocaleLowerCase())))),[t,a]),g=(0,l.useMemo)((()=>({time:{defaultWidth:80,minWidth:80},type:{defaultWidth:80,minWidth:80},content:{defaultWidth:720,minWidth:720}})),[]),b=(0,f.Z)("(min-width: 1024px)");return l.createElement("div",{className:w.wrapper},l.createElement("div",{className:w.toolbar},l.createElement(i.I,{onChange:e=>{h(e.target.value)},contentAfter:l.createElement(E.dOe,null),placeholder:e(s.$.SEARCH_LOG_TIP),className:w.input}),l.createElement(p.z,{onClick:async()=>{const t=await(0,n.jT)();o.d?await(0,o.DI)(t):(await navigator.clipboard.writeText(t),c.rB.success(e(s.$.COPY_LOG_DIR_PATH)))},className:w.logBtn},e(s.$.OPEN_LOG_DIR))),l.createElement(c.iA,{columns:C,data:v,columnSizingOptions:g,resizableColumns:!0,height:b?600:300}))}}}]);