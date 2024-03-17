import BottomNavbar from "@/Components/BottomNavbar";
import HeroComponent from "@/Components/HeroComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import React from "react";

export default function DetailCampaign({campaign}) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <div>
                    <NavbarComponent />
                </div>
                <div className="mt-5">
                    <img src={campaign.img}/>
                </div>

                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
