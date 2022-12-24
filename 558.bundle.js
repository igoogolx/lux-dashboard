"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[558],{9558:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var n=a(7294),s=a(5365),r=a(3422),c=a(5998),i=a(7860),l=a(2580),o=a(2230),d=a(2327),m=a(8142),u=a(4184),p=a.n(u),E=a(5071),O=a(5093);const N={directedInterfaceName:m.$.COMMON_DEFAULT_INTERFACE_NAME,directedInterfaceV4Addr:m.$.DEFAULT_INTERFACE_V4_ADDR,tunInterfaceName:m.$.COMMON_TUN_INTERFACE_NAME,primaryDns:m.$.SETTING_PRIMARY_DNS,secondaryDns:m.$.SETTING_SECONDARY_DNS,hubAddress:m.$.HUB_ADDRESS};function y(e){const{close:t}=e,{t:a}=(0,d.$)(),[c,i]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(0,r.Ch)().then((e=>{const t=(0,O.PR)();i({...e,hubAddress:(0,O.cu)(t)})}))}),[]),c?n.createElement(s.u_,{close:t},Object.keys(c).map((e=>{const t=Array.isArray(c[e])?c[e].join(","):c[e];return n.createElement("div",{className:"ebLK7cxSVnNCI3PQyquj",key:e},n.createElement("div",{className:"aT_orDrnf7YK2xjaQil6"},`${a(N[e])}:`),n.createElement("div",{className:"KWVl0L0jKFqAgmvNR9vb"},t))}))):n.createElement(n.Fragment,null)}var v;function S(e){const{t}=(0,d.$)(),{className:a}=e,[r,i]=(0,n.useState)(!1),o=(0,c.v9)((e=>e.manager.isStared)),u=(0,E.jb)(),O=(0,c.v9)(l.hl.selectAll),N=(0,n.useMemo)((()=>[{id:v.TestDelay,content:t(m.$.CONNECTIVITY_TEST)},{id:v.RuntimeDetail,content:t(m.$.COMMON_RUNTIME_DETAIL),disabled:!o}]),[o,t]);return n.createElement(s.Lt,{items:N,onItemClick:e=>{(e=>{switch(e){case v.TestDelay:return void O.forEach((e=>{u(e.id)}));case v.RuntimeDetail:return void i(!0);default:throw new Error(`invalid ${e}`)}})(e)}},r&&n.createElement(y,{close:()=>{i(!1)}}),n.createElement(s.u,{content:t(m.$.MORE),placement:s.Um.Bottom},n.createElement(s.zx,{className:p()(a,"Fn_NUQLkCOXsRPxiH1Mm"),buttonType:s.Bq.Secondary},n.createElement(s.JO,{name:s.dT.Ellipsis,size:s.ZK.Normal}))))}!function(e){e.RuntimeDetail="0",e.TestDelay="1"}(v||(v={}));var g=a(9501);const f="MuKjtftNY9ztnXDqcJ8a",b={type:r.c0.Socks5,server:"",id:"",name:"",port:"",password:"",username:""},h=g.Ry().shape({name:g.Z_(),server:g.Z_().required("Required"),port:g.Rx().min(0).max(65535).required("Required"),username:g.Z_(),password:g.Z_()});function T(e){const{t}=(0,d.$)(),{close:a,initialValue:i,isSelected:o}=e,u=(0,c.I0)(),p=(0,c.v9)((e=>e.manager.isStared));return n.createElement(s.u_,{close:a},n.createElement(s.F7,{onSubmit:async e=>{const t={...e,port:Number(e.port)};if(i)await(0,r.Jc)({id:e.id,proxy:{...t}}),u(l.LF.actions.updateOne({proxy:t}));else{const{id:e}=await(0,r.qg)({proxy:{...t}});u(l.LF.actions.addOne({proxy:{...t,id:e}}))}a()},initialValues:i?(E=i,{...E,port:E.port.toString()}):b,validationSchema:h},(({dirty:e,submitForm:r})=>n.createElement(n.Fragment,null,n.createElement(s.gN,{name:"name",label:t(m.$.FORM_NAME)}),n.createElement(s.gN,{name:"server",label:t(m.$.FORM_SERVER)}),n.createElement(s.gN,{name:"port",label:t(m.$.FORM_PORT)}),n.createElement(s.gN,{name:"username",label:`${t(m.$.FORM_PASSWORD)}(${t(m.$.FORM_OPTIONAL)})`}),n.createElement(s.gN,{name:"password",label:`${t(m.$.FORM_USERNAME)}(${t(m.$.FORM_OPTIONAL)})`}),n.createElement("div",{className:"QlMnMn9UAfavOFPqZrAi"},n.createElement(s.zx,{onClick:a,className:f,buttonType:s.Bq.Secondary},t(m.$.FORM_CANCEL)),n.createElement(s.zx,{className:f,disabled:!e||o&&p,onClick:r},t(m.$.FORM_SAVE)))))));var E}var _=a(6647);const $=e=>{let t="";return Object.keys(e).forEach((a=>{const n=`${a}=${e[a]}`;t=t?`${t};${n}`:n})),t},R=e=>{const t={};return e.split(";").forEach((e=>{const a=e.split("=");if(2===a.length){const[e,n]=a;"obfs"===e?t.mode=n:"obfs-host"===e?t.host=n:t[e]=n}})),t},C=e=>{let t=`${e.plugin}`;return e.pluginOpts&&(t=`${t};${$(e.pluginOpts)}`),_.SIP002_URI.stringify((0,_.makeConfig)({host:e.server,port:e.port,method:e.method,password:e.password,tag:e.name,plugin:t}))},w=e=>e&&"obfs"!==e&&"v2ray-plugin"!==e?"only support obfs or v2ray-plugin":"",I=e=>{if(!e)return"";const t=e.split(";");for(let e=0;e<t.length;e+=1){const a=t[e].split("=");if(2!==a.length)return"invalid opts";if(a.some((e=>0===e.length)))return"invalid opts"}return""},M=g.Ry().shape({name:g.Z_(),server:g.Z_().required("Required"),port:g.Rx().min(0).max(65535).required("Required"),password:g.Z_().required("Required"),method:g.Z_()}),A=["aes-128-gcm","aes-192-gcm","aes-256-gcm","rc4-md5","aes-128-cfb","aes-192-cfb","aes-256-cfb","aes-128-ctr","aes-192-ctr","aes-256-ctr","bf-cfb","camellia-128-cfb","camellia-192-cfbw","camellia-256-cfb","chacha20-ietf-poly1305","xchacha20-ietf-poly1305","salsa20","chacha20","chacha20-ietf"],k="tbPXJE7qG49NQrO5pcXQ",F={type:r.c0.Shadowsocks,id:"",name:"",server:"",password:"",port:"",method:A[0]},D=e=>{const t={...e,pluginOptsStr:"",port:e.port.toString()};return t.pluginOpts&&(t.pluginOptsStr=$(t.pluginOpts)),t},L=n.memo((e=>{const{close:t,initialValue:a,isSelected:i=!1}=e,{t:o}=(0,d.$)(),u=(0,c.I0)(),p=(0,n.useRef)(A.map((e=>({content:e,id:e})))),E=(0,c.v9)((e=>e.manager.isStared));return n.createElement(s.u_,{close:t},n.createElement(s.F7,{onSubmit:async e=>{const n=(e=>{const t={...e,port:Number(e.port)};return e.pluginOptsStr&&(t.pluginOpts=R(e.pluginOptsStr)),t})(e);if(a)await(0,r.Jc)({id:e.id,proxy:{...n}}),u(l.LF.actions.updateOne({proxy:n}));else{const{id:e}=await(0,r.qg)({proxy:{...n}});u(l.LF.actions.addOne({proxy:{...n,id:e}}))}t()},initialValues:a?D(a):F,validationSchema:M},(({dirty:e,submitForm:a,isValid:r,submitCount:c})=>n.createElement("div",{className:"fsQjdR7Qw8dmsp8FVrvG"},n.createElement(s.gN,{name:"name",label:o(m.$.FORM_NAME),size:s.vz.AUTO}),n.createElement(s.gN,{name:"server",label:o(m.$.FORM_SERVER),size:s.vz.AUTO}),n.createElement(s.VF,{name:"method",items:p.current,label:o(m.$.FORM_ENCRYPTION)}),n.createElement(s.gN,{name:"port",label:o(m.$.FORM_PORT),size:s.vz.AUTO,type:"number"}),n.createElement(s.BL,{name:"password",label:o(m.$.FORM_PASSWORD),size:s.vz.AUTO}),n.createElement(s.gN,{name:"plugin",label:`${o(m.$.FORM_PLUGIN)}(${o(m.$.FORM_OPTIONAL)})`,size:s.vz.AUTO,validate:w}),n.createElement(s.gN,{name:"pluginOptsStr",label:`${o(m.$.FORM_PLUGIN_OPTS)}(${o(m.$.FORM_OPTIONAL)})`,size:s.vz.AUTO,validate:I}),n.createElement("div",{className:"n2wsynaxCESqyErl67wd"},n.createElement(s.zx,{onClick:t,className:k,buttonType:s.Bq.Secondary},o(m.$.FORM_CANCEL)),n.createElement(s.zx,{className:k,disabled:!e||!r&&c>0||i&&E,onClick:a},o(m.$.FORM_SAVE)))))))}));function x(e){const{type:t,close:a,initialValue:s,isSelected:c=!1}=e;switch(t){case r.c0.Shadowsocks:return n.createElement(L,{close:a,initialValue:s,isSelected:c});case r.c0.Socks5:return n.createElement(T,{close:a,initialValue:s,isSelected:c});default:throw new Error(`invalid ${t}`)}}var P;function U(e){const{className:t}=e,{t:a}=(0,d.$)(),[i,o]=(0,n.useState)(null),u=(0,c.I0)(),p=[{id:P.Shadowsocks,content:a(m.$.SHADOWSOCKS)},{id:P.Socks5,content:a(m.$.SOCKS5)},{id:P.Clipboard,content:a(m.$.CLIPBOARD_IMPORT)}];return n.createElement("div",{className:t},i&&n.createElement(x,{close:()=>{o(null)},type:i}),n.createElement(s.Lt,{items:p,onItemClick:e=>{(async e=>{switch(e){case P.Shadowsocks:o(r.c0.Shadowsocks);break;case P.Socks5:o(r.c0.Socks5);break;case P.Clipboard:{const e=(e=>e.split(/[\n\r ]/).map((e=>(e=>{const t={id:"",name:e.tag.data,server:e.host.data,port:e.port.data,method:e.method.data,password:e.password.data,udp:!0},a=e.extra.plugin;if(a){const e=a.indexOf(";");t.plugin=a.substring(0,e),t.plugin.includes("obfs")&&(t.plugin="obfs"),t.pluginOpts=R(a.substring(e+1))}return t})(_.SHADOWSOCKS_URI.parse(e)))))(await navigator.clipboard.readText());await Promise.all(e.map((async e=>{const t={...e,type:r.c0.Shadowsocks},a=await(0,r.qg)({proxy:t});u(l.LF.actions.addOne({proxy:{...t,id:a.id}}))})));break}default:throw new Error(`invalid ${e}`)}})(e)}},n.createElement(s.u,{content:"New Proxy",placement:s.Um.Bottom},n.createElement(s.JO,{name:s.dT.Plus,size:s.ZK.Medium,className:"lz8hAFMnw7ec0d3i_7Sg"}))))}!function(e){e[e.Shadowsocks=0]="Shadowsocks",e[e.Socks5=1]="Socks5",e[e.Clipboard=2]="Clipboard"}(P||(P={}));function z(){const{t:e}=(0,d.$)(),t=(0,c.v9)((e=>e.manager.isStared)),a=(0,c.v9)((e=>e.manager.isLoading)),[u,p]=(0,n.useState)(!1),E=(0,c.v9)((e=>!(!e.selected.proxy||!e.proxies.ids.includes(e.selected.proxy)))),O=(0,c.I0)(),N=(0,c.v9)(l.k8.selectAll),y=(0,c.v9)((e=>e.selected.rule));(0,n.useEffect)((()=>{(0,r.lR)().then((e=>{O(o.m.actions.setIsStarted({isStarted:e.isStarted}))})),(0,r.$c)().then((e=>{O(l.LU.actions.received(e)),O(i.m.actions.setRule({id:e.selectedId}))}))}),[O]);const v=(0,n.useCallback)((async e=>{try{p(!0),await(0,r.kY)({id:e}),O(i.m.actions.setRule({id:e}))}finally{p(!1)}}),[O]),g=(0,n.useMemo)((()=>N.map((t=>({id:t.id,content:e(t.id)})))),[N,e]),f=a||!E||u;return n.createElement("div",{className:"Gc8PPCFelr5RdihkBQG9"},n.createElement(S,null),n.createElement(U,{className:"t4XhkwkD25jmnZ5Lpit7"}),n.createElement(s.Qf,{items:g,onChange:e=>{v(e)},value:y,className:"Pxv6kA6NLwKWYIchoqmN",disabled:t||u}),n.createElement(s.u,{content:e(m.$.SWITCH_DISABLE_TIP),disabled:!f,timeout:1e3,placement:s.Um.Bottom},n.createElement(s.rs,{checked:t,onClick:async()=>{try{O(o.m.actions.setIsLoading({isLoading:!0})),t?await(0,r.sT)():await(0,r.BL)(),O(o.m.actions.setIsStarted({isStarted:!t}))}catch(e){s.rB.error(e.message||"unknown error")}finally{O(o.m.actions.setIsLoading({isLoading:!1}))}},disabled:f})))}const q={error:"B_lwM5S6on_QZjJtWFf7",warn:"CiO2Ztcm3IxAaKhLhrAA",success:"hFAcns3Z9iWsUoqjgUrg",loading:"Wig5XehzyXCQ0qjNTuPG",spin:"c9KBAYnOrZ6ojplykr_I"};var B;function V(e){const{value:t,className:a,loading:r=!1,id:c}=e,i=(0,n.useMemo)((()=>t>0&&t<=1e3?B.Success:t>1e3?B.Warn:B.Error),[t]),l=(0,E.jb)();return r?n.createElement(s.JO,{name:s.dT.Loading,className:p()(a,q.loading)}):n.createElement("span",{className:p()(a,q[i]),onClick:()=>{l(c)}},i===B.Error?"timeout":`${t}ms`)}!function(e){e.Success="success",e.Warn="warn",e.Error="error"}(B||(B={}));var j=a(2592);const Q="qr-code";function Z(e){const{url:t,close:a}=e,{t:r}=(0,d.$)();return(0,n.useEffect)((()=>{j.toCanvas(document.getElementById(Q),t).catch((e=>{s.rB.error(e.message||r(m.$.UNKNOWN_ERROR))}))}),[r,t]),n.createElement(s.u_,{close:a},n.createElement("div",{className:"dY96wPEsmrbJ5I9qiBbR"},n.createElement("canvas",{id:Q})))}var K;function W(e){const{t}=(0,d.$)(),{id:a,className:o}=e,[u,O]=(0,n.useState)(!1),[N,y]=(0,n.useState)(!1),v=(0,c.I0)(),S=(0,E.jb)(),g=(0,E.dj)(),f=(0,c.v9)((e=>l.hl.selectById(e,a))),b=(0,c.v9)((e=>e.manager.isStared)),h=(0,c.v9)((e=>e.manager.isLoading)),T=(0,c.v9)((e=>e.selected.proxy===a)),_=(0,n.useMemo)((()=>{let e=[{id:K.Edit,content:t(m.$.COMMON_EDIT),iconName:s.dT.Edit},{id:K.Delete,content:t(m.$.COMMON_DELETE),iconName:s.dT.Trash,disabled:(b||h)&&T},{id:K.Test,content:t(m.$.CONNECTIVITY_TEST),iconName:s.dT.Swap},{id:K.TestUdp,content:t(m.$.COMMON_TEST_UDP),iconName:s.dT.Sync}];return f.type===r.c0.Shadowsocks&&(e=[...e,{id:K.CopyUrl,content:t(m.$.COMMON_COPY_URL),iconName:s.dT.Copy},{id:K.QrCode,content:t(m.$.COMMON_QR_CODE),iconName:s.dT.QrCode}]),e}),[T,b,h,f.type,t]);return n.createElement(s.Lt,{items:_,onItemClick:e=>{(async e=>{switch(e){case K.Edit:return void O(!0);case K.Delete:return await(0,r.M0)({id:f.id}),v(l.LF.actions.deleteOne({id:a})),T&&v(i.m.actions.setProxy({id:""})),void s.rB.success(t(m.$.DELETED));case K.Test:return void await S(a);case K.TestUdp:return void await g(a);case K.CopyUrl:{const e=C(f);return await navigator.clipboard.writeText(e),void s.rB.success(t(m.$.COPIED))}case K.QrCode:return void y(!0);default:throw new Error(`invalid ${e}`)}})(e)}},N&&n.createElement(Z,{url:C(f),close:()=>{y(!1)}}),u&&n.createElement(x,{close:()=>O(!1),initialValue:f,type:f.type,isSelected:T}),n.createElement(s.zx,{className:p()(o,"NrZ2zb8qyzrYyf9bFMK9"),buttonType:s.Bq.Blank},n.createElement(s.JO,{name:s.dT.Ellipsis,size:s.ZK.Normal})))}function Y(e){const{proxy:t}=e,a=(0,c.v9)((e=>e.selected.proxy===t.id)),o=(0,c.v9)((e=>l.Es.selectById(e,t.id)||null)),d=(0,c.I0)();return n.createElement("div",{className:"BDqzxjTLYTHStHMvmNmI"},n.createElement("div",{className:"lYrpMrjF0PH7IFULtHhQ"},n.createElement(W,{id:t.id})),n.createElement("div",{className:"mZncV2hoJ8gAfVYT7DsQ",onClick:async()=>{await(0,r.Hl)({id:t.id}),d(i.m.actions.setProxy({id:t.id}))}},n.createElement(s.oT,{type:a?s.ph.Enabled:s.ph.Disabled,className:"Qz25ryfV2M6JRobSdAxP"}),o&&n.createElement(V,{id:t.id,value:o.value||0,className:"GjErTTRcbaE0O4QUgiXu",loading:o.loading}),n.createElement("div",{className:"zoQOAH9PoHt3wZZs50KA"},t.type),n.createElement("div",{className:"fh7g3GBT4vJMenzh5jW1"},n.createElement("div",{className:"nitftQKt7tDMzoThVThE"},t.name||`${t.server}:${t.port}`))))}function J(){const e=(0,c.v9)(l.hl.selectAll),t=(0,c.I0)();return(0,n.useEffect)((()=>{(0,r.yi)().then((e=>{t(l.LF.actions.received(e)),t(i.m.actions.setProxy({id:e.selectedId}))}))}),[t]),n.createElement("div",{className:"_TBifi4dkudWb4MUgm4j"},e.map((e=>n.createElement(Y,{proxy:e,key:e.id}))))}function H(){return n.createElement("div",{className:"makDUtZ7nLl5YwLZ_81d"},n.createElement("div",{className:"rHoRQy73BKWNrkFngo76"},n.createElement(z,null)),n.createElement("div",{className:"aAnpLd7JizxJyCv19aWV"},n.createElement(J,null)))}!function(e){e.Edit="edit",e.Delete="delete",e.CopyUrl="copyUrl",e.Test="test",e.QrCode="qrCode",e.TestUdp="testUdp"}(K||(K={}))},5071:(e,t,a)=>{a.d(t,{dj:()=>E,jb:()=>p,jf:()=>u});var n=a(7294),s=a(1560),r=a(4021),c=a(5998),i=a(3422),l=a(842),o=a(5365),d=a(8142),m=a(2327);const u=e=>{const t=(0,n.useRef)(null),a=(0,n.useRef)();return(0,n.useEffect)((()=>{if(t.current&&!a.current){const n=t.current;n&&(a.current=new s.kL(n,e))}}),[e]),[t,a.current]},p=()=>{const e=(0,c.I0)();return(0,n.useCallback)((async t=>{e(r.D.actions.updateOne({delay:{id:t,loading:!0}}));try{const a=await(0,i.NP)({id:t});e(r.D.actions.updateOne({delay:{id:t,value:a.delay}}))}catch(a){e(r.D.actions.updateOne({delay:{id:t,value:-1}}))}finally{e(r.D.actions.updateOne({delay:{id:t,loading:!1}}))}}),[e])},E=()=>{const e=(0,c.I0)(),{t}=(0,m.$)();return(0,n.useCallback)((async a=>{e(l.b.actions.updateOne({data:{id:a,loading:!0}}));try{const n=await(0,i.Z9)({id:a});e(l.b.actions.updateOne({data:{id:a,result:n.result}})),n.result?o.rB.success(t(d.$.UDP_OK_NOTIFICATION)):o.rB.error(t(d.$.UDP_FAILED_NOTIFICATION))}catch(t){e(l.b.actions.updateOne({data:{id:a,result:!1}}))}finally{e(l.b.actions.updateOne({data:{id:a,loading:!1}}))}}),[e,t])}}}]);