import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Platform } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Mundial-Regular": require("../assets/fonts/MundialRegular.ttf"),
    "Mundial-Bold": require("../assets/fonts/MundialBold.ttf"),
    "Mundial-Demibold": require("../assets/fonts/MundialDemibold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
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
      <Stack.Screen name="game-emoji" options={{ headerShown: false }} />
      <Stack.Screen name="game-quizz" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="achievement" options={{ headerShown: false }} />
      <Stack.Screen name="rewardInfo" options={{ headerShown: false }} />
    </Stack>
  );
}
