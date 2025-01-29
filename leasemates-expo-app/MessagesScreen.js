import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { fetchMessages } from "./apiService"; // Import the fetchMessages function

const MessagesScreen = () => {
    const [messages, setMessages] = useState([]);

    const loadMessages = async () => {
        try {
            const data = await fetchMessages();
            console.log(data);
            setMessages(data); // Update state with fetched messages
        } catch (error) {
            Alert.alert("Failed to fetch messages", error.response?.data?.detail || "Unknown error");
        }
    };

    useEffect(() => {
        loadMessages(); // Fetch messages when the screen loads
    }, []);

    return (
        <View>
            <Text>Messages:</Text>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>Subject: {item.subject}</Text>
                        <Text>Body: {item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default MessagesScreen;
