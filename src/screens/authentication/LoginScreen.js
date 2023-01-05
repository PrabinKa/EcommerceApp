import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";

const Header = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: height * 0.2,
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
        Please sign in to continue and enjoy.
      </Text>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#888" />
      <Header />
      <View style={styles.textInputWrapper}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="mail-outline" size={25} color="#888" />
          <TextInput
            placeholder="Email"
            style={{ paddingLeft: 20, width: width * 0.6 }}
          />
        </View>
      </View>
      <View style={styles.textInputWrapper}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="lock-closed-outline" size={25} color="#888" />
          <TextInput
            placeholder="Password"
            style={{ paddingLeft: 20, width: width * 0.6 }}
          />
          <Ionicons name="eye-off-outline" size={25} color="#888" />
        </View>
      </View>
      <View style={{ width: width * 0.8, alignSelf: "center", marginTop: 10 }}>
        <Text
          style={{ color: "red", alignSelf: "flex-end", fontWeight: "bold" }}
        >
          Forgot Password?
        </Text>
      </View>
      <Button
        title={"SIGN IN"}
        containerStyle={{
          width: width * 0.7,
          backgroundColor: "#407BFF",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 20,
          flexDirection: "row"
        }}
        textStyle={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#fff",
        }}
      />
      <Button
        title={"Login With Google"}
        containerStyle={{
          width: width * 0.6,
          backgroundColor: "#fff",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 20,
          borderColor: "#407BFF",
          borderWidth: 1,
          flexDirection: "row"
        }}
        textStyle={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#888",
        }}
      />
      <Button
        title={"Login With Facebook"}
        containerStyle={{
          width: width * 0.6,
          backgroundColor: "#fff",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 20,
          borderColor: "#407BFF",
          borderWidth: 1,
          flexDirection: "row"
        }}
        icon={'logo-google'}
        textStyle={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#888",
        }}
      />
      <View style={{alignSelf: "center", flexDirection: "row"}}>
        <Text style={{color: "#888", fontWeight: "600"}}>Don't have an account?</Text>
        <Text style={{color: "red", fontWeight: "bold", marginLeft: 5}}>Register</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInputWrapper: {
    width: width * 0.8,
    borderColor: "#888",
    borderWidth: 1,
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
