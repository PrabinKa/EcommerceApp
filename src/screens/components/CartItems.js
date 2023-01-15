import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CartItems = ({ item, containerStyle }) => {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "#F5F5F5", ...containerStyle }}>
        <Image source={item.image} style={{ height: 100, width: "25%" }} resizeMode="contain" />
        <View style={{ marginLeft: 10, justifyContent: "space-around", width: "60%" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#444" }}>
            {item.title}
          </Text>
          <View style={{ flexDirection: "row"}}>
            <TouchableOpacity style={{ justifyContent: "center" }}>
              <MaterialCommunityIcons name="minus" size={25} color="#444" />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: "500" }}>1</Text>
            <TouchableOpacity style={{ justifyContent: "center", marginLeft: 10  }}>
              <MaterialCommunityIcons name="plus" size={25} color="#444" />
            </TouchableOpacity>
          </View>
          <Text style={{color:"#444", fontWeight: "bold"}}>Rs.2000</Text>
        </View>
        <TouchableOpacity style={{position: "absolute", right: 10, top: 10}}>
        <MaterialCommunityIcons name="close" size={25} color="#444" />
        </TouchableOpacity>
    </View>
  );
};

export default CartItems;
