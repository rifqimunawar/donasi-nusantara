import BottomNavbar from "@/Components/BottomNavbar";
import FutureComponent from "@/Components/FutureComponent";
import HeroComponent from "@/Components/HeroComponent";
import HorizontalCampaign from "@/Components/HorizontalCampaign";
import NavbarComponent from "@/Components/NavbarComponent";
import VertcalCampaign from "@/Components/VerticalCampaign";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Homepage() {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <div>
                    <NavbarComponent />
                </div>
                <div className="mt-5">
                    <HeroComponent />
                </div>
                <div className="mt-5">
                    <FutureComponent />
                </div>
                <div className="mt-5">
                    <HorizontalCampaign />
                </div>
                <div className="mt-5">
                    <VertcalCampaign />
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
