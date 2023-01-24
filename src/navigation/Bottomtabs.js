import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import NewArrivalScreen from "../screens/NewArrivalScreen";
import Cart from "../screens/Cart";
import UserProfle from "../screens/UserProfile";

import Ionicons from "react-native-vector-icons/Ionicons";

import { colors } from "../constants/Constants";

const Tab = createBottomTabNavigator();

const Bottomtabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.blue,
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
            <View style={styles.tabsWrapper}>
              <Ionicons
                name="home-outline"
                size={25}
                color={focused ? colors.white : colors.darkGray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabsWrapper}>
              <Ionicons
                name="cart-outline"
                size={25}
                color={focused ? colors.white : colors.darkGray}
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
            <View style={styles.tabsWrapper}>
              <Ionicons
                name="notifications-outline"
                size={25}
                color={focused ? colors.white : colors.darkGray}
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
            <View style={styles.tabsWrapper}>
              <Ionicons
                name="person-outline"
                size={25}
                color={focused ? colors.white : colors.darkGray}
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
    shadowColor: colors.black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  tabsWrapper: { 
    justifyContent: "center", 
    alignItems: "center" 
  }
});
