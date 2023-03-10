import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { colors } from "../../constants/Constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, containerStyle }) => {
    const navigation = useNavigation()
  return (
    <View style={{ justifyContent: "center" ,  ...containerStyle }}>
      <View style={{ flexDirection: "row"}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={35} color={colors.blue} />
        </TouchableOpacity>
        <View style={{justifyContent: "center", marginLeft: 40}}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: colors.blue }}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
