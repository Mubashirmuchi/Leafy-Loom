import { service } from "../utils/service";
import { API } from "../config/api";
const ProductService = {
    get: async () => {
        try {
            const res = await service.get(API.GetAllPlants);
            if (res) {
                return res;
            }
        } catch (error) {
            return error;
        }
    },

    post: async (params = {}) => {
        try {
            const res = await service.post(API.REGISTER, params);
            if (res) {
                return res;
            } else {
                throw new Error("something went wrong");
            }
        } catch (error) {
            return error;
        }
    },
    delete: async (params) => {
        try {
            const res = await service.delete(`${API.DeleteAPlant}/${params}`);
            if (res) {
                return res;
            } else {
                throw new Error("something service err  went wrong");
            }
        } catch (error) {
            return error;
        }
    },
};

export default ProductService;
