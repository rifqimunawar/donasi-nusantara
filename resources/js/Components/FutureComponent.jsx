import { Link } from "@inertiajs/react";
import React from "react";

export default function FutureComponent({ categories }) {
    return (
        <section id="futurecomponent" className="futurecomponent my-10">
            <div className="heading">
                <h1></h1>
            </div>
            <div className="m-3 grid grid-cols-4 gap-3">
                {categories.map((category, index) => (
                    <Link href={`/category/${category.id}/campaign`} className="text-center">
                        <div className="bg-base-200 inline-block" key={index} style={{ width:"55px", height:"55px", objectFit:"cover", borderRadius:"50%" }}>
                            <img
                                src={category.file}
                                alt=""
                                className="w-12 h-12 inline-block"
                            />
                        </div>
                        <p className="text-center text-xs">{category.title}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
