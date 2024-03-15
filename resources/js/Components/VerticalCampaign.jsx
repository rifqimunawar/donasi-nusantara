import React from "react";

export default function VertcalCampaign() {
    return (
        <section className="m-3">
            <div className="heading">
                <h2>Campaign Terbaru</h2>
            </div>
            <section className="" style={{ overflowH: "auto", width: "100%" }}>
                <div
                    className="verCampaign flex mb-3"
                    style={{ flex: "0 0 auto", }}
                >
                    <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F08e30860-3fe1-4891-874f-9eb1fd4d0965.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75" />
                    <div style={{ width:"100%",  }}>
                        <p>Judulnya</p>
                        <progress
                            className="progress progress-info"
                            style={{ width: "100%" }} // Atau gunakan kelas Bootstrap yang sesuai
                            value="70"
                            max="100"
                        ></progress>

                        <div className="flex justify-between">
                            <p>
                                terkumpul <span className="">50.000</span>
                            </p>
                            <p>
                                12 <span className="">hari</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
