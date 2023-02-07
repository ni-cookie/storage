import axios from "axios";
import {getToken} from "../hooks/auth";

const instance = axios.create({
    baseURL:"http://localhost:4444",
});
export const getConfig = () => {
    const token = getToken();
    return {
        headers: {Authorization: `Bearer ${token}`}
    }
};
export default instance;