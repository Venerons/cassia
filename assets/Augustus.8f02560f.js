import{Q as n,a as d}from"./QBtnGroup.e83e2556.js";import{Q as h}from"./QBtnToggle.0090155a.js";import{Q as m}from"./QPage.59df205b.js";import{_ as f,J as y,K as x,L as s,Z as c,M as r,N as p}from"./index.b20986f7.js";import"./QBtn.c5cee98b.js";import"./render.b134ff5f.js";import"./use-dark.a46c45ae.js";const _={data(){return{input:"",action:"encrypt",output:""}},watch:{input(a,e){this.update_output()},action(a,e){this.update_output()}},methods:{update_output(){this.output="",this.input&&(this.action==="encrypt"?this.output=this.encrypt(this.input):this.action==="decrypt"&&(this.output=this.decrypt(this.input)))},encrypt(a){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u="ZABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxy9012345678";let i="";for(let t=0;t<a.length;++t){const l=a.charAt(t),o=e.indexOf(l);i+=o!==-1?u.charAt(o):l}return i},decrypt(a){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u="ZABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxy9012345678";let i="";for(let t=0;t<a.length;++t){const l=a.charAt(t),o=u.indexOf(l);i+=o!==-1?e.charAt(o):l}return i}}},V=c("h4",{class:"text-h4 q-mt-none q-mb-md"}," Augustus Cipher ",-1),w={class:"row"},b={href:"https://en.wikipedia.org/wiki/Caesar_cipher",target:"_blank"},g=c("p",{class:"text-body1"},"The Augustus Cipher is an ancient shift cipher, where each letter is shifter 1 position down the alphabet.",-1);function k(a,e,u,i,t,l){return y(),x(m,{padding:""},{default:s(()=>[V,c("div",w,[c("a",b,[r(n,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:s(()=>[p("Wikipedia")]),_:1})]),r(n,{square:"",color:"primary","text-color":"white"},{default:s(()=>[p("Simple Substitution Cipher")]),_:1}),r(n,{square:"",color:"primary","text-color":"white"},{default:s(()=>[p("Monoalphabetic Cipher")]),_:1}),r(n,{square:"",color:"primary","text-color":"white"},{default:s(()=>[p("Shift Cipher")]),_:1})]),r(d,{modelValue:t.input,"onUpdate:modelValue":e[0]||(e[0]=o=>t.input=o),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),r(h,{modelValue:t.action,"onUpdate:modelValue":e[1]||(e[1]=o=>t.action=o),spread:"","toggle-color":"primary",class:"q-my-md",options:[{label:"Encrypt",value:"encrypt"},{label:"Decrypt",value:"decrypt"}]},null,8,["modelValue"]),r(d,{modelValue:t.output,"onUpdate:modelValue":e[2]||(e[2]=o=>t.output=o),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"]),g]),_:1})}var O=f(_,[["render",k]]);export{O as default};