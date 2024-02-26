import React, { useState } from "react";

import { Edit, Trash } from "iconsax-react";
import Modal from "../../components/Modal";

const index = ({ product }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {" "}
            {modalOpen && <Modal />}
            <div className=" p-2">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
        </>
    );
};

export default index;
