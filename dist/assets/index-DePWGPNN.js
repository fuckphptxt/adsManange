import{_ as g}from"./BasicTable.vue_vue_type_script_setup_true_lang-Bvhsa3Hg.js";import"./TableImg.vue_vue_type_style_index_0_lang-D_jLqrrq.js";import{_ as C}from"./componentMap-ntVNUfGj.js";import{u as x}from"./useTable-nv9xWolu.js";import{f as k}from"./system-DR9r84eU.js";import{u as w}from"./index-C-f-2nz-.js";import{_ as y,c as T,s as S}from"./MenuDrawer.vue_vue_type_script_setup_true_lang-mwaQgSt-.js";import{d as R,a7 as D,Z as a,_ as v,k as o,a9 as r,G as B,a8 as F,u as e,ab as M,y as N}from"./vue-BsEqlI2B.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-C5My3wis.js";import"./FormItem.vue_vue_type_script_lang-rXirYbu_.js";import"./entry/index-DeA-E56H-1712476170604.js";import"./antd-DeDWztM9.js";import"./helper-D26ItluK.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BvFAdDEs.js";import"./index-D4lH302q.js";import"./useWindowSizeFn-dzDjg1EY.js";import"./useForm-Bpj89oTF.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-EGd22fob.js";import"./useFormItem-C8SvMC7Y.js";import"./onMountedOrActivated-DNS7E5S8.js";import"./useSortable-B5C7L1iY.js";import"./download-C0dscIFQ.js";import"./base64Conver-bBv-IO2K.js";import"./index-CnUmmaWj.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BtQnCoXl.js";import"./copyTextToClipboard-CmW_HBj4.js";import"./index-eB2fGItq.js";import"./index-D77yVwLP.js";const pe=R({name:"MenuManagement",__name:"index",setup(V){const[s,{openDrawer:i}]=w(),[m,{reload:l,expandAll:c}]=x({title:"菜单列表",api:k,columns:T,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function u(t){i(!0,{record:t,isUpdate:!0})}function d(t){}function f(){l()}function _(){N(c)}return(t,$)=>{const h=D("a-button");return a(),v("div",null,[o(e(g),{onRegister:e(m),onFetchSuccess:_},{toolbar:r(()=>[o(h,{type:"primary",onClick:p},{default:r(()=>[B(" 新增菜单 ")]),_:1})]),bodyCell:r(({column:b,record:n})=>[b.key==="action"?(a(),F(e(C),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:u.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,n)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),o(y,{onRegister:e(s),onSuccess:f},null,8,["onRegister"])])}}});export{pe as default};
