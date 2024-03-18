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
            className="listCom"
            style={{ flex: "0 0 auto", width: "200px" }}
            href={`/campaign/${campaign.id}/detail`}
        >
            <img src={campaign.img} alt={campaign.title} />
            <p>{campaign.title}</p>
            <p>
                terkumpul <span>{campaign.collected}</span>
            </p>
            <progress
                className="progress progress-info "
                value={presentase}
                max="100"
            ></progress>
        </Link>
    );
}
