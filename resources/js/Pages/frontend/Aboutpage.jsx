import { Link } from "@inertiajs/react";
import React from "react";

export default function Aboutpage() {
    return (
        <div>
            Aboutpage
            <Link href={"/home"} className="btn btn-primary">
                Home
            </Link>
        </div>
    );
}
