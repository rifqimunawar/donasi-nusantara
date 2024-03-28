import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Edit({ user, categories, campaign }) {
    const [formData, setFormData] = useState({
        title: campaign.title,
        img: campaign.img,
        description: campaign.description,
        price: campaign.price,
        user_id: user.id,
        time: campaign.time,
        norek: campaign.norek,
        bank: campaign.bank,
        category_id: campaign.category_id,
    });

    // Mengubah nilai input saat berubah
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value, // Menangani input file dan input teks
        }));
    };

    // Menyimpan data saat form disubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(`/u/camp/${campaign.id}/update`, formData);
    };

    useEffect(() => {
        // Lakukan sesuatu saat komponen dimuat
    }, []); // Dependensi kosong agar efek hanya berjalan sekali saat komponen dimuat

    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <Head title="Galang Dana" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="p-4 sm:p-8 bg-white shadow lg:rounded-lg m-3">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Edit Galang Dana
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 mb-3"></p>
                    </header>
                    {/* Form */}
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                            />
                        </div>

                        <img
                            src={campaign.img}
                            className="rounded-2xl shadow-lg my-5"
                        />

                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                                htmlFor="user_avatar"
                            >
                                Upload Image Pamflet
                            </label>
                            <input
                                name="img"
                                type="file"
                                onChange={handleChange}
                                className="block file-input file-input-bordered file-input-secondary w-full"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="description"
                                className="block mb-1 text-sm font-medium text-gray-900"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                name="description"
                                id="editor"
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                                rows="5"
                            ></textarea>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="price"
                                className="block mb-1 text-sm font-medium text-gray-900"
                            >
                                Target Dana Terkumpul
                            </label>
                            <input
                                name="price"
                                required
                                type="number"
                                value={formData.price}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="time"
                                className="block mb-1 text-sm font-medium text-gray-900"
                            >
                                Waktu
                            </label>
                            <input
                                name="time"
                                required
                                type="datetime-local"
                                value={formData.time}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="category_id"
                                className="block mb-1 text-sm font-medium text-gray-900"
                            >
                                Kategori
                            </label>
                            <select
                                name="category_id"
                                required
                                value={formData.category_id}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                            >
                                <option value="" disabled>
                                    == Pilih Kategori ==
                                </option>
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                        selected={
                                            category.id === formData.category_id
                                        }
                                    >
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="bank"
                                className="block mb-1 text-sm font-medium text-gray-900"
                            >
                                Bank Penarikan
                            </label>
                            <select
                                name="bank"
                                required
                                value={formData.bank}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                            >
                                <option value="" disabled>
                                    == Pilih Bank ==
                                </option>
                                <option value="MANDIRI">MANDIRI</option>
                                <option value="BRI">BRI</option>
                                <option value="BCA">BCA</option>
                                <option value="BNI">BNI</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="norek"
                                className="block mb-1 text-sm font-medium text-gray-900"
                            >
                                Nomor Rekening Penarikan
                            </label>
                            <input
                                name="norek"
                                required
                                type="number"
                                value={formData.norek}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                            />
                        </div>

                        <div className="mb-5 flex justify-center gap-3">
                            <Link
                                href="/u/camp/"
                                className="btn btn-warning btn-sm"
                            >
                                Kembali
                            </Link>
                            <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                    {/* End of Form */}
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
