import React from "react";
import { useParams } from "react-router-dom";
import { products3 } from "../../../DummyData/data";
import { Edit, Trash } from "iconsax-react";

const Detailpage = () => {
    const { id } = useParams();
    const product3 = products3.find((product) => product.id === parseInt(id, 10));

    return (
        <div className=" sm:ml-64 w-full ">
            <div className="head flex justify-between  items-center p-2">
                <h2 className=" pl-2 text-xl font-semibold text-gray-600">Products</h2>
                {/* <div className="flex gap-2">
                    {" "}
                    <button className="border  text-[#A3B1C0] p-3 rounded-md flex ">
                        {" "}
                        <Edit />
                        Edit
                    </button>
                    <button className="border text-[#A3B1C0] flex p-3 rounded-md mr-6 ">
                        <Trash color="#A3B1C0" />
                        Delete
                    </button>
                </div>{" "} */}
            </div>{" "}
            <div className="flex p-2 ">
                <div className="first w-[75%] border border-gray-200 rounded-md p-2 ">
                    <img className="object-cover m-auto rounded-md" src={product3.imageSrc} alt="" />
                </div>
                <div className="first w-full mb-2">
                    <div className="content w-[80%] m-auto pt-5">
                        <h1 className="text-2xl font-medium">Peace Lilly Plant</h1>{" "}
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae corrupti deserunt
                            minima vel assumenda laboriosam? Saepe mollitia, vel iure exercitationem, delectus ullam iusto
                            facere facilis laboriosam suscipit sed nisi!
                        </p>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 accordian border  border-gray-200 rounded-md p-3 my-5">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        <div className="svg flex items-center gap-2">
                                            <img
                                                className="w-10"
                                                src="https://www.ugaoo.com/cdn/shop/files/Water-2_2x_e01f383f-4647-47cf-a82f-31ff906cf3f3_small.png?v=1656923200"
                                                alt=""
                                            />
                                            <span>Water Twice A Week</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6  font-medium text-gray-900">
                                        <p className=" text-base text-slate-600">
                                            Always check your plants before watering, the topsoil should be dry to touch.
                                            For succulents allow the potting mix to dry completely before watering again.
                                        </p>
                                    </th>
                                </tr>
                            </tbody>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="svg flex items-center gap-2">
                                            <img
                                                className="w-10"
                                                src="https://www.ugaoo.com/cdn/shop/files/Sunlight-2_2x_c2ce9dfa-edf9-4a1d-94fa-4e01e6baea45_small.png?v=1656923265"
                                                alt=""
                                            />
                                            <span>Needs Bright Indirect Sunlight</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6  font-medium text-gray-900">
                                        <p className=" text-base text-slate-600">
                                            Always check your plants before watering, the topsoil should be dry to touch.
                                            For succulents allow the potting mix to dry completely before watering again.
                                        </p>
                                    </th>
                                </tr>
                            </tbody>{" "}
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        {" "}
                                        <div className="svg flex items-center gap-2">
                                            <img
                                                className="w-10"
                                                src="https://www.ugaoo.com/cdn/shop/files/Maintainance-1_2x_809fc5b5-c212-4f22-803b-50241e478b2f_small.png?v=1656923507"
                                                alt=""
                                            />
                                            <span>Not Pet Friendly</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6  font-medium text-gray-900">
                                        <p className=" text-base text-slate-600">
                                            Always check your plants before watering, the topsoil should be dry to touch.
                                            For succulents allow the potting mix to dry completely before watering again.
                                        </p>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailpage;
