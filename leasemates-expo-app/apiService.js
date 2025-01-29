import axios from 'axios';

// Base URL of your Django backend
const API_BASE_URL = "http://192.168.5.117:8000/api/";

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

// Function to log in and store the token
export const loginUser = async (credentials) => {
    try {
        const response = await apiClient.post("token/", {
            username: credentials["username"],
            password: credentials["password"],
        });

        const token = response.data.access;  // Get access token
        setAuthToken(token);  // Set token for future requests

        return response.data; // Return the tokens (access + refresh)
    } catch (error) {
        console.log("Login Error:", error.response?.data || error.message);
        throw error;
    }
};

// Function to fetch messages with authentication
export const fetchMessages = async () => {
    try {
        const response = await apiClient.get("messages/");
        return response.data;
    } catch (error) {
        console.error("Fetch Messages Error:", error.response?.data || error.message);
        throw error;
    }
};

// Function to send messages with authentication
export const sendMessage = async (data) => {
    try {
        const response = await apiClient.post("messages/", data);
        return response.data;
    } catch (error) {
        console.error("Send Message Error:", error.response?.data || error.message);
        throw error;
    }
};

export default apiClient;
