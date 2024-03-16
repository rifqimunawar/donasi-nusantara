import React from "react";
import HamburgerPart from "../partials/HamburgerPart";
import AsidePart from "../partials/AsidePart";
import { Link, useForm } from "@inertiajs/react";

export default function create() {
    const { data, setData, post, processing } = useForm({
        title: "",
        _token: document.querySelector('meta[name="csrf-token"]').content,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("first" + data.title);
        // post('/transaction/store');
    };

    return (
        <div>
            <HamburgerPart />
            <AsidePart />

            <div className="p-4 pt-10 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="heading flex justify-center items-center">
                        <h1>Create Cateogry Campaign</h1>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label
                                        for="base-input"
                                        className="block mb-1 text-sm font-medium text-gray-900"
                                    >
                                        Judul
                                    </label>
                                    <input
                                        name="title"
                                        required
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        type="text"
                                        className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                        for="user_avatar"
                                    >
                                        Upload Icon Cateogry
                                    </label>
                                    <input
                                        // required
                                        name="icon"
                                        type="file"
                                        className="block file-input file-input-bordered file-input-secondary w-full"
                                    />
                                </div>

                                <div className="mb-5 flex justify-center gap-3">
                                    <Link
                                        href={"/category/campaign"}
                                        className="btn btn-warning btn-sm"
                                    >
                                        Kembali
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                        disabled={processing}
                                    >
                                        {processing ? "Menyimpan..." : "Simpan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
