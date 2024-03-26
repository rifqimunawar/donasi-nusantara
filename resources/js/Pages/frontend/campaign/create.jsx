import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import React from "react";

export default function create({ user, categories }) {
    console.log(user.name);
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <div>
                    <NavbarComponent />
                </div>
                <div className="p-4 sm:p-8 bg-white shadow lg:rounded-lg m-3">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {user.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 mb-3"></p>
                    </header>
                </div>

                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
