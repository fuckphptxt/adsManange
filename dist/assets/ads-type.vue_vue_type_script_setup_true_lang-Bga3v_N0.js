var F=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var A=(o,t,e)=>t in o?F(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,S=(o,t)=>{for(var e in t||(t={}))I.call(t,e)&&A(o,e,t[e]);if(x)for(var e of x(t))N.call(t,e)&&A(o,e,t[e]);return o};var h=(o,t,e)=>new Promise((l,f)=>{var y=r=>{try{i(e.next(r))}catch(p){f(p)}},g=r=>{try{i(e.throw(r))}catch(p){f(p)}},i=r=>r.done?l(r.value):Promise.resolve(r.value).then(y,g);i((e=e.apply(o,t)).next())});import{P}from"./index-nsw1gsVQ.js";import{u as R}from"./entry/index-DeA-E56H-1712476170604.js";import{vxeTableTypeColumns as j,vxeTableFormSchema as q,accountColor as D,accountStatus as G,timeGoStamp as L,getListId as z}from"./tableData-aGPirm57.js";import{V as H}from"./index-BqTCX4sW.js";import M from"./searchList-Dq9TEsYp.js";import{e as B}from"./table-C1pus5Ot.js";import{d as O,f as K,r as U,I as W,h as Z,Z as b,a8 as $,a9 as n,k as _,u as c,ac as J,G as C,a0 as u,_ as v,F as Q,aa as X,ab as Y,$ as T}from"./vue-BsEqlI2B.js";import{K as E,T as w}from"./antd-DeDWztM9.js";const ee={key:0},ie=O({__name:"ads-type",props:{queryDataobject:{type:Object,default:()=>({selectAccount:[],selectBms:[],selectAdsNumber:[]})}},emits:["selectChangeEvent"],setup(o,{emit:t}){const{createMessage:e}=R(),l=K(),f=U({id:"VxeTable",keepSource:!0,editConfig:{trigger:"click",mode:"cell",showStatus:!0},columns:j,toolbarConfig:{buttons:[{content:"在第一行新增",buttonRender:{name:"AButton",props:{type:"primary",preIcon:"mdi:page-next-outline"},events:{click:()=>{var a;(a=l.value)==null||a.insert({name:"新增的"}),e.success("新增成功")}}}},{content:"在最后一行新增",buttonRender:{name:"AButton",props:{type:"warning"},events:{click:()=>{var a;(a=l.value)==null||a.insertAt({name:"新增的"},-1)}}}}]},formConfig:{enabled:!0,items:q},height:"auto",proxyConfig:{ajax:{query:s=>h(this,[s],function*({page:a,form:m}){const d=yield B(S({page:a.currentPage,pageSize:a.pageSize,aduser_list:g.value.selectAccount,adbms_list:g.value.selectBms},m));return{items:d.list,total:d.count}}),queryAll:m=>h(this,[m],function*({form:a}){return yield B(a)})}}}),y=o,{queryDataobject:g}=W(y),i=t,r=a=>{const m=z(a.records);i("selectChangeEvent",m)},p=(a,m)=>{};return Z(()=>{}),(a,m)=>(b(),$(c(P),{contentFullHeight:"",fixedHeight:""},{default:n(()=>[_(c(H),J({ref_key:"tableRef",ref:l},f,{onCheckboxChange:r,onCheckboxAll:r}),{toolbalSlot:n(()=>[_(M,{onPressEnterInput:p})]),adsp_acc_id:n(({row:s})=>[C(u(s.adsp_acc_id)+" ",1),_(c(E),{color:c(D)[s.aduser_status]},{default:n(()=>[C(u(c(G)[s.aduser_status]),1)]),_:2},1032,["color"])]),AccountStatusSlot:n(({row:s})=>{var d;return[((d=s.sub_set)==null?void 0:d.length)>0?(b(),v("span",ee,[(b(!0),v(Q,null,X(s.sub_set,(k,V)=>(b(),v("span",{key:V},u(k.number),1))),128)),_(c(E),{color:s.sub_set[0].delivery_status==="active"?"#32CD32":"#FFC125"},{default:n(()=>[C(u(s.sub_set[0].delivery_status==="active"?"正常":"异常")+u(s.sub_set[0].delivery_status),1)]),_:2},1032,["color"])])):Y("",!0)]}),UpdateSlots:n(({row:s})=>[_(c(w),{placement:"top"},{title:n(()=>[T("span",null,u(s.update_time),1)]),default:n(()=>[T("span",null,u(c(L)(s.update_time)),1)]),_:2},1024)]),_:1},16)]),_:1}))}});export{ie as _};
