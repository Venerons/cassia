import{Q as p,a as d}from"./QBtnGroup.e83e2556.js";import{Q as h}from"./QBtnToggle.0090155a.js";import{Q as m}from"./QPage.59df205b.js";import{_ as f,J as y,K as b,L as n,Z as c,M as i,N as u}from"./index.b20986f7.js";import"./QBtn.c5cee98b.js";import"./render.b134ff5f.js";import"./use-dark.a46c45ae.js";const x={data(){return{input:"",action:"encrypt",output:""}},watch:{input(a,e){this.update_output()},action(a,e){this.update_output()}},methods:{update_output(){this.output="",this.input&&(this.action==="encrypt"?this.output=this.encrypt(this.input):this.action==="decrypt"&&(this.output=this.decrypt(this.input)))},encrypt(a){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s="LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890";let l="";for(let t=0;t<a.length;++t){const r=a.charAt(t),o=e.indexOf(r);l+=o!==-1?s.charAt(o):r}return l},decrypt(a){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s="LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890";let l="";for(let t=0;t<a.length;++t){const r=a.charAt(t),o=s.indexOf(r);l+=o!==-1?e.charAt(o):r}return l}}},V=c("h4",{class:"text-h4 q-mt-none q-mb-md"}," Albam Cipher ",-1),_={class:"row"},w=c("p",{class:"text-body1"},"The Albam Cipher is an ancient Hebrew shift cipher, where each letter is shifter 11 positions down the alphabet.",-1);function g(a,e,s,l,t,r){return y(),b(m,{padding:""},{default:n(()=>[V,c("div",_,[i(p,{square:"",color:"primary","text-color":"white"},{default:n(()=>[u("Simple Substitution Cipher")]),_:1}),i(p,{square:"",color:"primary","text-color":"white"},{default:n(()=>[u("Monoalphabetic Cipher")]),_:1}),i(p,{square:"",color:"primary","text-color":"white"},{default:n(()=>[u("Shift Cipher")]),_:1})]),i(d,{modelValue:t.input,"onUpdate:modelValue":e[0]||(e[0]=o=>t.input=o),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),i(h,{modelValue:t.action,"onUpdate:modelValue":e[1]||(e[1]=o=>t.action=o),spread:"","toggle-color":"primary",class:"q-my-md",options:[{label:"Encrypt",value:"encrypt"},{label:"Decrypt",value:"decrypt"}]},null,8,["modelValue"]),i(d,{modelValue:t.output,"onUpdate:modelValue":e[2]||(e[2]=o=>t.output=o),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"]),w]),_:1})}var N=f(x,[["render",g]]);export{N as default};
