import axios from "axios";

// Using cookies for Auth so we just pass withCredentials
const API_URL = "http://localhost:8081/api/";

axios.defaults.withCredentials = true;

const getBalance = () => {
    return axios.get(API_URL + "balance");
};

const UserService = {
    getBalance,
};

export default UserService;
