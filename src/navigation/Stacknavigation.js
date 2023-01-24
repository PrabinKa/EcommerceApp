import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/authentication/LoginScreen";
import RegisterScreen from "../screens/authentication/RegisterScreen";
import Bottomtabs from "./Bottomtabs";
import Cart from "../screens/Cart";
import Favorites from "../screens/profile_tabs/Favorites";
import Notification from "../screens/profile_tabs/Notification";
import Messages from "../screens/profile_tabs/Messages";
import Ratings from "../screens/profile_tabs/Ratings";
import DetailedScreen from "../screens/DetailedScreen";
import ProductsListScreen from "../screens/ProductsListScreen";

const Stack = createStackNavigator()

const Stacknavigation = () => {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Tab"
      >
        <Stack.Screen name="Tab" component={Bottomtabs} />
        <Stack.Screen name="Onboard" component={OnboardingScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Ratings" component={Ratings} />
        <Stack.Screen name="Detailed" component={DetailedScreen} />
        <Stack.Screen name="ProductsList" component={ProductsListScreen} />
      </Stack.Navigator>
  );
};

export default Stacknavigation;
