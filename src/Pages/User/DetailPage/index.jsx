import { useParams } from "react-router-dom";
import jug from "../../../assets/Water-2_2x_e01f383f-4647-47cf-a82f-31ff906cf3f3_small.webp";
import sunLight from "../../../assets/Sunlight-2_2x_c2ce9dfa-edf9-4a1d-94fa-4e01e6baea45_small.png";
import maintainance from "../../../assets/Maintainance-1_2x_809fc5b5-c212-4f22-803b-50241e478b2f_small.avif";
import useProduct from "../ProductPage/useProduct";

const Detailpage = () => {
    const { id } = useParams();
    const { product } = useProduct();
    const newproduct = product.find((item) => item._id == id);

    return (
        <div className=" sm:ml-64 w-full ">
            <div className="head flex justify-between  items-center p-2">
                <h2 className=" pl-2 text-xl font-semibold text-gray-600">Products</h2>
            </div>
            <div className="flex p-2 ">
                <div className="first w-[75%] border border-gray-200 rounded-md p-2 ">
                    <img className="object-cover m-auto rounded-md" src={newproduct && newproduct.url} alt="" />
                </div>
                <div className="first w-full mb-2">
                    <div className="content w-[80%] m-auto pt-5">
                        <h1 className="text-2xl font-medium">{newproduct && newproduct.name}</h1>
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae corrupti deserunt
                            minima vel assumenda laboriosam? Saepe mollitia, vel iure exercitationem, delectus ullam iusto
                            facere facilis laboriosam suscipit sed nisi!
                        </p>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 accordian border  border-gray-200 rounded-md p-3 my-5">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="svg flex items-center gap-2">
                                            <img className="w-10" src={jug} alt="" />
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
                                            <img className="w-10" src={sunLight} alt="" />
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
                            </tbody>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="svg flex items-center gap-2">
                                            <img className="w-10" src={maintainance} alt="" />
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
