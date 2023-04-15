import{Q as n,a as s,b as d}from"./QBtnGroup.503d233f.js";import{Q as c}from"./QBtn.5d977a93.js";import{Q as m}from"./QPage.c563735c.js";import{_ as f,J as h,K as _,L as r,Z as l,M as o,N as u}from"./index.15642bba.js";import"./use-dark.c1e66174.js";import"./render.a26890a0.js";const b={data(){return{input:7,output:""}},methods:{generate(){if(this.output="",!(this.input>=1&&this.input<=91))return;const e=[0,1];for(let t=0;t<this.input;++t)e.push(e[e.length-1]+e[e.length-2]);this.output=e.join(" ")}}},k=l("h4",{class:"text-h4 q-mt-none q-mb-md"}," Fibonacci Sequence Generator ",-1),x={class:"row"},q={href:"https://en.wikipedia.org/wiki/Fibonacci_sequence",target:"_blank"};function y(e,t,V,g,a,p){return h(),_(m,{padding:""},{default:r(()=>[k,l("div",x,[l("a",q,[o(n,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:r(()=>[u("Wikipedia")]),_:1})]),o(n,{square:"",color:"primary","text-color":"white"},{default:r(()=>[u("Key Generator")]),_:1})]),o(s,{modelValue:a.input,"onUpdate:modelValue":t[0]||(t[0]=i=>a.input=i),modelModifiers:{number:!0},type:"number",min:"1",max:"91",step:"1",label:"Level","stack-label":"",filled:"",class:"q-my-md"},null,8,["modelValue"]),o(d,{spread:"",class:"q-my-md"},{default:r(()=>[o(c,{label:"Generate",color:"primary",onClick:p.generate},null,8,["onClick"])]),_:1}),o(s,{modelValue:a.output,"onUpdate:modelValue":t[1]||(t[1]=i=>a.output=i),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var v=f(b,[["render",y]]);export{v as default};