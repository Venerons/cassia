import{Q as i,a as s,b as d}from"./QBtnGroup.33a7a84d.js";import{Q as p}from"./QBtn.bfa24375.js";import{Q as c}from"./QPage.c649a03e.js";import{_ as m,J as f,K as h,L as a,Z as n,M as t,N as u}from"./index.f737e56b.js";import"./use-dark.2a01bf64.js";import"./render.019c9255.js";const _={data(){return{input:"",output:""}},methods:{encrypt(){this.output="",this.input&&(this.output=encodeURIComponent(this.input))},decrypt(){this.output="",this.input&&(this.output=decodeURIComponent(this.input))}}},k=n("h4",{class:"text-h4 q-mt-none q-mb-md"}," URL Encoding ",-1),y={class:"row"},b={href:"https://en.wikipedia.org/wiki/URL_encoding",target:"_blank"};function x(V,e,g,w,o,r){return f(),h(c,{padding:""},{default:a(()=>[k,n("div",y,[n("a",b,[t(i,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:a(()=>[u("Wikipedia")]),_:1})]),t(i,{square:"",color:"primary","text-color":"white"},{default:a(()=>[u("Encoding")]),_:1})]),t(s,{modelValue:o.input,"onUpdate:modelValue":e[0]||(e[0]=l=>o.input=l),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),t(d,{spread:"",class:"q-my-md"},{default:a(()=>[t(p,{label:"Encode",color:"primary",onClick:r.encrypt},null,8,["onClick"]),t(p,{label:"Decode",color:"primary",onClick:r.decrypt},null,8,["onClick"])]),_:1}),t(s,{modelValue:o.output,"onUpdate:modelValue":e[1]||(e[1]=l=>o.output=l),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var E=m(_,[["render",x]]);export{E as default};
