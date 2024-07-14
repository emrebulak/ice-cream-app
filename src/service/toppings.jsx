import { api } from "../utils/api";

export const getToppings = async () => {
    try {
        const data = await api.get(`/toppings`);
        return data;
    } catch (error) {
        return error;
    }


};