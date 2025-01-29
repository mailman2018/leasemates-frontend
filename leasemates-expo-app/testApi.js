import axios from 'axios';

const API_URL = "http://192.168.5.117:8000/api/token/";

// POST request body
const credentials = {
    username: "tenant1",
    password: "password123",
};

// Make the POST request
const testApi = async () => {
    try {
        console.log("Attempting POST request...");
        const response = await axios.post(API_URL, credentials);
        console.log("Response Data:", response.data); // Print the response
    } catch (error) {
        console.error("Error:", error.response?.data || error.message); // Print any errors
    }
};

// Run the function immediately
testApi();
