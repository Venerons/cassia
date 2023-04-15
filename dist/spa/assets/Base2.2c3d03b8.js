import{Q as s,a as u,b as c}from"./QBtnGroup.33a7a84d.js";import{Q as p}from"./QBtn.bfa24375.js";import{Q as m}from"./QPage.c649a03e.js";import{_ as f,J as h,K as _,L as i,Z as r,M as e,N as d}from"./index.f737e56b.js";import"./use-dark.2a01bf64.js";import"./render.019c9255.js";const y={data(){return{input:"",output:""}},methods:{encrypt(){if(this.output="",!this.input)return;let o=[];for(let t=0;t<this.input.length;++t)o.push(this.input.codePointAt(t).toString(2).padStart(8,"0"));this.output=o.join("")},decrypt(){if(this.output="",!this.input)return;let o=[];for(let t=0;t<this.input.length/8;++t)o.push(String.fromCodePoint(parseInt(this.input.substring(t*8,t*8+8),2)));this.output=o.join("")}}},k=r("h4",{class:"text-h4 q-mt-none q-mb-md"}," Base2 Encoding ",-1),b={class:"row"},g={href:"https://en.wikipedia.org/wiki/Binary_code",target:"_blank"};function x(o,t,V,w,a,n){return h(),_(m,{padding:""},{default:i(()=>[k,r("div",b,[r("a",g,[e(s,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:i(()=>[d("Wikipedia")]),_:1})]),e(s,{square:"",color:"primary","text-color":"white"},{default:i(()=>[d("Encoding")]),_:1})]),e(u,{modelValue:a.input,"onUpdate:modelValue":t[0]||(t[0]=l=>a.input=l),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),e(c,{spread:"",class:"q-my-md"},{default:i(()=>[e(p,{label:"Encode",color:"primary",onClick:n.encrypt},null,8,["onClick"]),e(p,{label:"Decode",color:"primary",onClick:n.decrypt},null,8,["onClick"])]),_:1}),e(u,{modelValue:a.output,"onUpdate:modelValue":t[1]||(t[1]=l=>a.output=l),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var I=f(y,[["render",x]]);export{I as default};
