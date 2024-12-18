import axios from 'axios';

// Base URL of your Django backend
const API_BASE_URL = "http://127.0.0.1:8000/api/";

// Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Function to set Authorization header (for JWT tokens)
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common["Authorization"];
    }
};

// Example API callsr
export const loginUser = async (credentials) => {
    const response = await apiClient.post("token/", credentials);
    return response.data;
};

export const fetchMessages = async () => {
    const response = await apiClient.get("communication/messages/");
    return response.data;
};

export const sendMessage = async (data) => {
    const response = await apiClient.post("communication/messages/", data);
    return response.data;
};

export default apiClient;
