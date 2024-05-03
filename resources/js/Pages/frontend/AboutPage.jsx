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
                        src={`${masterImageUrl}sempro1.jpg`}
                        className="w-full h-full object-cover rounded-3xl shadow"
                    />
                </div>
                <div className="text-md text-justify m-3">
                    <p>
                        Website ini merupakan hasil dari upaya kelompok 8 dalam
                        menyelesaikan tugas akhir perkuliahan pada Program Studi
                        Teknik Informatika. Kami, Delaisa Lisyami, Endi Rahman,
                        Ilyas Khairul Alimnis, Melyta Contesa, dan Rifqi
                        Munawar, dengan rendah hati menyadari bahwa website kami
                        belum mencapai kesempurnaan yang Anda harapkan. Kami
                        mengakui bahwa terdapat kekurangan dan keterbatasan
                        dalam fitur yang kami tawarkan.
                    </p>
                    <br />
                    <p>
                        Namun, kami merasa terhormat karena dengan sederhananya
                        website ini, kami telah berhasil melalui tahap seminar
                        proposal pada tanggal 24 April 2024. Kami memohon doa
                        dan dukungan agar kami dapat menyelesaikan studi kami
                        dengan baik, dan kami akan terus berkomitmen untuk
                        mengembangkan website ini guna memberikan pengalaman
                        yang lebih baik bagi pengunjung. Terima kasih atas
                        segala dukungan dan kesempatan yang diberikan!
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
