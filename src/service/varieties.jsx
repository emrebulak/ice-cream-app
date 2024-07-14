import { api } from "../utils/api";

export const getVarieties = async () => {
    try {
        const data = await api.get(`/varieties`);
        return data;
    } catch (error) {
        return error;
    }


};