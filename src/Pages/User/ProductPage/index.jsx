import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Card from "../../../components/Card";
import { Edit, Trash } from "iconsax-react";
import Modal from "../../../components/Modal";
import Cardwo from "../../../components/Cardwithoptions";
import { Link } from "react-router-dom";
import axios from "axios";

const index = () => {
    const [product, setProduct] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [option, setOptionOpen] = useState(false);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/post/allplants")
            .then((res) => {
                setProduct(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
            <div className=" sm:ml-64">
                <Header />
                <div className="div ">
                    <div className="p-4 ">
                        <div className="bg-white">
                            <div className="mx-auto max-w-2xl px-4 scroll-smooth py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                <h2 className="sr-only">Products</h2>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {product.map((product, i) => (
                                        <div key={i} className="editdel border h-full p-2 rounded-md">
                                            <div className="w-full max-w-sm h-full rounded-lg ">
                                                <div className="flex justify-end px-4 ">
                                                    <button
                                                        onClick={() => handeloption(product)}
                                                        id="dropdownButton"
                                                        data-dropdown-toggle="dropdown"
                                                        className="inline-block text-gray-500  hover:bg-gray-100   focus:outline-none   rounded-lg text-sm p-1.5"
                                                        type="button"
                                                    >
                                                        <span className="sr-only">Open dropdown</span>
                                                        <svg
                                                            className="w-5 h-5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 3"
                                                        >
                                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </button>
                                                </div>{" "}
                                                {option && (
                                                    <button
                                                        id="dropdown"
                                                        className="z-10  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-full "
                                                    >
                                                        <ul className="py-2" aria-labelledby="dropdownButton">
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                                                >
                                                                    Edit
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                                                >
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </button>
                                                )}
                                                <Link className="h-full" to={`/product/${product._id}`}>
                                                    <Card key={i} product={product} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
