import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import { clothesItem } from "../constants/Constants";
import Button from "./components/Button";

const { width, height } = Dimensions.get("window");

const Cart = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        title={"Cart"}
        containerStyle={{ width: width, height: 50, paddingHorizontal: 20 }}
      />
      <FlatList
        data={clothesItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <CartItems
              item={item}
              containerStyle={{
                height: 100,
                width: width * 0.9,
                alignSelf: "center",
                marginVertical: 10,
              }}
            />
          );
        }}
      />
      <View style={{ height: height * 0.3 }}>
        <View
          style={{
            width: width * 0.9,
            alignSelf: "center",
            borderColor: "#555",
            justifyContent: "space-between",
            borderWidth: 1,
            height: 100,
            marginVertical: 20,
            padding: 10,
            borderRadius: 10
          }}
        >
          <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#444" }}>Sub Total(2 Items)</Text>
            <Text style={{fontWeight: "700"}}>Rs.1000</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#444" }}>Shipping</Text>
            <Text style={{fontWeight: "700"}}>Free</Text>
          </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{fontWeight: "700", fontSize: 16}}>Total Price</Text>
            <Text style={{fontWeight: "700"}}>Rs.2000</Text>
          </View>
        </View>
        <Button title={'Checkout'} containerStyle={{
          backgroundColor: "#407BFF",
          width: width * 0.7,
          height: 40,
          alignSelf: "center",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {height: 1, width: 0},
          shadowOpacity: 0.2,
          elevation: 5
        }} textStyle={{color: "#fff", fontWeight: "bold", fontSize: 16}} />
      </View>
    </View>
  );
};

export default Cart;
