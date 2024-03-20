import BottomNavbar from "@/Components/BottomNavbar";
import FutureComponent from "@/Components/FutureComponent";
import HeroComponent from "@/Components/HeroComponent";
import HorizontalCampaign from "@/Components/HorizontalCampaign";
import NavbarComponent from "@/Components/NavbarComponent";
import VerticalCampaign from "@/Components/VerticalCampaign";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Homepage({campaigns, categories}) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
            <Head title="Home" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="mt-5">
                    <HeroComponent />
                </div>
                <div className="mt-5">
                    <FutureComponent categories={categories}/>
                </div>
                <div className="mt-5">
                    <HorizontalCampaign campaigns={campaigns} />
                </div>
                <div className="mt-5">
                <VerticalCampaign campaigns={campaigns} />
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
