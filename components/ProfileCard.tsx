import { Image, ImageBackground, StyleSheet, Text, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../consts/colors";
import { s } from "react-native-size-matters";
import { useEffect, useRef } from "react";

export default function ProfileCard() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ImageBackground
        style={styles.bg}
        source={require("../assets/soft-blue.jpeg")}
      >
        <Animated.Image
          style={[styles.avatar, { transform: [{ rotateY: spin }] }]}
          source={require("../assets/profile.jpeg")}
        />
        <Text style={styles.subtitle}>Mehmet Kadir Güngör</Text>
        <Text style={styles.role}>Bilgisayar Mühendisi</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg: {
    flex: 1,
    padding: s(20),
  },
  title: {
    fontFamily: "Raleway_700Bold",
    fontSize: s(24),
    marginTop: s(10),
    color: Colors.textLight,
  },
  avatar: {
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    marginTop: s(20),
    alignSelf: "center",
    borderWidth: 3,
    borderColor: Colors.border,
  },
  subtitle: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: s(15),
    marginTop: s(10),
    color: Colors.text,
    alignSelf: "center",
  },

  role: {
    fontFamily: "Raleway_400Regular",
    fontSize: s(13),
    color: Colors.textLight,
    alignSelf: "center",
    marginTop: s(4),
  },
});
