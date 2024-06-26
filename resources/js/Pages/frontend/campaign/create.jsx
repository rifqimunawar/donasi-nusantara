import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Create({ user, categories, uploadUrl }) {
    const [formData, setFormData] = useState({
        title: "",
        img: null,
        description: "",
        price: "",
        user_id: user.id,
        time: "",
        norek: "",
        bank: "",
        category_id: "",
    });

    // console.log(editorConfig)
    // Konfigurasi CKEditor dengan CKFinder upload URL
    const editorConfig = {
        ckfinder: {
            uploadUrl: {uploadUrl},
        },
    };

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
        console.log(formData);
        router.post("/u/camp/store", formData);
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
                            Tambah Galang Dana
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
                            <CKEditor
                                editor={ClassicEditor}
                                data={formData.description} // Data diambil dari state
                                config={editorConfig} // Konfigurasi CKEditor dengan CKFinder upload URL
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        description: data,
                                    }));
                                }}
                            />
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

                        {/* <div className="mb-5">
                            <label
                                htmlFor="time"
                                className="block mb-1 text-sm font-medium text-gray-900"
                            >
                                Waktu
                            </label>
                            <input
                                name="time"
                                type="datetime-local"
                                value={formData.time}
                                onChange={handleChange}
                                className="rounded-lg block w-full"
                            />
                        </div> */}

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

                        <div className="mb-5">
                            <label
                                htmlFor="category_id"
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
                                <option value="" selected disabled>
                                    == Pilih Bank ==
                                </option>
                                <option value={"MANDIRI"}>MANDIRI</option>
                                <option value={"BRI"}>BRI</option>
                                <option value={"BCA"}>BCA</option>
                                <option value={"BNI"}>BNI</option>
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
