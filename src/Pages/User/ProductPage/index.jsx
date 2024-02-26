import React, { useState } from "react";
import Header from "../../../components/Header";
import Card from "../../../components/Card";
import { Edit, Trash } from "iconsax-react";
import Modal from "../../../components/Modal";
import Cardwo from "../../../components/Cardwithoptions";
import { Link } from "react-router-dom";
const products = [
    {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
            "https://www.ugaoo.com/cdn/shop/products/Krish12Planter-Ivory_3f18466a-68f8-4763-8a18-fe58269b0f6a.jpg?v=1681551837&width=375",
        imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
            "https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-Teal_dc150664-695d-4972-a996-95f1d6d0dac6.jpg?v=1680515170&width=375",
        imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/XL-027.jpg?v=1708075059&width=375",
        imageAlt: "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
            "https://www.ugaoo.com/cdn/shop/files/Aimage_ec926ebd-db7c-46a9-a64d-22871d372c02.jpg?v=1705325714&width=375",
        imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/DSC_9012.jpg?v=1706609672&width=375",
        imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/XL-288.jpg?v=1708075048&width=375",
        imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/DSC_3263.jpg?v=1694434958&width=375",
        imageAlt: "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/DSC_2431.jpg?v=1692966811&width=375",
        imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/2_430a864d-f4ed-46d0-b5e6-ff0d55c422db.jpg?v=1706608270&width=375",
        imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355&width=375",
        imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
            "https://www.ugaoo.com/cdn/shop/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283&width=375",
        imageAlt: "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc: "https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375",
        imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
];
const index = () => {
    const [product, setProduct] = useState(products);
    const [modalOpen, setModalOpen] = useState(false);
    const [option, setOptionOpen] = useState(false);

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
                                        <div key={i} className="editdel border p-2 rounded-md">
                                            <div className="w-full max-w-sm  rounded-lg ">
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
                                                <Link to={`/product/${product.id}`}>
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
