import{c as t,X as u,Y as f,h as r,B as S}from"./index.a6248687.js";const s={xs:18,sm:24,md:32,lg:38,xl:46},z={size:String};function g(e,n=s){return t(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const v=e=>u(f(e)),x=e=>u(e);function k(e,n){return e!==void 0&&e()||n}function p(e,n){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return n}function y(e,n){return e!==void 0?n.concat(e()):n}function w(e,n){return e===void 0?n:n!==void 0?n.concat(e()):e()}function D(e,n,i,a,c,l){n.key=a+c;const o=r(e,n,i);return c===!0?S(o,l()):o}const d={size:{type:[Number,String],default:"1em"},color:String};function m(e){return{cSize:t(()=>e.size in s?`${s[e.size]}px`:e.size),classes:t(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var b=v({name:"QSpinner",props:{...d,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:i}=m(e);return()=>r("svg",{class:i.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{b as Q,p as a,x as b,v as c,y as d,D as e,g as f,w as g,k as h,z as u};