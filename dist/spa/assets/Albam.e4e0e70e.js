import{Q as p,a as c,b as h}from"./QBtnGroup.fccbb99e.js";import{Q as d}from"./QBtn.c623fa80.js";import{Q as f}from"./QPage.6ffebb9b.js";import{_ as y,J as b,K as x,L as i,Z as m,M as r,N as n}from"./index.1d0c236a.js";import"./use-dark.e3e159e4.js";import"./render.24c2936a.js";const C={data(){return{input:"",output:""}},methods:{encrypt(){if(this.output="",!this.input)return;const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890";let a="";for(let o=0;o<this.input.length;++o){const t=this.input.charAt(o),l=s.indexOf(t);a+=l>=0?e.charAt(l):t}this.output=a},decrypt(){if(this.output="",!this.input)return;const s="LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let a="";for(let o=0;o<this.input.length;++o){const t=this.input.charAt(o),l=s.indexOf(t);a+=l>=0?e.charAt(l):t}this.output=a}}},_=m("h4",{class:"text-h4 q-mt-none q-mb-md"}," Albam Cipher ",-1),V={class:"row"};function k(s,e,a,o,t,l){return b(),x(f,{padding:""},{default:i(()=>[_,m("div",V,[r(p,{square:"",color:"primary","text-color":"white"},{default:i(()=>[n("Simple Substitution Cipher")]),_:1}),r(p,{square:"",color:"primary","text-color":"white"},{default:i(()=>[n("Monoalphabetic Cipher")]),_:1}),r(p,{square:"",color:"primary","text-color":"white"},{default:i(()=>[n("Shift Cipher")]),_:1})]),r(c,{modelValue:t.input,"onUpdate:modelValue":e[0]||(e[0]=u=>t.input=u),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),r(h,{spread:"",class:"q-my-md"},{default:i(()=>[r(d,{label:"Encrypt",color:"primary",onClick:l.encrypt},null,8,["onClick"]),r(d,{label:"Decrypt",color:"primary",onClick:l.decrypt},null,8,["onClick"])]),_:1}),r(c,{modelValue:t.output,"onUpdate:modelValue":e[1]||(e[1]=u=>t.output=u),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var N=y(C,[["render",k]]);export{N as default};
