import{q as r,j as s,a as o,d as e}from"./app-D0lykzP9.js";import"./Dropdown-ot4R9ajW.js";import i from"./DeleteUserForm-BgPVMe02.js";import l from"./UpdatePasswordForm-DgmH97rX.js";import n from"./UpdateProfileInformationForm-DMyrOdHH.js";import{N as d}from"./NavbarComponent-CVI9zyT8.js";import{B as x}from"./BottomNavbar-CjCsy7Et.js";import"./transition-UOSUa-w0.js";import"./TextInput-CBww6H1n.js";import"./InputLabel-V2oPrXOE.js";import"./PrimaryButton-CUXAb7jp.js";function B({auth:c,mustVerifyEmail:a,status:t}){const m=r().props.auth.user;return s.jsxs("section",{className:"my-0 mx-auto min-h-full max-w-screen-sm",children:[s.jsxs("div",{className:"my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]",children:[s.jsx(d,{}),s.jsx(o,{title:"Profile"}),s.jsx("div",{className:"pt-10 pb-4",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[s.jsxs("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:m.name}),s.jsx("p",{className:"mt-1 text-sm text-gray-600 mb-3",children:"Saldo Anda Rp: 0"})]}),s.jsx(e,{href:route("user.campaign"),className:"btn btn-info btn-sm text-white",children:"Buat Campaign Sekarang"})]}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(n,{mustVerifyEmail:a,status:t,className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(l,{className:"max-w-xl"})}),s.jsxs("div",{as:"button",className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Logout Account"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600 mb-3",children:"If you logout! you must login agin"})]}),s.jsx(e,{href:route("logout"),as:"button",method:"post",className:"btn btn-warning btn-sm text-white",children:"Logout"})]}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-1",children:s.jsx(i,{className:"max-w-xl"})})]})})]}),s.jsx("div",{className:"btm-center",children:s.jsx(x,{})})]})}export{B as default};