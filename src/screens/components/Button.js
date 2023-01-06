import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Button = ({ title, icon, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      <Text style={{ ...textStyle, alignSelf: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
