import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Welcome() {
    useEffect(() => {
        const modal = document.getElementById("my_modal_1");
        if (modal) {
            modal.showModal();
        }
    }, []);
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden pb-[66px]">
                <Head title="Home" />
                <div>
                    <NavbarComponent />
                </div>
                <div
                    className="flex justify-center items-center"
                    style={{ height: "80vh" }}
                >
                    <img
                        src="https://donasi-nusantara.my.id/img/new_logo.png"
                        alt="Nagrak Peduli Disabilitas Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <dialog id="my_modal_1" className="modal text-center">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Selamat Datang di Nagrak Peduli Disabilitas!
                        </h3>
                        <p className="py-4">
                            Kita bantu saudara kita
                        </p>
                        <p className="py-4">"Gotong Royong Digital" </p>
                        <Link href="/home" className="py-4">
                            <button className="btn">Lanjutkan!!!</button>
                        </Link>
                    </div>
                </dialog>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
