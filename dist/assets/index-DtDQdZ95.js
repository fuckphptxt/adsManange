var k=(h,m,e)=>new Promise((t,l)=>{var f=r=>{try{i(e.next(r))}catch(a){l(a)}},_=r=>{try{i(e.throw(r))}catch(a){l(a)}},i=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,_);i((e=e.apply(h,m)).next())});import{d as x,f as w,w as D,y as T,a7 as A,Z as u,_ as g,F as R,aa as V,m as I,A as S,k as s,u as o,a9 as n,G as y,a0 as b,a8 as $,ab as B}from"./vue-BsEqlI2B.js";import{_ as M}from"./DetailModal.vue_vue_type_script_setup_true_lang-_gWEcBlg.js";import{_ as N}from"./BasicTable.vue_vue_type_script_setup_true_lang-Bvhsa3Hg.js";import"./TableImg.vue_vue_type_style_index_0_lang-D_jLqrrq.js";import{_ as j}from"./componentMap-ntVNUfGj.js";import{u as F}from"./useTable-nv9xWolu.js";import{u as G}from"./index-D4lH302q.js";import{e as H,i as Z,aT as q}from"./entry/index-DeA-E56H-1712476170604.js";import{getColumns as z}from"./data-CtTY27pf.js";import{f as J}from"./antd-DeDWztM9.js";import"./index-Cu1YO1qT.js";import"./useDescription-CiBfXwT2.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-C5My3wis.js";import"./FormItem.vue_vue_type_script_lang-rXirYbu_.js";import"./helper-D26ItluK.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BvFAdDEs.js";import"./useForm-Bpj89oTF.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-EGd22fob.js";import"./useFormItem-C8SvMC7Y.js";import"./onMountedOrActivated-DNS7E5S8.js";import"./useWindowSizeFn-dzDjg1EY.js";import"./useSortable-B5C7L1iY.js";import"./download-C0dscIFQ.js";import"./base64Conver-bBv-IO2K.js";import"./index-CnUmmaWj.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BtQnCoXl.js";import"./copyTextToClipboard-CmW_HBj4.js";import"./index-eB2fGItq.js";import"./index-D77yVwLP.js";const K=()=>H.get({url:"/error"}),O={class:"p-4"},P=["src"],Tr=x({__name:"index",setup(h){const m=w(),e=w([]),{t}=Z(),l=q(),[f,{setTableData:_}]=F({title:t("sys.errorLog.tableTitle"),columns:z(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=G();D(()=>l.getErrorLogInfoList,c=>{T(()=>{_(J(c))})},{immediate:!0});function a(c){m.value=c,r(!0)}function C(){throw new Error("fire vue error!")}function E(){e.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield K()})}return(c,Q)=>{const d=A("a-button");return u(),g("div",O,[(u(!0),g(R,null,V(e.value,p=>I((u(),g("img",{key:p,src:p,alt:""},null,8,P)),[[S,!1]])),128)),s(M,{info:m.value,onRegister:o(i)},null,8,["info","onRegister"]),s(o(N),{onRegister:o(f),class:"error-handle-table"},{toolbar:n(()=>[s(d,{onClick:C,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireVueError")),1)]),_:1}),s(d,{onClick:E,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireResourceError")),1)]),_:1}),s(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:p,record:v})=>[p.key==="action"?(u(),$(o(j),{key:0,actions:[{label:o(t)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,v)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"])])}}});export{Tr as default};
