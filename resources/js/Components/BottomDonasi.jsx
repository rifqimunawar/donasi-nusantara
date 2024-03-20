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

    const shareUrl = `http://127.0.0.1:8000/campaign/${campaign.id}/detail`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${campaign.title} ${shareUrl}`
    )}`;

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
                    <Link href={`/create/${campaign.id}/donasi`} className="btn btn-primary w-full">Donasi Sekarang</Link>
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
                                <Link href={whatsappUrl}>
                                    <div className="col-span-1 text-center">
                                        <img
                                            src="http://127.0.0.1:8000/img/wa.png"
                                            alt="wa"
                                            className="mx-auto"
                                        />
                                        <p className="mx-auto">WhatsApp</p>
                                    </div>
                                </Link>
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
