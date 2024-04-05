import{r as m,j as e,a as h,d as p,y as g}from"./app-BL76Wslw.js";import{B as j}from"./BottomNavbar-Brbz412H.js";import{N as f}from"./NavbarComponent-CoqJacMl.js";import{d as N,C as v}from"./ckeditor-Vo4yVPP2.js";function B({user:o,categories:d,uploadUrl:c}){const[a,r]=m.useState({title:"",img:null,description:"",price:"",user_id:o.id,time:"",norek:"",bank:"",category_id:""}),u={ckfinder:{uploadUrl:{uploadUrl:c}}},t=s=>{const{name:n,value:i,files:l}=s.target;r(b=>({...b,[n]:l?l[0]:i}))},x=s=>{s.preventDefault(),console.log(a),g.post("/u/camp/store",a)};return m.useEffect(()=>{},[]),e.jsx("section",{className:"my-0 mx-auto min-h-full max-w-screen-sm",children:e.jsxs("div",{className:"my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]",children:[e.jsx(h,{title:"Galang Dana"}),e.jsx("div",{children:e.jsx(f,{})}),e.jsxs("div",{className:"p-4 sm:p-8 bg-white shadow lg:rounded-lg m-3",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Tambah Galang Dana"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 mb-3"})]}),e.jsxs("form",{onSubmit:x,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"base-input",className:"block mb-1 text-sm font-medium text-gray-900",children:"Judul"}),e.jsx("input",{name:"title",required:!0,type:"text",value:a.title,onChange:t,className:"rounded-lg block w-full"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",htmlFor:"user_avatar",children:"Upload Image Pamflet"}),e.jsx("input",{required:!0,name:"img",type:"file",onChange:t,className:"block file-input file-input-bordered file-input-secondary w-full"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"description",className:"block mb-1 text-sm font-medium text-gray-900",children:"Deskripsi"}),e.jsx(N.CKEditor,{editor:v,data:a.description,config:u,onChange:(s,n)=>{const i=n.getData();r(l=>({...l,description:i}))}})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"price",className:"block mb-1 text-sm font-medium text-gray-900",children:"Target Dana Terkumpul"}),e.jsx("input",{name:"price",required:!0,type:"number",value:a.price,onChange:t,className:"rounded-lg block w-full"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"category_id",className:"block mb-1 text-sm font-medium text-gray-900",children:"Kategori"}),e.jsxs("select",{name:"category_id",required:!0,value:a.category_id,onChange:t,className:"rounded-lg block w-full",children:[e.jsx("option",{value:"",disabled:!0,children:"== Pilih Kategori =="}),d.map(s=>e.jsx("option",{value:s.id,children:s.title},s.id))]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"category_id",className:"block mb-1 text-sm font-medium text-gray-900",children:"Bank Penarikan"}),e.jsxs("select",{name:"bank",required:!0,value:a.bank,onChange:t,className:"rounded-lg block w-full",children:[e.jsx("option",{value:"",selected:!0,disabled:!0,children:"== Pilih Bank =="}),e.jsx("option",{value:"MANDIRI",children:"MANDIRI"}),e.jsx("option",{value:"BRI",children:"BRI"}),e.jsx("option",{value:"BCA",children:"BCA"}),e.jsx("option",{value:"BNI",children:"BNI"})]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"norek",className:"block mb-1 text-sm font-medium text-gray-900",children:"Nomor Rekening Penarikan"}),e.jsx("input",{name:"norek",required:!0,type:"number",value:a.norek,onChange:t,className:"rounded-lg block w-full"})]}),e.jsxs("div",{className:"mb-5 flex justify-center gap-3",children:[e.jsx(p,{href:"/u/camp/",className:"btn btn-warning btn-sm",children:"Kembali"}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Simpan"})]})]})]}),e.jsx("div",{className:"btm-center",children:e.jsx(j,{})})]})})}export{B as default};
