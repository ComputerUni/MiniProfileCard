import * as SplashScreen from 'expo-splash-screen';
import { useAppFonts } from './hooks/useFonts';
import { useEffect } from 'react';
import ProfileCard from './components/ProfileCard';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const useFontsLoaded = useAppFonts();

  useEffect(() => {
    if(useFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [useFontsLoaded])

  if(!useFontsLoaded) {
    return null;
  }

  return <ProfileCard />
}