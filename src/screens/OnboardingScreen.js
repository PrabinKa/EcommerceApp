import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { slides } from "../constants/Constants";
import Ionicons from "react-native-vector-icons/Ionicons";
// 407BFF

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "75%", width: width, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#407BFF",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50, width: width * 0.5, alignSelf: "center" }}>
              <TouchableOpacity
                onPress={() => {}}
                style={[
                  styles.button,
                  {
                    backgroundColor: "#407BFF",
                    justifyContent: "space-around",
                    flexDirection: "row",
                  },
                ]}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}
                >
                  GET STARTED
                </Text>
                <Ionicons name="arrow-forward" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => skip()}
                style={[
                  styles.button,
                  { borderColor: "#407BFF", borderWidth: 2 },
                ]}
              >
                <Text
                  style={{ color: "#407BFF", fontWeight: "bold", fontSize: 15 }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 20 }} />
              <TouchableOpacity
                onPress={() => goNextSlide()}
                style={[styles.button, { backgroundColor: "#407BFF" }]}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const upadteCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#888" />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={upadteCurrentSlideIndex}
        data={slides}
        pagingEnabled
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  title: {
    color: "#407BFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    color: "#888",
    fontSize: 14,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
  },
  indicator: {
    height: 3.5,
    width: 10,
    backgroundColor: "#888",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
