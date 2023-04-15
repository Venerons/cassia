import{Q as p,a as d,b as m}from"./QBtnGroup.503d233f.js";import{Q as h}from"./QBtn.5d977a93.js";import{Q as f}from"./QPage.c563735c.js";import{_ as b,J as y,K as k,L as i,Z as c,M as r,N as u}from"./index.15642bba.js";import"./use-dark.c1e66174.js";import"./render.a26890a0.js";const x={data(){return{input:"",output:""}},methods:{encrypt(){if(this.output="",!this.input)return;const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210";let l="";for(let o=0;o<this.input.length;++o){const t=this.input.charAt(o),a=s.indexOf(t);l+=a>=0?e.charAt(a):t}this.output=l},decrypt(){if(this.output="",!this.input)return;const s="ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let l="";for(let o=0;o<this.input.length;++o){const t=this.input.charAt(o),a=s.indexOf(t);l+=a>=0?e.charAt(a):t}this.output=l}}},_=c("h4",{class:"text-h4 q-mt-none q-mb-md"}," Atbash Cipher ",-1),w={class:"row"},C={href:"https://en.wikipedia.org/wiki/Atbash",target:"_blank"};function V(s,e,l,o,t,a){return y(),k(f,{padding:""},{default:i(()=>[_,c("div",w,[c("a",C,[r(p,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:i(()=>[u("Wikipedia")]),_:1})]),r(p,{square:"",color:"primary","text-color":"white"},{default:i(()=>[u("Simple Substitution Cipher")]),_:1}),r(p,{square:"",color:"primary","text-color":"white"},{default:i(()=>[u("Monoalphabetic Cipher")]),_:1})]),r(d,{modelValue:t.input,"onUpdate:modelValue":e[0]||(e[0]=n=>t.input=n),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),r(m,{spread:"",class:"q-my-md"},{default:i(()=>[r(h,{label:"Encrypt",color:"primary",onClick:a.encrypt},null,8,["onClick"]),r(h,{label:"Decrypt",color:"primary",onClick:a.decrypt},null,8,["onClick"])]),_:1}),r(d,{modelValue:t.output,"onUpdate:modelValue":e[1]||(e[1]=n=>t.output=n),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var O=b(x,[["render",V]]);export{O as default};