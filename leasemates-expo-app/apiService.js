import axios from 'axios';

// Base URL of your Django backend
const API_BASE_URL = "http://10.16.29.191:8000/api/";

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
    try {
        // Use the apiClient instance and await the response
        const response = await apiClient.post("token/", {
            username: credentials["username"],
            password: credentials["password"],
        });

        // Log the full response to debug
        console.log("Login Response:", response);

        return response.data; // Return the response data (access and refresh tokens)
    } catch (error) {
        console.log("Login Error:", error.response?.data || error.message);
        throw error; // Throw the error for the calling function to handle
    }
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
