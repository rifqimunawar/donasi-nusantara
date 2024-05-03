import { Link } from "@inertiajs/react";
import React from "react";

export default function BottomNavbar() {
    return (
        <div className="fixed bottom-1 flex w-full container">
            <div className="btm-nav grid grid-cols-4 mx-auto max-w-screen-sm">
                <Link href="/home">
                    <button
                        className={
                            window.location.pathname === "/home"
                                ? "text-primary active"
                                : "text-secondary"
                        }
                    >
                        <i className="bi bi-house"></i>
                    </button>
                </Link>
                <Link href="/about">
                    <button
                        className={
                            window.location.pathname === "/about"
                                ? "text-primary active"
                                : "text-secondary"
                        }
                    >
                        <i className="bi bi-info-circle"></i>
                    </button>
                </Link>
                <Link href="/list">
                    <button
                        className={
                            window.location.pathname === "/list"
                                ? "text-primary active"
                                : "text-secondary"
                        }
                    >
                        <i className="bi bi-list-ul"></i>
                    </button>
                </Link>
                <Link href="/profile">
                    <button
                        className={
                            window.location.pathname === "/profile"
                                ? "text-primary active"
                                : "text-secondary"
                        }
                    >
                        <i className="bi bi-person-circle"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
}
