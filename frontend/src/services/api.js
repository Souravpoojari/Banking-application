import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Send cookies with cross-origin requests
});

export default api;
