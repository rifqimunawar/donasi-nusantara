import BottomNavbar from "@/Components/BottomNavbar";
import NavbarComponent from "@/Components/NavbarComponent";
import { Link } from "@inertiajs/react/types";
import React from "react";

export default function index({ user, campaigns }) {
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
                <div>
                    <NavbarComponent />
                </div>
                <div className="p-4 sm:p-8 bg-white shadow lg:rounded-lg m-3">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {user.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 mb-3"></p>
                    </header>
                </div>
                <div className="overflow-x-auto">
                    <TabelItem campaigns={campaigns} />
                </div>

                <div className="btm-center">
                    <BottomNavbar />
                </div>
            </div>
        </section>
    );
}

function TabelItem({ campaigns }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data"); // Ganti '/data' dengan URL sesuai dengan endpoint Anda
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Terkumpul</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* Looping melalui data kampanye */}
                {campaigns.map((campaign, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>{" "}
                        {/* Nomor urutan, dimulai dari 1 */}
                        <td>{campaign.title}</td> {/* Judul kampanye */}
                        <td>{campaign.collected}</td> {/* Total terkumpul */}
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
