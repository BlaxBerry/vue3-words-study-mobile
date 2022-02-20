import{d as b,z as L,j as P,e as T,a as v,u as w,o as _,c as p,r as $,b as d,f as o,n as E,g as l,t as f,h as N,F as D,E as z,i as A,w as c,s as V,k as H,p as j,l as O,m as S,q as R,v as J,x,y as Z,A as K,B as M,C as F,D as I,G as U,H as q,I as W,J as G,K as Q,L as X,M as Y,N as ee,O as te,P as ae,Q as oe,R as se,S as ne,T as le,U as re,V as ue}from"./vendor.b3e973f8.js";const ce=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};ce();const k=b("localStore",{state:()=>({language:localStorage.getItem("lang")||"zh",theme:"light",isDarkTheme:!1}),getters:{elementPlusConfigProviderLocal(u){switch(u.language){case"zh":return L;case"en":return T;case"ja":return P;default:return L}}},actions:{changLanguage(u){this.language=u,localStorage.setItem("lang",this.language)},toggleTheme(){this.isDarkTheme?this.theme="dark":this.theme="light",this.isDarkTheme=!this.isDarkTheme}}});var ie="/assets/cnZh.c2e44fa9.svg",de="/assets/ja.7aa3cbf7.svg",_e="/assets/en.e187252f.svg";var C=(u,s)=>{const r=u.__vccOpts||u;for(const[a,e]of s)r[a]=e;return r};const ge={key:0},me={key:1},pe=v({props:{showBottomTitle:{type:Boolean,default:!1},flagSize:{type:Number,default:40}},setup(u){const s=u,{t:r,locale:a}=w(),e=k(),t=[{lang:"zh",svg:ie,title:"ZH"},{lang:"ja",svg:de,title:"JA"},{lang:"en",svg:_e,title:"EN"}],n=i=>{a.value=i,e.changLanguage(i)};return(i,g)=>{const m=z;return _(),p(D,null,$(t,h=>d("div",{wrap:"",key:h.lang,class:"box",style:N({textAlign:s.showBottomTitle?"center":"left"})},[o(m,{size:s.flagSize,src:h.svg,class:E(l(a)===h.lang?"country-selected":"country-not-selected"),onClick:je=>n(h.lang)},null,8,["size","src","class","onClick"]),s.showBottomTitle?(_(),p("div",ge,[d("b",null,f(l(r)(`langs.${h.title}`)),1)])):(_(),p("small",me,f(l(r)(`langs.${h.title}`)),1))],4)),64)}}});var he=C(pe,[["__scopeId","data-v-e1a46ffc"]]);const fe=u=>(j("data-v-c2a68132"),u=u(),O(),u),ve={style:{paddingRight:"20px",marginTop:"5px"}},Ee=fe(()=>d("br",null,null,-1)),ye={class:"my-flags-group"},we=v({setup(u){const{t:s}=w(),r=k(),a=A(!1);return(e,t)=>{const n=S,i=R,g=J;return _(),p(D,null,[d("div",ve,[o(n,{onClick:t[0]||(t[0]=m=>a.value=!0),size:30,color:"white",class:E(a.value?"is-loading my-icon-setting":"my-icon-setting")},{default:c(()=>[o(l(V))]),_:1},8,["class"])]),o(g,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=m=>a.value=m),title:l(s)("drawer.setting"),size:"50%",direction:"ltr"},{default:c(()=>[d("div",null,f(l(s)("drawer.theme")),1),d("div",null,[o(i,{modelValue:l(r).isDarkTheme,"onUpdate:modelValue":t[1]||(t[1]=m=>l(r).isDarkTheme=m),"active-color":"#13ce66"},null,8,["modelValue"]),H(" "+f(l(s)(l(r).isDarkTheme?"drawer.themeDark":"drawer.themeLight")),1)]),Ee,d("div",null,f(l(s)("drawer.language")),1),d("div",ye,[o(he,{showBottomTitle:!1})])]),_:1},8,["modelValue","title"])],64)}}});var De=C(we,[["__scopeId","data-v-c2a68132"]]);const ke={key:0,class:"my-top-header-search-input-mobile"},Ce={key:1,class:"my-top-header-title-mobile"},Le=v({setup(u){const s=x(),{t:r}=w(),a=A(""),e=()=>{a.value.trim()&&console.log(a.value.trim())};return(t,n)=>{const i=M;return _(),p(D,null,[o(De),l(s).name==="List"?(_(),p("div",ke,[o(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=g=>a.value=g),placeholder:l(r)("topHeader.searchInputPlaceholder"),"prefix-icon":l(Z),clearable:"",onKeydown:K(e,["enter"])},null,8,["modelValue","placeholder","prefix-icon","onKeydown"])])):(_(),p("div",Ce,[d("h1",null,f(l(r)("home.title")),1)]))],64)}}});const Ae=v({setup(u){const s=x();return(r,a)=>{const e=S,t=F("router-link"),n=G,i=Q;return _(),I(i,{class:"row-bg",justify:"space-around"},{default:c(()=>[o(n,{span:6,class:E(l(s).path==="/list"?"selected center":"center")},{default:c(()=>[o(t,{to:"/list"},{default:c(()=>[o(e,{size:30},{default:c(()=>[o(l(U))]),_:1})]),_:1})]),_:1},8,["class"]),o(n,{span:6,class:E(l(s).path==="/home"?"selected center":"center")},{default:c(()=>[o(t,{to:"/home"},{default:c(()=>[o(e,{size:30},{default:c(()=>[o(l(q))]),_:1})]),_:1})]),_:1},8,["class"]),o(n,{span:6,class:E(l(s).path==="/my"?"selected center":"center")},{default:c(()=>[o(t,{to:"/my"},{default:c(()=>[o(e,{size:30},{default:c(()=>[o(l(W))]),_:1})]),_:1})]),_:1},8,["class"])]),_:1})}}});var Se=C(Ae,[["__scopeId","data-v-2d6cdf5e"]]);const xe={style:{"padding-top":"20px"}},Fe=v({setup(u){const s=k();return(r,a)=>{const e=X,t=F("router-view"),n=Y,i=ee,g=te,m=ae;return _(),I(m,{locale:l(s).elementPlusConfigProviderLocal},{default:c(()=>[o(g,{style:{height:"100vh"}},{default:c(()=>[o(e,{class:"my-top-header"},{default:c(()=>[o(Le)]),_:1}),o(i,{style:{"padding-top":"0"}},{default:c(()=>[o(n,null,{default:c(()=>[d("div",xe,[o(t)])]),_:1})]),_:1}),o(Se,{class:"my-bottom-navigation"})]),_:1})]),_:1},8,["locale"])}}});var Ie={home:{title:"\u9996\u9875"},topHeader:{searchInputPlaceholder:"\u67E5\u627E"},drawer:{setting:"\u8BBE\u7F6E",theme:"\u4E3B\u9898\u6A21\u5F0F",themeDark:"\u9ED1\u6697\u6A21\u5F0F",themeLight:"\u767D\u5929\u6A21\u5F0F",language:"\u8BED\u8A00",nowLanguage:"\u4E2D\u6587",languageZNCN:"\u4E2D\u6587",languageJA:"\u65E5\u8BED",languageEN:"\u82F1\u8BED"},langs:{ZH:"\u4E2D\u6587",JA:"\u65E5\u8BED",EN:"\u82F1\u8BED"}},Be={home:{title:"Home"},topHeader:{searchInputPlaceholder:"Search"},drawer:{setting:"Setting",theme:"Theme",themeDark:"Dark Mode",themeLight:"light Mode",language:"Language",nowLanguage:"English"},langs:{ZH:"Chinese",JA:"Japanese",EN:"English"}},be={home:{title:"\u30DB\u30FC\u30E0"},topHeader:{searchInputPlaceholder:"\u691C\u7D22"},drawer:{setting:"\u8A2D\u5B9A",theme:"\u30C6\u30FC\u30DE",themeDark:"\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9",themeLight:"\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9",language:"\u8A00\u8A9E",nowLanguage:"\u65E5\u672C\u8A9E"},langs:{ZH:"\u4E2D\u56FD\u8A9E",JA:"\u65E5\u672C\u8A9E",EN:"\u82F1\u8A9E"}},Pe={zh:Ie,en:Be,ja:be};const Te=localStorage.getItem("lang")||navigator.language||"zh",$e=oe({locale:Te,messages:Pe}),Ne="modulepreload",B={},ze="/",y=function(s,r){return!r||r.length===0?s():Promise.all(r.map(a=>{if(a=`${ze}${a}`,a in B)return;B[a]=!0;const e=a.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":Ne,e||(n.as="script",n.crossOrigin=""),n.href=a,document.head.appendChild(n),e)return new Promise((i,g)=>{n.addEventListener("load",i),n.addEventListener("error",g)})})).then(()=>s())};var Ve=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:()=>y(()=>import("./index.563946ce.js"),["assets/index.563946ce.js","assets/index.e09d6498.css","assets/el-empty.3259aa7a.css","assets/vendor.b3e973f8.js","assets/vendor.bb9fdead.css"])},{path:"/list",name:"List",component:()=>y(()=>import("./index.35d741ec.js"),["assets/index.35d741ec.js","assets/el-empty.3259aa7a.css","assets/vendor.b3e973f8.js","assets/vendor.bb9fdead.css"])},{path:"/my",name:"My",component:()=>y(()=>import("./index.05b91fc9.js"),["assets/index.05b91fc9.js","assets/el-empty.3259aa7a.css","assets/vendor.b3e973f8.js","assets/vendor.bb9fdead.css"])},{path:"/word",name:"Word",component:()=>y(()=>import("./index.6df1596d.js"),["assets/index.6df1596d.js","assets/el-empty.3259aa7a.css","assets/vendor.b3e973f8.js","assets/vendor.bb9fdead.css"]),meta:{navigationDisable:!0}}];const He=se({history:ne(),routes:Ve});le(Fe).use(re).use($e).use(He).use(ue()).mount("#app");export{he as F,C as _};
