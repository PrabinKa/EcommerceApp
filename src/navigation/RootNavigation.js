import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stacknavigation from "./Stacknavigation";
import AuthNavigation from "./AuthNavigation";
import UserAuthentication from "../hook/UserAuthentication";

const Stack = createStackNavigator();

const RootNavigation = () => {
  const { user } = UserAuthentication();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="content" component={Stacknavigation} />
        ) : (
          <Stack.Screen name="auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
