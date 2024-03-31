import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function history({ withdraw }) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden  pb-[66px]">
                <Head title="Galang Dana" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="p-4 sm:p-8 shadow lg:rounded-lg m-3">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900 text-center">
                            Withdraw History
                        </h2>
                        {/* <p className="mt-1 text-sm text-gray-600 mb-3">Total : {Number(sisaSaldo).toLocaleString()}</p> */}
                    </header>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nominal</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Looping through campaigns */}
                            {withdraw.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {Number(item.nominal).toLocaleString()}
                                    </td>
                                    <td className="text-center">
                                        {item.status === 1 ? (
                                            <span className="btn btn-success btn-xs">
                                                Success
                                            </span>
                                        ) : (
                                            <span className="btn btn-warning btn-xs">
                                                Pending
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
