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
import { FlatList } from "react-native-gesture-handler";
import ProfileOtherContainer from "./ProfileOtherContainer";

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
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#407BFF",
          height: height * 0.35,
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
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Prabin karki
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
          Prabinkarki4296@gmail.com
        </Text>
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 30 }}>
          <Ionicons name="md-settings-sharp" size={30} color="#fff" />
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
            <Ionicons name="ios-heart-outline" size={25} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTitle("Notifications")}
          >
            <Ionicons name="notifications-outline" size={25} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTitle("Messages")}
          >
            <Ionicons name="chatbubble-outline" size={25} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setTitle("Ratings")}
          >
            <Ionicons name="star-outline" size={25} color="#444" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#444", marginLeft: 20 }}>
          {title}
        </Text>
        <View
          style={{
            borderColor: "#888",
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
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.5,
    elevation: 10,
  },
});
