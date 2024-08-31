import{d as r,c as m,e as v,f as b,r as _,g as w,h as y,i as l,j as d,k as e,n as k,l as t,m as s,t as o,p as $,F as A,q as G,s as F,_ as B,v as n}from"./index-e8df921e.js";import{_ as C,F as I}from"./index-3ce37870.js";const L={class:"bg-blue-100 dark:bg-gray-950 dark:text-white flex py-24 px-8 w-full overflow-hidden h-[550px] rounded-lg gap-22"},S=$('<div class="w-36 h-36 absolute top-0 right-0"><svg id="10015.io" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="svg-pattern" x="0" y="0" width="62" height="62" patternUnits="userSpaceOnUse" patternTransform="translate(30, 30) rotate(0) skewX(0)"><svg width="32" height="32" viewBox="0 0 100 100"><g fill="rgba(68, 12, 237, 0.28)" opacity="1"><circle cx="50" cy="50" r="50"></circle></g></svg></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="rgba(246, 246, 247, 0)"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#svg-pattern)"></rect></svg></div>',1),M={class:"flex flex-col justify-between"},N={class:"font-bold g-text-hero text-2xl md:text-5xl leading-relaxed text-justify"},D=r({__name:"Hero",setup(a){const i=m();async function c(){f(),await i.push("/chat"),x()}const{isMobile:u}=v(),g=b(),p=_(!0);function f(){g.start(),p.value=!1}function x(){g.finish(),p.value=!0}_(null);const h=_(null);return w(()=>{}),y(()=>{h.value&&h.value.destroy()}),(be,we)=>(l(),d("div",L,[S,e("div",M,[e("div",{class:k(["first-letter:font-bold first-letter:text-blue-700 first-letter:font-serif font-bold gtext",[t(u)?"first-letter:text-7xl text-5xl":" first-letter:text-9xl text-7xl"]])},s(t(o)("common.nameApp")),3),e("div",N,s(t(o)("app.descApp")),1),e("button",{class:"btn btn-primary font-bold text-2xl w-56",onClick:c},s(t(o)("app.start")),1)])]))}}),O="/assets/Meta-505cb017.png",j="/assets/Google-0e666f08.png",U="/assets/OpenAI-1a99446e.png",V="/assets/Microsoft-3035f42d.png",z={class:"grid grid-cols-2 bg-blue-200 dark:bg-rose-400 rounded-lg h-[350px] gap-y-8 py-8 place-content-center justify-items-center place-items-center w-full"},E=["src"],R=["src"],q=["src"],H=["src"],T=r({__name:"Company",setup(a){return(i,c)=>(l(),d("div",z,[e("img",{class:"w-36 h-22",src:t(O),alt:"Meta Logo"},null,8,E),e("img",{class:"w-36 h-18",src:t(j),alt:"Google Logo"},null,8,R),e("img",{class:"w-36 h-18",src:t(U),alt:"OpenAI Logo"},null,8,q),e("img",{class:"w-36 h-18",src:t(V),alt:"OpenAI Logo"},null,8,H)]))}}),X="/assets/textGen-33fcb76b.png",J="/assets/imageGen-5bee6475.png",K="/assets/aiChat-9f6b8817.avif",P="/assets/noAds-e1bdb927.webp",Q=a=>(G("data-v-1e43952f"),a=a(),F(),a),W=Q(()=>e("div",{class:"font-bold text-6xl md:text-8xl underlined gtext text-center my-8"}," Features ",-1)),Y={class:"grid grid-col-2 gap-y-2"},Z={class:"section bg-purple-100 dark:bg-purple-900 dark:text-white"},ee={class:"header2 gtext"},te=["src"],se={class:"description"},oe={class:"section bg-orange-100 dark:bg-orange-900 dark:text-white"},ae={class:"header2 gtext"},ne=["src"],ie={class:"description"},ce={class:"section bg-emerald-100 dark:bg-emerald-900 dark:text-white"},re={class:"header2 gtext"},le=["src"],de={class:"description"},_e={class:"section bg-red-100 dark:bg-red-900 dark:text-white"},ge={class:"header2 gtext"},pe=["src"],he={class:"description"},ue=r({__name:"Features",setup(a){return(i,c)=>(l(),d(A,null,[W,e("div",Y,[e("div",Z,[e("div",ee,s(t(o)("features.textGeneration")),1),e("img",{class:"w-72 h-44 rounded-lg",src:t(X),alt:"text Generation"},null,8,te),e("div",se,s(t(o)("features.textGenerationDescription")),1)]),e("div",oe,[e("div",ae,s(t(o)("features.imageGeneration")),1),e("img",{class:"w-72 h-44 rounded-lg",src:t(J),alt:"image Generation"},null,8,ne),e("div",ie,s(t(o)("features.imageGenerationDescription")),1)]),e("div",ce,[e("div",re,s(t(o)("features.aiChat")),1),e("img",{class:"w-72 h-44 rounded-lg",src:t(K),alt:"AI Chat"},null,8,le),e("div",de,s(t(o)("features.aiChatDescription")),1)]),e("div",_e,[e("div",ge,s(t(o)("features.freeAndNoAds")),1),e("img",{class:"w-72 h-44 rounded-lg",src:t(P),alt:"Free and No Ads"},null,8,pe),e("div",he,s(t(o)("features.freeAndNoAdsDescription")),1)])])],64))}});const fe=B(ue,[["__scopeId","data-v-1e43952f"]]),xe={class:"container pb-1 dark:bg-violet-950"},me={class:"sticky top-0 z-50"},ve={class:"relative flex flex-col gap-4"},$e=r({__name:"index",setup(a){return(i,c)=>(l(),d("div",xe,[e("div",me,[n(t(C))]),e("main",ve,[n(D),n(T),n(fe)]),n(t(I))]))}});export{$e as default};