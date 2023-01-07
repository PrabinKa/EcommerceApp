import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const SummerItem = ({ item, containerStyle }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {height: 1, width: 0},
        shadowOpacity: 0.3,
        elevation: 5
      }}
    >
      <Image
        source={item.image}
        style={{ height: 120, width: width * 0.42, borderRadius: 10 }}
        resizeMode="contain"
      />
      <View style={{ position: "absolute", left: 10, bottom: 10 }}>
        <Text style={{ fontWeight: "800", color: "#333" }}>{item.title}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: 5,
          backgroundColor: "red",
          borderRadius: 20
        }}
      >
        <Text style={{fontSize: 12, fontWeight: "bold", color: "white"}}>{item.discount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SummerItem;
