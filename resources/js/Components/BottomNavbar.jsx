import { Link } from "@inertiajs/react";
import React from "react";

export default function BottomNavbar() {
    return (
        <div className="fixed bottom-1 flex w-full">
            <div className="grid grid-cols-4 gap-3 mx-auto max-w-48">
                <Link href={'/home'} className="btn btn-primary w-full">
                    <i class="bi bi-house"></i>
                </Link>
                <Link href={'/list'} className="btn btn-primary w-full">
                    <i class="bi bi-card-list"></i>
                </Link>
                <Link href="" className="btn btn-primary w-full">
                    <i class="bi bi-cash-coin"></i>
                </Link>
                <Link href="" className="btn btn-primary w-full">
                    <i class="bi bi-person-circle"></i>
                </Link>
            </div>
        </div>
    );
}
