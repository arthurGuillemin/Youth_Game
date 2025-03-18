import { Stack } from "expo-router";

export default function GameNavigator() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="category" />
      <Stack.Screen name="difficulty" />
      <Stack.Screen name="questions" />
      <Stack.Screen name="result" />
    </Stack>
  );
}