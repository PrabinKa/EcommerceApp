import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ClothesItemList = ({ item, containerStyle }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginRight: 30,
        ...containerStyle,
      }}
    >
      <TouchableOpacity
        style={{ backgroundColor: "#999", padding: 10, borderRadius: 30 }}
      >
        <Image
          source={item.image}
          style={{ height: 40, width: 40 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#333" }}>
        {item.title}
      </Text>
    </View>
  );
};

export default ClothesItemList;
