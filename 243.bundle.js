"use strict";(self.webpackChunklux_dashboard=self.webpackChunklux_dashboard||[]).push([[243],{3243:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ce});var n=a(7294),s=a(6974),r=a(6667),c=a(5998),l=a(7860),i=a(2580),o=a(2230),d=a(2327),m=a(8142),u=a(4184),p=a.n(u),E=a(5071),O=a(5093),N=a(1275);const y={directedInterfaceName:m.$.COMMON_DEFAULT_INTERFACE_NAME,directedInterfaceV4Addr:m.$.DEFAULT_INTERFACE_V4_ADDR,tunInterfaceName:m.$.COMMON_TUN_INTERFACE_NAME,localDns:m.$.SETTING_PRIMARY_DNS,remoteDns:m.$.SETTING_SECONDARY_DNS,hubAddress:m.$.HUB_ADDRESS};function S(e){const{close:t}=e,{t:a}=(0,d.$)(),[c,l]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(0,r.Ch)().then((e=>{const t=(0,O.PR)();l({...e,hubAddress:(0,O.cu)(t)})}))}),[]),c?n.createElement(s.u_,{close:t},Object.keys(c).map((e=>{const t=Array.isArray(c[e])?c[e].join(","):c[e];return n.createElement("div",{className:"Udu6yxXNAw2wiYHcCkxp",key:e},n.createElement("div",{className:"b34Cp04_t9qyotfpwaEw"},`${a(y[e])}:`),n.createElement("div",{className:"iLbXplUrNoA6yC3Ij5cA"},"hubAddress"===e?n.createElement(s.zx,{onClick:()=>{(0,N.LQ)(`http://${t}`)},buttonType:s.Bq.Link},t):t))}))):n.createElement(n.Fragment,null)}function _(e){const{onConfirm:t,onClose:a}=e,{t:r}=(0,d.$)();return n.createElement(s.sm,{title:r(m.$.WARNING),content:r(m.$.DELETE_ALL_PROXIES_TIPS),hideCancelText:!0,onConfirm:t,onCancel:a,closeWhenClickOutside:!1})}var v;function b(e){const{t}=(0,d.$)(),{className:a}=e,l=(0,c.I0)(),[o,u]=(0,n.useState)(!1),[O,N]=(0,n.useState)(!1),y=(0,c.v9)((e=>e.manager.isStared)),b=(0,E.jb)(),C=(0,c.v9)(i.hl.selectAll),$=()=>{N(!1)},R=(0,n.useMemo)((()=>[{id:v.TestDelay,content:t(m.$.CONNECTIVITY_TEST)},{id:v.RuntimeDetail,content:t(m.$.COMMON_RUNTIME_DETAIL),disabled:!y},{id:v.DeleteAllProxies,content:t(m.$.DELETE_ALL_PROXIES),disabled:y,isDanger:!0}]),[y,t]);return n.createElement(s.Lt,{items:R,onItemClick:e=>{(e=>{switch(e){case v.TestDelay:return void C.forEach((e=>{b(e.id)}));case v.RuntimeDetail:return void u(!0);case v.DeleteAllProxies:return void N(!0);default:throw new Error(`invalid ${e}`)}})(e)}},O&&n.createElement(_,{onClose:$,onConfirm:async()=>{await(0,r.pn)(),l(i.LF.actions.deleteAll()),l(i.mw.actions.setProxy({id:""})),$()}}),o&&n.createElement(S,{close:()=>{u(!1)}}),n.createElement(s.u,{content:t(m.$.MORE),placement:s.Um.Bottom},n.createElement(s.zx,{className:p()(a,"Fn_NUQLkCOXsRPxiH1Mm"),buttonType:s.Bq.Secondary},n.createElement(s.JO,{name:s.dT.Ellipsis,size:s.ZK.Normal}))))}!function(e){e.RuntimeDetail="0",e.TestDelay="1",e.DeleteAllProxies="2"}(v||(v={}));var C=a(9501);const $=65535,R="k6YMG5GNLGeeju5qUmNQ",g={type:r.c0.Http,server:"",id:"",name:"",port:1080,password:"",username:""},h=C.Ry().shape({name:C.Z_(),server:C.Z_().required("Required"),port:C.Rx().min(0).max($).required("Required"),username:C.Z_(),password:C.Z_()});function T(e){const{t}=(0,d.$)(),{close:a,initialValue:l,isSelected:o}=e,u=(0,c.I0)(),p=(0,c.v9)((e=>e.manager.isStared));return n.createElement(s.u_,{close:a},n.createElement(s.l0,{onSubmit:async e=>{if(l)await(0,r.Jc)({id:e.id,proxy:e}),u(i.LF.actions.updateOne({proxy:e}));else{const{id:t}=await(0,r.qg)({proxy:e});u(i.LF.actions.addOne({proxy:{...e,id:t}}))}a()},initialValues:l||g,validationSchema:h},(({dirty:e,submitForm:r})=>n.createElement(n.Fragment,null,n.createElement(s.gN,{name:"name",label:t(m.$.FORM_NAME)}),n.createElement(s.gN,{name:"server",label:t(m.$.FORM_SERVER)}),n.createElement(s.gN,{name:"port",label:t(m.$.FORM_PORT),type:"number"}),n.createElement(s.gN,{name:"username",label:`${t(m.$.FORM_PASSWORD)}(${t(m.$.FORM_OPTIONAL)})`}),n.createElement(s.gN,{name:"password",label:`${t(m.$.FORM_USERNAME)}(${t(m.$.FORM_OPTIONAL)})`}),n.createElement("div",{className:"SaBxbWlCJasQyDQpT6Sw"},n.createElement(s.zx,{onClick:a,className:R,buttonType:s.Bq.Secondary},t(m.$.FORM_CANCEL)),n.createElement(s.zx,{className:R,disabled:!e||o&&p,onClick:r},t(m.$.FORM_SAVE)))))))}const f="lFdYuErcPPvOrcvkQ_qr",w={type:r.c0.Socks5,server:"",id:"",name:"",port:1080,password:"",username:""},A=C.Ry().shape({name:C.Z_(),server:C.Z_().required("Required"),port:C.Rx().min(0).max($).required("Required"),username:C.Z_(),password:C.Z_()});function I(e){const{t}=(0,d.$)(),{close:a,initialValue:l,isSelected:o}=e,u=(0,c.I0)(),p=(0,c.v9)((e=>e.manager.isStared));return n.createElement(s.u_,{close:a},n.createElement(s.l0,{onSubmit:async e=>{if(l)await(0,r.Jc)({id:e.id,proxy:e}),u(i.LF.actions.updateOne({proxy:e}));else{const{id:t}=await(0,r.qg)({proxy:e});u(i.LF.actions.addOne({proxy:{...e,id:t}}))}a()},initialValues:l||w,validationSchema:A},(({dirty:e,submitForm:r})=>n.createElement(n.Fragment,null,n.createElement(s.gN,{name:"name",label:t(m.$.FORM_NAME)}),n.createElement(s.gN,{name:"server",label:t(m.$.FORM_SERVER)}),n.createElement(s.gN,{name:"port",label:t(m.$.FORM_PORT),type:"number"}),n.createElement(s.gN,{name:"username",label:`${t(m.$.FORM_PASSWORD)}(${t(m.$.FORM_OPTIONAL)})`}),n.createElement(s.gN,{name:"password",label:`${t(m.$.FORM_USERNAME)}(${t(m.$.FORM_OPTIONAL)})`}),n.createElement("div",{className:"EBoNextEA3Qissmj96dg"},n.createElement(s.zx,{onClick:a,className:f,buttonType:s.Bq.Secondary},t(m.$.FORM_CANCEL)),n.createElement(s.zx,{className:f,disabled:!e||o&&p,onClick:r},t(m.$.FORM_SAVE)))))))}var M=a(6647);const L=e=>{let t="";return Object.keys(e).forEach((a=>{const n=`${a}=${e[a]}`;t=t?`${t};${n}`:n})),t},k=e=>{const t={};return e.split(";").forEach((e=>{const a=e.split("=");if(2===a.length){const[e,n]=a;"obfs"===e?t.mode=n:"obfs-host"===e?t.host=n:t[e]=n}})),t},x=e=>{let t=`${e.plugin}`;return e["plugin-opts"]&&(t=`${t};${L(e["plugin-opts"])}`),M.SIP002_URI.stringify((0,M.makeConfig)({host:e.server,port:e.port,method:e.cipher,password:e.password,tag:e.name,plugin:t}))},F=e=>{if(!e)return"";const t=e.split(";");for(let e=0;e<t.length;e+=1){const a=t[e].split("=");if(2!==a.length)return"invalid opts";if(a.some((e=>0===e.length)))return"invalid opts"}return""},D=C.Ry().shape({name:C.Z_(),server:C.Z_().required("Required"),port:C.Rx().min(0).max($).required("Required"),password:C.Z_().required("Required"),method:C.Z_()}),P=["aes-128-gcm","aes-192-gcm","aes-256-gcm","rc4-md5","aes-128-cfb","aes-192-cfb","aes-256-cfb","aes-128-ctr","aes-192-ctr","aes-256-ctr","bf-cfb","camellia-128-cfb","camellia-192-cfbw","camellia-256-cfb","chacha20-ietf-poly1305","xchacha20-ietf-poly1305","salsa20","chacha20","chacha20-ietf"],U=["obfs","v2ray-plugin"],q="Y_sTMjn3xzjL5Yi0lfbw",z={type:r.c0.Shadowsocks,id:"",name:"",server:"",password:"",port:1080,cipher:P[0]},B=e=>{const t={...e,pluginOptsStr:""};return t["plugin-opts"]&&(t.pluginOptsStr=L(t["plugin-opts"])),t},j=n.memo((e=>{const{close:t,initialValue:a,isSelected:l=!1}=e,{t:o}=(0,d.$)(),u=(0,c.I0)(),p=(0,n.useRef)(P.map((e=>({content:e,id:e})))),E=(0,n.useRef)(U.map((e=>({content:e,id:e})))),O=(0,c.v9)((e=>e.manager.isStared));return n.createElement(s.u_,{close:t},n.createElement(s.l0,{onSubmit:async e=>{const n=(e=>{const t={...e};return t.pluginOptsStr&&(t["plugin-opts"]=k(t.pluginOptsStr)),delete t.pluginOptsStr,t})(e);if(a)await(0,r.Jc)({id:e.id,proxy:{...n}}),u(i.LF.actions.updateOne({proxy:n}));else{const{id:e}=await(0,r.qg)({proxy:{...n}});u(i.LF.actions.addOne({proxy:{...n,id:e}}))}t()},initialValues:a?B(a):z,validationSchema:D},(({dirty:e,submitForm:a,isValid:r,submitCount:c})=>n.createElement("div",{className:"qc0j8qlJrLZCU2O9RosZ"},n.createElement(s.gN,{name:"name",label:o(m.$.FORM_NAME),size:s.vz.AUTO}),n.createElement(s.gN,{name:"server",label:o(m.$.FORM_SERVER),size:s.vz.AUTO}),n.createElement(s.VF,{name:"cipher",items:p.current,label:o(m.$.FORM_ENCRYPTION)}),n.createElement(s.gN,{name:"port",label:o(m.$.FORM_PORT),size:s.vz.AUTO,type:"number"}),n.createElement(s.BL,{name:"password",label:o(m.$.FORM_PASSWORD),size:s.vz.AUTO}),n.createElement(s.VF,{clearable:!0,selectorClassName:"Ij9xQkzOZs3uu_xlCXAq",name:"plugin",items:E.current,label:`${o(m.$.FORM_PLUGIN)}(${o(m.$.FORM_OPTIONAL)})`}),n.createElement(s.gN,{name:"pluginOptsStr",label:`${o(m.$.FORM_PLUGIN_OPTS)}(${o(m.$.FORM_OPTIONAL)})`,size:s.vz.AUTO,validate:F}),n.createElement("div",{className:"_Q_MjOo3GU3F8qKQ9unB"},n.createElement(s.zx,{onClick:t,className:q,buttonType:s.Bq.Secondary},o(m.$.FORM_CANCEL)),n.createElement(s.zx,{className:q,disabled:!e||!r&&c>0||l&&O,onClick:a},o(m.$.FORM_SAVE)))))))}));function H(e){const{type:t,close:a,initialValue:s,isSelected:c=!1}=e;switch(t){case r.c0.Shadowsocks:return n.createElement(j,{close:a,initialValue:s,isSelected:c});case r.c0.Socks5:return n.createElement(I,{close:a,initialValue:s,isSelected:c});case r.c0.Http:return n.createElement(T,{close:a,initialValue:s,isSelected:c});default:throw new Error(`invalid ${t}`)}}var Z=a(7247);const V=function(e){const{close:t}=e,{t:a}=(0,d.$)(),[l,o]=(0,n.useState)(""),[u,p]=(0,n.useState)(!1),E=(0,c.I0)();return(0,n.useEffect)((()=>{(0,r.JC)().then((e=>{o(e.url)}))}),[]),n.createElement(s.u_,{close:t,size:s.E$.Large},n.createElement("div",{className:"jHD4NfXRB7_joiKIrapz"},n.createElement(s.II,{value:l,onChange:e=>{o(e.target.value)},className:"jiZBXuixW_xp1_uozKBe",placeholder:a(m.$.CLASH_URL),autoFocus:!0}),n.createElement(s.zx,{onClick:async()=>{try{p(!0),await(0,r.tE)({url:l});const e=await(0,r.VU)({url:l});E(i.LF.actions.addMany(e)),t()}finally{p(!1)}},disabled:u},a(m.$.OK))))};var Q;function W(e){const{className:t}=e,{t:a}=(0,d.$)(),[l,o]=(0,n.useState)(null),u=(0,c.I0)(),[p,E]=(0,n.useState)(!1),O=[{id:Q.Shadowsocks,content:a(m.$.SHADOWSOCKS)},{id:Q.Socks5,content:a(m.$.SOCKS5)},{id:Q.Http,content:a(m.$.HTTP)},{id:Q.Clipboard,content:a(m.$.CLIPBOARD_IMPORT)},{id:Q.CLASH,content:a(m.$.CLASH_IMPORT)},{id:Q.ClashUrl,content:a(m.$.CLASH_URL_IMPORT)}];return n.createElement("div",{className:t},p&&n.createElement(V,{close:()=>{E(!1)}}),l&&n.createElement(H,{close:()=>{o(null)},type:l}),n.createElement(s.Lt,{items:O,onItemClick:e=>{(async e=>{switch(e){case Q.Shadowsocks:o(r.c0.Shadowsocks);break;case Q.Socks5:o(r.c0.Socks5);break;case Q.Http:o(r.c0.Http);break;case Q.Clipboard:{const e=(e=>e.split(/[\n\r ]/).map((e=>(e=>{const t={type:r.c0.Shadowsocks,id:"",name:e.tag.data,server:e.host.data,port:e.port.data,cipher:e.method.data,password:e.password.data,udp:!0},a=e.extra.plugin;if(a){const e=a.indexOf(";");t.plugin=a.substring(0,e),t.plugin.includes("obfs")&&(t.plugin="obfs"),t["plugin-opts"]=k(a.substring(e+1))}return t})(M.SHADOWSOCKS_URI.parse(e)))))(await navigator.clipboard.readText());await Promise.all(e.map((async e=>{const t={...e,type:r.c0.Shadowsocks},a=await(0,r.qg)({proxy:t});u(i.LF.actions.addOne({proxy:{...t,id:a.id}}))})));break}case Q.CLASH:{const e=await navigator.clipboard.readText(),t=(0,Z.Qc)(e);await Promise.all(t.proxies.map((async e=>{const t=await(0,r.qg)({proxy:e});u(i.LF.actions.addOne({proxy:{...e,id:t.id}}))})));break}case Q.ClashUrl:E(!0);break;default:throw new Error(`invalid ${e}`)}})(e)}},n.createElement(s.u,{content:"New Proxy",placement:s.Um.Bottom},n.createElement(s.JO,{name:s.dT.Plus,size:s.ZK.Medium,className:"lz8hAFMnw7ec0d3i_7Sg"}))))}!function(e){e[e.Shadowsocks=0]="Shadowsocks",e[e.Socks5=1]="Socks5",e[e.Clipboard=2]="Clipboard",e[e.Http=3]="Http",e[e.CLASH=4]="CLASH",e[e.ClashUrl=5]="ClashUrl"}(Q||(Q={}));function Y(){const{t:e}=(0,d.$)(),t=(0,c.v9)((e=>e.manager.isStared)),a=(0,c.v9)((e=>e.manager.isLoading)),[u,p]=(0,n.useState)(!1),E=(0,c.v9)((e=>!(!e.selected.proxy||!e.proxies.ids.includes(e.selected.proxy)))),O=(0,c.I0)(),N=(0,c.v9)(i.k8.selectAll),y=(0,c.v9)((e=>e.selected.rule));(0,n.useEffect)((()=>{(0,r.lR)().then((e=>{O(o.m.actions.setIsStarted({isStarted:e.isStarted}))})),(0,r.$c)().then((e=>{O(i.LU.actions.received(e)),O(l.m.actions.setRule({id:e.selectedId}))}))}),[O]);const S=(0,n.useCallback)((async e=>{try{p(!0),await(0,r.kY)({id:e}),O(l.m.actions.setRule({id:e}))}finally{p(!1)}}),[O]),_=(0,n.useMemo)((()=>N.map((t=>({id:t.id,content:e(t.id)})))),[N,e]),v=a||!E||u;return n.createElement("div",{className:"Gc8PPCFelr5RdihkBQG9"},n.createElement(b,null),n.createElement(W,{className:"t4XhkwkD25jmnZ5Lpit7"}),n.createElement(s.Qf,{items:_,onChange:e=>{S(e)},value:y,className:"Pxv6kA6NLwKWYIchoqmN",disabled:t||u}),n.createElement(s.u,{content:e(m.$.SWITCH_DISABLE_TIP),disabled:!v,timeout:1e3,placement:s.Um.Bottom},n.createElement(s.rs,{checked:t,onClick:async()=>{try{O(o.m.actions.setIsLoading({isLoading:!0})),t?await(0,r.sT)():await(0,r.BL)(),O(o.m.actions.setIsStarted({isStarted:!t}))}catch(e){s.rB.error(e.message||"unknown error")}finally{O(o.m.actions.setIsLoading({isLoading:!1}))}},disabled:v})))}const K={error:"B_lwM5S6on_QZjJtWFf7",warn:"CiO2Ztcm3IxAaKhLhrAA",success:"hFAcns3Z9iWsUoqjgUrg",loading:"Wig5XehzyXCQ0qjNTuPG",spin:"c9KBAYnOrZ6ojplykr_I"};var J;function G(e){const{value:t,className:a,loading:r=!1,id:c}=e,l=(0,n.useMemo)((()=>t>0&&t<=1e3?J.Success:t>1e3?J.Warn:J.Error),[t]),i=(0,E.jb)();return r?n.createElement(s.JO,{name:s.dT.Loading,className:p()(a,K.loading)}):n.createElement("span",{className:p()(a,K[l]),onClick:()=>{i(c)}},l===J.Error?"timeout":`${t}ms`)}!function(e){e.Success="success",e.Warn="warn",e.Error="error"}(J||(J={}));var X=a(2592);const ee="qr-code";function te(e){const{url:t,close:a}=e,{t:r}=(0,d.$)();return(0,n.useEffect)((()=>{X.toCanvas(document.getElementById(ee),t).catch((e=>{s.rB.error(e.message||r(m.$.UNKNOWN_ERROR))}))}),[r,t]),n.createElement(s.u_,{close:a},n.createElement("div",{className:"dY96wPEsmrbJ5I9qiBbR"},n.createElement("canvas",{id:ee})))}var ae;function ne(e){const{t}=(0,d.$)(),{id:a,className:o}=e,[u,O]=(0,n.useState)(!1),[N,y]=(0,n.useState)(!1),S=(0,c.I0)(),_=(0,E.jb)(),v=(0,E.dj)(),b=(0,c.v9)((e=>i.hl.selectById(e,a))),C=(0,c.v9)((e=>e.manager.isStared)),$=(0,c.v9)((e=>e.manager.isLoading)),R=(0,c.v9)((e=>e.selected.proxy===a)),g=(0,n.useMemo)((()=>{let e=[{id:ae.Test,content:t(m.$.CONNECTIVITY_TEST),iconName:s.dT.Swap},{id:ae.TestUdp,content:t(m.$.COMMON_TEST_UDP),iconName:s.dT.Sync},{id:ae.Delete,content:t(m.$.COMMON_DELETE),iconName:s.dT.Trash,disabled:(C||$)&&R,isDanger:!0,isDivider:!0}];return[r.c0.Shadowsocks,r.c0.Http,r.c0.Socks5].includes(b.type)?(e=[{id:ae.Edit,content:t(m.$.COMMON_EDIT),iconName:s.dT.Edit},...e],b.type===r.c0.Shadowsocks&&(e=[{id:ae.CopyUrl,content:t(m.$.COMMON_COPY_URL),iconName:s.dT.Copy},{id:ae.QrCode,content:t(m.$.COMMON_QR_CODE),iconName:s.dT.QrCode},...e]),e):e}),[R,C,$,b.type,t]);return n.createElement(s.Lt,{items:g,onItemClick:e=>{(async e=>{switch(e){case ae.Edit:return void O(!0);case ae.Delete:return await(0,r.M0)({id:b.id}),S(i.LF.actions.deleteOne({id:a})),R&&S(l.m.actions.setProxy({id:""})),void s.rB.success(t(m.$.DELETED));case ae.Test:return void await _(a);case ae.TestUdp:return void await v(a);case ae.CopyUrl:{const e=x(b);return await navigator.clipboard.writeText(e),void s.rB.success(t(m.$.COPIED))}case ae.QrCode:return void y(!0);default:throw new Error(`invalid ${e}`)}})(e)}},N&&n.createElement(te,{url:x(b),close:()=>{y(!1)}}),u&&n.createElement(H,{close:()=>O(!1),initialValue:b,type:b.type,isSelected:R}),n.createElement(s.zx,{className:p()(o,"NrZ2zb8qyzrYyf9bFMK9"),buttonType:s.Bq.Blank},n.createElement(s.JO,{name:s.dT.Ellipsis,size:s.ZK.Normal})))}function se(e){const{proxy:t}=e,a=(0,c.v9)((e=>e.selected.proxy===t.id)),o=(0,c.v9)((e=>i.Es.selectById(e,t.id)||null)),d=(0,c.I0)();return n.createElement("div",{className:"BDqzxjTLYTHStHMvmNmI"},n.createElement("div",{className:"lYrpMrjF0PH7IFULtHhQ"},n.createElement(ne,{id:t.id})),n.createElement("div",{className:"mZncV2hoJ8gAfVYT7DsQ"},n.createElement(s.oT,{type:a?s.ph.Enabled:s.ph.Disabled,className:"Qz25ryfV2M6JRobSdAxP"}),o&&n.createElement(G,{id:t.id,value:o.value||0,className:"GjErTTRcbaE0O4QUgiXu",loading:o.loading}),n.createElement("div",{className:"zoQOAH9PoHt3wZZs50KA"},t.type),n.createElement("div",{className:"fh7g3GBT4vJMenzh5jW1",onClick:async()=>{await(0,r.Hl)({id:t.id}),d(l.m.actions.setProxy({id:t.id}))}},n.createElement("div",{className:"nitftQKt7tDMzoThVThE"},t.name||`${t.server}:${t.port}`))))}function re(){const e=(0,c.v9)(i.hl.selectAll),t=(0,c.I0)();return(0,n.useEffect)((()=>{(0,r.yi)().then((e=>{t(i.LF.actions.received(e)),t(l.m.actions.setProxy({id:e.selectedId}))}))}),[t]),n.createElement("div",{className:"_TBifi4dkudWb4MUgm4j"},e.map((e=>n.createElement(se,{proxy:e,key:e.id}))))}function ce(){return n.createElement("div",{className:"makDUtZ7nLl5YwLZ_81d"},n.createElement("div",{className:"rHoRQy73BKWNrkFngo76"},n.createElement(Y,null)),n.createElement("div",{className:"aAnpLd7JizxJyCv19aWV"},n.createElement(re,null)))}!function(e){e.Edit="edit",e.Delete="delete",e.CopyUrl="copyUrl",e.Test="test",e.QrCode="qrCode",e.TestUdp="testUdp"}(ae||(ae={}))},5071:(e,t,a)=>{a.d(t,{dj:()=>E,jb:()=>p,jf:()=>u});var n=a(7294),s=a(1560),r=a(4021),c=a(5998),l=a(6667),i=a(842),o=a(6974),d=a(8142),m=a(2327);const u=e=>{const t=(0,n.useRef)(null),a=(0,n.useRef)();return(0,n.useEffect)((()=>{if(t.current&&!a.current){const n=t.current;n&&(a.current=new s.kL(n,e))}}),[e]),[t,a.current]},p=()=>{const e=(0,c.I0)();return(0,n.useCallback)((async t=>{e(r.D.actions.updateOne({delay:{id:t,loading:!0}}));try{const a=await(0,l.NP)({id:t});e(r.D.actions.updateOne({delay:{id:t,value:a.delay}}))}finally{e(r.D.actions.updateOne({delay:{id:t,loading:!1}}))}}),[e])},E=()=>{const e=(0,c.I0)(),{t}=(0,m.$)();return(0,n.useCallback)((async a=>{e(i.b.actions.updateOne({data:{id:a,loading:!0}}));try{const n=await(0,l.Z9)({id:a});e(i.b.actions.updateOne({data:{id:a,result:n.result}})),n.result?o.rB.success(t(d.$.UDP_OK_NOTIFICATION)):o.rB.error(t(d.$.UDP_FAILED_NOTIFICATION))}catch(t){e(i.b.actions.updateOne({data:{id:a,result:!1}}))}finally{e(i.b.actions.updateOne({data:{id:a,loading:!1}}))}}),[e,t])}}}]);