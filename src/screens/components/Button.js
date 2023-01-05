import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Button = ({ title, icon, containerStyle, textStyle }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      {icon != "undefined" ? (
        <View style={{alignSelf: "flex-start", justifyContent: "center"}}>
          <Ionicons name={icon} size={25} color="#888" />
        </View>
      ) : null}
      <Text style={{ ...textStyle }}>{title}</Text>
    </View>
  );
};

export default Button;
