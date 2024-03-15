import React from "react";

export default function HorizontalCampaign() {
    return (
        <section className="m-3">
            <div className="heading">
                <h2>Campaign Terbaru</h2>
            </div>
            <section
                className="flex gap-3 m-2 mb-4"
                style={{ overflowX: "auto", width: "100%" }}
            >
                <div
                    className="listCom"
                    style={{ flex: "0 0 auto", width: "200px" }}
                >
                <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F08e30860-3fe1-4891-874f-9eb1fd4d0965.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75"/>
                    <p>Judulnya</p>
                    <p>terkumpul <span className="green-500">50.000</span></p>
                    <progress className="progress progress-info " value="80" max="100"></progress>
                </div>
                <div
                    className="listCom"
                    style={{ flex: "0 0 auto", width: "200px" }}
                >
                <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F08e30860-3fe1-4891-874f-9eb1fd4d0965.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75"/>
                    <p>Judulnya</p>
                    <p>terkumpul <span className="green-500">50.000</span></p>
                    <progress className="progress progress-info " value="80" max="100"></progress>
                </div>
                <div
                    className="listCom"
                    style={{ flex: "0 0 auto", width: "200px" }}
                >
                <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F08e30860-3fe1-4891-874f-9eb1fd4d0965.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75"/>
                    <p>Judulnya</p>
                    <p>terkumpul <span className="green-500">50.000</span></p>
                    <progress className="progress progress-info " value="80" max="100"></progress>
                </div>
            </section>
        </section>
    );
}
