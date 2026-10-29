import * as SplashScreen from "expo-splash-screen";
import { useAppFonts } from "./hooks/useFonts";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "./components/ProfileCard";
import ProfileButtons from "./components/ProfileButtons";
import { LinearGradient } from "expo-linear-gradient";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useAppFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#1E1B4B", "#3B1F8C", "#6C63FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ProfileCard />
        <ProfileButtons />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
