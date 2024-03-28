import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function confir({ campaigns, saldoBersih, user }) {
    const [formData, setFormData] = useState({
        name: user.name,
        user_id: user.id,
        campaign_id: campaigns.id,
        email: user.email,
        nominal: "",
        bank: campaigns.bank,
        norek: campaigns.norek,
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // Mengubah nilai input saat berubah
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value, // Menangani input file dan input teks
        }));
        if (parseInt(value) >= 25000 && parseInt(value) <= saldoBersih) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };
    // Menyimpan data saat form disubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        router.post(`/u/camp/w/con/store`, formData);
    };
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden  pb-[66px]">
                <Head title="Galang Dana" />
                <div>
                    <NavbarComponent />
                </div>
                <div className="p-4 sm:p-8 shadow lg:rounded-lg m-3">
                    <header className="">
                        <h2 className="text-lg font-medium text-gray-900 text-center">
                            Konfrmasi Ke absahan Data
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 mb-3"></p>
                    </header>

                    <div className="overflow-x-auto">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="mb-5">
                                <label
                                    htmlFor="base-input"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Nama Penarik Dana
                                </label>
                                <input
                                    name="name"
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="rounded-lg block w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="base-input"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Email
                                </label>
                                <input
                                    name="email"
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="rounded-lg block w-full"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="base-input"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Bank
                                </label>
                                <input
                                    name="bank"
                                    readOnly
                                    type="text"
                                    value={formData.bank}
                                    onChange={handleChange}
                                    className="rounded-lg block w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="base-input"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Nomor Rekening
                                </label>
                                <input
                                    name="norek"
                                    readOnly
                                    type="number"
                                    value={formData.norek}
                                    onChange={handleChange}
                                    className="rounded-lg block w-full"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="base-input"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Nominal Dana Yang Ditarik
                                </label>
                                <input
                                    name="nominal"
                                    required
                                    type="number"
                                    value={formData.nominal} 
                                    onChange={handleChange}
                                    className="rounded-lg block w-full"
                                />
                                <p className="text-xs mt-2">
                                    <span className="font-bold text-red-600">
                                        Note
                                    </span>
                                    :minimal penarikan dana sebesar Rp:25,000
                                </p>
                                <p className="text-xs mt-2">
                                    Dari dana yang terkumpul sebsar:
                                    {Number(saldoBersih).toLocaleString()}
                                </p>
                            </div>
                            <div className="form-control m-3 mt-4 border-2 p-2 rounded-md border-orange-500">
                                <label className="cursor-pointer label">
                                    <span className="label-text">
                                        Saya Bertanggungjawab Atas Kebenaran
                                        data saya
                                    </span>
                                    <input
                                        type="checkbox"
                                        required
                                        className="checkbox checkbox-error"
                                    />
                                </label>
                            </div>

                            <div className="mb-5 flex justify-center gap-3">
                                <Link
                                    href={route("user.withdraw")}
                                    className="btn btn-warning btn-sm"
                                >
                                    Kembali
                                </Link>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                    disabled={isButtonDisabled}
                                >
                                    Konfrmasi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
