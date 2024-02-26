import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const index = () => {
    const { isAuthenticated, user } = useSelector((store) => store.user);
    if (!isAuthenticated && !user?.token) {
        return <Navigate to={`/login`} />;
    }

    return (
        <div className="main">
            <Navbar />
            <div className="flex flex-row">
                <SideBar />
                <Outlet />
            </div>
        </div>
    );
};

export default index;
