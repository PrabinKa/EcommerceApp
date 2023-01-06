import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions
} from "react-native";
import React from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";

const {height, width} = Dimensions.get('window')

const Header = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: height * 0.2,
        marginTop: 20,
      }}
    >
      <Image
        source={require("../../../assets/loginIcon.png")}
        style={{ height: 50, width: 50 }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#407BFF",
          marginTop: 10,
        }}
      >
        Welcome,
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: "#888",
          marginTop: 10,
        }}
      >
        Please sign up !
      </Text>
    </View>
  );
};

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header/>
      <StatusBar backgroundColor="#888" />
      <InputBox icon={"person-outline"} placeholder={"Full Name"} />
      <InputBox icon={"mail-outline"} placeholder={"Email"} />
      <InputBox icon={"lock-closed-outline"} placeholder={"Password"} rightIcon={'eye-outline'} />
      <InputBox
        icon={"lock-closed-outline"}
        placeholder={"Re-write Password"}
        rightIcon={'eye-outline'}
      />
      <Button
        title={"SIGN UP"}
        textStyle={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        }}
        containerStyle={{
            width: width * 0.7,
            backgroundColor: "#407BFF",
            height: 50,
            alignSelf: "center",
            borderRadius: 10,
            marginVertical: 20,
            flexDirection: "row",
        }}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
