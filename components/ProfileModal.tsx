import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "../consts/colors";
import { s, vs } from "react-native-size-matters";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from '@expo/vector-icons/Feather';

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ProfileModal({ visible, onClose }: ProfileModalProps) {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" style={styles.modal} visible={visible}>
        <EvilIcons
          name="close"
          size={24}
          color="white"
          onPress={onClose}
          style={{ position: "absolute", top: 1, right: 1 }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Adınız Soyadınız"
            placeholderTextColor={Colors.primary}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Mesleğiniz veya Açıklamanız"
            placeholderTextColor={Colors.primary}
            style={styles.textInput}
          />
        </View>
        <View>
          <Pressable style={styles.button}>
            <Feather name="save" size={s(20)} color={Colors.accent} />
            <Text style={styles.profileText}>Kaydet</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: s(10),
    padding: s(12),
    marginTop: s(20),
    color: Colors.primary,
  },
  modal: {
    padding: s(20),
    backgroundColor: Colors.card1,
  },
  inputContainer: {
    marginTop: s(20),
    color: "red",
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
    width: "100%",
  },

  profileText: {
    marginLeft: s(10),
    fontFamily: "Raleway_700Bold",
    fontSize: s(13),
    color: Colors.accent,
  },
});
