// GalangDana.js
import BottomNavbar from "@/Components/BottomNavbar";
import FooterComponent from "@/Components/FooterComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function GalangDana({ categories }) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <Head title="Galang" />
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <div>
                    <NavbarComponent />
                </div>
                <div className="text-center m-7 font-sans font-bold text-lg">
                    Ajukan Galang Dana Sekarang!!!
                    <p>Ayo kita bantu saudara kita!!!</p>
                </div>

                <div className="mt-5 m-6">
                    <h2 className="mb-5">Pilih Kategori Penggalangan Dana</h2>
                    <div>
                        {categories.map((category, index) => (
                            <CategoriesComponent
                                categories={category}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                <div>
                  <FooterComponent/>
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}

function CategoriesComponent({ categories }) {
    return (
        <Link href={'/login'}>
        <hr/>
            <div className="bg-base-100 mb-3 rounded-lg shadow-md">
                <div className="grid grid-cols-4">
                    <div className="pt-3 pb-2 col-span-1 flex justify-center items-center">
                        <img src={categories.file} className="w-12 h-12" />
                    </div>
                    <div className="flex items-center col-span-3">
                        <p className="font-semibold text-lg">
                            {categories.title}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
