import React from "react";
import { Filter, SearchNormal1 } from "iconsax-react";

const Header = ({ setModalOpen }) => {
    return (
        <div className="flex py-2 w-full bg-white border border-b-2  z-30  top-14 sticky  justify-between pr-[25px] items-center pt-[20px]">
            <div className=" flex gap-[16px] items-center justify-center pl-[25px]">
                <div>
                    <h2 className="text-[20px] text-cyan-950 font-medium">Products</h2>
                </div>
                <div className="w-px h-3.5 bg-slate-200"></div>
                <div>
                    <h2 className="text-sky-900 text-[14px] font-medium">
                        <span className="text-sky-900 text-[14px] text-sm font-bold mr-[6px]">
                            {/* {departmentCount > 0 ? departmentCount : '0'} */} 10
                        </span>
                        {/* {departmentCount > 1 ? 'Records' : 'Record'} */} Records
                    </h2>
                </div>
            </div>
            <div className="flex gap-[12px]  items-center">
                <div className="min-w-[337px]  items-center">
                    <div className="flex items-center h-[44px] w-full bg-transparent  focus:outline-none min-w-[222px]  rounded-lg  p-[11px]  border solid border-[#E7EAEF]">
                        <div className="flex items-center justify-center gap-[10px]">
                            <SearchNormal1 color="rgb(107 114 128)" />
                            <div className="w-px h-3.5 bg-slate-200"></div>
                            <input
                                style={{ border: "none" }}
                                type="text"
                                placeholder="Search By Name"
                                className="outline-none"
                            />
                        </div>

                        <button className="bg-blue-500   rounded-md ml-2 hover:bg-blue-600"></button>
                    </div>
                </div>
                <div>
                    <div className="min-w-[128px]  rounded-lg  p-[10px]  flex justify-center items-center border solid border-[#E7EAEF]">
                        <button
                            onClick={() => setModalOpen(true)}
                            className=" text-gray-500 flex gap-[8px] rounded-md ml-2"
                        >
                            <span>Add Product</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
