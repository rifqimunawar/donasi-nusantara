import BottomNavbar from "@/Components/BottomNavbar";
import FooterComponent from "@/Components/FooterComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import VerticalCampaign from "@/Components/VerticalCampaign";
import { Head } from "@inertiajs/react";
import React from "react";

export default function ListPage({ campaigns, }) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden pb-[66px]">
                <Head title="List" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="mt-5">
                    <div className="m-3">
                        <h2>Campaign Terbaru</h2>
                    </div>
                    <VerticalCampaign campaigns={campaigns}/>
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
