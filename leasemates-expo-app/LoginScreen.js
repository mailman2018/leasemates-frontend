import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { loginUser } from "./apiService"; // Import the login function

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const data = await loginUser({ username, password });
            Alert.alert("Login successful!", `Access Token: ${data.access}`);
            navigation.navigate("Messages");
        } catch (error) {
            Alert.alert("Login failed", error.response?.data?.detail || "Unknown error");
            console.log(error)
            console.log("Hi")
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to LeaseMates</Text>

            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
                placeholderTextColor="#888"
            />

            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Enter your password"
                placeholderTextColor="#888"
            />

            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={handleLogin} color="#4682B4" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F5F5F5", // Light gray background
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333", // Dark gray text
    },
    label: {
        fontSize: 16,
        color: "#555", // Medium gray text
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: "#4682B4", // Steel Blue
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: "#FFF", // White input background
        marginBottom: 15,
        color: "#333", // Dark text color
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default LoginScreen;
