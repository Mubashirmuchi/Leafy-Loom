import React, { useCallback, useEffect, useState } from "react";
import ProductService from "../../../service/productService";
import { toast } from "react-toastify";
import { SUCCESS_CODES } from "../../../config/successCodes";

const useProduct = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [option, setOptionOpen] = useState(false);

    const getAllPlants = useCallback(() => {
        setLoading(true);
        ProductService.get()
            .then((res) => {
                if (SUCCESS_CODES.includes(res.status) && res?.data) {
                    setProduct(res.data);
                } else {
                    setProduct([]);
                }
            })
            .catch(() => {
                setProduct([]);
                toast.error("Cannot fetch the Products");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const deletePlant = () => {
        ProductService.delete(editId)
            .then((res) => {
                if (SUCCESS_CODES.includes(res.status)) {
                    setOptionOpen(false);
                    toast.success("The item has been deleted successfully.");
                    setEditId("");
                } else {
                    toast.error("Something use else went wrong");
                }
            })
            .finally(() => {
                getAllPlants();
            });
    };

    useEffect(() => {
        getAllPlants();
    }, []);

    return {
        product,
        loading,
        modalOpen,
        option,
        editId,
        setModalOpen,
        setEditId,
        setOptionOpen,
        deletePlant,
    };
};

export default useProduct;
