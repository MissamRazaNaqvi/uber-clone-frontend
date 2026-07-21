import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true
});

export const registerUser = (data) => {
    return api.post("/user/register", data);
};

export const loginUser = (data) => {
    return api.post("/user/login", data);
};