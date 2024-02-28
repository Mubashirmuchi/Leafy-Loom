import React from "react";

const index = ({ product }) => {
    return (
        <>
            <div className=" p-2 h-full">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                    <img src={product.url} alt={product.name} className="h-[234.2px]" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.name}</p>
            </div>
        </>
    );
};

export default index;
