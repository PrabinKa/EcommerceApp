import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { imageSlider, clothesItem, summerItems } from "../constants/Constants";
import ImageSliding from "./components/ImageSliding";
import ClothesItemList from "./components/ClothesItemList";
import SummerItem from "./components/SummerItem";
import FeaturedBrand from "./components/FeaturedBrand";

const { width, height } = Dimensions.get("window");

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#407BFF",
        height: 60,
        justifyContent: "center",
        flexDirection: "row",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          alignSelf: "center",
          color: "#fff",
        }}
      >
        Home
      </Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 30,
          bottom: 15,
          backgroundColor: "#F5F5F5",
          padding: 5,
          borderRadius: 20,
        }}
      >
        <Ionicons name="cart-outline" size={25} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor={"#888"} />
      <Header />
      <ScrollView>
        <FlatList
          data={imageSlider}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <ImageSliding
                item={item}
                containerStyle={{
                  width: width,
                  height: 200,
                  marginVertical: 20,
                }}
              />
            );
          }}
        />
        <View style={{ width: width * 0.9, alignSelf: "center" }}>
          <FlatList
            data={clothesItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <ClothesItemList
                  item={item}
                  containerStyle={{
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                />
              );
            }}
          />
        </View>
        <View style={{ width: width * 0.9, alignSelf: "center" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#407BFF" }}
            >
              Summer Sale
            </Text>
            <Ionicons name="ios-chevron-forward" size={30} color="#407BFF" />
          </View>
          <FlatList
            data={summerItems}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            // pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <SummerItem
                  item={item}
                  containerStyle={{
                    height: 120,
                    width: width * 0.45,
                    marginVertical: 10,
                  }}
                />
              );
            }}
          />
        </View>
        <View>
          <FeaturedBrand/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
