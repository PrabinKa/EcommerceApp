import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

import { colors } from "../../constants/Constants";

import { useDispatch } from "react-redux";
import { getClothDetails } from "../../redux/ClothesData";

const { height, width } = Dimensions.get("window");

const ProductsList = ({ item, containerStyle, navigation }) => {
  const dispatch = useDispatch();

  const handleOnpress = (data) => {
    dispatch(getClothDetails(data));
    navigation.navigate("Detailed");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: width,
          justifyContent: "space-around",
        }}
      >
        {item.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ width: width * 0.4, marginVertical: 20 }}
              onPress={() => {
                handleOnpress(data);
              }}
            >
              <Image
                source={data.image}
                style={{ height: 120, width: width * 0.4 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                {data.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: colors.darkGray,
                }}
              >
                {data.brand}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: colors.darkGray,
                }}
              >{`Rs.${data.price}`}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ProductsList;
