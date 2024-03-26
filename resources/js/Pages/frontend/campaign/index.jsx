import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Index({ campaigns }) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <Head title="Galang Dana" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="p-4 sm:p-8 bg-white shadow lg:rounded-lg m-3">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900"></h2>
                        <p className="mt-1 text-sm text-gray-600 mb-3"></p>
                    </header>
                </div>
                <Link
                    href={"/u/camp/create"}
                    className="btn btn-info btn-xs m-4"
                >
                    Tambah Campaign
                </Link>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Looping through campaigns */}
                            {campaigns.map((campaign, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{campaign.title}</td>
                                    <td className="grid grid-cols-2 gap-2">
                                        <Link
                                            href={`/donasi/campaign/${campaign.id}/detail`}
                                            className="btn btn-info btn btn-xs"
                                        >
                                            Lihat
                                        </Link>
                                        <Link
                                            href={`/u/camp/${campaign.id}/edit`}
                                            className="btn btn-warning btn btn-xs"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* <div className="flex justify-center mt-10">
                    <Link className="btn btn-secondary">
                        Tambah Galang Dana
                    </Link>
                </div> */}

                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
