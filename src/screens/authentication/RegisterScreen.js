import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TextInput,
  Alert
} from "react-native";
import React from "react";
import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { collection, addDoc } from "firebase/firestore"; 
import { firestore } from "../../../firebaseConfig";
import {createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth()

const { height, width } = Dimensions.get("window");

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
  const [secureText, setSecureText] = React.useState(true);
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const signup = async() => {
    // try {
    //   await addDoc(collection(firestore, "users"), {
    //     fullname: fullName,
    //     email: email,
    //     password: password,
    //     rePassword: rePassword
    //   });
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    if(email === '' || password === ''){
      Alert.alert('Signup', 'Both email and password field are required !')
    }

    try{
      await createUserWithEmailAndPassword(auth, email, password)
      navigation.navigate('Login')
    }catch(error){
      Alert.alert('Signup Error', error.message)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <StatusBar backgroundColor="#888" />
      {/* <View style={styles.textInputWrapper}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="person-outline" size={25} color="#888" />
          <TextInput
            placeholder="Full Name"
            style={{ paddingLeft: 20, width: width * 0.6 }}
            onChangeText={(text) => setFullName(text)}
          />
        </View>
      </View> */}
      <View style={styles.textInputWrapper}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="mail-outline" size={25} color="#888" />
          <TextInput
            placeholder="Email"
            style={{ paddingLeft: 20, width: width * 0.6 }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
      <View style={styles.textInputWrapper}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="lock-closed-outline" size={25} color="#888" />
          <TextInput
            placeholder="Password"
            style={{ paddingLeft: 20, width: width * 0.6 }}
            secureTextEntry={secureText}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable onPress={() => setSecureText(!secureText)}>
            {secureText ? (
              <Ionicons name="eye-off-outline" size={25} color="#888" />
            ) : (
              <Ionicons name="eye-outline" size={25} color="#888" />
            )}
          </Pressable>
        </View>
      </View>
      <Button
        title={"SIGN UP"}
        textStyle={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        }}
        onPress={signup}
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
