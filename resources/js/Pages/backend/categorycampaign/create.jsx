import React from "react";
import HamburgerPart from "../partials/HamburgerPart";
import AsidePart from "../partials/AsidePart";

export default function create() {
    return (
        <div>
            <HamburgerPart />
            <AsidePart />

            <div class="p-4 pt-10 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="heading flex justify-center items-center">
                        <h1>Create Cateogry Campaign</h1>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <form>
                                <div class="mb-5">
                                    <label
                                        for="base-input"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Base input
                                    </label>
                                    <input
                                        type="text"
                                        id="base-input"
                                        class=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
