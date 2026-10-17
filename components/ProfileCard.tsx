import {
  ImageBackground,
  StyleSheet,
  Text,
  Animated,
  Pressable,
  View,
} from "react-native";
import { Colors } from "../consts/colors";
import { s, vs } from "react-native-size-matters";
import React, { useEffect, useRef } from "react";
import Entypo from "@expo/vector-icons/Entypo";

interface ProfileCardProps {
  onEdit?: () => void;
}

export default function ProfileCard({ onEdit }: ProfileCardProps) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
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
        <Pressable style={styles.button} onPress={onEdit}>
          <Entypo name="edit" size={s(20)} color={Colors.textDark} />
          <Text style={styles.profileText}>Profili Düzenle</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    padding: s(20),
  },
  avatar: {
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    marginTop: vs(20),
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
    marginTop: vs(4),
  },
  button: {
    marginTop: vs(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.accent,
    paddingVertical: vs(10),
    paddingHorizontal: s(24),
    borderRadius: s(20),
    minWidth: s(200),
    alignSelf: "center",
  },
  profileText: {
    marginLeft: s(10),
    fontFamily: "Raleway_600SemiBold",
    fontSize: s(13),
    color: Colors.textDark,
  },
});