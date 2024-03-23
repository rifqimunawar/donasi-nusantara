import BottomDonasi from "@/Components/BottomDonasi";
import BottomNavbar from "@/Components/BottomNavbar";
import DonaturComponent from "@/Components/DonaturComponent";
import FooterComponent from "@/Components/FooterComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function DetailCampaign({ campaign, donaturs }) {
    const [presentase, setPresentase] = useState("");
    const formattedPrice = Number(campaign.price).toLocaleString("id-ID");
    const formattedCollected = Number(campaign.collected).toLocaleString(
        "id-ID"
    );
    const jumlahDonatur = donaturs.length;

    console.log(donaturs);
    useEffect(() => {
        const calculatePercentage = () => {
            const collected = campaign.collected;
            const price = campaign.price;

            // Hitung presentase terkumpul
            const percentage = (collected / price) * 100;

            // Perbarui state presentase
            setPresentase(percentage);
        };

        // Panggil fungsi hitung presentase setelah komponen dimuat
        calculatePercentage();
    }, [campaign]);

    // console.log({ campaign });
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <div>
                    <NavbarComponent />
                </div>
                <Head title="Detail" />
                <div className="mt-5">
                    <img
                        src={campaign.img}
                        className="w-full h-60 object-cover"
                    />
                </div>

                <div className="m-5">
                    <p className="text-2xl text-wrap">{campaign.title}</p>
                    <p className="text-xl">Rp : {formattedPrice}</p>
                    <p>Sudah terkumpul Rp : {formattedCollected}</p>
                    <progress
                        className="progress progress-info "
                        value={presentase}
                        max="100"
                    ></progress>
                </div>
                <div className="mt-4 ml-5 mr-5 grid grid-cols-2 gap-3 text-sm">
                    <button className="btn btn-primary">
                        <div className="flex flex-col items-center">
                            <div className="mb-1.5 mt-1.5 flex items-center">
                                <div className="h-5 w-5">
                                    <i className="bi bi-suit-heart-fill"></i>
                                </div>{" "}
                                <p> {jumlahDonatur}</p>
                            </div>
                            <p>Donasi</p>
                        </div>
                    </button>
                    <Link
                        href={`/rincian/${campaign.id}`}
                        className="btn btn-primary"
                    >
                        <button>
                            <div className="flex flex-col items-center">
                                <div className="mb-1.5 mt-1.5 flex items-center">
                                    <div className="h-5 w-5">
                                        <i className="bi bi-cash-coin"></i>
                                    </div>{" "}
                                    <p> </p>
                                </div>
                                <p>Rincian Dana</p>
                            </div>
                        </button>
                    </Link>
                </div>

                <div className="heading m-5 mt-7 text-xl">
                    <p>Kisah Penggalang Dana</p>
                </div>

                <div className="m-5 mt-7 text-l text-justify">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: campaign.description,
                        }}
                    />
                </div>

                <div className="m-5 mt-7 ">
                    <p className="text-xl mb-3">Para Donatur</p>
                    {donaturs.map((donatur, index) => (
                        <DonaturComponent donatur={donatur} key={index} />
                    ))}
                </div>

                {/* <div>
                  <FooterComponent/>
                </div> */}

                <div className="btm-center">
                    <BottomDonasi campaign={campaign} />
                </div>
            </div>
        </section>
    );
}
