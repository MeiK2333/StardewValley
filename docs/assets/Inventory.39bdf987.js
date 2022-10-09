import{d as B,u as D,o as y,c as _,a as V,t as C,b as n,e as w,f as A,_ as I,r as f,F as q,g as M,h as K,i as v,j as $,w as O,k as U,v as T,l as X,x as F,m as L,p as z,n as G}from"./index.95d245cc.js";const H={key:0,class:"object object-nil"},J={class:"object-stack"},P=B({__name:"ObjectItem",props:["object"],emits:["stackChange"],setup(a,{emit:r}){const s=D(),o=(x,i)=>{var d;const l=w();s.options=[],((d=i.querySelector("stackable"))==null?void 0:d.textContent)!=="false"&&(s.options.push({title:"\u4FEE\u6539\u5E93\u5B58",onClick:t=>{r("stackChange")}}),s.options.push({title:"\u79FB\u9664\u7269\u54C1",onClick:t=>{var u,p;const e=A('<Item xsi:nil="true"/>');(p=(u=l.tree)==null?void 0:u.querySelector("player items"))==null||p.replaceChild(e,i),s.pageKey.objects++}})),x.preventDefault()};return(x,i)=>{var l,m;return!a.object||a.object.getAttribute("xsi:nil")?(y(),_("div",H)):(y(),_("div",{key:1,class:"object",onContextmenu:i[0]||(i[0]=d=>o(d,a.object))},[V(C((l=a.object.querySelector("DisplayName"))==null?void 0:l.textContent)+" ",1),n("div",J,C((m=a.object.querySelector("Stack"))==null?void 0:m.textContent),1)],32))}}});const Q=I(P,[["__scopeId","data-v-83d1f071"]]),N=a=>(z("data-v-8d0063ae"),a=a(),G(),a),R={class:"objects"},W=["onUpdate:modelValue"],Y=["onClick"],Z=N(()=>n("div",{class:"split"},null,-1)),ee={class:"detail"},te=N(()=>n("div",{style:{width:"100%"}},"\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u7269\u54C1\u4EE5\u8FDB\u884C\u4FEE\u6539",-1)),oe=B({__name:"Inventory",setup(a){const r=D(),s=w(),o=s.tree,x=()=>{s.tree&&s.name&&X(s.tree,s.name)},i=t=>{r.options=[{title:"\u4FEE\u6539\u6301\u6709\u73B0\u91D1",onClick:e=>{d()}}],t.preventDefault()},l=f(!1),m=t=>{var u;const e=f(Number((u=t.querySelector("Stack"))==null?void 0:u.textContent));F.show("stack-change",{value:e,confirm:()=>{e.value>999&&(e.value=999),e.value<=0&&(e.value=1),t.querySelector("Stack").textContent=e.value.toString(),t.querySelector("stack").textContent=e.value.toString(),r.pageKey.objects++,l.value=!1}})},d=()=>{var e;const t=f(Number((e=o==null?void 0:o.querySelector("player money"))==null?void 0:e.textContent));F.show("stack-change",{value:t,confirm:()=>{t.value<=0&&(t.value=0),t.value>99999999&&(t.value=99999999);const u={money:Number(o.querySelector("player money").textContent),total:Number(o.querySelector("player totalMoneyEarned").textContent)};o.querySelector("player money").textContent=t.value.toString(),o.querySelector("player totalMoneyEarned").textContent=(u.total+(t.value-u.money)).toString(),r.pageKey.money++,l.value=!1}})};return(t,e)=>{var p,k,b,g,h,E,j;const u=L("vue-final-modal");return y(),_(q,null,[n("div",R,[(y(!0),_(q,null,M((p=v(o))==null?void 0:p.querySelectorAll("player items Item"),(c,S)=>(y(),K(Q,{key:""+v(r).pageKey.objects+S,object:c,onStackChange:ne=>m(c)},null,8,["object","onStackChange"]))),128)),$(u,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=c=>l.value=c),name:"stack-change","click-to-close":!0,"esc-to-close":!0,ssr:!1},{default:O(({params:c})=>[U(n("input",{type:"number","onUpdate:modelValue":S=>c.value=S,min:1,max:999,class:"sv-input",style:{width:"85%"}},null,8,W),[[T,c.value]]),n("button",{class:"sv-button",onClick:c.confirm,style:{"min-width":"68px","margin-right":"20px"}}," \u786E\u5B9A ",8,Y),n("button",{class:"sv-button",onClick:e[0]||(e[0]=S=>l.value=!1),style:{"min-width":"68px","margin-left":"20px"}}," \u53D6\u6D88 ")]),_:1},8,["modelValue"])]),Z,n("div",ee,[(y(),_("div",{class:"money",onContextmenu:e[2]||(e[2]=c=>i(c)),key:v(r).pageKey.money},[n("div",null,C((b=(k=v(o))==null?void 0:k.querySelector("player farmName"))==null?void 0:b.textContent)+" \u519C\u573A",1),n("div",null," \u76EE\u524D\u6301\u6709\u73B0\u91D1\uFF1A "+C((h=(g=v(o))==null?void 0:g.querySelector("player money"))==null?void 0:h.textContent)+" \u91D1 ",1),n("div",null," \u603B\u6536\u5165\uFF1A "+C((j=(E=v(o))==null?void 0:E.querySelector("player totalMoneyEarned"))==null?void 0:j.textContent)+" \u91D1 ",1)],32)),n("div",{class:"docs"},[te,n("button",{class:"sv-button",onClick:x},"\u4E0B\u8F7D\u5B58\u6863")])])],64)}}});const se=I(oe,[["__scopeId","data-v-8d0063ae"]]);export{se as default};
