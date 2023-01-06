import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NewArrivalScreen from "../screens/NewArrivalScreen";
import SearchScreen from "../screens/SearchScreen";
import UserProfle from "../screens/UserProfile";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Bottomtabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#407BFF",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons
                name="home-outline"
                size={25}
                color={focused ? "#fff" : "#333"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons
                name="search"
                size={25}
                color={focused ? "#fff" : "#333"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Arrival"
        component={NewArrivalScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons
                name="notifications-outline"
                size={25}
                color={focused ? "#fff" : "#333"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfle}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons
                name="person-outline"
                size={25}
                color={focused ? "#fff" : "#333"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
});
