var b=Object.defineProperty;var c=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(r,a,t)=>a in r?b(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,s=(r,a)=>{for(var t in a||(a={}))d.call(a,t)&&f(r,t,a[t]);if(c)for(var t of c(a))y.call(a,t)&&f(r,t,a[t]);return r};var _=(r,a,t)=>new Promise((i,u)=>{var l=o=>{try{e(t.next(o))}catch(n){u(n)}},m=o=>{try{e(t.throw(o))}catch(n){u(n)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,m);e((t=t.apply(r,a)).next())});import{b as p}from"./entry/index-DeA-E56H-1712476170604.js";import{y as S,u as O}from"./vue-BsEqlI2B.js";function E(r,a){function t(){S(()=>_(this,null,function*(){if(r=O(r),!r)return;(yield p(()=>import("./sortable.esm-CoO8jRpa.js"),__vite__mapDeps([]))).default.create(r,s({animation:100,delay:400,delayOnTouchOnly:!0},a))}))}return{initSortable:t}}export{E as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
