import{i as n}from"./entry/index-DeA-E56H-1712476170604.js";import{a2 as s}from"./antd-DeDWztM9.js";const{t}=n();function l(e){return e.includes("Input")||e.includes("Complete")?t("common.inputText"):e.includes("Picker")||e.includes("Select")||e.includes("Cascader")||e.includes("Checkbox")||e.includes("Radio")||e.includes("Switch")?t("common.chooseText"):""}const u=["DatePicker","MonthPicker","WeekPicker","TimePicker"];function c(){return[...u,"RangePicker"]}function f(e,i,r){Reflect.has(e,"type")||(["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(i)?e.type=r?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(i)?e.type="array":["InputNumber"].includes(i)&&(e.type="number"))}const a=["Input","InputPassword","InputNumber","InputSearch","InputTextArea"];function m(e,i){return e&&a.includes(e)&&i&&s(i)?`${i}`:i}const T=c(),k=["Upload","ApiTransfer","ApiTree","ApiTreeSelect","ApiRadioGroup","ApiCascader","AutoComplete","RadioButtonGroup","ImageUpload","ApiSelect"],o=["Divider","BasicTitle"];function P(e){return o.includes(e||"")}export{k as N,a,l as c,T as d,m as h,P as i,f as s};
