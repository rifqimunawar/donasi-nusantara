import { Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function BottomDonasi({ campaign }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const shareUrl = `https://donasi-nusantara.my.id/donasi/campaign/${campaign.id}/detail`;
    const imageUrl = `https://donasi-nusantara.my.id/img/${campaign.img}`; // Ganti URL ini dengan URL gambar yang sesuai
    const message = `Mari Berdonasi ${campaign.title}\n${shareUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}&image=${encodeURIComponent(imageUrl)}`;

    return (
        <div className="fixed bottom-1 w-full container">
            <div className="grid grid-cols-3 gap-3 mx-auto max-w-screen-sm">
                <div className="col-span-1">
                    <button
                        className="btn btn-primary w-full"
                        onClick={openModal}
                    ><i className="bi bi-share"></i>
                        Share
                    </button>
                </div>
                <div className="col-span-2">
                    <a href={`/create/${campaign.id}/donasi`} className="btn btn-primary w-full">Donasi Sekarang</a>
                </div>
            </div>
            {modalOpen && (
                <div>
                    <dialog id="my_modal_1" className="modal" open>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">
                                Bagikan Melalui
                            </h3>
                            <div className="grid grid-cols-4">
                                <a href={whatsappUrl}>
                                    <div className="col-span-1 text-center w-20">
                                        <img
                                            src="https://donasi-nusantara.my.id/img/wa.png"
                                            alt="wa"
                                            className="mx-auto"
                                        />
                                        <p className="mx-auto">WhatsApp</p>
                                    </div>
                                </a>
                            </div>
                            <div className="modal-action">
                                <button className="btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </dialog>
                </div>
            )}
        </div>
    );
}
