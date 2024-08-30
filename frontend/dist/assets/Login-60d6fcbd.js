import{d as V,c as q,H as U,r as d,b as j,t,f as D,y as M,i as $,j as G,k as o,v as a,l as e,m as p,A as i,G as P,I as T,J as k,K as I,L as H,B as m,E as J,M as B,O,P as Q}from"./index-a68aaa53.js";import{_ as W}from"./PolicyCollection.vue_vue_type_script_setup_true_lang-8007bfaf.js";import{N as F,a as X}from"./FormItem-b30e1ec3.js";const Y={class:"grid grid-row-6 min-h-full dark:text-white"},Z={class:"self-center row-span-2 place-self-center"},ee={class:"flex flex-col relative overflow-hidden place-self-center gap-6 w-80 pt-2 px-4 glass bg-blue-50 dark:bg-gray-800 dark:text-white rounded-lg"},ae=o("div",{class:"h-20 w-20 absolute -left-5 -bottom-10 rounded-full bg-primary"},null,-1),se={class:"post-heading"},te={class:"text1 text-3xl font-bold text-center gtext p-1"},le={style:{display:"flex","justify-content":"flex-end"}},oe={class:"flex flex-row-reverse justify-center gap-1 mb-12"},re={class:"row-span-2 place-self-center"},pe=V({__name:"Login",setup(ie){const f=q(),N=U(),v=d(null),h=d(null),c=j(),n=d(!1),g=d({email:"",password:""}),s=g,R={email:[{required:!0,message:t("auth.emailRequired"),trigger:["input","blur"]}],password:[{required:!0,message:t("auth.passwordRequired"),trigger:["input","blur"]}]};function C(){var r;g.value.password&&((r=h.value)==null||r.validate({trigger:"password-input"}))}async function E(){try{await N.Login(s.value.email,s.value.password),n.value=!1,x(),await f.push({name:"Chat",params:{uuid:""}}),y()}catch(r){console.error(r.message),n.value=!1,c.error(t("auth.signInFailed"))}}const w=D(),_=d(!0);function x(){w.start(),_.value=!1}function y(){w.finish(),_.value=!0}async function S(){x(),await f.push("/auth/signup"),y()}function b(r){var l;r.preventDefault(),(l=v.value)==null||l.validate(u=>{if(u)c.error(t("auth.fillAllField")),n.value=!1;else if(Q(s.value.email))if(s.value.password&&s.value.password.length<8){c.error(t("auth.passwordLengthError")),n.value=!1;return}else n.value=!0,E();else{c.error(t("auth.invalidEmailFormat")),n.value=!1;return}})}const z=M(()=>["@gmail.com"].map(r=>{const l=s.value.email.split("@")[0];return{label:l+r,value:l+r}}));return(r,l)=>($(),G("div",Y,[o("div",Z,[a(e(P),{size:60})]),o("div",ee,[ae,o("div",se,[o("div",te,p(e(t)("auth.loginIn")),1)]),a(e(X),{ref_key:"formRef",ref:v,model:e(s),rules:R,size:"large"},{default:i(()=>[a(e(F),{path:"email",label:e(t)("auth.email")},{default:i(()=>[a(e(T),{value:e(s).email,"onUpdate:value":l[1]||(l[1]=u=>e(s).email=u),"input-props":{autocomplete:"disabled"},options:z.value,size:"large",placeholder:"Email",clearable:""},{default:i(({handleInput:u,handleBlur:A,handleFocus:K,value:L})=>[a(e(k),{placeholder:"example@gmail.com",onKeydown:l[0]||(l[0]=I(H(()=>{},["prevent"]),["enter"])),value:L,onInput:u,onFocus:K,onBlur:A,size:"large"},{prefix:i(()=>[a(e(m),{icon:"ic:baseline-email",class:"text-md text-primary"})]),_:2},1032,["value","onInput","onFocus","onBlur"])]),_:1},8,["value","options"])]),_:1},8,["label"]),a(e(F),{ref_key:"passwordFormItemRef",ref:h,first:"",path:"password",label:e(t)("auth.password")},{default:i(()=>[a(e(k),{value:e(s).password,"onUpdate:value":l[2]||(l[2]=u=>e(s).password=u),"show-password-on":"click",onInput:C,type:"password",maxlength:20,onKeyup:I(b,["enter"])},{prefix:i(()=>[a(e(m),{icon:"mdi:password",class:"text-md text-primary"})]),"password-visible-icon":i(()=>[a(e(m),{icon:"mdi:show",class:"text-md text-primary"})]),"password-invisible-icon":i(()=>[a(e(m),{icon:"gridicons:not-visible",class:"text-md text-primary"})]),_:1},8,["value","onKeyup"])]),_:1},8,["label"]),o("div",le,[a(e(J),{type:"primary",style:{width:"100%"},size:"large",loading:n.value,disabled:e(s).email===null||e(s).password===null,onClick:b},{default:i(()=>[B(p(e(t)("auth.login")),1)]),_:1},8,["loading","disabled"])])]),_:1},8,["model"]),o("div",null,[a(e(O),null,{default:i(()=>[B(p(e(t)("auth.or")),1)]),_:1}),o("div",oe,[o("div",{onClick:S,class:"text-primary cursor-pointer"},p(e(t)("auth.createAccount")),1),o("div",null,p(e(t)("auth.goSignUp")),1)])])]),o("div",re,[a(W)])]))}});export{pe as default};
