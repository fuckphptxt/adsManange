import{d as f}from"./vuedraggable.umd-NnXqrhgY.js";import g from"./LayoutItem-Bh_CGQB7.js";import{u as h}from"./useFormDesignState-Og9vQdbE.js";import{a0 as v,af as _,f as C}from"./antd-DeDWztM9.js";import{d as y,c as S,a7 as r,Z as E,_ as F,m as I,A as D,k as s,a9 as d,$ as b,aj as k,ak as A}from"./vue-BsEqlI2B.js";import{_ as V}from"./entry/index-DeA-E56H-1712476170604.js";import"./FormNode-DXTMJkY_.js";import"./FormNodeOperate-BzDzyivx.js";import"./index-DYt7uxt0.js";import"./index-BlGgCtod.js";import"./formItemConfig-bmdOFQiN.js";import"./componentMap-ntVNUfGj.js";import"./useFormItem-C8SvMC7Y.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-EGd22fob.js";import"./index-D4lH302q.js";import"./useWindowSizeFn-dzDjg1EY.js";import"./uuid-D0SLUWHI.js";import"./useSortable-B5C7L1iY.js";import"./download-C0dscIFQ.js";import"./base64Conver-bBv-IO2K.js";import"./index-CnUmmaWj.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BtQnCoXl.js";import"./copyTextToClipboard-CmW_HBj4.js";import"./index-eB2fGItq.js";import"./index-D77yVwLP.js";const $=y({name:"FormComponentPanel",components:{LayoutItem:g,draggable:f,Form:v,Empty:_},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:t}=h(),i=({newIndex:e})=>{t.value.schemas=t.value.schemas||[];const m=t.value.schemas;m[e]=C(m[e]),a("handleSetSelectItem",m[e])},p=e=>{a("handleSetSelectItem",t.value.schemas[e.oldIndex])},l=S(()=>t.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:p,formConfig:t,layoutTag:l}}}),B={class:"form-panel v-form-container"},P={class:"draggable-box"};function L(o,a,t,i,p,l){const e=r("Empty"),m=r("LayoutItem"),c=r("draggable"),u=r("Form");return E(),F("div",B,[I(s(e,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[D,o.formConfig.schemas.length===0]]),s(u,k(A(o.formConfig)),{default:d(()=>[b("div",P,[s(c,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=n=>o.formConfig.schemas=n),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:d(({element:n})=>[s(m,{class:"drag-move",schema:n,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const ro=V($,[["render",L],["__scopeId","data-v-311e860d"]]);export{ro as default};
