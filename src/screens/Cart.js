import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import { clothesItem, colors } from "../constants/Constants";
import Button from "./components/Button";
import { MainHeader } from "./components";

import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart, deleteProductFromCart } from "../redux/CartSlice";

const { width, height } = Dimensions.get("window");

const Cart = () => {
  const data = useSelector(state => state.cart)
  const [subTotal, setSubTotal] = React.useState(0)
  const [shipping, setShipping] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  // console.warn("sub", subTotal)
  
  React.useEffect(() => {
    if(data.length != 0) {
      let price = data.map((item) => {
        return item.price * item.quantity
      })
      const priceSum = price.reduce((partialSum, a) => partialSum + a, 0);
      let shipping = data.map((item) => {
        return item.shipping
      })
      const shippingSum = shipping.reduce((partialSum, a) => partialSum + a, 0);
      const totalPrice = priceSum + shippingSum;
      setSubTotal(priceSum)
      if(shippingSum == 0){
        setShipping("Free")
      }else{
        setShipping(shippingSum)
      }
      setTotal(totalPrice)
    }
  }, [data, subTotal])

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MainHeader title={'Cart'} />
      <FlatList
        data={data}
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
            <Text style={{ color: "#444" }}>{`SubTotal(${data.length} items)`}</Text>
            <Text style={{fontWeight: "700"}}>{data.length != 0 ? `Rs.${subTotal}` : `Rs.${0}`}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#444" }}>Shipping</Text>
            <Text style={{fontWeight: "700"}}>{data.length != 0 && shipping != "Free" ? `Rs.${shipping}` : `Free`}</Text>
          </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{fontWeight: "700", fontSize: 16}}>Total Price</Text>
            <Text style={{fontWeight: "700"}}>{data.length != 0 ? `Rs.${total}` : `Rs.${0}`}</Text>
          </View>
        </View>
        <Button title={'Checkout'} containerStyle={{
          backgroundColor: colors.red,
          width: width * 0.6,
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
