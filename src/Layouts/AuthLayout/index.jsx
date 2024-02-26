import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Bgimage from "../../assets/photo-1604714628334-febaf95facde.avif";
import LeafSvg from "../../assets/leaf.svg";

const AuthLayout = () => {
    const { isAuthenticated, user } = useSelector((store) => store.user);

    if (isAuthenticated && user?.token) {
        return <Navigate to={`/`} />;
    }
    return (
        <div className="bg-white">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-[53%]" style={{ backgroundImage: `url(${Bgimage})` }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h3 className="text-2xl font-bold text-white sm:text-3xl">Stay Connected Anywhere</h3>

                            <p className="max-w-xl mt-3 text-gray-300">
                                Connect with fellow plant enthusiasts, share your success stories, and seek advice from
                                experienced growers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex text-slate-700 items-center gap-5 mx-auto mb-3">
                                <img className="w-auto h-20 sm:h-8" src={LeafSvg} alt="leaf" />
                                <p className="text-3xl  font-serif">Leafy Loom</p>
                            </div>
                        </div>
                        <p className="pt-[18px]">Welcome back</p>
                        <p className="pb-[40px]font-semibold  text-[30px] leading-[52px] font-manrope">
                            Hey, Enter your details
                        </p>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
