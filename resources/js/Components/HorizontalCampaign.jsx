import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function HorizontalCampaign({ campaigns }) {
    return (
        <section className="m-3">
            <div className="heading">
                <h2>Campaign Terbaru</h2>
            </div>
            <section
                className="flex gap-3 m-2 mb-4"
                style={{ overflowX: "auto", width: "100%" }}
            >
                {campaigns.map((campaignList) => (
                    <CampaignList
                        key={campaignList.id}
                        campaign={campaignList}
                    />
                ))}
            </section>
        </section>
    );
}

function CampaignList({ campaign }) {
    const [presentase, setPresentase] = useState("");
    const formattedCollected = Number(campaign.collected).toLocaleString(
        "id-ID"
    );

    useEffect(() => {
        const calculatePercentage = () => {
            const collected = campaign.collected;
            const price = campaign.price;

            // Hitung presentase terkumpul
            const percentage = (collected / price) * 100;

            // Perbarui state presentase
            setPresentase(percentage);
        };

        // Panggil fungsi hitung presentase setelah komponen dimuat
        calculatePercentage();
    }, [campaign]);

    return (
        <Link
            className="listCom bg-info shadow-md"
            style={{ flex: "0 0 auto", width: "200px" }}
            href={`/donasi/campaign/${campaign.id}/detail`}
        >
            <img
                src={campaign.img}
                alt={campaign.title}
                style={{
                    width: "200px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                }}
            />
            <div className="p-2">
                <p className="text-info-content">{campaign.title}</p>
                <p className="text-info-content text-sm">
                    Terkumpul <span>{formattedCollected}</span>
                </p>
                <progress
                    className="progress progress secondary"
                    value={presentase}
                    max="100"
                ></progress>
            </div>
        </Link>
    );
}
