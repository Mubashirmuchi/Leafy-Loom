import React, { useState } from "react";
import Modal from "../../components/Modal";

const index = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
            <div className="bg-white border-grey-300 border-b-2 w-[84%]  fixed flex justify-between pr-[25px]  items-center py-[10px]">
                <div className=" flex gap-[16px] items-center justify-center pl-[25px]">
                    <div>
                        <h2 className="text-[20px] text-cyan-950 font-medium">Products</h2>
                    </div>
                    <div className="w-px h-3.5 bg-slate-200"></div>
                    <div>
                        <h2 className="text-sky-900 text-[14px] font-medium">
                            <span className="text-sky-900 text-[14px] text-sm font-bold mr-[6px]">10</span>
                        </h2>
                    </div>
                </div>

                <div className="flex gap-[12px]  items-center">
                    <div className="min-w-[337px]  items-center">
                        <div className="flex items-center h-[44px]  bg-transparent  focus:outline-none   rounded-lg  p-[11px]  border solid border-[#E7EAEF]">
                            <div className="flex items-center justify-center gap-[10px]">
                                {/* <img src={SearchIcon} alt="" /> */}
                                <div className="w-px h-3.5 bg-slate-200"></div>
                                <input
                                    style={{ border: "none" }}
                                    type="text"
                                    placeholder="Search Name or ID "
                                    className="border-none  focus:outline-none "
                                />
                            </div>

                            <button className="bg-blue-500   rounded-md ml-2 hover:bg-blue-600"></button>
                        </div>
                    </div>
                    <div>
                        <div className=" min-w-[128px] rounded-lg  p-[10px]  flex justify-center items-center border solid border-[#E7EAEF]">
                            <button className=" text-gray-500 flex gap-[8px] rounded-md ml-2 ">
                                {/* <img src={FilterIcon} alt="" /> */}
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="min-w-[128px]  rounded-lg  p-[10px]  flex justify-center items-center border solid border-[#E7EAEF]">
                            <button
                                onClick={() => setModalOpen(true)}
                                className=" text-gray-500 flex gap-[8px] rounded-md ml-2"
                            >
                                {/* <img src={FilterIcon} alt="" /> */}
                                <span>Add Product</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
