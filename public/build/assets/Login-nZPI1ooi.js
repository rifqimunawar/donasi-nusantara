import{j as e,W as h,r as g,a as p,d as f}from"./app-0tJSCsp5.js";import{T as o,I as i}from"./TextInput-CDvfPx2T.js";import{I as l}from"./InputLabel-Cz2mOPoN.js";import{P as j}from"./PrimaryButton-C2vroq7Z.js";import{N as v}from"./NavbarComponent-etbrIUiG.js";import{B as w}from"./BottomNavbar-CWnXH9qT.js";function b({className:a="",...m}){return e.jsx("input",{...m,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+a})}function I({status:a,canResetPassword:m}){const{data:t,setData:r,post:c,processing:d,errors:n,reset:x}=h({email:"",password:"",remember:!1});g.useEffect(()=>()=>{x("password")},[]);const u=s=>{s.preventDefault(),c(route("login"))};return e.jsx("section",{className:"my-0 mx-auto min-h-full max-w-screen-sm",children:e.jsxs("div",{className:"my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]",children:[e.jsx("div",{children:e.jsx(v,{})}),e.jsxs("div",{children:[e.jsx(p,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsx("div",{className:"heading mt-14 flex align-middle items-center justify-center",children:e.jsx("img",{src:"https://donasi-nusantara.my.id/img/logo.png",className:"w-48",alt:"logo"})}),e.jsxs("form",{onSubmit:u,className:"m-8 mt-16",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(i,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>r("password",s.target.value)}),e.jsx(i,{message:n.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(b,{name:"remember",checked:t.remember,onChange:s=>r("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(j,{className:"ms-4 mr-4",disabled:d,children:"Log in"})}),e.jsx("div",{className:"text-center m-3",children:e.jsx(f,{href:route("register"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Don't have account?"})}),e.jsx("div",{className:"text-center m-3",children:e.jsx("a",{href:"auth/google",children:e.jsxs("button",{type:"button",class:"text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2",children:[e.jsx("svg",{class:"w-4 h-4 me-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 19",children:e.jsx("path",{"fill-rule":"evenodd",d:"M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z","clip-rule":"evenodd"})})," ","Sign in with Google"]})})})]})]}),e.jsx("div",{className:"btm-center",children:e.jsx(w,{})})]})})}export{I as default};