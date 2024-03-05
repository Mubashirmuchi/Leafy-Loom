import { Profile, Setting5, Logout } from "iconsax-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Store/UserSlice";

const index = ({ isSidebarVisible }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <aside
            className={`left-0 z-40 h-full  w-64  fixed transition-transform ${
                isSidebarVisible ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
            }`}
            id="logo-sidebar"
            aria-label="Sidebar"
        >
            <div class="h-full px-3 pb-4 pt-4 overflow-y-auto bg-[#F0F6F7]">
                <ul class="space-y-2 font-medium">
                    <li>
                        <div
                            onClick={() => {
                                console.log("hi");
                            }}
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300  group"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 "
                                aria-hidden="true"
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
                                fill="currentColor"
                                viewBox="0 0 18 20"
                            >
                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300">
                            <Profile variant="Bold" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                        </Link>
                    </li>

                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                            <Setting5 />

                            <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
                        </a>
                    </li>

                    <li>
                        <button
                            onClick={handleLogout}
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                        >
                            <Logout />
                            <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default index;
