import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head } from "@inertiajs/react";
import React from "react";

export default function waiting({ withdraw, campaign }) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden  pb-[66px]">
                <Head title="Galang Dana" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="p-4 sm:p-8 shadow lg:rounded-lg m-3">
                    <img src="https://static.vecteezy.com/system/resources/previews/021/286/391/non_2x/24-hours-sign-on-transparent-background-free-png.png" />
                    <p>
                        Anda telah melakukan penarikan hasil donasi dari
                        kampanye <strong>{campaign.title}</strong> sebesar{" "}
                        <strong>
                            {Number(withdraw.nominal).toLocaleString()}
                        </strong>{" "}
                        pada{" "}
                        <strong>
                            {new Date(withdraw.created_at).toLocaleString()}
                        </strong>
                        .
                    </p>
                    <p>
                        Kami akan mengirimkan dana ke rekening{" "}
                        <strong>{withdraw.norek}</strong> di bank{" "}
                        <strong>{withdraw.bank}</strong>.
                    </p>
                    <p>
                        Pengiriman akan dilakukan paling lambat 24 jam setelah
                        tanggal{" "}
                        <strong>
                            {new Date(
                                new Date(withdraw.created_at).getTime() +
                                    24 * 60 * 60 * 1000
                            ).toLocaleString()}
                        </strong>
                        .
                    </p>
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
