import React from "react";

const Body = ({ children }) => {
    return (
        <div className="flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className=" overflow-y-auto overflow-x-hidden  flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">{children}</div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    );
};

const Header = ({ children }) => {
    return <div className="flex items-center  bg-pink-600 justify-between p-4 md:p-5 border-b rounded-t ">{children}</div>;
};

const Footer = ({ children }) => {
    return <div className="bg-orange-500">{children}</div>;
};

const Modal = { Body, Header, Footer };
export default Modal;
