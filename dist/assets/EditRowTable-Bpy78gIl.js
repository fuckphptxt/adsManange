var f=(w,p,e)=>new Promise((n,s)=>{var r=i=>{try{l(e.next(i))}catch(d){s(d)}},u=i=>{try{l(e.throw(i))}catch(d){s(d)}},l=i=>i.done?n(i.value):Promise.resolve(i.value).then(r,u);l((e=e.apply(w,p)).next())});import{_ as b}from"./BasicTable.vue_vue_type_script_setup_true_lang-Bvhsa3Hg.js";import"./TableImg.vue_vue_type_style_index_0_lang-D_jLqrrq.js";import{_ as v}from"./componentMap-ntVNUfGj.js";import{u as x}from"./useTable-nv9xWolu.js";import{o as C}from"./select-gA0uFJlM.js";import{d as I}from"./table-C1pus5Ot.js";import{t as g}from"./tree-BpLDw60b.js";import{u as _}from"./entry/index-DeA-E56H-1712476170604.js";import{f as k}from"./antd-DeDWztM9.js";import{d as y,f as P,Z as h,_ as F,k as M,a9 as A,a8 as E,u as c,ab as S}from"./vue-BsEqlI2B.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-C5My3wis.js";import"./FormItem.vue_vue_type_script_lang-rXirYbu_.js";import"./helper-D26ItluK.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BvFAdDEs.js";import"./index-D4lH302q.js";import"./useWindowSizeFn-dzDjg1EY.js";import"./useForm-Bpj89oTF.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-EGd22fob.js";import"./useFormItem-C8SvMC7Y.js";import"./onMountedOrActivated-DNS7E5S8.js";import"./useSortable-B5C7L1iY.js";import"./download-C0dscIFQ.js";import"./base64Conver-bBv-IO2K.js";import"./index-CnUmmaWj.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BtQnCoXl.js";import"./copyTextToClipboard-CmW_HBj4.js";import"./index-eB2fGItq.js";import"./index-D77yVwLP.js";const Y={class:"p-4"},ut=y({__name:"EditRowTable",setup(w){const p=[{title:"输入框",dataIndex:"name-group",editRow:!0,children:[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:t=>f(this,null,function*(){return t==="2"?"不能输入该值":""})},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150}]},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:C,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:g,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:t=>t?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:t=>t?"开":"关",width:100},{title:"单选框",dataIndex:"radio1",editRow:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",editRow:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",editRow:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:C,resultField:"list",labelField:"name",valueField:"id"},width:200}],{createMessage:e}=_(),n=P(""),[s]=x({title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:I,columns:p,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function r(t){var a;n.value=t.key,(a=t.onEdit)==null||a.call(t,!0)}function u(t){var a;n.value="",(a=t.onEdit)==null||a.call(t,!1,!1)}function l(t){return f(this,null,function*(){var o,m;if(e.loading({content:"正在保存...",duration:0,key:"saving"}),yield(o=t.onValid)==null?void 0:o.call(t))try{const R=k(t.editValueRefs);(yield(m=t.onEdit)==null?void 0:m.call(t,!1,!0))&&(n.value=""),e.success({content:"数据已保存",key:"saving"})}catch(R){e.error({content:"保存失败",key:"saving"})}else e.error({content:"请填写正确的数据",key:"saving"})})}function i(t){return t.editable?[{label:"保存",onClick:l.bind(null,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:u.bind(null,t)}}]:[{label:"编辑",disabled:n.value?n.value!==t.key:!1,onClick:r.bind(null,t)}]}function d({column:t,value:a,record:o}){t.dataIndex==="id"&&(o.editValueRefs.name4.value=`${a}`)}return(t,a)=>(h(),F("div",Y,[M(c(b),{onRegister:c(s),onEditChange:d},{bodyCell:A(({column:o,record:m})=>[o.key==="action"?(h(),E(c(v),{key:0,actions:i(m)},null,8,["actions"])):S("",!0)]),_:1},8,["onRegister"])]))}});export{ut as default};
