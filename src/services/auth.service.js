// Authentication service
// uses Axios for HTTP requests and Local Storage for user information and JWT

import axios from 'axios';
const API_URL = "http://localhost:8080/api/auth";

const register = (username) => {
    return axios.post(API_URL + "signup", {
        username,
    });
};

const login = (username) => {
    return axios
        .post(API_URL + "signin", {
            username,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
}

export default {
    register,
    login,
    logout,
}