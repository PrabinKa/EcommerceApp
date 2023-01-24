import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileOtherContainer from "./ProfileOtherContainer";
import { MainHeader } from "./components";
import { colors } from "../constants/Constants";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const { height, width } = Dimensions.get("window");
const data = [
  {
    id: 1,
    title: "favorites",
  },
  {
    id: 2,
    title: "notifications",
  },
  {
    id: 3,
    title: "messages",
  },
  {
    id: 4,
    title: "rating",
  },
];

const UserProfile = () => {
  const [title, setTitle] = React.useState(null);
  
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeader title={'Profile'} />
      <View
        style={{
          backgroundColor: colors.blue,
          height: height * 0.3,
          justifyContent: "center",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("../../assets/profile.jpeg")}
          style={{ height: 100, width: 100, borderRadius: 60 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.white }}>
          Prabin karki
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: colors.white }}>
          Prabinkarki4296@gmail.com
        </Text>
        <TouchableOpacity onPress={() => signOut(auth)} style={{ position: "absolute", right: 20, top: 30 }}>
          <Ionicons name="md-settings-sharp" size={30} color={colors.white} />
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            bottom: -25,
            alignSelf: "center",
            flexDirection: "row",
            width: width * 0.8,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTitle("Favorites")}
          >
            <Ionicons name="ios-heart-outline" size={25} color={colors.darkGray} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTitle("Notifications")}
          >
            <Ionicons name="notifications-outline" size={25} color={colors.darkGray} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTitle("Messages")}
          >
            <Ionicons name="chatbubble-outline" size={25} color={colors.darkGray} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTitle("Ratings")}
          >
            <Ionicons name="star-outline" size={25} color={colors.darkGray} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: colors.darkGray, marginLeft: 20 }}>
          {title}
        </Text>
        <View
          style={{
            borderColor: colors.mediumGray,
            borderWidth: 1,
            height: height * 0.35,
            width: width * 0.9,
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 10
          }}
        >
          <ProfileOtherContainer item={title} />
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.5,
    elevation: 10,
  },
});
