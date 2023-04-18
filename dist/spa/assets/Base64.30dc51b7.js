import{Q as s,a as u}from"./QInput.84d1c86a.js";import{Q as c}from"./QBtnToggle.e95284c8.js";import{Q as m}from"./QPage.cb2a68f2.js";import{_ as f,J as h,K as V,L as n,Z as d,M as l,N as p}from"./index.a6248687.js";import"./Ripple.d56c9d6a.js";import"./QSpinner.3c97c649.js";import"./use-dark.e3276da9.js";import"./QBtn.caf763a0.js";import"./QBtnGroup.a297d180.js";const _={data(){return{input:"",action:"encode",output:""}},watch:{input(t,e){this.update_output()},action(t,e){this.update_output()}},methods:{update_output(){this.output="",this.input&&(this.action==="encode"?this.output=this.encode(this.input):this.action==="decode"&&(this.output=this.decode(this.input)))},encode(t){const e=encodeURIComponent(t).replace(/%([a-f0-9]{2})/gi,(i,r)=>String.fromCharCode(parseInt(r,16)));return btoa(e)},decode(t){const e=atob(t).replace(/[\x80-\uffff]/g,i=>`%${i.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}}},g=d("h4",{class:"text-h4 q-mt-none q-mb-md"}," Base64 Encoding ",-1),b={class:"row"},w={href:"https://en.wikipedia.org/wiki/Base64",target:"_blank"};function x(t,e,i,r,o,k){return h(),V(m,{padding:""},{default:n(()=>[g,d("div",b,[d("a",w,[l(s,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:n(()=>[p("Wikipedia")]),_:1})]),l(s,{square:"",color:"primary","text-color":"white"},{default:n(()=>[p("Encoding")]),_:1})]),l(u,{modelValue:o.input,"onUpdate:modelValue":e[0]||(e[0]=a=>o.input=a),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),l(c,{modelValue:o.action,"onUpdate:modelValue":e[1]||(e[1]=a=>o.action=a),spread:"","toggle-color":"primary",class:"q-my-md",options:[{label:"Encode",value:"encode"},{label:"Decode",value:"decode"}]},null,8,["modelValue"]),l(u,{modelValue:o.output,"onUpdate:modelValue":e[2]||(e[2]=a=>o.output=a),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var E=f(_,[["render",x]]);export{E as default};