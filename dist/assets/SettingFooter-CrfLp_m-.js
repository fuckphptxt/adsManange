import{a_ as k,h,bn as x,m as B,aE as M,i as T,bt as p,bz as A,bA as v,bB as F,u as N,_ as O}from"./entry/index-DeA-E56H-1712476170604.js";import{c as P}from"./copyTextToClipboard-CmW_HBj4.js";import{bC as R,aW as d}from"./antd-DeDWztM9.js";import{d as W,a7 as j,Z as w,_ as z,k as o,a9 as n,u as e,G as c,a0 as l,a1 as D}from"./vue-BsEqlI2B.js";const E=W({name:"SettingFooter",__name:"SettingFooter",setup(G){const m=k(),{prefixCls:g}=h("setting-footer"),{t}=T(),{createSuccessModal:S,createMessage:i}=N(),_=x(),f=B(),a=M();function y(){P(JSON.stringify(e(a.getProjectConfig),null,2),null).then(()=>{S({title:t("layout.setting.operatingTitle"),content:t("layout.setting.operatingContent")})})}function C(){try{a.setProjectConfig(p);const{colorWeak:s,grayMode:u}=p;A(),v(s),F(u),i.success(t("layout.setting.resetSuccess"))}catch(s){i.error(s)}}function b(){localStorage.clear(),a.resetAllState(),m.resetState(),_.resetState(),f.resetState(),location.reload()}return(s,u)=>{const r=j("a-button");return w(),z("div",{class:D(e(g))},[o(r,{type:"primary",block:"",onClick:y},{default:n(()=>[o(e(R),{class:"mr-2"}),c(" "+l(e(t)("layout.setting.copyBtn")),1)]),_:1}),o(r,{color:"warning",block:"",onClick:C,class:"my-3"},{default:n(()=>[o(e(d),{class:"mr-2"}),c(" "+l(e(t)("common.resetText")),1)]),_:1}),o(r,{color:"error",block:"",onClick:b},{default:n(()=>[o(e(d),{class:"mr-2"}),c(" "+l(e(t)("layout.setting.clearBtn")),1)]),_:1})],2)}}}),Z=O(E,[["__scopeId","data-v-e923ed59"]]);export{Z as default};
