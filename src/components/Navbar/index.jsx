import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const index = () => {
    const [user] = useState(useSelector((store) => store.user.user?.user));
    return (
        <nav className="bg-white   border-grey-300 border-b-2 sticky z-50 top-0">
            <div className="max-w-[1450px] flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="flex text-slate-700 items-center gap-5 mx-auto mb-3">
                        <img className="w-auto h-20 sm:h-8" src="../src/assets/leaf.svg" alt="leaf" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Leafy Loom</span>
                    </div>
                </Link>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-3" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 items-center mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                                <div className="absolute w-12 h-12 text-gray-400 -left-1">
                                    <img src={user.profilePicture} alt="profile" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default index;
