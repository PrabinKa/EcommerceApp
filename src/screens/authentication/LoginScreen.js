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
  Alert
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebaseConfig";
import { firebase } from "../../../config";

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth();

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
        Please sign in to continue and enjoy.
      </Text>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = React.useState(true);
  const [userEmail , setUserEmail] = React.useState('')
  const [userPassword, setUserPassword] = React.useState('')

  // const Login = async () => {
  //   const snapShot = firebase.firestore().collection('users')
  //   snapShot
  //   .onSnapshot(
  //     querySnapshot => {
  //       console.warn(querySnapshot)
  //       // querySnapshot.forEach((doc) => {
  //       //   let myemail = false
  //       //   const users = []
  //       //   const {fullname, email , password} = doc.data()
  //       //   users.push(
  //       //     email)
  //       //   const data = users.includes(userEmail)

  //       //   if(data === true){
  //       //     myemail = true
  //       //   }
  //       //   console.warn(myemail)
  //       // })
  //     }
  //   )
  // };

  async function Login(){
    if(userEmail === '' || userPassword === ''){
      Alert.alert('Error', 'Both Email and Password fields are require!')
    }

    try{
      await signInWithEmailAndPassword(auth, userEmail, userPassword)
    }catch(error){
      Alert.alert('Error', error.message)
    }
  }

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
            onChangeText={(text) => setUserEmail(text)}
            
          />
        </View>
      </View>
      <View style={styles.textInputWrapper}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="lock-closed-outline" size={25} color="#888" />
          <TextInput
            secureTextEntry={showPassword}
            placeholder="Password"
            style={{ paddingLeft: 20, width: width * 0.6 }}
            onChangeText={(text) => setUserPassword(text)}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Ionicons name="eye-off-outline" size={25} color="#888" />
            ) : (
              <Ionicons name="eye-outline" size={25} color="#888" />
            )}
          </Pressable>
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
          width: width * 0.8,
          backgroundColor: "#407BFF",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 20,
          flexDirection: "row",
        }}
        onPress={Login}
        textStyle={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#fff",
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#888" }}>. . . . . . . Or . . . . . . .</Text>
      </View>
      <Button
        title={"Login With Google"}
        containerStyle={{
          width: width * 0.6,
          backgroundColor: "#fff",
          height: 40,
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 10,
          borderColor: "#407BFF",
          borderWidth: 1,
          flexDirection: "row",
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
          height: 40,
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 10,
          borderColor: "#407BFF",
          borderWidth: 1,
          flexDirection: "row",
        }}
        icon={"logo-google"}
        textStyle={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#888",
        }}
      />
      <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <Text style={{ color: "#888", fontWeight: "600" }}>
          Don't have an account?
        </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "red", fontWeight: "bold", marginLeft: 5 }}>
            Register
          </Text>
        </Pressable>
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
