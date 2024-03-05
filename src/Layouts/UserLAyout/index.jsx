import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const index = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const { isAuthenticated, user } = useSelector((store) => store.user);
    if (!isAuthenticated && !user?.token) {
        return <Navigate to={`/login`} />;
    }
    return (
        <div className="min-w-[778px] ">
            <Navbar setIsSidebarVisible={setIsSidebarVisible} />

            <div className="max-sm:ml-0 md:ml-[256px] mt-[57px]">
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <Outlet />
            </div>
        </div>
    );
};

export default index;
