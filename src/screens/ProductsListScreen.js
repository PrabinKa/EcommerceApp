import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";

import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Header, ProductsList } from "./components";

import { FlatList } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const ProductsListScreen = () => {
  const data = useSelector((state) => state.detail.items);
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        title={data ? data.title : "Subscreen"}
        containerStyle={{ width: width, height: 50, paddingHorizontal: 5 }}
      />
      <ScrollView>
        <ProductsList item={data.data} containerStyle={{ width: width }} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default ProductsListScreen;
