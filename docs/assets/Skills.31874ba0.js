import{d as A,e as D,u as g,r as m,o as v,c as d,b as e,F as B,g as x,i as k,t as f,j as b,w,k as q,v as L,x as V,m as N,p as I,n as $,_ as U}from"./index.38d9f178.js";const K=c=>(I("data-v-088dd40c"),c=c(),$(),c),M={class:"skills"},P=K(()=>e("thead",null,[e("tr",null,[e("th",null,"\u6280\u80FD"),e("th",null,"\u7B49\u7EA7"),e("th",null,"\u7ECF\u9A8C"),e("th",null,"5\u7EA7\u4E13\u7CBE"),e("th",null,"10\u7EA7\u4E13\u7CBE")])],-1)),j=["onContextmenu"],T=["onUpdate:modelValue"],z=["onClick"],G=A({__name:"Skills",setup(c){const o=D(),C=g(),y=[0,100,380,770,1300,2150,3300,4800,6900,1e4,15e3],h=["\u7267\u573A\u4E3B","\u519C\u573A\u4E3B","\u9E21\u820D\u5927\u5E08","\u7267\u7F8A\u4EBA","\u5236\u54C1\u751F\u4EA7\u5BB6","\u519C\u4E1A\u5B66\u5BB6","\u6E14\u592B","\u6355\u9C7C\u8005","\u5782\u9493\u8005","\u6D77\u76D7","\u6C34\u624B","\u8BF1\u9975\u5927\u5E08","\u62A4\u6797\u4EBA","\u6536\u96C6\u8005","\u4F10\u6728\u5DE5\u4EBA","\u8403\u53D6\u8005","\u690D\u7269\u5B66\u5BB6","\u8FFD\u8E2A\u8005","\u77FF\u5DE5","\u5730\u8D28\u5B66\u5BB6","\u94C1\u5320","\u52D8\u63A2\u8005","\u6316\u6398\u8005","\u5B9D\u77F3\u4E13\u5BB6","\u6218\u58EB","\u89C2\u5BDF\u5458","\u66B4\u51FB","\u9632\u5FA1\u8005","\u7279\u6280\u8005","\u4EA1\u547D\u5F92"],s=o.tree.querySelectorAll("player experiencePoints int"),S=o.tree.querySelectorAll("player professions int"),_=new Set;S.forEach(l=>{_.add(Number(l.textContent))});const r=l=>{const n=[];for(let u=l*6;u<l*6+6;u++)_.has(u)&&n.push(h[u]);return n},a=[{title:"\u8015\u79CD",exp:s[0],level:o.tree.querySelector("player farmingLevel"),prof:r(0)},{title:"\u9493\u9C7C",exp:s[1],level:o.tree.querySelector("player fishingLevel"),prof:r(1)},{title:"\u91C7\u96C6",exp:s[2],level:o.tree.querySelector("player foragingLevel"),prof:r(2)},{title:"\u91C7\u77FF",exp:s[3],level:o.tree.querySelector("player miningLevel"),prof:r(3)},{title:"\u6218\u6597",exp:s[4],level:o.tree.querySelector("player combatLevel"),prof:r(4)},{title:"\u5E78\u8FD0",exp:s[5],level:o.tree.querySelector("player luckLevel"),prof:[]}];console.log(a);const p=m(!1),F=l=>{C.options=[{title:"\u4FEE\u6539\u6280\u80FD\u7B49\u7EA7",onClick:n=>{const u=m(Number(a[l].level.textContent));V.show("skills-change",{value:u,confirm:()=>{u.value>10&&(u.value=10),u.value<=0&&(u.value=0),a[l].level.textContent=u.value.toString(),a[l].exp.textContent=y[u.value].toString(),C.pageKey.skills++,p.value=!1}})}}]};return(l,n)=>{const u=N("vue-final-modal");return v(),d(B,null,[e("div",M,[e("table",null,[P,e("tbody",null,[(v(),d(B,null,x(a,(t,i)=>e("tr",{key:`${i}-${k(C).pageKey.skills}`},[e("td",null,f(t.title),1),e("td",{onContextmenu:E=>F(i)},f(t.level.textContent),41,j),e("td",null,f(t.exp.textContent),1),(v(!0),d(B,null,x(t.prof,E=>(v(),d("td",null,f(E),1))),256))])),64))])])]),b(u,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=t=>p.value=t),name:"skills-change","click-to-close":!0,"esc-to-close":!0,ssr:!1},{default:w(({params:t})=>[q(e("input",{type:"number","onUpdate:modelValue":i=>t.value=i,min:1,max:999,class:"sv-input",style:{width:"85%"}},null,8,T),[[L,t.value]]),e("button",{class:"sv-button",onClick:t.confirm,style:{"min-width":"68px","margin-right":"20px"}}," \u786E\u5B9A ",8,z),e("button",{class:"sv-button",onClick:n[0]||(n[0]=i=>p.value=!1),style:{"min-width":"68px","margin-left":"20px"}}," \u53D6\u6D88 ")]),_:1},8,["modelValue"])],64)}}});const J=U(G,[["__scopeId","data-v-088dd40c"]]);export{J as default};
