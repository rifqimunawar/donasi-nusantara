import BottomNavbar from "@/Components/BottomNavbar";
import FooterComponent from "@/Components/FooterComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import { Head, router } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FormDonasi({ campaignID }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nominal, setNominal] = useState("");
    const [_token, set_token] = useState(document.querySelector('meta[name="csrf-token"]').content,)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
        console.log(nominal);
        console.log(campaignID);
        console.log(_token);

        try {
            const response = await axios.post("/store/donasi", {
                name: name,
                email: email,
                message: message,
                nominal: nominal,
                campaignID: campaignID,
                _token: _token,
            });
            console.log(response.data); // Response dari server
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <div>
                    <NavbarComponent />
                </div>
            <Head title="Donasi" />
                <div>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <label className="form-control m-5">
                            <div className="label">
                                <span className="label-text">Nama Lengkap</span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input input-bordered"
                            />
                            <div className="label"></div>
                        </label>
                        <label className="form-control m-5">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered"
                            />
                            <div className="label"></div>
                        </label>
                        <label className="form-control m-5">
                            <div className="label">
                                <span className="label-text">
                                    Pesan/Do'a (Optional)
                                </span>
                            </div>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="Do'a dan pesan"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <div className="label"></div>
                        </label>
                        <label className="form-control m-5">
                            <div className="label">
                                <span className="label-text">Nominal</span>
                            </div>
                            <input
                                type="number"
                                name="nominal"
                                id="nominal"
                                className="input input-bordered"
                                value={nominal}
                                onChange={(e) => setNominal(e.target.value)}
                            />

                            <div className="label">
                                <span className="label-text-alt">
                                    Minimal Rp: 1.000
                                </span>
                            </div>
                        </label>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="btn btn-secondary"
                                id="saveButton"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                  <FooterComponent/>
                </div>
                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}
