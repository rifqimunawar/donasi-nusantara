import{r as m,j as e,a as x,d as b,y as h}from"./app-0tJSCsp5.js";import{B as p}from"./BottomNavbar-CWnXH9qT.js";import{N as j}from"./NavbarComponent-etbrIUiG.js";import{d as g,C as f}from"./ckeditor-DBpjoeYh.js";function C({user:o,categories:d}){const[a,r]=m.useState({title:"",img:null,description:"",price:"",user_id:o.id,time:"",norek:"",bank:"",category_id:""}),t=s=>{const{name:n,value:i,files:l}=s.target;r(u=>({...u,[n]:l?l[0]:i}))},c=s=>{s.preventDefault(),console.log(a),h.post("/u/camp/store",a)};return m.useEffect(()=>{},[]),e.jsx("section",{className:"my-0 mx-auto min-h-full max-w-screen-sm",children:e.jsxs("div",{className:"my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]",children:[e.jsx(x,{title:"Galang Dana"}),e.jsx("div",{children:e.jsx(j,{})}),e.jsxs("div",{className:"p-4 sm:p-8 bg-white shadow lg:rounded-lg m-3",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Tambah Galang Dana"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 mb-3"})]}),e.jsxs("form",{onSubmit:c,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"base-input",className:"block mb-1 text-sm font-medium text-gray-900",children:"Judul"}),e.jsx("input",{name:"title",required:!0,type:"text",value:a.title,onChange:t,className:"rounded-lg block w-full"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",htmlFor:"user_avatar",children:"Upload Image Pamflet"}),e.jsx("input",{required:!0,name:"img",type:"file",onChange:t,className:"block file-input file-input-bordered file-input-secondary w-full"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"description",className:"block mb-1 text-sm font-medium text-gray-900",children:"Deskripsi"}),e.jsx(g.CKEditor,{editor:f,data:a.description,onChange:(s,n)=>{const i=n.getData();r(l=>({...l,description:i}))}})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"price",className:"block mb-1 text-sm font-medium text-gray-900",children:"Target Dana Terkumpul"}),e.jsx("input",{name:"price",required:!0,type:"number",value:a.price,onChange:t,className:"rounded-lg block w-full"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"category_id",className:"block mb-1 text-sm font-medium text-gray-900",children:"Kategori"}),e.jsxs("select",{name:"category_id",required:!0,value:a.category_id,onChange:t,className:"rounded-lg block w-full",children:[e.jsx("option",{value:"",disabled:!0,children:"== Pilih Kategori =="}),d.map(s=>e.jsx("option",{value:s.id,children:s.title},s.id))]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"category_id",className:"block mb-1 text-sm font-medium text-gray-900",children:"Bank Penarikan"}),e.jsxs("select",{name:"bank",required:!0,value:a.bank,onChange:t,className:"rounded-lg block w-full",children:[e.jsx("option",{value:"",selected:!0,disabled:!0,children:"== Pilih Bank =="}),e.jsx("option",{value:"MANDIRI",children:"MANDIRI"}),e.jsx("option",{value:"BRI",children:"BRI"}),e.jsx("option",{value:"BCA",children:"BCA"}),e.jsx("option",{value:"BNI",children:"BNI"})]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"norek",className:"block mb-1 text-sm font-medium text-gray-900",children:"Nomor Rekening Penarikan"}),e.jsx("input",{name:"norek",required:!0,type:"number",value:a.norek,onChange:t,className:"rounded-lg block w-full"})]}),e.jsxs("div",{className:"mb-5 flex justify-center gap-3",children:[e.jsx(b,{href:"/u/camp/",className:"btn btn-warning btn-sm",children:"Kembali"}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Simpan"})]})]})]}),e.jsx("div",{className:"btm-center",children:e.jsx(p,{})})]})})}export{C as default};
