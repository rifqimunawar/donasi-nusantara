import{j as e,r as s,d as m}from"./app-0tJSCsp5.js";function w({campaigns:t}){return e.jsx("section",{className:"m-3",children:e.jsx("section",{className:"",style:{overflowH:"auto",width:"100%"},children:e.jsx("div",{children:t.map(c=>e.jsx(h,{campaign:c},c.id))})})})}function h({campaign:t}){const[c,a]=s.useState(""),[d,i]=s.useState(""),u=Number(t.collected).toLocaleString("id-ID");let n=0;return t.donatur?n=t.donatur.count():n=0,s.useEffect(()=>{(()=>{const o=new Date(t.time),l=new Date,r=o.getTime()-l.getTime(),f=Math.ceil(r/(1e3*60*60*24));a(f)})()},[t]),s.useEffect(()=>{(()=>{const o=t.collected,l=t.price,r=o/l*100;i(r)})()},[t]),e.jsx(m,{href:`/donasi/campaign/${t.id}/detail`,children:e.jsxs("div",{className:"verCampaign flex mb-3 bg-info shadow-md",style:{flex:"0 0 auto"},children:[e.jsx("div",{className:"w-60 h-24 object-cover",children:e.jsx("img",{src:t.img,className:"w-full h-full object-cover"})}),e.jsxs("div",{style:{width:"100%",padding:"5px"},children:[e.jsx("p",{className:"text-info-content",children:t.title}),e.jsx("progress",{className:"progress progress secondary",style:{width:"100%"},value:d,max:"100"}),e.jsxs("div",{className:"flex justify-between text-info-content text-sm",children:[e.jsxs("p",{className:"text-xs",children:["Terkumpul"," ",e.jsx("span",{className:"",children:u})]}),e.jsx("p",{children:e.jsxs("p",{className:"text-xs",children:[n," Donatur"]})})]})]})]})})}export{w as V};