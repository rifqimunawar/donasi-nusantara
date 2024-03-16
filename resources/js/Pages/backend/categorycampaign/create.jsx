import React, { useState } from "react";
import axios from "axios"; // Import Axios
import HamburgerPart from "../partials/HamburgerPart";
import AsidePart from "../partials/AsidePart";
import { Link } from "@inertiajs/react";

export default function create() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        formData.append('title', title);

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').content; // Ambil CSRF token secara langsung
            const response = await axios.post('/category/campaign/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRF-Token': csrfToken // Sertakan token CSRF dalam header
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <HamburgerPart />
            <AsidePart />

            <div className="p-4 pt-10 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="heading flex justify-center items-center">
                        <h1>Create Category Campaign</h1>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <form onSubmit={handleSumbit} encType="multipart/form-data">
                                <div className="mb-5">
                                    <label
                                        htmlFor="base-input"
                                        className="block mb-1 text-sm font-medium text-gray-900"
                                    >
                                        Judul
                                    </label>
                                    <input
                                        name="title"
                                        required
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        type="text"
                                        className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                        htmlFor="user_avatar"
                                    >
                                        Upload Icon Category
                                    </label>
                                    <input
                                        required
                                        onChange={handleChange}
                                        name="file"
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
                                    <button type="submit" className="btn btn-primary btn-sm">Simpan</button>
                                </div>
                                <p>{title}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
