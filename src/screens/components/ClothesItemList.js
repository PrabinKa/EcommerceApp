import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useDispatch } from "react-redux";
import { productsFromList } from "../../redux/ClothesData";

const ClothesItemList = ({ item, containerStyle, navigation }) => {
  const dispatch = useDispatch();

  const handleOnpress = (data) => {
    dispatch(productsFromList(data)); 
    navigation.navigate('ProductsList');
  }

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
        onPress={() => handleOnpress(item) }
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
