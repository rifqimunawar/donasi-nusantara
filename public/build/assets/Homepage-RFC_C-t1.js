import{j as e,d as r,r as i,a as m}from"./app-BGbLhe-4.js";import{B as d}from"./BottomNavbar-CCnfIB3p.js";import{N as x}from"./NavbarComponent-Dd255Z0M.js";import{V as h}from"./VerticalCampaign-CnPZEXIR.js";function j(){return e.jsx("section",{className:"flex gap-3 m-2",style:{overflowX:"auto",width:"100%"},children:e.jsx("div",{className:"hero",style:{flex:"0 0 auto",width:"200px"},children:e.jsx("img",{src:"https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F08e30860-3fe1-4891-874f-9eb1fd4d0965.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75",className:"hero"})})})}function p({categories:s}){return e.jsxs("section",{id:"futurecomponent",className:"futurecomponent my-10",children:[e.jsx("div",{className:"heading",children:e.jsx("h1",{})}),e.jsx("div",{className:"m-3 grid grid-cols-4 gap-3",children:s.map((t,a)=>e.jsxs(r,{href:`/category/${t.id}/campaign`,className:"text-center",children:[e.jsx("div",{className:"bg-base-200 inline-block",style:{width:"55px",height:"55px",objectFit:"cover",borderRadius:"50%"},children:e.jsx("img",{src:t.file,alt:"",className:"w-12 h-12 inline-block"})},a),e.jsx("p",{className:"text-center text-xs",children:t.title})]}))})]})}function u({campaigns:s}){return e.jsxs("section",{className:"m-3",children:[e.jsx("div",{className:"heading",children:e.jsx("h2",{children:"Campaign Terbaru"})}),e.jsx("section",{className:"flex gap-3 m-2 mb-4",style:{overflowX:"auto",width:"100%"},children:s.map(t=>e.jsx(f,{campaign:t},t.id))})]})}function f({campaign:s}){const[t,a]=i.useState(""),c=Number(s.collected).toLocaleString("id-ID");return i.useEffect(()=>{(()=>{const l=s.collected,n=s.price,o=l/n*100;a(o)})()},[s]),e.jsxs(r,{className:"listCom",style:{flex:"0 0 auto",width:"200px"},href:`/donasi/campaign/${s.id}/detail`,children:[e.jsx("img",{src:s.img,alt:s.title,style:{width:"200px",height:"100px",objectFit:"cover",borderRadius:"10px"}}),e.jsx("p",{children:s.title}),e.jsxs("p",{children:["terkumpul ",e.jsx("span",{children:c})]}),e.jsx("progress",{className:"progress progress-info ",value:t,max:"100"})]})}function C({campaigns:s,categories:t}){return e.jsx("section",{className:"my-0 mx-auto min-h-full max-w-screen-sm",children:e.jsxs("div",{className:"my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]",children:[e.jsx(m,{title:"Home"}),e.jsx("div",{children:e.jsx(x,{})}),e.jsx("div",{className:"mt-5",children:e.jsx(j,{})}),e.jsx("div",{className:"mt-5",children:e.jsx(p,{categories:t})}),e.jsx("div",{className:"mt-5",children:e.jsx(u,{campaigns:s})}),e.jsx("div",{className:"mt-5",children:e.jsx(h,{campaigns:s})}),e.jsx("div",{className:"btm-center",children:e.jsx(d,{})})]})})}export{C as default};
