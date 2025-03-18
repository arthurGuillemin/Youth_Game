import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { MontserratAlternates_400Regular, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { Platform } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [firstLaunch, setFirstLaunch] = useState(true);
  const [fontsLoaded] = useFonts({
    "MontserratAlternates-Regular": MontserratAlternates_400Regular,
    "MontserratAlternates-Bold": MontserratAlternates_700Bold,
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      if (firstLaunch) {
        router.replace("/FirstTimeScreen"); // Redirection vers la page de première connexion
      }
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (Platform.OS === "web" && typeof document !== "undefined") {
      const body = document.body;
      body.style.width = "393px";
      body.style.height = "852px"; 
      body.style.marginLeft = "40rem";
      body.style.marginTop = "2rem";
      body.style.backgroundColor = "#A9A9A9";
    }
  }, []);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
    </Stack>
  );
}
