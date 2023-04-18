import{Q as p,a as d,b as h}from"./QBtnGroup.e83e2556.js";import{Q as m}from"./QBtn.c5cee98b.js";import{Q as f}from"./QPage.59df205b.js";import{_ as b,J as _,K as y,L as i,Z as c,M as r,N as u}from"./index.b20986f7.js";import"./use-dark.a46c45ae.js";import"./render.b134ff5f.js";const k={data(){return{input:"",output:""}},methods:{encrypt(){if(this.output="",!this.input)return;const n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],e=["\u1203","\u1267","\u1223","\u12AB","\u12AA","\u1222","\u1205","\u1291","\u1200","\u1200","\u1323","\u1292","\u12B3","\u12A1","\u1324","\u1322","\u1248","\u1323","\u12B4","\u12B2","\u12E8","\u12E8","\u12E8","\u1207","\u129A","\u1217"];let l="";for(let o=0;o<this.input.length;++o){const t=this.input.charAt(o).toUpperCase(),a=n.indexOf(t);l+=a>=0?e[a]:t}this.output=l},decrypt(){if(this.output="",!this.input)return;const n=["\u1203","\u1267","\u1223","\u12AB","\u12AA","\u1222","\u1205","\u1291","\u1200","\u1200","\u1323","\u1292","\u12B3","\u12A1","\u1324","\u1322","\u1248","\u1323","\u12B4","\u12B2","\u12E8","\u12E8","\u12E8","\u1207","\u129A","\u1217"],e=["A","B","C","D","E","F","G","H","I","I","K","L","M","N","O","P","Q","R","S","T","V","V","V","X","Y","Z"];let l="";for(let o=0;o<this.input.length;++o){const t=this.input.charAt(o),a=n.indexOf(t);l+=a>=0?e[a]:t}this.output=l}}},x=c("h4",{class:"text-h4 q-mt-none q-mb-md"}," Theban Script ",-1),V={class:"row"},C={href:"https://en.wikipedia.org/wiki/Theban_script",target:"_blank"};function Q(n,e,l,o,t,a){return _(),y(f,{padding:""},{default:i(()=>[x,c("div",V,[c("a",C,[r(p,{square:"",color:"accent","text-color":"white",icon:"fa-brands fa-wikipedia-w"},{default:i(()=>[u("Wikipedia")]),_:1})]),r(p,{square:"",color:"primary","text-color":"white"},{default:i(()=>[u("Simple Substitution Cipher")]),_:1}),r(p,{square:"",color:"primary","text-color":"white"},{default:i(()=>[u("Monoalphabetic Cipher")]),_:1})]),r(d,{modelValue:t.input,"onUpdate:modelValue":e[0]||(e[0]=s=>t.input=s),label:"Input","stack-label":"",filled:"",clearable:"",type:"textarea",class:"q-my-md"},null,8,["modelValue"]),r(h,{spread:"",class:"q-my-md"},{default:i(()=>[r(m,{label:"Encrypt",color:"primary",onClick:a.encrypt},null,8,["onClick"]),r(m,{label:"Decrypt",color:"primary",onClick:a.decrypt},null,8,["onClick"])]),_:1}),r(d,{modelValue:t.output,"onUpdate:modelValue":e[1]||(e[1]=s=>t.output=s),label:"Output","stack-label":"",filled:"",type:"textarea",readonly:"",class:"q-my-md"},null,8,["modelValue"])]),_:1})}var I=b(k,[["render",Q]]);export{I as default};