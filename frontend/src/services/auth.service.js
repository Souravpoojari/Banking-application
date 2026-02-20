import axios from "axios";

const API_URL = "http://localhost:8081/api/auth/";

axios.defaults.withCredentials = true;

const register = (username, email, password, phone) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password,
        phone,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.username) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    return axios.post(API_URL + "logout").then(() => {
        localStorage.removeItem("user");
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;
