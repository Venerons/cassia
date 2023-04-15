import{Q as p,a as d,b as m}from"./QBtnGroup.33a7a84d.js";import{Q as u}from"./QBtn.bfa24375.js";import{Q as f}from"./QPage.c649a03e.js";import{_ as h,J as _,K as b,L as r,Z as n,M as e,N as c}from"./index.f737e56b.js";import"./use-dark.2a01bf64.js";import"./render.019c9255.js";const k={data(){return{input:"",output:""}},methods:{encrypt(){if(this.output="",!this.input)return;const o=encodeURIComponent(this.input).replace(/%([a-f0-9]{2})/gi,(t,i)=>String.fromCharCode(parseInt(i,16)));this.output=btoa(o)},decrypt(){if(this.output="",!this.input)return;const o=atob(this.input).replace(/[\x80-\uffff]/g,t=>`%${t.charCodeAt(0).toString(16).padStart(2,"0")}`);this.output=decodeURIComponent(o)}}},y=n("h4",{class:"text-h4 q-mt-none q-mb-md"}," Base64 Encoding ",-1),x={class:"row"},C={href:"https://en.wikipedia.org/wiki/Base64",target:"_blank"};function g(o,t,i,V,a,s){return _(),b(f,{padding:""},{default:r(()=>[y,n("div",x,[n("a",C,[e(p,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:r(()=>[c("Wikipedia")]),_:1})]),e(p,{square:"",color:"primary","text-color":"white"},{default:r(()=>[c("Encoding")]),_:1})]),e(d,{modelValue:a.input,"onUpdate:modelValue":t[0]||(t[0]=l=>a.input=l),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),e(m,{spread:"",class:"q-my-md"},{default:r(()=>[e(u,{label:"Encode",color:"primary",onClick:s.encrypt},null,8,["onClick"]),e(u,{label:"Decode",color:"primary",onClick:s.decrypt},null,8,["onClick"])]),_:1}),e(d,{modelValue:a.output,"onUpdate:modelValue":t[1]||(t[1]=l=>a.output=l),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var U=h(k,[["render",g]]);export{U as default};