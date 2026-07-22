import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    withCredentials: true
});

export const registerUser = (data) => {
    return api.post("/users/register", data);
};

export const loginUser = (data) => {
    return api.post("/users/login", data);
};