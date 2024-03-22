import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[550px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2"></div>
                            <nav className="-mx-3 flex flex-1 justify-end"></nav>
                        </header>

                        <main className="mt-6">
                            <div className="">
                                <a
                                    href="/home"
                                    id="docs-card"
                                    className=" mb-10 flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-1 items-stretch"
                                    >
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div
                                            id="docs-card-content"
                                            className="flex items-start gap-6 lg:flex-col"
                                        >
                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Selamat Datang
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    Website "Donasi Nusantara"
                                                    adalah sebuah platform
                                                    online yang dibuat sebagai
                                                    bagian dari tugas akhir oleh
                                                    kelompok 8 di bimbingan Pak
                                                    Tedjo.
                                                </p>
                                                <p>
                                                    Website ini bertujuan untuk
                                                    memenuhi kebutuhan
                                                    masyarakat akan teknologi
                                                    dengan memberikan sarana
                                                    yang mudah dan nyaman untuk
                                                    menyalurkan dana melalui
                                                    donasi.
                                                </p>
                                                <p>
                                                    Donasi Nusantara didesain
                                                    untuk menjadi solusi bagi
                                                    masyarakat yang ingin
                                                    berkontribusi dalam membantu
                                                    mereka yang membutuhkan,
                                                    dengan menyediakan berbagai
                                                    fitur dan informasi yang
                                                    dibutuhkan untuk melakukan
                                                    donasi secara efektif.
                                                </p>
                                            </div>
                                        </div>

                                        <svg
                                            className="size-6 shrink-0 stroke-[#FF2D20]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
