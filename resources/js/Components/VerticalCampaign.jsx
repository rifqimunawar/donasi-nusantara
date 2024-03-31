import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function VerticalCampaign({ campaigns }) {
    return (
        <section className="m-3">
            <section className="" style={{ overflowH: "auto", width: "100%" }}>
                <div>
                    {/* Looping data campaigns */}
                    {campaigns.map((campaignItem) => (
                        <CampaignItem
                            key={campaignItem.id}
                            campaign={campaignItem}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}

function CampaignItem({ campaign }) {
    const [countdown, setCountdown] = useState("");
    const [presentase, setPresentase] = useState("");
    const formattedCollected = Number(campaign.collected).toLocaleString(
        "id-ID"
    );


    useEffect(() => {
        const calculateCountdown = () => {
            const targetDate = new Date(campaign.time);
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
            setCountdown(days);
        };
        calculateCountdown();
    }, [campaign]);

    useEffect(() => {
        const calculatePercentage = () => {
            const collected = campaign.collected;
            const price = campaign.price;
            const percentage = (collected / price) * 100;
            setPresentase(percentage);
        };
        calculatePercentage();
    }, [campaign]);

    return (
        <Link href={`/donasi/campaign/${campaign.id}/detail`}>
            <div
                className="verCampaign flex mb-3 bg-info shadow-md"
                style={{ flex: "0 0 auto" }}
            >
                <div className="w-60 h-24 object-cover">
                    <img src={campaign.img} className="w-full h-full object-cover" />
                </div>
                <div style={{ width: "100%", padding: "5px" }}>
                    <p className="text-info-content">{campaign.title}</p>
                    <progress
                        className="progress progress secondary"
                        style={{ width: "100%" }}
                        value={presentase} // Menggunakan nilai presentase sebagai value
                        max="100"
                    ></progress>
                    <div className="flex justify-between text-info-content text-sm">
                        <p className="text-xs">
                            Terkumpul{" "}
                            <span className="">{formattedCollected}</span>
                        </p>
                        <p>
                            <p className="text-xs">{campaign.donaturs.length} Donatur</p> {/* Use donaturCount */}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
