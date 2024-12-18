import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen"; // Adjust the path if needed
import MessagesScreen from "./MessagesScreen"; // Adjust the path if needed

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Login Screen */}
          <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Login" }}
          />

          {/* Messages Screen */}
          <Stack.Screen
              name="Messages"
              component={MessagesScreen}
              options={{ title: "Messages" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
