import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function RincianPage({campaign}) {
  const collected = campaign.collected;
  const total = campaign.price;
  
  const biayaTeknologi = () => {
    return collected * 0.25; // 25% dari collected
  };
  
  const danaPenggalang = () => {
    return collected * 0.75; // 75% dari collected
  };
  
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
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
                                    <td>{collected.toLocaleString('id-ID')}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>25%</th>
                                    <td>Biaya Teknologi</td>
                                    <td>{biayaTeknologi().toLocaleString('id-ID')}</td>
                                </tr>
                                <tr>
                                    <th>75%</th>
                                    <td>Dana Penggalang</td>
                                    <td>{danaPenggalang().toLocaleString('id-ID')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-base-200 rounded-lg">
                      <p className="p-2 mt-8">Dana teknologi adalah dana yang digunakan oleh developer/pengembang website untuk mengelola dan memaksimalkan website "Donasi Nusantara"</p>
                    </div>
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
