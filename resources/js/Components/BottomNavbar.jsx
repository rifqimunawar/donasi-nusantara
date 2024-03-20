import { Link } from "@inertiajs/react";
import React from "react";

export default function BottomNavbar() {
    return (
        <div className="fixed bottom-1 flex w-full container">
            <div className="grid grid-cols-4 gap-3 mx-auto max-w-screen-lg">
                <Link href={'/home'} className="btn btn-primary w-full">
                    <i class="bi bi-house"></i>
                    <p>Home</p>
                </Link>
                <Link href={'/list'} className="btn btn-primary w-full">
                    <i class="bi bi-card-list"></i>
                    <p>List</p>
                </Link>
                <Link href={'/galang'} className="btn btn-primary w-full">
                    <i class="bi bi-cash-coin"></i>
                    <p>Donasi</p>
                </Link>
                <Link href={'/login'} className="btn btn-primary w-full">
                    <i class="bi bi-person-circle"></i>
                    <p>Profile</p>
                </Link>
            </div>
        </div>
    );
}
