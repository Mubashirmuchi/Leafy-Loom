import React from "react";
import Navbar from "./../Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logout, Setting, Setting2, Setting3, Setting4, Setting5, Settings } from "iconsax-react";
import { logout } from "../../Store/UserSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const index = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <div
                id="default-sidebar"
                className="w-64 h-screen fixed  transition-transform -translate-x-full sm:translate-x-0"
                aria-label=""
            >
                <div className="h-full px-3 py-8 overflow-y-auto bg-[#F0F6F7]">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <div
                                onClick={() => toast.success("Wow so easy!")}
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300  group"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </div>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2  rounded-lg  hover:bg-gray-300 ">
                                <svg
                                    className="flex-shrink-0 w-5 h-5  text-gray-500 hover:text-gray-900 transition duration-75  "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20"
                                >
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </Link>
                        </li>{" "}
                        <li>
                            <Link to="profile" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </Link>
                        </li>{" "}
                        <li>
                            <Link
                                to="settings"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300   group"
                            >
                                <Setting5 />
                                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg  w-full hover:bg-gray-300"
                            >
                                <Logout />
                                <span className=" ms-3 whitespace-nowrap">Log Out</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer
                style={{ width: "auto", minWidth: "340px", maxWidth: "450px" }}
                position={"bottom-right"}
                bodyStyle={{ color: "#756f86" }}
            />
        </>
    );
};

export default index;
