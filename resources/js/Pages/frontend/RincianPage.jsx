import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function RincianPage({ campaign, nominalsCount }) {
    const collected = campaign.collected;
    const total = campaign.price;

    const biayaTeknologi = () => {
        return collected * 0.25; // 25% dari collected
    };

    const danaPenggalang = () => {
        return collected  * 0.90; // 75% dari collected
    };

    const sisaDana = () => {
        return danaPenggalang() - nominalsCount;
    };

    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden pb-[66px]">
                <Head title="Rincian" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="text-center m-8">
                    <p className="text-2xl">Rincian Dana</p>
                </div>
                <div className="m-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>%</th>
                                    <th>Keterangan</th>
                                    <th>Rp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="">
                                    <th>100%</th>
                                    <td>Dana Terkumpul</td>
                                    <td>
                                        {Number(collected).toLocaleString(
                                            "id-ID"
                                        )}
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>10%</th>
                                    <td>Biaya Pengelolaan</td>
                                    <td>
                                        {Number(
                                            biayaTeknologi()
                                        ).toLocaleString("id-ID")}
                                    </td>
                                </tr>
                                <tr>
                                    <th>75%</th>
                                    <td>Dana Penggalang</td>
                                    <td>
                                        {Number(
                                            danaPenggalang()
                                        ).toLocaleString("id-ID")}
                                    </td>
                                </tr>
                                <tr>
                                    <th>..</th>
                                    <td>Sudah dicairkan</td>
                                    <td>
                                        {Number(nominalsCount).toLocaleString(
                                            "id-ID"
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th>..</th>
                                    <td>Sisa Dana</td>
                                    <td>
                                        {Number(sisaDana()).toLocaleString(
                                            "id-ID"
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-base-200 rounded-lg text-center">
                        <p className="p-2 mt-8 text-justify">
                            Dana Pengelolaan adalah dana yang digunakan
                            pengembangan website untuk mengelola dan
                            memaksimalkan website "DoNagrak Peduli Disabilitas", hal
                            tersebut sesuai dengan PP No. 29 Tahun 1980 Tentang
                            Pelaksanaan Pengumpulan Sumbangan.
                        </p>
                        <a
                            href="https://peraturan.bpk.go.id/Details/66625/pp-no-29-tahun-1980"
                            target="_blank"
                            className="btn btn-warning my-4"
                        >
                            Lihat Undang-Undang
                        </a>
                    </div>
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
