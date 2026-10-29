import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const buttons = [
  {
    label: "LinkedIn",
    icon: <FontAwesome name="linkedin" size={s(20)} color="#0A66C2" />,
    color: "#0A66C2",
    bg: "#E8F0FE",
    url: "https://www.linkedin.com/in/mehmet-kadir-güngör-33091826a",
  },
  {
    label: "GitHub",
    icon: <FontAwesome name="github" size={s(20)} color="#ffffff" />,
    color: "#ffffff",
    bg: "#24292E",
    url: "https://github.com/ComputerUni",
  },
  {
    label: "CV İndir",
    icon: <Feather name="download" size={s(20)} color="#10B981" />,
    color: "#10B981",
    bg: "#D1FAE5",
    url: "https://cv-linkin-buraya",
  },
];

export default function ProfileButtons() {
  return (
    <View style={styles.buttonContainer}>
      {buttons.map((btn) => (
        <TouchableOpacity
          key={btn.label}
          style={[styles.button, { backgroundColor: btn.bg }]}
          onPress={() => Linking.openURL(btn.url)}
        >
          {btn.icon}
          <Text style={[styles.buttonText, { color: btn.color }]}>
            {btn.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginTop: vs(30)
  },
  button: {
    marginTop: vs(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: vs(12),
    paddingHorizontal: s(24),
    borderRadius: s(20),
    minWidth: s(200),
    alignSelf: "center",
    width: "85%",
  },
  buttonText: {
    marginLeft: s(10),
    fontFamily: "Raleway_700Bold",
    fontSize: s(13),
  },
});
