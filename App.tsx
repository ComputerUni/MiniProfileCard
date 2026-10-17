import * as SplashScreen from "expo-splash-screen";
import { useAppFonts } from "./hooks/useFonts";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "./components/ProfileCard";
import { Colors } from "./consts/colors";
import Favorites from "./components/Favorites";

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
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ProfileCard />
      <Favorites />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
