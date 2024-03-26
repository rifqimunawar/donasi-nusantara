import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Create({ user, categories }) {
    const [formData, setFormData] = useState({
        title: "",
        img: null,
        description: "",
        price: "",
        user_id: user.id,
        time: "",
        category_id: "",
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
      router.post('/u/camp/store', formData);
  }

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
                            Tambah Galang Dana
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 mb-3"></p>
                    </header>
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
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

                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                                htmlFor="user_avatar"
                            >
                                Upload Image Pamflet
                            </label>
                            <input
                                required
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
                                Harga
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
                                    >
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5 flex justify-center gap-3">
                            <a
                                href="/u/camp/"
                                className="btn btn-warning btn-sm"
                            >
                                Kembali
                            </a>
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
