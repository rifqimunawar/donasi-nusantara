import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function VerticalCampaign({ campaigns }) {
    return (
        <section className="m-3">
            <div className="heading">
                <h2>Campaign Terbaru</h2>
            </div>
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
        <Link href={`/campaign/${campaign.id}/detail`}>
            <div className="verCampaign flex mb-3" style={{ flex: "0 0 auto" }}>
                <img
                    src={campaign.img}
                    style={{
                        width: "200px",
                        height: "100px",
                        objectFit: "cover",
                    }}
                />
                <div style={{ width: "100%" }}>
                    <p>{campaign.title}</p>
                    <progress
                        className="progress progress-info"
                        style={{ width: "100%" }}
                        value={presentase} // Menggunakan nilai presentase sebagai value
                        max="100"
                    ></progress>
                    <div className="flex justify-between">
                        <p>
                            Terkumpul{" "}
                            <span className="">{campaign.collected}</span>
                        </p>
                        <p>
                            {countdown > 0 ? countdown : 0}{" "}
                            <span className="">
                                {countdown === 1 ? "hari" : "hari lagi"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
