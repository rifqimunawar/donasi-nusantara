import React from "react";
import HamburgerPart from "../partials/HamburgerPart";
import AsidePart from "../partials/AsidePart";
import { Link } from "@inertiajs/react";

export default function index() {
    return (
        <div>
            <HamburgerPart />
            <AsidePart />

            <div class="p-4 pt-10 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="heading flex justify-center items-center">
                        <h1>Cateogry Campaign</h1>
                    </div>
                    <Link href={'/category/campaign/create'} className="btn btn-primary btn-sm m-5">Tambah Cateogry Campaign</Link>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="bg-base-200">
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
