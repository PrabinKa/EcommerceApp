import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const InputBox = ({ icon, placeholder, rightIcon }) => {
  const [secureText, setSecureText] = React.useState(true);
  return (
    <View style={styles.textInputWrapper}>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name={icon} size={25} color="#888" />
        <TextInput
          placeholder={placeholder}
          style={{ paddingLeft: 20, width: width * 0.6 }}
          secureTextEntry={secureText}
        />
        {rightIcon ? (
          <Pressable onPress={() => setSecureText(!secureText)}>
            {secureText ? (
              <Ionicons name="eye-off-outline" size={25} color="#888" />
            ) : (
              <Ionicons name="eye-outline" size={25} color="#888" />
            )}
          </Pressable>
        ) : null }
      </View>
    </View>
  );
};

export default InputBox;

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
