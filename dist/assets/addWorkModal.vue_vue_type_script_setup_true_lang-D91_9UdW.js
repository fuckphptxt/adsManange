var g=(c,b,i)=>new Promise((f,m)=>{var w=n=>{try{k(i.next(n))}catch(p){m(p)}},v=n=>{try{k(i.throw(n))}catch(p){m(p)}},k=n=>n.done?f(n.value):Promise.resolve(n.value).then(w,v);k((i=i.apply(c,b)).next())});import{a as H,B as O}from"./index-D4lH302q.js";import{u as G}from"./entry/index-DeA-E56H-1712476170604.js";import{a as j,g as q,b as z,c as J}from"./work-DhQ6FW9u.js";import{Y as d,V as _,aI as Y,aa as h,ae as Z,aJ as K}from"./antd-DeDWztM9.js";import{d as Q,f as u,r as F,I as X,h as ee,Z as V,a8 as x,a9 as r,$ as S,k as l,u as t,ab as ae,ag as T,G as R,ac as te}from"./vue-BsEqlI2B.js";const oe=["model"],me=Q({__name:"addWorkModal",props:{title:{type:String},timeValue:{type:String,default:"00:05:00"},selectArrId:{type:Array,default:()=>[]},accid:{type:String||Number,default:""}},emits:["okFunction"],setup(c,{emit:b}){const i=c,f=u([]),m=u([]),w=u([]),v=F({height:"30px",lineHeight:"30px"}),{timeValue:k,accid:n,selectArrId:p}=X(i),e=F({timeValue:"00:05:00",workType:"",workFlow:"",workProm:"",isExp:1}),P={timeValue:[{required:!0,message:"请选择时间",trigger:"change",type:"object"}]},I=u(),{createMessage:D}=G(),E=u(!1),M=u({}),B=b,[C,{closeModal:L,changeOkLoading:y}]=H(s=>{s&&U(s)}),N=s=>{};function U(s){M.value={selectValue:s.selectValue},$()}const W=()=>g(this,null,function*(){y(!0),setTimeout(()=>{y(!1)},2e3),e.timeValue&&(yield j({ad_user_id:p.value,type_id:e.workType,next_step_id:e.workProm,exec_time:e.timeValue,is_exp:e.isExp}),D.success("保存成功！"),B("okFunction"),y(!1),L()),y(!1)}),$=()=>g(this,null,function*(){const s=yield q();f.value=s;const a=yield z();m.value=a}),A=()=>g(this,null,function*(){const s=yield J({flow_id:e.workFlow}),a=[];s.map(o=>{a.push({name:`步骤${o.step}：${o.type_name}`,id:o.type_id})}),w.value=a});return ee(()=>{}),(s,a)=>(V(),x(t(O),te(s.$attrs,{onRegister:t(C),title:c.title,visible:E.value,onOk:W}),{default:r(()=>[S("div",null,[S("form",{ref_key:"formRef",ref:I,model:e,rules:P,"label-col":{span:4},"wrapper-col":{span:14}},[l(t(d),{label:"选择任务类型",name:"workType"},{default:r(()=>[l(t(_),{value:e.workType,"onUpdate:value":a[0]||(a[0]=o=>e.workType=o),"show-search":"",placeholder:"请选择","field-names":{label:"name",value:"id"},options:f.value},null,8,["value","options"])]),_:1}),l(t(d),{label:"选择任务流程",name:"workFlow"},{default:r(()=>[l(t(_),{value:e.workFlow,"onUpdate:value":a[1]||(a[1]=o=>e.workFlow=o),"show-search":"",placeholder:"请选择","field-names":{label:"name",value:"id"},options:m.value,onChange:A},null,8,["value","options"])]),_:1}),e.workFlow?(V(),x(t(d),{key:0,label:"选择任务步骤",name:"workProm"},{default:r(()=>[l(t(_),{value:e.workProm,"onUpdate:value":a[2]||(a[2]=o=>e.workProm=o),"show-search":"",placeholder:"请选择","field-names":{label:"name",value:"id"},options:w.value},null,8,["value","options"])]),_:1})):ae("",!0),l(t(d),{label:" 是否加急任务",name:"isExp"},{default:r(()=>[l(t(Y),{value:e.isExp,"onUpdate:value":a[3]||(a[3]=o=>e.isExp=o)},{default:r(()=>[l(t(h),{style:T(v),value:1},{default:r(()=>[R("是")]),_:1},8,["style"]),l(t(h),{style:T(v),value:0},{default:r(()=>[R("否")]),_:1},8,["style"])]),_:1},8,["value"])]),_:1}),l(t(d),{label:"任务超时时间"},{default:r(()=>[l(t(Z),{style:{width:"100%"},value:e.timeValue,"onUpdate:value":a[4]||(a[4]=o=>e.timeValue=o),valueFormat:"HH:mm:ss",onChange:N},{suffixIcon:r(()=>[l(t(K))]),_:1},8,["value"])]),_:1})],8,oe)])]),_:1},16,["onRegister","title","visible"]))}});export{me as _};
