import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, Link, usePage } from "@inertiajs/react";
import NavbarComponent from "@/Components/NavbarComponent";
import BottomNavbar from "@/Components/BottomNavbar";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    campaigns,
    saldo,
}) {
    const totalCamp = campaigns.length;
    const user = usePage().props.auth.user;
    return (
        <section className="my-0 mx-auto min-h-full max-w-screen-sm">
            <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden  pb-[66px]">
                <NavbarComponent />
                <Head title="Profile" />

                <div className="pt-10 pb-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Selamat Datang : {user.name}
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 mb-3">
                                    Jumlah Campaign : {totalCamp}
                                </p>
                            </header>
                            <Link
                                href={route("user.campaign")}
                                className="btn btn-info btn-sm text-white"
                            >
                                Buat Campaign Sekarang
                            </Link>
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Withdraw
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 mb-3">
                                    Saldo Anda Rp:{" "}
                                    {Number(saldo).toLocaleString()}
                                </p>
                            </header>
                            <Link
                                href={route("user.withdraw")}
                                className="btn btn-warning btn-sm text-white"
                            >
                                Tarik Saldo
                            </Link>
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div
                            as="button"
                            className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
                        >
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Logout Account
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 mb-3">
                                    If you logout! you must login agin
                                </p>
                            </header>
                            <DangerButton>
                                <Link
                                    href={route("logout")}
                                    as="button"
                                    method="post"
                                    className=" text-white"
                                >
                                    Logout
                                </Link>
                            </DangerButton>
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-1">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="btm-center">
                <BottomNavbar />
            </div>
        </section>
    );
}