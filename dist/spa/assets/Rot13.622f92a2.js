import{Q as i,a as d}from"./QInput.84d1c86a.js";import{Q as m}from"./QBtn.caf763a0.js";import{Q as h}from"./QBtnGroup.a297d180.js";import{Q as f}from"./QPage.cb2a68f2.js";import{_,J as x,K as y,L as r,Z as n,M as e,N as p}from"./index.a6248687.js";import"./Ripple.d56c9d6a.js";import"./QSpinner.3c97c649.js";import"./use-dark.e3276da9.js";const w={data(){return{input:"",output:""}},watch:{input(l,o){this.update_output()}},methods:{update_output(){this.output="",this.input&&(this.output=this.encrypt(this.input))},encrypt(l){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",c="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";let s="";for(let t=0;t<l.length;++t){const u=l.charAt(t),a=o.indexOf(u);s+=a!==-1?c.charAt(a):u}return s}}},b=n("h4",{class:"text-h4 q-mt-none q-mb-md"}," ROT13 Cipher ",-1),V={class:"row"},k={href:"https://en.wikipedia.org/wiki/ROT13",target:"_blank"};function q(l,o,c,s,t,u){return x(),y(f,{padding:""},{default:r(()=>[b,n("div",V,[n("a",k,[e(i,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:r(()=>[p("Wikipedia")]),_:1})]),e(i,{square:"",color:"primary","text-color":"white"},{default:r(()=>[p("Simple Substitution Cipher")]),_:1}),e(i,{square:"",color:"primary","text-color":"white"},{default:r(()=>[p("Monoalphabetic Cipher")]),_:1}),e(i,{square:"",color:"primary","text-color":"white"},{default:r(()=>[p("Shift Cipher")]),_:1})]),e(d,{modelValue:t.input,"onUpdate:modelValue":o[0]||(o[0]=a=>t.input=a),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),e(h,{spread:"",class:"q-my-md"},{default:r(()=>[e(m,{label:"Encrypt / Decrypt",color:"primary"})]),_:1}),e(d,{modelValue:t.output,"onUpdate:modelValue":o[1]||(o[1]=a=>t.output=a),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var T=_(w,[["render",q]]);export{T as default};