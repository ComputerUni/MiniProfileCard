import {

  StyleSheet,
  Text,
  Animated,
  Pressable,
  View,
} from "react-native";
import { Colors } from "../consts/colors";
import { s, vs } from "react-native-size-matters";
import { useEffect, useRef, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import ProfileModal from "./ProfileModal";



export default function ProfileCard() {
  const [modalVisible, setModalVisible] = useState(false);
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
      <Animated.Image
        style={[styles.avatar, { transform: [{ rotateY: spin }] }]}
        source={require("../assets/profile.jpeg")}
      />
      <Text style={styles.subtitle}>Mehmet Kadir Güngör</Text>
      <Text style={styles.role}>Bilgisayar Mühendisi</Text>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Entypo name="edit" size={s(20)} color={Colors.accent} />
        <Text style={styles.profileText}>Profili Düzenle</Text>
      </Pressable>
      <ProfileModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    marginTop: vs(40),
    alignSelf: "center",
    borderWidth: 3,
    borderColor: Colors.border,
  },

  subtitle: {
    fontFamily: "Raleway_700Bold",
    fontSize: s(15),
    marginTop: s(10),
    color: Colors.accent,
    alignSelf: "center",
  },

  role: {
    fontFamily: "Raleway_700Bold",
    fontSize: s(13),
    color: Colors.primary,
    alignSelf: "center",
    marginTop: vs(4),
  },

  button: {
    marginTop: vs(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: vs(12),
    paddingHorizontal: s(24),
    backgroundColor: Colors.textDark,
    borderRadius: s(20),
    minWidth: s(200),
    alignSelf: "center",
    width: "85%",
  },

  profileText: {
    marginLeft: s(10),
    fontFamily: "Raleway_700Bold",
    fontSize: s(13),
    color: Colors.accent,
  },
});
