import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import React from "react";
import { colors } from "../constants/Constants";

import Ionicons from "react-native-vector-icons/Ionicons";

import { Button, Header } from "./components";

import { useSelector, useDispatch } from "react-redux";
import {addProductToCart} from "../redux/CartSlice"

const { width, height } = Dimensions.get("window");

const DetailedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detail.data);
  const [defaultRating, SetDefaultRating] = React.useState(data.rating);
  const [fullRating, setFullRating] = React.useState([1, 2, 3, 4, 5]);
  const [clothSize, setClothSize] = React.useState([
    { id: 1, size: "X" },
    { id: 2, size: "XL" },
    { id: 3, size: "M" },
    { id: 4, size: "S" },
  ]);
  const [selectedSize, setSelectedSIze] = React.useState(null);

  const CustomRating = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        {fullRating.map((item, index) => {
          return (
            <View style={{ marginRight: 3 }} key={index}>
              <Image
                style={{ height: 20, width: 20, tintColor: "orange" }}
                source={
                  item <= defaultRating
                    ? require("../../assets/filledstar.png")
                    : require("../../assets/unfilledstar.png")
                }
              />
            </View>
          );
        })}
      </View>
    );
  };
  
  const addToCartOnpress = (item) => {
    dispatch(addProductToCart(item))
    ToastAndroid.show('Item added to Cart!', ToastAndroid.SHORT);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.mediumGray} />
      <Header containerStyle={{height: 40, paddingHorizontal: 10}} />
      <View style={{ flex: 2 }}>
        <View>
          <Image
            source={data.image}
            style={{ width: width, height: height * 0.4 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.brand}>{data.company}</Text>
        <View style={styles.price}>
          <Text
            style={{
              color: colors.darkGray,
              fontSize: 14,
              fontWeight: "600",
              textDecorationLine: "line-through",
            }}
          >
            {`Rs.${data.dis_price}`}
          </Text>
          <Text style={{ color: colors.red, fontSize: 14, fontWeight: "600" }}>
            {`Rs.${data.price}`}
          </Text>
        </View>
        <CustomRating />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Choose Size</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {clothSize.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedSIze(item.size)}
                  key={index}
                  style={{
                    height: 30,
                    width: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: colors.mediumGray,
                    borderRadius: 3,
                    borderWidth: 0.5,
                    marginRight: 10,
                    backgroundColor:
                      selectedSize == item.size ? colors.blue : colors.white,
                  }}
                >
                  <Text
                    style={{
                      color:
                        selectedSize == item.size ? colors.white : colors.black,
                    }}
                  >
                    {item.size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Details</Text>
          <Text>{data.detail}</Text>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          {data.quantity == 0 ? (
            <Button
              title={"Add To Cart"}
              containerStyle={{
                width: width * 0.5,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.blue,
                borderRadius: 10,
                marginVertical: 10,
              }}
              onPress={() => {addToCartOnpress(data)}}
              textStyle={{
                fontSize: 16,
                color: colors.white,
                fontWeight: "800",
              }}
            />
          ) : null}
          {data.quantity == 0 ? null : (
            <Button
              title={"-"}
              containerStyle={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.blue,
                borderRadius: 5,
                marginVertical: 10,
              }}
              onPress={() => {}}
              textStyle={{
                fontSize: 16,
                color: colors.white,
                fontWeight: "800",
              }}
            />
          )}
          {data.quantity == 0 ? null : (
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
                fontWeight: "500",
                color: colors.darkGray,
              }}
            >
              0
            </Text>
          )}
          {data.quantity == 0 ? null : (
            <Button
              title={"+"}
              containerStyle={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.blue,
                borderRadius: 5,
                marginVertical: 10,
              }}
              onPress={() => {}}
              textStyle={{
                fontSize: 16,
                color: colors.white,
                fontWeight: "800",
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default DetailedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.5,
    elevation: 30,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  brand: {
    fontSize: 14,
    color: colors.mediumGray,
  },
  price: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});
