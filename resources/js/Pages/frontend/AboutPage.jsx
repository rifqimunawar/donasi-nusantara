import BottomNavbar from "@/Components/BottomNavbar";
import FooterComponent from "@/Components/FooterComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head } from "@inertiajs/react";
import React from "react";

export default function AboutPage({ masterImageUrl }) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden pb-[66px]">
                <Head title="About" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="my-8 text-center">
                    <p className="text-2xl">About Us</p>
                </div>
                <div className="h-72 mb-5 m-3">
                    <img
                        src={`${masterImageUrl}kelompok.jpg`}
                        className="w-full h-full object-cover rounded-3xl shadow"
                    />
                </div>
                <div className="text-md text-justify m-3">
                    <p>
                    Mahasiswa KKN Kelompok 4 UNINUS dengan bangga mempersembahkan sebuah inisiatif yang akan menghubungkan kita semua—'Nagrak Peduli Disabilitas'.
                    </p>

                  
                    <br />
                    <p>
                    Website ini hadir sebagai platform gotong royong yang dirancang khusus untuk masyarakat Desa Nagrak, mulai dari tingkat RT, RW, hingga Desa.
            </p>
            <br />
            <p>
            Melalui 'Nagrak Peduli Disabilitas', kita bisa bersama-sama bergotong royong untuk berbagai keperluan sosial, dengan fokus utama mendukung teman-teman disabilitas.	
            </p>
            <br />
            <p>
            Namun, tidak hanya terbatas pada itu, website ini juga dapat digunakan untuk menggalang dana bagi perbaikan jalan, pembangunan infrastruktur, dan berbagai keperluan sosial lainnya yang bermanfaat bagi seluruh warga desa.
            </p>
                </div>
                <div>
                    <FooterComponent />
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
