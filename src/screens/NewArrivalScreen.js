import { View, Text, ScrollView } from "react-native";
import React from "react";
import { MainHeader, ProductsList } from "./components";
import { colors, clothesItem } from "../constants/Constants";
import { useNavigation } from "@react-navigation/native";

const NewArrivalScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeader title={"New Arrival"} />
      <ScrollView>
        <ProductsList item={clothesItem[0].data} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default NewArrivalScreen;
