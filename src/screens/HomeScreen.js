import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  clothesItem,
  summerItems,
  sliderImage,
  brandSlider,
  colors,
} from "../constants/Constants";
import {
  ImageSliding,
  ClothesItemList,
  MainHeader,
  SummerItem,
  FeaturedBrand,
  Recommendation,
} from "./components";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [firstSlider, setFirstSlider] = React.useState([
    ...sliderImage,
    ...sliderImage,
  ]);
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const flatListRef = React.useRef();
  const [active, setActive] = React.useState(0);
  const navigation = useNavigation();

  // image slider animation
  React.useEffect(() => {
    let positionTimer;

    const timer = () => {
      positionTimer = setTimeout(() => {
        setCurrentPosition((prevPosition) => {
          const position = Number(prevPosition) + width;
          flatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });
          const maxOffset = firstSlider.length * width;

          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;

            flatListRef?.current.scrollToOffset({
              offset,
              animated: false,
            });

            return offset;
          } else {
            return position;
          }
        });
        timer();
      }, 1000 * 10);
    };

    timer();

    return () => {
      clearTimeout(positionTimer);
    };
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor={"#888"} />
      <MainHeader title={"Home"} />
      <ScrollView>
        <FlatList
          ref={flatListRef}
          data={firstSlider}
          listKey="Slider1"
          keyExtractor={(_, index) => `Slider1${index}`}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <ImageSliding
                item={item}
                containerStyle={{
                  width: width,
                  height: 200,
                  marginVertical: 20,
                }}
              />
            );
          }}
        />
        <View style={{ width: width * 0.9, alignSelf: "center" }}>
          <FlatList
            data={clothesItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <ClothesItemList
                  item={item}
                  containerStyle={{
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                  navigation={navigation}
                />
              );
            }}
          />
        </View>
        <View style={{ width: width * 0.9, alignSelf: "center" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#407BFF" }}
            >
              Summer Sale
            </Text>
            <Ionicons name="ios-chevron-forward" size={30} color="#407BFF" />
          </View>
          <FlatList
            data={summerItems}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            // pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <SummerItem
                  item={item}
                  containerStyle={{
                    height: 120,
                    width: width * 0.42,
                    marginVertical: 10,
                  }}
                />
              );
            }}
          />
        </View>
        <View>
          <View
            style={{
              width: width * 0.9,
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#407BFF" }}
            >
              Featured Brands
            </Text>
            <Ionicons name="ios-chevron-forward" size={30} color="#407BFF" />
          </View>
          <FlatList
            data={brandSlider}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <FeaturedBrand
                  item={item}
                  containerStyle={{
                    width: width,
                    height: 150,
                    marginVertical: 20,
                  }}
                />
              );
            }}
          />
        </View>
        <View style={{ width: width * 0.9, alignSelf: "center" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#407BFF" }}
            >
              Recommendation
            </Text>
            <Ionicons name="ios-chevron-forward" size={30} color="#407BFF" />
          </View>
          <FlatList
            data={summerItems}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            // pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Recommendation
                  navigation={navigation}
                  item={item}
                  containerStyle={{
                    height: 180,
                    width: width * 0.42,
                    marginVertical: 10,
                  }}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
