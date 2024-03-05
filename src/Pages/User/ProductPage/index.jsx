import Header from "./Header";
import Card from "../../../components/Card";
import Modal from "../../../components/Modal";
import { Link } from "react-router-dom";
import useProduct from "./useProduct";

const index = () => {
    const { product, loading, modalOpen, option, editId, setModalOpen, setEditId, setOptionOpen, deletePlant } =
        useProduct();

    return (
        <>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
            <Header setModalOpen={setModalOpen} />

            <div className="p-5">
                <div className="grid grid-cols-2 gap-x-6 gap-y-10  items-center sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {product.map((product, i) => (
                        <div key={i} className="editdel w-full  border h-full p-2 rounded-md">
                            <div className="w-full max-w-sm h-full rounded-lg relative">
                                <div className="flex justify-end px-4 ">
                                    <button
                                        onClick={() => {
                                            setEditId(product._id);
                                            setOptionOpen((prev) => !prev);
                                        }}
                                        id="dropdownButton"
                                        data-dropdown-toggle="dropdown"
                                        className="inline-block text-gray-500  hover:bg-gray-100   focus:outline-none   rounded-lg text-sm p-1.5"
                                        type="button"
                                    >
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                    </button>
                                </div>
                                {option && editId === product._id && (
                                    <ul
                                        className="py-2  bg-slate-50 absolute right-0 w-[126px]"
                                        aria-labelledby="dropdownButton"
                                    >
                                        <li>
                                            <button className=" py-2 text-sm w-full text-gray-700 hover:bg-gray-200 ">
                                                Edit
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                onClick={deletePlant}
                                                className=" w-full py-2 text-sm text-red-600 hover:bg-gray-200"
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                )}

                                <Link className="h-full" to={`/product/${product._id}`}>
                                    <Card key={i} option={option} product={product} editId={editId} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default index;
