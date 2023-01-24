import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart, deleteProductFromCart } from "../../redux/CartSlice";

const CartItems = ({ item, containerStyle }) => {
  const dispatch = useDispatch()
  return (
    <View style={{ flexDirection: "row", backgroundColor: "#F5F5F5", ...containerStyle }}>
        <Image source={item.image} style={{ height: 100, width: "25%" }} resizeMode="contain" />
        <View style={{ marginLeft: 10, justifyContent: "space-around", width: "60%" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#444" }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: "row"}}>
            <TouchableOpacity onPress={() => {
              if(item.quantity > 1){
                dispatch(removeProductFromCart(item))
              }else{
                dispatch(deleteProductFromCart(item.id))
              }
            }} style={{ justifyContent: "center" }}>
              <MaterialCommunityIcons name="minus" size={25} color="#444" />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: "500" }}>{item.quantity}</Text>
            <TouchableOpacity onPress={()=> dispatch(addProductToCart(item))} style={{ justifyContent: "center", marginLeft: 10  }}>
              <MaterialCommunityIcons name="plus" size={25} color="#444" />
            </TouchableOpacity>
          </View>
          <Text style={{color:"#444", fontWeight: "bold"}}>{`Rs.${item.price}`}</Text>
        </View>
        <TouchableOpacity onPress={()=> dispatch(deleteProductFromCart(item.id))} style={{position: "absolute", right: 10, top: 10}}>
        <MaterialCommunityIcons name="close" size={25} color="#444" />
        </TouchableOpacity>
    </View>
  );
};

export default CartItems;
