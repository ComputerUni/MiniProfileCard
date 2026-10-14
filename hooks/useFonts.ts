import { useFonts, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold } from "@expo-google-fonts/raleway";

export function useAppFonts() {
    const[fontsLoaded] = useFonts({
        Raleway_400Regular,
        Raleway_500Medium,
        Raleway_600SemiBold,
        Raleway_700Bold,
    });

    return fontsLoaded;
}